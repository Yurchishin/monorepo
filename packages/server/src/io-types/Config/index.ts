export * from './NodeEnv'
export * from './ProcessEnv'
export * from './Typeorm'

import { nodeEnv } from './NodeEnv'
import { processEnv } from './ProcessEnv'
import { tTypeorm } from './Typeorm'

const tConfig = {
    nodeEnv,
    processEnv,
    typeorm: tTypeorm,
}

export default tConfig
