import { HttpHeadersMergeType, HttpHeadersName } from '../Headers'

export type HttpHeaderValue = { name: HttpHeadersName; value: string; mergeType: HttpHeadersMergeType }
