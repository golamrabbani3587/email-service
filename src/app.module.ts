
import { Module } from '@nestjs/common';
import { MainServiceRabbitMQClientModule } from '@common/rabbitMQ/client/main_service.rmq.client.module';
import { EmailModule } from '@modules/email/email.module';

@Module({
  imports: [
    MainServiceRabbitMQClientModule,
    EmailModule
  ]
})
export class AppModule { }
