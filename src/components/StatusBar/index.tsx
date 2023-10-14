import { color } from '@/constants/color';
import React, { FC } from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';

const StatusBar: FC<StatusBarProps> = ({ ...props }) => {
  return (
    <View style={styles.statusBar}>
      <RNStatusBar translucent barStyle="dark-content" {...props} />
    </View>
  );
};
export default StatusBar;
const styles = StyleSheet.create({
  statusBar: {
    height: 40,
    backgroundColor: color.white,
  },
});
