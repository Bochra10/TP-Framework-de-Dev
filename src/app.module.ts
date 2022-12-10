import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoControllerController } from './todo-controller/todo-controller.controller';
import { TodoModule } from './todo/todo.module';
import { CommonModuleModule } from './common-module/common-module.module';
import { CustomPipeController } from './custom-pipe/custom-pipe.controller';

@Module({
  imports: [PremierModule, TodoModuleModule, TodoModule, CommonModuleModule],
  controllers: [AppController, TodoControllerController, CustomPipeController],
  providers: [AppService],
})
export class AppModule {}
