import { tTypes } from '@monorepo/io-types'
import { NodeEnv } from '@monorepo/dictionary'

export const nodeEnv = tTypes.union([
    tTypes.literal(NodeEnv.PROD),
    tTypes.literal(NodeEnv.DEV),
], 'NodeEnv')
