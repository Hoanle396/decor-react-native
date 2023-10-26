import { FCC } from '@/types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Skeleton } from 'moti/skeleton';
import { MotiView } from 'moti';
import { color } from '@/constants/color';

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

const CardPostLoading: FCC = () => {
  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
      animate={{ backgroundColor: color.white }}
      style={styles.container}
    >
      <Skeleton height={130} width={100} radius={20} colorMode="light" />
      <Skeleton width={85} height={14} radius={5} colorMode="light" />
    </MotiView>
  );
};

export { CardPost, CardPostLoading };

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
