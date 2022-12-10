/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ErrorMessage } from 'src/shared/error_messages';

export class TodoDto {
    @IsNotEmpty({message: ErrorMessage.EmptyInput})
    @MinLength(3,{message: ErrorMessage.MinLength3})
    @MaxLength(10,{message: ErrorMessage.MaxLength10})
    name: string;
    @IsNotEmpty({message: ErrorMessage.EmptyInput})
    @MinLength(10,{message: ErrorMessage.MinLength10})
    description: string;
}
