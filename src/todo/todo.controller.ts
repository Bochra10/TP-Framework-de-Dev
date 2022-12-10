import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoDto } from './data/todo.dto';
import { TodoModel } from './data/todo.model';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './data/todo_update.dto';

@Controller('todo')
export class TodoController {
  private todos: TodoModel[] = [];
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodos(): TodoModel[] {
    return this.todoService.getTodos();
  }
  @Post()
  createTodo(@Body() todoDto: TodoDto) {
    return this.todoService.createTodo(todoDto);
  }
  @Get('/:id')
  getTodoById(@Param() id: string): TodoModel {
    return this.todoService.getTodoById(id);
  }
  @Delete('/:id')
  deleteTodoById(@Param() id: string) {
    return this.todoService.deleteTodoById(id);
  }
  @Post('/:id')
  updateTodoById(@Param() id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodoById(id, updateTodoDto);
  }
}
