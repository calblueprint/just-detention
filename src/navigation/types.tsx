import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

export type LegalStackParams = {
  Name: undefined;
};

export type HealingStackParams = {
  Name: undefined;
};

export type SeekHelpParams = {
  Name: undefined;
};

export type BottomTabParamList = {
  Legal: undefined;
  Healing: undefined;
  Seek: undefined;
  Home: undefined;
};

export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  MaterialBottomTabNavigationProp<BottomTabParamList, T>;
