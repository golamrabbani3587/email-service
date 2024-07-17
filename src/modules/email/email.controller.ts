import { IAwsSesSendEmail } from '@common/helpers/aws.service';
import { Body, Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EmailService } from './email.service';


@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  @EventPattern('email.send')
  async sendEmail(@Body() queries: IAwsSesSendEmail): Promise<void> {
    console.log(queries)
    await this.emailService.sendEmail(queries);
  }
  @EventPattern('email.send.test')
  async sendEmailTest(@Body() queries: IAwsSesSendEmail): Promise<void> {
    console.log('email.send.test -- called')
    await this.emailService.sendEmail(queries);
  }

  @EventPattern('email.failed')
  async failedJob(): Promise<void> {
    try {
      await this.emailService.failedJob();
    } catch (error) {

    }
  }

  // @Get('send')
  // async sendEmailTest2(): Promise<void> {
  //   await this.emailService.sendEmailTest();
  // }

}
