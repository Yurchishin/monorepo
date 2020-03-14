import { length } from 'ramda'
import { gtBy , gteBy , ltBy , lteBy } from './glteBy'

export const gtByLength = gtBy(length)

export const gteByLength = gteBy(length)

export const ltByLength = ltBy(length)

export const lteByLength = lteBy(length)
