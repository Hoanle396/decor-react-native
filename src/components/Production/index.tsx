import { IPost } from '@/apis/post';
import { FCC } from '@/types';
import { View } from 'moti';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  onClick: (name: string) => void;
  data: IPost;
};
const Product: FCC<Props> = ({ onClick, data }) => {
  return (
    <TouchableOpacity onPress={() => onClick(String(data.id))}>
      <Image style={styles.img} source={{ uri: data?.images[0]?.url ?? '' }} />
      <Text style={styles.nameProduct} ellipsizeMode="tail" numberOfLines={1}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

const ProductLoading: FCC = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 3 }}>
      <Skeleton height={198} width={150} colorMode="light" radius={20} />
      <Skeleton height={20} width={150} colorMode="light" />
    </View>
  );
};
export { ProductLoading, Product };

const styles = StyleSheet.create({
  img: {
    height: 198,
    width: '100%',
    borderRadius: 20,
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: '700',
    width: 150,
  },
});
