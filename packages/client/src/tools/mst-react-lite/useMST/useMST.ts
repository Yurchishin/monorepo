/* tslint:disable:no-if-statement no-throw */
import { useContext } from 'react'
import { MobStateTreeContext } from '../MSTProvider'
import { TUseMST } from './useMST.types'

const useMST: TUseMST = () => useContext(MobStateTreeContext)

export default useMST
