import * as t from 'io-ts'
import { Host } from '@monorepo/dictionary'

export const localhost = t.literal(Host.LOCALHOST, 'localhost')

export const host = t.union([ localhost, localhost ], 'host')
