import { AWSError, SES } from 'aws-sdk';
import { appConfig } from '../../configuration/app.config';

export interface IAwsSesSendEmail {
    to: string;
    from: string;
    text: string;
    subject: string;
    sendersName: string;
    attachments?: {
        filename: string;
        content: Buffer;
        contentType: string;
        encoding: string;
    }[];
}
export interface IAwsSesSendEmailDTO {
    to: string;
    from: string;
    text: string;
    subject: string;
    sendersName: string;
    link?: string;
    user: {
        firstName: string;
        lastName: string;
    }
    attachments?: {
        filename: string;
        content: Buffer;
        contentType: string;
        encoding: string;
    }[];
}

export class AwsServices {

    static SimpleEmailService = class {
        static async sendEmail(options: IAwsSesSendEmail): Promise<{
            err: AWSError;
            data: SES.SendRawEmailResponse;
        }> {
            const ses = new SES({
                accessKeyId: appConfig.accessKeyId,
                secretAccessKey: appConfig.secretAccessKey,
                region: appConfig.awsRegion,
            });

            // return new Promise((resolve, reject) => {
            return new Promise((resolve) => {
                let ses_mail =
                    // "From: 'AWS Tutorial Series' <"
                    `From: '${options.sendersName}' <` + options.from + '>\n';
                ses_mail = ses_mail + 'To: ' + options.to + '\n';
                ses_mail = ses_mail + `Subject: ${options.subject}\n`;
                ses_mail = ses_mail + 'MIME-Version: 1.0\n';
                ses_mail = ses_mail + 'Content-Type: multipart/mixed; boundary="NextPart"\n\n';
                ses_mail = ses_mail + '--NextPart\n';
                ses_mail = ses_mail + 'Content-Type: text/html; charset=us-ascii\n\n';
                ses_mail = ses_mail + `${options.text}\n\n`;
                ses_mail = ses_mail + '--NextPart\n';
                ses_mail = ses_mail + 'Content-Type: text/plain;\n';
                // ses_mail = ses_mail + "Content-Disposition: attachment; filename=\"attachment.txt\"\n\n";
                // ses_mail = ses_mail + "AWS Tutorial Series - Really cool file attachment!" + "\n\n";


                // Check if there is an attachment
                if (options.attachments && options.attachments.length > 0) {
                    for (const attachment of options.attachments) {
                        ses_mail = ses_mail + '--NextPart\n';
                        ses_mail = ses_mail + `Content-Type: ${attachment.contentType}; name="${attachment.filename}"\n`;
                        ses_mail = ses_mail + 'Content-Disposition: attachment\n';
                        ses_mail = ses_mail + 'Content-Transfer-Encoding: base64\n\n';
                        ses_mail = ses_mail + attachment.content.toString('base64') + '\n\n';
                    }
                }


                ses_mail = ses_mail + '--NextPart--';

                const params = {
                    RawMessage: { Data: Buffer.from(ses_mail) },
                    Destinations: [options.to],
                    Source: `'${options.sendersName}' <` + options.from + ">'",
                };

                ses.sendRawEmail(params, function (err, data) {
                    resolve({
                        err,
                        data,
                    });
                });
            });
        }
    };
    static SimpleEmailService2 = class {
        static async sendEmail(options: IAwsSesSendEmail): Promise<{
            err: AWSError;
            data: SES.SendRawEmailResponse;
        } | any> {
            const ses = new SES({
                accessKeyId: appConfig.accessKeyId,
                secretAccessKey: appConfig.secretAccessKey,
                region: appConfig.awsRegion,
            });

            // Define the link URL
            const linkUrl = 'https://example.com';

            // Define the HTML content of the email
            const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Your HTML Email</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is the HTML version of your email.</p>
        <p><a href="${linkUrl}">Click here to visit our website</a></p>
    </body>
    </html>
`;

            // Define the raw email message
            const rawMessage = `
                From: ${options.from}
                To: ${options.to}
                Subject: Your Subject Here
                Content-Type: text/html; charset=UTF-8
                Content-Transfer-Encoding: 7bit

                ${htmlContent}
                `;

            // Encode the raw email message as base64
            const encodedMessage = Buffer.from(rawMessage).toString('base64');

            // Define the parameters for sending the email
            const params = {
                RawMessage: {
                    Data: encodedMessage // Raw email message
                }
            };

            // Send the email using the sendRawEmail method
            ses.sendRawEmail(params, function (err, data) {
                if (err) {
                    console.error('Error sending email:', err);
                } else {
                    console.log('Email sent successfully:', data);
                }
            });
        }
    };
}
