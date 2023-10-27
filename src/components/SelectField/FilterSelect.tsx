import { color } from '@/constants/color';
import { useToggle } from '@/hooks/useToggle';
import { FCC } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../Button';

type Props = TextInputProps & {
  label?: string | JSX.Element;
  rightIcon?: JSX.Element;
  data?: string[];
};

const FilterSelect: FCC<Props> = ({
  style,
  label,
  rightIcon,
  onChangeText = _ => {},
  value = '',
  data = [],
}) => {
  const [toggle, onToggle] = useToggle(false);
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChangeText && onChangeText(selected);
  }, [onChangeText, selected]);

  return (
    <View>
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.container}>
          {value ? (
            <Text
              style={[styles.label, style]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {value}
            </Text>
          ) : (
            <Text
              style={[styles.label, style]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {label}
            </Text>
          )}
          {rightIcon ? (
            <>{rightIcon}</>
          ) : (
            <Ionicons name="chevron-down" size={18} color={color.primary} />
          )}
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={toggle}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>{!!label && label}</Text>
          <Picker
            selectedValue={selected}
            onValueChange={itemValue => setSelected(itemValue)}
          >
            {data &&
              data.map(item => (
                <Picker.Item key={item} label={item} value={item} />
              ))}
          </Picker>
          <Button onPress={onToggle}>Choose</Button>
        </View>
      </Modal>
    </View>
  );
};

export default FilterSelect;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: color.primary,
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
    height: '45%',
    zIndex: 1300,
    backgroundColor: color.background.default,
    paddingHorizontal: '7%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    gap: 4,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 16,
    color: color.primary,
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
