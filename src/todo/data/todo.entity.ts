/* eslint-disable prettier/prettier */
import { TimeStamp } from 'src/shared/timestamp';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatusEnum } from './todo_status_enum';

@Entity()
export class TodoEntity extends TimeStamp{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'enum', enum: TodoStatusEnum, default: TodoStatusEnum.actif })
    status: TodoStatusEnum;
}
