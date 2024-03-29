# Prisma client with TypeScript + MongoDB + Serverless

Starter kit for quick start with Typescript, Lerna, GraphQL and MongoDB locally.

If you are using this project as package under Lerna package manager,
then follow instructions from [Top Level Documentation](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/)

Documentation bellow is relevant only for running this package alone as
boilerplate for Prisma Client based projects.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Bootstrap lerna environment](#bootstrap-lerna-environment)
- [Run project locally with MongoDB in Docker Compose](#run-project-locally-with-mongodb-in-docker-compose)
- [Generate Prisma Client](#generate-prisma-client)
- [Run sample code](#run-sample-code)
- [Prisma Studio](#prisma-studio)
- [MongoDB Cloud Shared (M0 clusters) configuration](#mongodb-cloud-shared-m0-clusters-configuration)
- [Deploy to AWS Lambda](#deploy-to-aws-lambda)
- [Connect project to Serverless Dashboard](#connect-project-to-serverless-dashboard)

## Bootstrap lerna environment

```bash
npm install
```

## Run project locally with MongoDB in Docker Compose

```bash
docker-compose up -d
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Run sample code

```bash
npx ts-node index.ts
```

## Prisma Studio

```bash
npx prisma studio
```

## MongoDB Cloud Shared (M0 clusters) configuration

`You will have to add the infamous 0.0.0.0/0 CIDR block to your MongoDB Atlas cluster IP Whitelist because you won’t know which IP address AWS Lambda is using to make calls to your Atlas database.`

## Deploy to AWS Lambda

```bash
npx serverless deploy
```

## Connect project to Serverless Dashboard

```bash
npx serverless
```
