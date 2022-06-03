# Prisma client with TypeScript + MongoDB + Serverless

Starter kit for quick start with Typescript, Lerna, GraphQL and MongoDB locally.

## Technologies used

- Prisma - Next-generation Node.js and TypeScript ORM with GraphQL interface
  
  [https://www.prisma.io/](https://www.prisma.io/)

- MongoDB - JSON document database
  
  [https://www.mongodb.com/](https://www.mongodb.com/)

- Typescript - JavaScript with syntax for types
  
  [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

- GraphQL - query language for APIs and a runtime for fulfilling those queries with your existing data
  
  [https://graphql.org/](https://graphql.org/)

- Docker Compose - tool for defining and running multi-container Docker
  applications. **Its used in this project to run MongoDB database in dev environment locally. Prisma Client requires Mongo to run in replica
  mode, so standalone MondoDB Commuynity Server is not enough**

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