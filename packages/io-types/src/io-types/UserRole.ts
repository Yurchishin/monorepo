import * as t from 'io-ts'
import { UserRole } from '@monorepo/dictionary'

export const adminRole = t.literal(UserRole.ADMIN, 'admin')

export const guestRole = t.literal(UserRole.GUEST, 'guest')

export const userRole = t.union([adminRole, guestRole], 'user role')
