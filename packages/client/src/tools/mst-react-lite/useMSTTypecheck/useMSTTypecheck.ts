import { useMemo } from 'react'
import { ExtractCSTWithSTN, IAnyType } from 'mobx-state-tree/dist/internal'
import { MSTTypecheck } from './useMSTTypecheck.utils'

const useMSTTypecheck = <IT extends IAnyType>(type: IT, value: ExtractCSTWithSTN<IT>): Error | null =>
    useMemo(() => MSTTypecheck(type, value), [type, value])

export default useMSTTypecheck
