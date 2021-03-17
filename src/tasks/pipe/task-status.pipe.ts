import { BadRequestException, PipeTransform } from '@nestjs/common';

type Status = 'OPEN' | 'PROGRESS' | 'DONE';

export class TaskStatusPipe implements PipeTransform {
  allowStatus = ['OPEN', 'PROGRESS', 'DONE'];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException();
    }

    return value;
  }

  private isStatusValid(status: Status) {
    return this.allowStatus.includes(status);
  }
}
