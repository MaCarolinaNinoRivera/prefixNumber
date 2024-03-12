import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrefixesController } from './controllers/prefixes.controller';
import { PrefixesService } from './services/prefixes.service';

@Module({
    imports: [HttpModule],
    controllers: [PrefixesController],
    providers: [PrefixesService],
})
export class PrefixesModule { }