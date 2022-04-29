# PrismaJS with TypeScript + MongoDB

Starter kit for quick start with Typescript and MongoDB locally.

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
