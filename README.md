# CodeChroniclesAIBlog
  Access the live version at : http://ayush.sharma.s3-website.us-east-2.amazonaws.com/
  medium Article: https://medium.com/@ayushjudesharp/ai-blog-full-stack-application-leveraging-serverless-architecture-95ed11c317e7
## Overview
![image](https://github.com/ayushshawnfrost/CodeChroniclesAIBlog/assets/23500476/93faba52-1fad-47e5-919e-85225e3e2794)
![image](https://github.com/ayushshawnfrost/CodeChroniclesAIBlog/assets/23500476/ba77f465-9c48-4c1a-b5de-5c673b290e9b)
![image](https://github.com/ayushshawnfrost/CodeChroniclesAIBlog/assets/23500476/fd4e2b92-74a4-4351-8e99-d322fd826243)



This project is a React-based web application built using various AWS services and the AWS Amplify library. It leverages the power of cloud computing to create a scalable and secure application with features like authentication, RESTful APIs, and data storage.

## Architecture

![image](https://github.com/ayushshawnfrost/CodeChroniclesAIBlog/assets/23500476/a1e21355-c47e-4fa8-9aaf-8ece39689a5e)

The architecture of the application consists of the following components:

- **AWS Amplify**: Amplify is a development framework provided by AWS that simplifies the process of building full-stack applications. It provides a set of libraries, UI components, and CLI tools to accelerate development and integration with AWS services.

- **Amazon S3**: Amazon S3 is used for static hosting, allowing the application to be deployed and served as a static website. It provides a scalable and reliable storage solution for hosting the application's frontend assets.

- **AWS Cognito**: AWS Cognito is used for user authentication and authorization. It provides secure user sign-up, sign-in, and token-based authentication using OAuth 2.0 protocols. Cognito helps in managing user pools, identity providers, and user authentication flows.

- **AWS API Gateway**: API Gateway is used to create RESTful APIs that serve as the backend for the application. It allows defining API endpoints and integrates with Lambda functions to process requests and interact with data storage.

- **AWS Lambda**: Lambda functions are serverless functions used to perform business logic and interact with the application's data storage. In this project, Lambda functions are used to interact with DynamoDB and handle requests from the API Gateway.

- **DynamoDB**: DynamoDB is a fully managed NoSQL database provided by AWS. It is used to store and retrieve data for the application. In this project, it is used to persist blog post data.

## Features

The application includes the following features:

- **User Authentication**: Users can sign up, sign in, and securely authenticate using AWS Cognito. This ensures that only authorized users can access protected areas of the application.

- **Blog Post Creation**: Authenticated users can create blog posts by providing a title, author name, category, and description. The blog posts are stored in DynamoDB for persistence.

- **RESTful APIs**: AWS API Gateway is used to create a set of RESTful APIs that expose endpoints for creating and retrieving blog posts. These APIs are integrated with Lambda functions to handle the business logic.

- **Logging and Debugging**: AWS CloudWatch is used for logging and debugging Lambda functions. It provides insights into the execution logs, allowing for monitoring and troubleshooting of the application.

- **Scalability and Serverless Architecture**: The application leverages serverless architecture using AWS Lambda. This ensures automatic scaling, high availability, and cost-efficiency, as Lambda functions are only executed when needed.

- **Static Website Hosting**: The frontend of the application is hosted on Amazon S3, providing a scalable and reliable platform for serving the web application to users.

## Conclusion

The project demonstrates the power of AWS services and the AWS Amplify library in building scalable and secure web applications. By leveraging cloud infrastructure, the application achieves features like user authentication, RESTful APIs, and data persistence without the need to manage traditional server infrastructure.

Feel free to explore and further enhance this project according to your requirements. Happy coding!

