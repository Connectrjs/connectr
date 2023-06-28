import { Injectable } from '@nestjs/common';

import { ConnectrOption, Connectr } from '@connectr/core';

@Injectable()
export class JiraService implements Connectr {
  get options(): ConnectrOption[] {
    return [
      {
        name: 'Jira Host',
        required: true,
        type: 'Text',
      },
    ];
  }

  get name(): string {
    return 'jira';
  }
}
