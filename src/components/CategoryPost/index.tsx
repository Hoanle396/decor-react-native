import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Button from '../Button';
import CardPost from '../CardPost';

type Props = {
  name: string;
  seeMore: string;
  items: {
    name: string;
    image: string;
  }[];
};

const CategoryPost: FCC<Props> = ({ name, items }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Button
          variants="text"
          style={{ height: 20, padding: 0 }}
          textStyle={{ fontSize: 12 }}
        >
          see more
        </Button>
      </View>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: (width - 300 - width * 0.14) / 2,
              }}
            />
          )}
          renderItem={({ item }) => (
            <CardPost image={item.image} name={item.name} onPress={() => {}} />
          )}
        />
      </View>
    </View>
  );
};

export default CategoryPost;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: color.text.dark,
  },
  list: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 7,
  },
});
