import {
    Column,
    Entity,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { UserRole } from '@monorepo/dictionary'
import UserEntity from '../user/user.entity'

@Entity()
class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => UserEntity, user => user.role)
    @Column('enum', {
        name: 'name',
        enum: UserRole,
        unique: true,
        nullable: false,
    })
    name: string

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

export default RoleEntity
