/* eslint-disable @typescript-eslint/no-empty-function */
import { Inject, Injectable } from '@nestjs/common';
import { TodoDto } from './data/todo.dto';
import { TodoModel } from './data/todo.model';
import { UpdateTodoDto } from './data/todo_update.dto';

@Injectable()
export class TodoService {
  private todos: TodoModel[] = [];
  constructor(@Inject('UUIDv4') uuidv4) {}

  getTodos(): TodoModel[] {
    return this.todos;
  }
  createTodo(todoDto: TodoDto) {
    const todo = new TodoModel();
    todo.name = todoDto.name;
    todo.description = todoDto.description;
    this.todos.push(todo);
  }
  getTodoById(id: string): TodoModel {
    return this.todos.find((todo) => todo.id == id);
  }
  deleteTodoById(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  updateTodoById(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = this.todos.find((todo) => todo.id == id);
    todo.name = updateTodoDto.name ?? todo.name;
    todo.description = updateTodoDto.description ?? todo.description;
    todo.status = updateTodoDto.status;
    return todo;
  }
}
