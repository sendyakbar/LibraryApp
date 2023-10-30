import {ViewStyle} from 'react-native';

import {color} from './colors';

type Shadow = {
  CONTAINER: ViewStyle;
  CARD: ViewStyle;
};

export const shadow: Shadow = {
  CONTAINER: {
    shadowColor: color.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  CARD: {
    shadowColor: color.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};
