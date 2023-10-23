import { color } from '@/constants/color';
import { useToggle } from '@/hooks/useToggle';
import { FCC } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Modal,
  TextInput as RNTextInput,
  ScrollView,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = TextInputProps & {
  label?: string | JSX.Element;
  rightIcon?: JSX.Element;
  active?: boolean;
  error?: string;
  data?: {
    value: string;
    label: string;
  }[];
};

const SelectInput: FCC<Props> = ({
  style,
  label,
  active = false,
  error,
  rightIcon,
  onChangeText = _ => {},
  value = '',
  data = [],
  ...props
}) => {
  const [toggle, onToggle] = useToggle(active);
  return (
    <View>
      <View
        style={[
          styles.container,
          toggle && styles.active,
          !!error && styles.error,
        ]}
      >
        {!!label && (
          <Text
            style={[
              styles.label,
              toggle && styles.labelActive,
              error && styles.labelError,
            ]}
          >
            {label}
          </Text>
        )}
        <RNTextInput
          editable={false}
          selectTextOnFocus={false}
          onPressOut={onToggle}
          value={data.find(item => item.value === value)?.label ?? ''}
          {...props}
          style={[style, styles.input]}
        />
        <TouchableOpacity style={styles.rightIcon} onPress={onToggle}>
          {rightIcon ? (
            <>{rightIcon}</>
          ) : (
            <Ionicons name="chevron-down" size={18} color={color.primary} />
          )}
        </TouchableOpacity>
      </View>
      {!!error && <Text style={styles.labelError}>! {error}</Text>}
      <Modal animationType="slide" transparent={true} visible={toggle}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>{!!label && label}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data &&
              data.map(item => (
                <TouchableOpacity
                  key={item.value}
                  style={styles.itemSelect}
                  onPress={() => {
                    onChangeText(String(item.value));
                    onToggle();
                  }}
                >
                  <Text style={styles.labelSelect}>{item.label}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 16,
    backgroundColor: color.background.secondary,
    width: '100%',
    height: 56,
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
    height: 24,
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
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%',
    zIndex: 1300,
    backgroundColor: color.background.secondary,
    paddingHorizontal: '7%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    gap: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 16,
    textDecorationLine: 'underline',
  },
  itemSelect: {
    height: 32,
  },
  labelSelect: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 6,
  },
});
