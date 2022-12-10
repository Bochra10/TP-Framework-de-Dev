import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  getPermier(): string {
    return 'GET';
  }
  @Post()
  postPermier(): string {
    return 'POST';
  }
  @Delete()
  deletePermier(): string {
    return 'DELETE';
  }
  @Put()
  putPermier(): string {
    return 'PUT';
  }
  @Patch()
  patchPermier(): string {
    return 'PATCH';
  }
}
