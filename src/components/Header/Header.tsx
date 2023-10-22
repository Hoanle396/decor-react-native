import { color } from '@/constants/color';
import { FontAwesome5 } from '@expo/vector-icons/';
import Icon from '@expo/vector-icons/Ionicons';
import {
  HeaderOptions,
  Layout,
  Header as RNVHeader,
} from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface HeaderProps extends HeaderOptions {
  leftBtnVariant?: 'back' | 'notification';
  rightBtnVariant?: 'search';
  onPressLeftButton?: () => void;
  onPressRightButton?: () => void;
  modal?: boolean;
  layout?: Layout;
  title?: string | JSX.Element;
  subTitle?: string;
  headerTitleAlign?: 'left' | 'center';
  height?: number;
}
const Header = React.memo(function Header({
  leftBtnVariant,
  rightBtnVariant,
  onPressLeftButton,
  onPressRightButton,
  title,
  height,
  headerTitleAlign = 'center',
  ...props
}: HeaderProps) {
  const backgroundColor = color.white;
  const elementColor = color.primary;

  let headerLeft = props.headerLeft;
  let headerRight = props.headerRight;

  if (!headerLeft && onPressLeftButton && leftBtnVariant === 'back') {
    headerLeft = () => (
      <TouchableOpacity onPress={onPressLeftButton}>
        <FontAwesome5
          name="long-arrow-alt-left"
          size={29}
          color={elementColor}
        />
      </TouchableOpacity>
    );
  }

  if (!headerLeft && onPressLeftButton && leftBtnVariant === 'notification') {
    headerLeft = () => (
      <TouchableOpacity onPress={onPressLeftButton}>
        <Icon name="notifications" size={29} color={elementColor} />
      </TouchableOpacity>
    );
  }

  if (!headerRight && onPressRightButton && rightBtnVariant === 'search') {
    headerRight = () => (
      <TouchableOpacity onPress={onPressRightButton}>
        <Icon name="search" size={29} color={elementColor} />
      </TouchableOpacity>
    );
  }

  const isStringTitle = typeof title === 'string';

  return (
    <RNVHeader
      headerTitle={({ children }) => {
        return (
          <View>
            {isStringTitle ? (
              <View style={styles.header}>
                <Text
                  style={[styles.textHeader, { color: elementColor }]}
                >{`${children}`}</Text>
              </View>
            ) : (
              title
            )}
          </View>
        );
      }}
      title={isStringTitle ? title : ''}
      headerLeft={headerLeft}
      headerRight={headerRight}
      headerLeftContainerStyle={styles.headerLeftContainer}
      headerRightContainerStyle={styles.headerRightContainer}
      headerStyle={{
        backgroundColor,
        height,
      }}
      headerTitleAlign={headerTitleAlign}
      {...props}
    />
  );
});

export default Header;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    padding: 6,
  },
  textHeader: {
    fontSize: 17,
    fontWeight: '600',
  },
  headerLeftContainer: {
    paddingLeft: '5%',
    justifyContent: 'center',
  },
  headerRightContainer: {
    paddingRight: '5%',
    justifyContent: 'center',
  },
});
