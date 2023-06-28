/* eslint-disable prettier/prettier */
import { JiraModule, JiraService } from '@connectr/jira';
import { Module } from '@nestjs/common';

import { ConnectrService } from './connectr.service';

@Module({
  imports: [JiraModule],
  providers: [
    ConnectrService,
    {
      provide: 'Connectrs',
      useFactory: () => {
        return [new JiraService()];
      },
    },
  ],
  exports: [ConnectrService],
})
export class ConnectrModule {}
