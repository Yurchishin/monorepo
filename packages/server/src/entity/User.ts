import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import { UserRole } from '@monorepo/dictionary'
import { Role } from './Role'

@Entity()
export class User {
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
    name: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    surname: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string

    @ManyToOne(
        () => Role,
        role => role.name,
    )
    @JoinColumn({ name: 'role' })
    role: UserRole

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
