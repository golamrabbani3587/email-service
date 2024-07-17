import { AwsServices, IAwsSesSendEmail } from '@common/helpers/aws.service';
import { EmailTemplate } from '@common/helpers/email.template';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  // async sendEmail(createEmailDto: SendEmailDto): Promise<void> {
  //   console.log({ createEmailDto })
  // }
  async sendEmail(queries: IAwsSesSendEmail): Promise<void> {
    // await AwsServices.SimpleEmailService.verifyEmailAddress("pro.hafizul18618@gmail.com")
    console.log({ 1: queries?.text })
    const emailRes = await AwsServices.SimpleEmailService.sendEmail({
      from: queries.from,
      to: queries?.to,
      subject: queries?.subject,
      text: queries?.text,
      sendersName: queries?.sendersName,
    });
    console.log({ emailRes })
  }
  async failedJob(): Promise<void> {
    const flag = true
    if (flag == true) {
      throw new Error("Error occurred")
    }
  }
  async sendEmailTest(): Promise<void> {

    const emailRes = await AwsServices.SimpleEmailService.sendEmail({
      from: "technology@pattern50.com",
      // to: "pro.hafizul18618@gmail.com",
      to: "hafizul@6sensehq.com",
      sendersName: 'Pattern50',
      subject: 'Forgot password',
      text: EmailTemplate.getForgetPasswordEmailHtml("Hafiz", "Islam", "https://www.w3schools.com/"),
    });

    //     const ses = new SES({
    //       accessKeyId: appConfig.accessKeyId,
    //       secretAccessKey: appConfig.secretAccessKey,
    //       region: appConfig.awsRegion,
    //     });
    //     // HTML email template with a link
    //     const htmlTemplate = `
    // From: "Sender Name" <hafizul@6sensehq.com>
    // To: hafizul@6sensehq.com
    // Subject: Sample Email

    // <!DOCTYPE html>
    // <html>
    // <head>
    //   <title>Sample Email</title>
    // </head>
    // <body>
    //   <h1>Hello!</h1>
    //   <p>This is a sample email with a link:</p>
    //   <p><a href="https://example.com">Click here to visit Example</a></p>
    // </body>
    // </html>
    // `;

    //     // Parameters for the sendRawEmail function
    //     const params = {
    //       RawMessage: {
    //         Data: Buffer.from(htmlTemplate)
    //       }
    //     };


    //     // Send the email
    //     const emailRes = ses.sendRawEmail(params, function (err, data) {
    //       if (err) {
    //         console.log('Error sending email:', err);
    //       } else {
    //         console.log('Email sent successfully:', data);
    //       }
    //     });
    console.log({ emailRes })
  }


}
