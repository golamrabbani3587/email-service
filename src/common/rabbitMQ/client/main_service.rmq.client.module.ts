import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { appConfig } from 'configuration/app.config';
@Global() // Add the @Global() decorator to make the module global
@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MAIN_SERVICE_RMQ', // Unique client name
                transport: Transport.RMQ,
                options: {
                    urls: [appConfig.rmqURL],
                    queue: `${appConfig.serverType}_P50_main_queue`
                },
            },
        ]),
    ],
    exports: [ClientsModule], // Export the module to make it available globally
})
export class MainServiceRabbitMQClientModule { }
