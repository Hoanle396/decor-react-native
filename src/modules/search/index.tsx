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
      <SafeAreaView style={styles.root}>
        <Image
          style={styles.image}
          source={require('@/assets/logo.png')}
          alt="Logo Image"
        />
        <View style={styles.container}>
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
              <Text style={styles.lastInput}>History</Text>
              <Text style={styles.deleteAll}>delete all</Text>
            </View>
            <Text style={styles.result}>{'Đèn thả quả bồ công anh'}</Text>
            <Text style={styles.result}>{'Thảm lông trải sàn'}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 58,
  },
  container: {
    flex: 1,
    width: '100%',
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
    gap: 24,
    paddingHorizontal: '1%',
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
