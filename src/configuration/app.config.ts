import * as dotenv from 'dotenv';
dotenv.config();

// Load environment-specific variables based on NODE_ENV
if (process.env.NODE_ENV == 'production') {
    dotenv.config({ path: '.env.production', override: true });
} else {
    dotenv.config();

}

export interface ICommonConfig {

}
export interface IConfig extends ICommonConfig {
    port: number;
    rmqURL: string
    serverType: string
    redisURL: string
    accessKeyId: string
    secretAccessKey: string
    awsRegion: string
}
const getAppConfig = (): IConfig => {
    const port = parseInt(process.env.APP_PORT);
    const rmqURL = process.env.RMQ_URL;
    const serverType = process.env.SERVER_TYPE;
    const redisURL = (process.env.REDIS_ENDPOINT)?.split('//')[1];
    const accessKeyId = process.env.ACCESS_KEY_ID;
    const secretAccessKey = process.env.SECRET_ACCESS_KEY;
    const awsRegion = process.env.AWS_REGION;


    if (!port) console.log('port must be specified');
    if (!serverType) console.log('serverType must be specified');
    if (!rmqURL) console.log('rmqURL must be specified');
    if (!accessKeyId) console.log('accessKeyId must be specified');
    if (!secretAccessKey) console.log('secretAccessKey must be specified');
    if (!awsRegion) console.log('awsRegion must be specified');

    return {
        port,
        rmqURL,
        serverType,
        redisURL,
        accessKeyId,
        secretAccessKey,
        awsRegion
    };
};
export const appConfig = getAppConfig();
