import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello comarade, welcome to the attack on titan api where you can get character,titan info and much more ';
  }
}
