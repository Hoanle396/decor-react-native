import { FCC } from '@/types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  name: string;
  image: string;
  onPress: () => void;
};

const CardPost: FCC<Props> = ({ onPress, image, name }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image ?? '' }} alt={name} style={styles.image} />
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 100,
    gap: 5,
  },
  title: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    width: 85,
  },
  image: {
    width: 100,
    height: 130,
    borderRadius: 20,
  },
});
