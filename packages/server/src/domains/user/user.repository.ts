/* tslint:disable */
import { EntityRepository, AbstractRepository } from 'typeorm'
import UserEntity from './user.entity'
import * as TE from 'fp-ts/lib/TaskEither'
import TaskEither = TE.TaskEither
import { UserCreateIO } from '@monorepo/io-types'

@EntityRepository(UserEntity)
export class UserRepository extends AbstractRepository<UserEntity> {

    create(): void {
//        const {age, email, nickname, password, role, name, surname} = userCreate

        const user = new UserEntity()
        console.log(user)

//        user.age = age
//        user.email = email
//        user.nickname = nickname
//        user.password = password
//        user.role = role
//        user.name = name
//        user.surname = surname
//
//        return TE.tryCatch(() => this.manager.save(user), reason => new Error(String(reason)))
    }
}

new UserRepository().create()
