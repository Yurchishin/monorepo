import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import RoleEntity from '../role/role.entity'
import { TUserType } from '@monorepo/io-types'

@Entity({
    name: 'user',
})
class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'int',
    })
    age?: number

    @Column({
        type: 'varchar',
        nullable: false,
    })
    email: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    nickname: string

    @Column({
        type: 'varchar',
    })
    name?: string

    @Column({
        type: 'varchar',
    })
    surname?: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string

    @ManyToOne(
        () => RoleEntity,
        role => role.name,
    )
    @JoinColumn({ name: 'role' })
    role: TUserType

    @CreateDateColumn({
        name: 'createdAt',
        nullable: false,
    })
    createdAt: Date

    @UpdateDateColumn({
        name: 'updatedAt',
        nullable: false,
    })
    updatedAt: Date
}

export default UserEntity
