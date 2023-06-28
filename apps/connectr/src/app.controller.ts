import { ConnectrOption } from '@connectr/core';
import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/connectrs')
  getConnectrs(): string[] {
    return this.appService.getConnectrs();
  }

  @Get('/connectrs/:name')
  getConnectrOption(@Param('name') name: string): ConnectrOption[] {
    return this.appService.getConnectrOptions(name);
  }
}
