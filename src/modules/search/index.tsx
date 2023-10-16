import { Ionicons } from '@expo/vector-icons';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';
import Header from '@/components/Header/Header';

const Search: FCC<{}> = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <>
      <Header leftBtnVariant="back" onPressLeftButton={() => {}} />
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image}
          source={require('@/assets/logo.png')}
          alt="Logo Image"
        />
        <View style={styles.search}>
          <Ionicons
            style={styles.iconsearch}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Tìm kiếm"
          />
        </View>
        <View style={styles.body}>
          <View style={styles.text2}>
            <Text style={styles.lastInput}>Tìm kiếm lần cuối</Text>
            <Text style={styles.deleteAll}>xóa tất cả</Text>
          </View>
          <Text style={styles.result}>Đèn thả quả bồ công anh</Text>
          <Text style={styles.result}>Thảm lông trải sàn</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 58,
    paddingHorizontal: '5%',
  },
  button: {
    width: 302,
  },
  image: {
    height: 94,
    width: 177,
  },
  search: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    height: 56,
  },
  iconsearch: {
    width: '100%',
    flex: 0.08,
  },
  input: {
    width: '100%',
    flex: 0.92,
    fontSize: 15,
    fontWeight: '700',
    color: color.text.dark,
  },
  body: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 24,
  },
  text2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastInput: {
    fontSize: 24,
    fontWeight: '700',
  },
  deleteAll: {
    color: color.text.grey,
    fontSize: 15,
  },
  result: {
    color: color.text.dark,
    fontWeight: '700',
    fontSize: 15,
  },
});
