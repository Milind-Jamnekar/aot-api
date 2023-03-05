import { Injectable } from '@nestjs/common';
import { characters } from './data/characters';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  findAll() {
    return characters;
  }

  findOneById(id: number) {
    return characters.filter((character) => character.id === id);
  }
}
