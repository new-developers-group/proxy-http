import { APIGatewayProxyEvent, APIGatewayProxyResult, Callback, Context } from "aws-lambda";
export declare const lambdaHandler: (event: APIGatewayProxyEvent, context: Context, callback: Callback) => Promise<APIGatewayProxyResult>;
