import * as processEnv from './ProcessEnv'
import * as typeorm from './Typeorm'

export * from './ProcessEnv'
export * from './Typeorm'

export default {
    ...processEnv,
    ...typeorm,
}
