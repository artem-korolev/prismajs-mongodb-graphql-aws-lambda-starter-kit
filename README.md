# PrismaJS with TypeScript + MongoDB + Lerna + AWS Lambda + Serverless

Starter kit for quick start with Typescript, Lerna, GraphQL and MongoDB locally
and deploy to AWS Lamdba + MongoDB Shared Cloud using GitHub Actions.

## Technologies used

- Prisma - Next-generation Node.js and TypeScript ORM with GraphQL interface
  
  [https://www.prisma.io/](https://www.prisma.io/)

- MongoDB - JSON document database
  
  [https://www.mongodb.com/](https://www.mongodb.com/)

- Typescript - JavaScript with syntax for types
  
  [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

- Lerna - A tool for managing JavaScript projects with multiple packages

  [https://lerna.js.org/](https://lerna.js.org/)

- GraphQL - query language for APIs and a runtime for fulfilling those queries with your existing data
  
  [https://graphql.org/](https://graphql.org/)

- Docker Compose - tool for defining and running multi-container Docker
  applications. **Its used in this project to run MongoDB database in dev environment locally. Prisma Client requires Mongo to run in replica
  mode, so standalone MondoDB Commuynity Server is not enough**

- GitHub Actions - makes it easy to automate all your software workflows,
  now with world-class CI/CD. Build, test, and deploy your code right from
  GitHub

  [https://github.com/features/actions](https://github.com/features/actions)

## Bootstrap lerna environment

```bash
npx lerna bootstrap
```

It will generate Prisma Client automatically with npm postinstall script.
When you modify your schema and want to test locally, then follow steps in
[Generate Prisma Client](#generate-prisma-client)

## Run project locally with MongoDB in Docker Compose

```bash
docker-compose up -d
```

## Generate Prisma Client

With Lerna:

```bash
npx lerna run generate-prisma-client
```

Or from inside **packages/prisma-client** package you can use it directly:

```bash
npx prisma generate
```

or

```bash
npm run generate-prisma-client
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
