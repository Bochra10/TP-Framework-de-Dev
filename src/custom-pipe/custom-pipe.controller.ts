import { Body, Controller, Post } from '@nestjs/common';
import { CapitalizeAndMergePipe } from './capitalize-merge.pipe';

@Controller('custom-pipe')
export class CustomPipeController {
  @Post()
  transformSkills(@Body(CapitalizeAndMergePipe) skills): string {
    return skills;
  }
}
