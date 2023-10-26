import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';

import Category from '@/components/category/category';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useCategory } from '@/apis/post';

const Product: FCC<{}> = () => {
  const { data } = useCategory();

  const navigation = useNavigation<any>();
  const onRoute = (params: { id: string; name: string }) => {
    navigation.navigate('categoryPost', params);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/logo.png')}
        alt="Logo Image"
      />
      <Text style={styles.list}>Category</Text>
      {data?.data &&
        data.data.map(item => (
          <Category data={item} key={item.id} onClick={onRoute} />
        ))}
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 24,
    paddingHorizontal: '5%',
  },
  button: {
    width: 302,
  },
  image: {
    height: 94,
    width: 177,
  },

  list: {
    fontSize: 24,
    fontWeight: '700',
    color: color.text.grey,
  },
});
