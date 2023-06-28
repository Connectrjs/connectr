import { ConnectrOption } from '@connectr/core';
import { ConnectrService } from '@connectr/core/connectr.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private connectrService: ConnectrService) {}

  getConnectrs(): string[] {
    return this.connectrService.getConnectrs().map((connectr) => connectr.name);
  }

  getConnectrOptions(name: string): ConnectrOption[] {
    return this.connectrService.getConnectrByName(name).options;
  }
}
