import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrefixesModule } from './prefixes/prefixes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrefixesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
