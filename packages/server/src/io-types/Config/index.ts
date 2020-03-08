import { nodeEnv } from './NodeEnv'
import { processEnv } from './ProcessEnv'
import { tTypeorm } from './Typeorm'

const tBEConfig = {
    nodeEnv,
    processEnv,
    typeorm: tTypeorm,
}

export default tBEConfig
