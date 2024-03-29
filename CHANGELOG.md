## [1.3.10](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.9...v1.3.10) (2022-09-23)


### Bug Fixes

* **deploy:** parcel command fix ([2d34451](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/2d34451738db51c16bd701b4eb3e9b4d3e42dffb))

## [1.3.9](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.8...v1.3.9) (2022-09-21)


### Bug Fixes

* **deploy:** deploying .env* with production config to AWS Lambda ([5c46341](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/5c46341ea7f9f8686bcd297c1c6117b211a48586))

## [1.3.8](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.7...v1.3.8) (2022-09-21)


### Bug Fixes

* **deploy:** packing together with Prisma Client engine ([012ed0f](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/012ed0f4207c448af62c41fb10487a72f3970269))

## [1.3.7](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.6...v1.3.7) (2022-09-21)


### Bug Fixes

* **deploy:** debugging deployment process (with javascript bundle optimize disabled) ([f716bc5](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/f716bc537b88dc4b7fe0dbef45c9f79aff48a02c))

## [1.3.6](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.5...v1.3.6) (2022-09-21)


### Bug Fixes

* **deploy:** removing unnecessary step to significantly speed up deployment process ([d1682d7](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/d1682d72d62514286c5fc4e0f9f7e21b74344e64))

## [1.3.5](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.4...v1.3.5) (2022-09-21)


### Bug Fixes

* **deploy:** tuning CI/CD configuration ([5a2f93c](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/5a2f93cefbef92609d6cc9bdaa7d58e8b08e3bcf))
* **deploy:** using NodeJS 16.x for compatibility with compiled application ([687300c](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/687300c25179b9dcfd5c299c88ff61d21b49269a))

## [1.3.4](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.3...v1.3.4) (2022-09-21)


### Bug Fixes

* **deploy:** final fix to go live ([f91586f](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/f91586ffd319c00be6ff134feb387910d9eefa90))
* **deploy:** tuning npm scripts ([6066898](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/606689857e49f5e705b1ecd2b8ad200359cb0948))

## [1.3.3](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.2...v1.3.3) (2022-09-21)


### Bug Fixes

* **deploy:** cleanup ([ef0d3c7](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/ef0d3c7916af0266d1263e5aabcce94047033887))
* **deploy:** final fixes ([c731e81](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/c731e81c251c973ac5351bb61bad7f4062826972))

## [1.3.2](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.1...v1.3.2) (2022-09-21)


### Bug Fixes

* **build:** debugging GitHub  Actions ([eae83a7](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/eae83a766eaef383d64ca6a1238190d174efc9ef))
* **build:** Using Parcel.Js to create universal Typescript NodeJs module ([855ed84](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/855ed841a18d868670194f2e5af2a3c67d95029e))
* **deploy:** using nodejs 16.x in GitHub Actions ([41f5909](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/41f590964c09cd7d29b4e1ccc18e7a00b10159c2))
* **deploy:** using serverless-bundle-plugin to deploy minified version to AWS Lambda ([29d1582](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/29d1582c9a6988a38678d538e5a5b50c911903f3))

## [1.3.1](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.3.0...v1.3.1) (2022-09-20)


### Bug Fixes

* **deploy:** removing unnecessary step ([964ccde](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/964ccde991ec8a82fadebb22ca8042eba0774718))

# [1.3.0](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.11...v1.3.0) (2022-09-20)


### Bug Fixes

* **deploy:** using serverless-bundle for bundling lambda functions ([a10131c](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/a10131c70dfcc8e15b4d3b9e3b72efea00ea361f))


### Features

* **deploy:** using Webpack in lue of Rollup; build fixes for prisma-client ([a40f260](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/a40f260e04d11cd9d9a7eb8b84504898552f42ce))

## [1.2.11](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.10...v1.2.11) (2022-09-19)


### Bug Fixes

* **deploy:** continue fixing deployment process ([25d9d25](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/25d9d25a4f8bd1246cbd63726c94a52d4f326a42))

## [1.2.10](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.9...v1.2.10) (2022-09-19)


### Bug Fixes

* **deploy:** continue fixing and optimizing deployment process ([43a221d](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/43a221d8001bf6787957696f60dc03c4178f1a6d))

## [1.2.9](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.8...v1.2.9) (2022-09-19)


### Bug Fixes

* **deploy:** fixing deploy process ([8a99472](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/8a994720ce62988f68dca676892f573d144dd27e))

## [1.2.8](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.7...v1.2.8) (2022-09-18)


### Bug Fixes

* **deploy:** fixing deploy process ([d9a85d2](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/d9a85d205fa661a5eaebc57072d36b07ce922a89))

## [1.2.7](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.6...v1.2.7) (2022-09-18)


### Bug Fixes

* **deploy:** fixing deploy process ([1e6fae9](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/1e6fae943f524b333001bf8bd854b40df542b1d2))

## [1.2.6](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.5...v1.2.6) (2022-09-18)


### Bug Fixes

* **deploy:** fixing deploy process ([e282e90](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/e282e90cdb50516538c44ab7260236cfc776289b))

## [1.2.5](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.4...v1.2.5) (2022-09-18)


### Bug Fixes

* **deploy:** fixing deploy process ([bd1945b](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/bd1945b65ca8a78f6e6f9aead7a73ea839e7653f))

## [1.2.4](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.3...v1.2.4) (2022-09-18)


### Bug Fixes

* **deploy:** trying to solve issue with large archive size ([c85945a](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/c85945acf86acd320a935a7112fbd1d8322879b4))

## [1.2.3](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.2...v1.2.3) (2022-09-18)


### Bug Fixes

* **doc:** correcting path ([afa8018](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/afa8018c0aa822765becddb3ea9b70e97b22cdba))

## [1.2.2](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.1...v1.2.2) (2022-06-10)


### Bug Fixes

* **Prisma + RollUp:** Since Prisma Client is not only based on JavaScript code, but also relies on the query engine binary file to be available, you need to make sure that your bundled code has access to the binary file ([a64a0e8](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/a64a0e86caaba3fa54b49f45c7fa38bb609a4732))

## [1.2.1](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.2.0...v1.2.1) (2022-06-09)


### Bug Fixes

* **Cloud application:** fix location of prisma-client module ([7473772](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/7473772a44aa9ebaae3b766767a71280c463f4e8))

# [1.2.0](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.1.0...v1.2.0) (2022-06-09)


### Features

* **Project structure:** separate prisma-client project into two separate projects; ([b17d86c](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/b17d86ca2da878abe891e3d05a72b8c4fdf736ed))

# [1.1.0](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.11...v1.1.0) (2022-06-06)


### Features

* **Prisma Client:** updating versions 3.12.0 -> 3.14.0 ([668770b](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/668770b828ff9d07b05842cff08aaae35ca759fd))

## [1.0.11](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.10...v1.0.11) (2022-06-06)


### Bug Fixes

* **documentation:** fixing typos and adding few words to VSCode dictionary ([71e5ba2](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/71e5ba2b94449b61cc47730baba2a79b6cdeba72))

## [1.0.10](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.9...v1.0.10) (2022-06-05)


### Bug Fixes

* **prisma-client:** I'm making a change in Lerna subproject, and wanna see this to be included inside root project's changelog (and increasing its version also) ([45c466f](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/45c466f6a68df416c804c78a6be7b3c03dcd5f70))

## [1.0.9](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.8...v1.0.9) (2022-06-05)


### Bug Fixes

* **ci/cd:** experimenting with semantic-release ([cc702c1](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/cc702c18b8ad2ac373c0898a4683659d5ea272ea))
* **readme:** testing semantic release flows to setup CI/CD in conjunction together with Lerna ([edfa596](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/edfa59618ab28a8e6a17efdd14b982e640bd749d))
* trying to fix broken pipeline ([121451e](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/121451e1660bcb0c50cc4fa0296e8c82051ceaaa))

## [1.0.8](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.7...v1.0.8) (2022-06-03)


### Bug Fixes

* **lerna:** unchanged projects are published  bug ([63d7dc1](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/63d7dc1ce64b3213a4efcb4c333fa4729582dc0b))

## [1.0.7](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.6...v1.0.7) (2022-06-03)


### Bug Fixes

* **lerna:** trying to fetch all git tags and commits for proper lerna function ([2a63198](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/2a6319813f64bcaa72e980b5f5f98e17fdfa55d1))

## [1.0.6](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.5...v1.0.6) (2022-06-03)


### Bug Fixes

* **lerna:** lerna and semantic-release requires `all_commits` and `all_tags` to be set in actions/checkout@v2 plugin for proper functioning ([242941b](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/242941bab494316ac5c0c4fdcf46ad7720aeb5d6))

## [1.0.5](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.4...v1.0.5) (2022-06-03)


### Bug Fixes

* **lerna:** proper command to publish ([64677da](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/64677dac11030a370facbe2265627a3282f29396))

## [1.0.4](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.3...v1.0.4) (2022-06-03)


### Bug Fixes

* **lerna:** conventional commits configures in lerna already ([469cad4](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/469cad4c3396664303f5a1fd632a4f8fee237d2b))

## [1.0.3](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.2...v1.0.3) (2022-06-03)


### Bug Fixes

* **semantic-release:** now using git + github plugins together to achieve full experience with GitHub and changelog generation ([2f3bbc7](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/2f3bbc79f0f5578a696d65af185d2e820e8b7314))

## [1.0.1](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/compare/v1.0.0...v1.0.1) (2022-06-03)


### Bug Fixes

* fine tuning semantic-release ([208f819](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/208f8192e6de5bbf24138bf199cee5abb2088458))
* **semantic-release:** fine tuning ([92c853d](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/92c853d4602cebbecd9478f165091e264f731db3))
* trying to avoid connecting to npm registry ([7bd1d50](https://github.com/artem-korolev/prismajs-mongodb-graphql-aws-lambda-starter-kit/commit/7bd1d50302d61e12056aca952568e427f33c3d41))
