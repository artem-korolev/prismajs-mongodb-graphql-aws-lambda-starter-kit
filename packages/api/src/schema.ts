import { join } from 'path'
import { makeSchema, objectType, queryType, nonNull, stringArg } from 'nexus'

const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('email')
    t.string('name')
  },
})

const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve(_root, _args, ctx) {
        return ctx.prisma.user.findMany()
      },
    })

    t.field('user', {
      type: 'User',
      args: { id: nonNull(stringArg()) },
      resolve(_parent, args, ctx) {
        return ctx.prisma.user.findUnique({ where: { id: args.id } })
      },
    })
  },
})

export const schema = makeSchema({
  types: [User, Query],
  outputs: {
    schema: join(process.cwd(), 'generated', 'schema.graphql'),
    typegen: join(process.cwd(), 'generated', 'nexus.ts'),
  },
  contextType: {
    module: join(process.cwd(), 'src/context.ts'),
    export: 'Context',
    alias: 'ctx',
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve('prisma-client/dist/index.d.ts'),
        alias: 'prisma',
      },
    ],
  },
  prettierConfig: join(process.cwd(), 'package.json'),
})