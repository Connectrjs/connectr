type OptionType = 'Text' | 'Choice' | 'Boolean';

interface BaseConnectrOption {
  type: OptionType;
  name: string;
  required: boolean;
  description?: boolean;
}

export interface TextConnectrOption extends BaseConnectrOption {
  type: 'Text';
}

export interface ChoiceConnectrOption extends BaseConnectrOption {
  type: 'Choice';
}

export interface BooleanConnectrOption extends BaseConnectrOption {
  type: 'Boolean';
}

export type ConnectrOption =
  | TextConnectrOption
  | ChoiceConnectrOption
  | BooleanConnectrOption;
