# AWS Cognito Passkey Demo

This repository demonstrates how to integrate AWS Cognito with passwordless authentication using **Passkey**, one of Cognito's latest features introduced in late 2024.
The goal is to showcase Cognito's built-in authentication capabilities.

# Overview

- Authentication: Utilizes AWS Cognito's user pool with **Passkey-based** authentication, eliminating the need for traditional passwords and enhancing user experience.
- Backend Integration: A minimal NestJS backend is included for demonstration purposes.
- **Response Behavior**: The GET `/` endpoint returns:
  - **"Hello, World!"**: when accessed by an authenticated and authorized user.
  - **"Not Authenticated!"**: if no valid credentials are provided.
  - **"Not Authorized"**: if the authenticated user lacks proper permissions.
- Infrastucture as Code: AWS resources are deployed using the **AWS CDK for TypeScript**, ensuring an easy and repeatable setup process.

# Why Passkey?

Passkey authentication eliminates password-related friction, improving security and user convenience.
Users can sign in seamlessly using biometrics or device authentication, reducing the risk of phising and credential leaks.

# Prerequisites

- **Node.js & npm**: Required for running the backed and CDK scripts.
- **AWS CLI**: Required to configure AWS Credentials when using CDK.
- **AWS Credentials**: Use either AWS IAM user or AWS IAM Identity Center user credentials.
  - Recommended: [IAM Identity Center](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)
  - [IAM user](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-methods)

# Installation

## Cone the repository

```bash
git clone https://github.com/kimseungbin/cognito-demo/
```

## Install dependencies

```bash
npm i
```

## Bootstrap CDK

> [!NOTE]
> [What is bootstrapping?](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html#bootstrapping-what)

Before bootstrapping CDK,
ensure you have identified the target account and verified that you have the authority to deploy resources there.

```bash
cdk bootstrap --profile [YOUR_PROFILE_NAME]
```

## Deploy

TBD.