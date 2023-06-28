/* eslint-disable prettier/prettier */
import { ConnectrModule } from '@connectr/core/connectr.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConnectrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
