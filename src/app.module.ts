import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
import { CommonModule } from './common-module/common-module.module';
import { CustomPipeController } from './custom-pipe/custom-pipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PremierModule,
    TodoModule,
    TodoModule,
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'bochra',
      password: '',
      database: 'todo_db',
      entities: ['dist/**/*.entity{.ts,.js}'], // Pour dire à nest js, entities sont tous les fichiers
      // qui se terminent par .entity.ts ou .js, pour ne pas avoir à importer les entity à chaque fois.
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, TodoController, CustomPipeController],
  providers: [AppService],
})
export class AppModule {}
