import { Controller, Get } from '@nestjs/common';
import { PrefixesService } from '../services/prefixes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Prefixes')
@Controller('prefixes')
export class PrefixesController {
  constructor(private readonly prefixesService: PrefixesService) {}

  @Get()
  async getAllPrefixes() {
    return this.prefixesService.getAllPrefixes();
  }

  @Get('list')
  async getAllPrefixesExtern() {
    return this.prefixesService.getAllPrefixesExtern();
  }
}