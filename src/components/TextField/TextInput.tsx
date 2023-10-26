import { color } from '@/constants/color';
import { FCC } from '@/types';
import React, { memo, useState } from 'react';
import {
  TextInputProps,
  TextInput as RNTextInput,
  StyleSheet,
  View,
  Text,
} from 'react-native';

type Props = TextInputProps & {
  label?: string | JSX.Element;
  rightIcon?: JSX.Element;
  active?: boolean;
  error?: string;
};

const TextInput: FCC<Props> = ({
  style,
  label,
  active = false,
  error,
  rightIcon,
  ...props
}) => {
  const [height, setHeight] = useState(24);
  return (
    <View style={{ width: '100%' }}>
      <View
        style={[
          styles.container,
          active && styles.active,
          !!error && styles.error,
          { height: height + 36 },
        ]}
      >
        {!!label && (
          <Text
            style={[
              styles.label,
              active && styles.labelActive,
              error && styles.labelError,
            ]}
          >
            {label}
          </Text>
        )}
        <RNTextInput
          onContentSizeChange={e =>
            setHeight(e.nativeEvent.contentSize.height || 24)
          }
          {...props}
          style={[style, styles.input, { height: height }]}
        />
        {!!rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {!!error && <Text style={styles.labelError}>! {error}</Text>}
    </View>
  );
};

export default memo(TextInput);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 16,
    backgroundColor: color.background.secondary,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: color.background.secondary,
  },
  active: {
    borderColor: color.primary,
    backgroundColor: color.background.default,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: color.text.dark,
  },
  input: {
    fontSize: 16,
    color: color.text.main,
  },
  labelActive: {
    color: color.primary,
  },
  error: {
    borderColor: color.error.main,
    backgroundColor: color.background.default,
  },
  labelError: {
    fontSize: 14,
    fontWeight: '600',
    color: color.error.main,
  },
  rightIcon: {
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
});
