"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const core_1 = require("@nestjs/core");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const app_module_1 = require("./app.module");
let cachedServer;
async function boostrap() {
    const nestApp = await core_1.NestFactory.create(app_module_1.AppModule);
    await nestApp.init();
    const expressApp = nestApp.getHttpAdapter().getInstance();
    return (0, serverless_express_1.default)({ app: expressApp });
}
const lambdaHandler = async (event, context, callback) => {
    console.log(`debug`, true);
    cachedServer = cachedServer !== null && cachedServer !== void 0 ? cachedServer : (await boostrap());
    return cachedServer(event, context, callback);
};
exports.lambdaHandler = lambdaHandler;
//# sourceMappingURL=app.js.map