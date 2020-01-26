import * as t from 'io-ts'
import { Host } from '@monorepo/dictionary'

export const localhost = t.literal(Host.LOCALHOST, 'Localhost')

export const host = t.union([ localhost, localhost ], 'Host')
