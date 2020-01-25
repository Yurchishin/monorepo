import {
    Column,
    Entity,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn, PrimaryGeneratedColumn,
} from 'typeorm'
import { UserRole } from '@monorepo/dictionary'
import { User } from './User'

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => User, user => user.role)
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
