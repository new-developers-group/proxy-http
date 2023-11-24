import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
} from "aws-lambda";

import { NestFactory } from "@nestjs/core";
import serverlessExpress from "@vendia/serverless-express";
import { Handler } from "aws-lambda";
import { AppModule } from "./app.module";

let cachedServer: Handler;

async function boostrap() {
  const nestApp = await NestFactory.create(AppModule);
  await nestApp.init();
  const expressApp = nestApp.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback
): Promise<APIGatewayProxyResult> => {
  console.log(`debug`, true);
  cachedServer = cachedServer ?? (await boostrap());
  return cachedServer(event, context, callback);
};
