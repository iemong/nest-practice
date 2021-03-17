import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskPropertyDto } from './dto/task-property.dto';
import { TaskStatusPipe } from './pipe/task-status.pipe';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'get tasks success!';
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return `getTaskById Success! Parameter [id:${id}]`;
  }

  // NOTE: ParseIntPipeはパイプという機能の1つで、コントローラのメソッドに値が引き渡される前に変換、検証を行う。@Param('id', ParseIntPipe)ではidを数値型へと変換します。(変換できなかった場合は例外をスローします)
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() taskPropertyDto: TaskPropertyDto) {
    const { title, description } = taskPropertyDto;
    return `createTask Success! Prameter [title:${title}, descritpion:${description}]`;
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return `deleteTask Success! Prameter [id:${id}]`;
  }

  @Patch('/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusPipe) status: string,
  ) {
    return `updateTask Success! Prameter [id:${id}, status:${status}]`;
  }
}
