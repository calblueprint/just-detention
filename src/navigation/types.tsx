import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

export type LegalStackParams = {
  LegalRights: undefined;
  VideoPage: undefined;
};

export type HealingStackParams = {
  HealingResources: undefined;
  HopeForHealingGuide: undefined;
  HealingCatalogue: undefined;
};

export type SeekHelpParams = {
  SeekHelp: undefined;
  ResourceList: undefined;
};

export type BottomTabParamList = {
  Legal: undefined;
  Healing: undefined;
  Seek: undefined;
  Home: undefined;
};

export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  MaterialBottomTabNavigationProp<BottomTabParamList, T>;
