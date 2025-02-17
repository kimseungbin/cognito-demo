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

# Getting Started

## Prerequisites

- **Node.js & npm**: Required for running the backed and CDK scripts.

## Installation

1. Clone the Repository
2. Install Dependencies
3. Deploy Cognito Infrastructure
4. Running the Backend
