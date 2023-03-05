import { Injectable } from '@nestjs/common';
import { characters } from './characters/data/characters';

@Injectable()
export class AppService {
  getAllCharacters() {
    return characters;
  }
}
