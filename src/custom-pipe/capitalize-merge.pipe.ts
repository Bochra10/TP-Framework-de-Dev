/* eslint-disable prettier/prettier */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CapitalizeAndMergePipe implements PipeTransform {
  transform(value: { stringsArray: string[] }, metadata: ArgumentMetadata) {
    if (!value) throw new BadRequestException();
    if (metadata.type == 'body') {
      return value.stringsArray
        .map((element) => element.toUpperCase())
        .join('-');
    }
    return value.stringsArray;
  }
}
