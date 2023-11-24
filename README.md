# lambda-typescript-nodejs16.x

This project contains typescript source code and supporting files for a serverless application that you can deploy with the SAM CLI. It includes the following files and folders.

- hello-world - Code for the application's Lambda function.
- events - Invocation events that you can use to invoke the function.
- hello-world/tests - Unit tests for the application code.
- template.yaml - A template that defines the application's AWS resources.
- .vscode/launch.json - A vscode configuration to help debug locally

The application uses several AWS resources, including Lambda functions and an API Gateway API. These resources are defined in the `template.yaml` file in this project. You can update the template to add AWS resources through the same deployment process that updates your application code.
