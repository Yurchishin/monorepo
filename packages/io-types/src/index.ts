export * from './types'

import {
    tConfig,
    tNil,
    tNumber,
    tString,
    tUser,
} from './tcomb-types'

const t = {
    Config: tConfig,
    Number: tNumber,
    String: tString,
    User: tUser,
    Nil: tNil,
}

export default t
