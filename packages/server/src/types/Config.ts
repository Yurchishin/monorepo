import { TypeOf } from '@monorepo/io-types'
import { tBEConfig } from '@io-types'

export type NodeEnvIO = TypeOf < typeof tBEConfig.nodeEnv >
export type ProcessEnvIO = TypeOf<typeof tBEConfig.processEnv>
