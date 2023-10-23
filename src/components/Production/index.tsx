import { FCC } from '@/types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  onClick: (name: string) => void;
};
const Product: FCC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick('Tranh treo phòng khách')}>
      <View style={styles.Picture}>
        <Image style={styles.img} source={require('@/assets/product.png')} />
      </View>
      <Text style={styles.nameProduct} ellipsizeMode="tail" numberOfLines={1}>
        Tranh treo phòng khách
      </Text>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  Picture: {
    display: 'flex',
    borderRadius: 20,
    gap: 10,
  },
  img: {
    height: 198,
    width: 159,
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: '700',
    width: 150,
  },
});
