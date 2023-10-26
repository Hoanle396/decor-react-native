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
import { CardPost, CardPostLoading } from '../CardPost';
import { ICategory, usePostByCategoryId } from '@/apis/post';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackRoute } from '@/types/navigation';
import { Skeleton } from 'moti/skeleton';
import { MotiView } from 'moti';

type Props = {
  name: string;
  category: ICategory;
};

const CategoryPost: FCC<Props> = ({ name, category }) => {
  const { width } = useWindowDimensions();
  const { data, isLoading } = usePostByCategoryId({
    id: String(category.id),
    limit: 5,
  });
  const navigation = useNavigation<NavigationProp<RootStackRoute, 'home'>>();

  const onPress = (id: number) => {
    navigation.navigate('detailRooms', { id: String(id) });
  };

  const onSeeMore = ({ id, name }: { id: string; name: string }) => {
    navigation.navigate('categoryPost', { id, name });
    //bug
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Button
          variants="text"
          style={{ height: 20, padding: 0 }}
          textStyle={{ fontSize: 12 }}
          onPress={() =>
            onSeeMore({ id: String(category.id), name: category.name })
          }
        >
          see more
        </Button>
      </View>
      <View style={styles.list}>
        {isLoading && (
          <>
            <CardPostLoading />
            <CardPostLoading />
            <CardPostLoading />
          </>
        )}
        <FlatList
          data={data?.data ? data.data : []}
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
            <CardPost
              image={item.images[0].url ?? ''}
              name={item.name}
              onPress={() => onPress(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};

const CategoryPostLoading: FCC = () => {
  return (
    <MotiView style={styles.container}>
      <View style={styles.header}>
        <Skeleton height={25} width={200} colorMode="light" />
        <Skeleton height={20} width={60} colorMode="light" />
      </View>
      <View style={styles.list}>
        <CardPostLoading />
        <CardPostLoading />
        <CardPostLoading />
      </View>
    </MotiView>
  );
};
export { CategoryPost, CategoryPostLoading };
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
