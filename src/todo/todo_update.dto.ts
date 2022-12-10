/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsIn, IsOptional } from "class-validator";
import { TodoDto } from "./todo.dto";
import { TodoStatusEnum } from "./todo_status_enum";


export class UpdateTodoDto extends PartialType(TodoDto) {
    @IsOptional()
    @IsIn([TodoStatusEnum.actif,TodoStatusEnum.done,TodoStatusEnum.waiting])
    status : TodoStatusEnum;
  }
  