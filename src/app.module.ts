import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      database: 'todoapp',
      host: 'localhost',
      username: 'root',
      password: 'root',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
    }),
  ],
})
export class AppModule {}
