import { useMemo } from 'react'
import { ExtractCSTWithSTN, IAnyType } from 'mobx-state-tree/dist/internal'
import { booleanTypecheck } from './useMSTTypecheck.utils'

const useMSTTypecheck = <IT extends IAnyType>(type: IT, value: ExtractCSTWithSTN<IT>): boolean =>
    useMemo(() => booleanTypecheck(type, value), [type, value])
