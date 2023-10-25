import React, {FC} from 'react';
import {ImageProps, Image, StyleSheet} from 'react-native';

type TabBarIconProps = {
  focused: boolean;
  source: {
    iconActive: ImageProps;
    iconInactive: ImageProps;
  };
};

const TabBarIcon: FC<TabBarIconProps> = props => {
  const {source, focused} = props;

  return (
    <Image
      source={focused ? source.iconActive : source.iconInactive}
      style={focused ? styles.iconActive : styles.iconInactive}
    />
  );
};

const styles = StyleSheet.create({
  iconActive: {
    height: 32,
    width: 32,
  },
  iconInactive: {
    height: 24,
    width: 24,
  },
});

export default TabBarIcon;
