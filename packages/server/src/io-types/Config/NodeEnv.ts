import t from '@monorepo/io-types'
import { NodeEnv } from '@monorepo/dictionary'

export const nodeEnv = t.union([
    t.literal(NodeEnv.PROD),
    t.literal(NodeEnv.DEV),
], 'NodeEnv')
