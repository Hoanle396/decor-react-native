import { color } from '@/constants/color';
import { FCC } from '@/types';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  onClick: (name: string) => void;
};
const Category: FCC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity style={styles.body} onPress={() => onClick('den')}>
      <View style={styles.Category}>
        <View style={styles.picture}>
          <Image style={styles.img} source={require('@/assets/avatar.png')} />
        </View>
        <Text style={styles.nameCategory}> Den</Text>
        <FontAwesome name="angle-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  image: {
    height: 94,
    width: 177,
  },
  body: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  list: {
    fontSize: 24,
    fontWeight: '700',
    color: color.text.grey,
  },
  Category: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture: {
    width: 54,
    border: 1,
    height: 54,
    marginRight: 15,
  },
  img: {
    width: '100%',
  },
  nameCategory: {
    flex: 0.9,
    fontSize: 20,
    fontWeight: '700',
  },
});
