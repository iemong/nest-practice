import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/typeorm-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env/${process.env.NODE_ENV}.env`, '.env/default.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    TasksModule,
  ],
})
export class AppModule {}
