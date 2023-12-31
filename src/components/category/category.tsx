import { ICategory } from '@/apis/post';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  onClick: (params: { id: string; name: string }) => void;
  data: ICategory;
};
const Category: FCC<Props> = ({ onClick, data }) => {
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={() => onClick({ id: String(data.id), name: data.name ?? '' })}
    >
      <View style={styles.Category}>
        <View style={styles.picture}>
          <Image style={styles.img} source={{ uri: data.image }} />
        </View>
        <Text style={styles.nameCategory}>{data.name}</Text>
        <FontAwesome name="angle-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
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
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  nameCategory: {
    flex: 0.9,
    fontSize: 20,
    fontWeight: '700',
  },
});
