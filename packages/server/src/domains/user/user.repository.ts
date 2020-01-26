///* tslint:disable */
//import {EntityRepository, AbstractRepository} from 'typeorm'
//import UserEntity from './user.entity'
//import * as TE from 'fp-ts/lib/TaskEither'
//import TaskEither = TE.TaskEither
//
//@EntityRepository(UserEntity)
//export class UserRepository extends AbstractRepository<UserEntity> {
//
//	createAndSave({
//		age,
//		email,
//		nickname,
//		password,
//		role,
//		name,
//		surname,
//  	}): TaskEither<Error, UserEntity> {
//		const user = new UserEntity()
//		user.age = age
//		user.email = email
//		user.nickname = nickname
//		user.password = password
//		user.role = role
//		user.name = name
//		user.surname = surname
//		return TE.tryCatch(() => this.manager.save(user), reason => new Error(String(reason)))
//	}
//}
