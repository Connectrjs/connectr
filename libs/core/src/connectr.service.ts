import { Inject, Injectable } from '@nestjs/common';
import { Connectr } from './connectr';

@Injectable()
export class ConnectrService {
  constructor(@Inject('Connectrs') private connectrs: Connectr[]) {}

  getConnectrs(): Connectr[] {
    return this.connectrs;
  }

  getConnectrByName(name: string): Connectr | undefined {
    return this.connectrs.find((c) => c.name === name);
  }
}
