import { useCategory, usePostByCategoryId } from '@/apis/post';
import { Product, ProductLoading } from '@/components/Production';
import FilterSelect from '@/components/SelectField/FilterSelect';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
type Props = {
  navigation: NativeStackNavigationProp<RootStackRoute, 'detailRooms'>;
  route: RouteProp<{ params: { id: string; name: string } }, 'params'>;
};
const PostCategory: FCC<Props> = ({ navigation, route }) => {
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');

  const { id, name } = route.params;

  const { data, isLoading } = usePostByCategoryId({ id });
  const { data: categories } = useCategory();

  const onRoute = (postID: string) => {
    navigation.navigate('detailRooms', { id: postID });
  };

  const option = useMemo(
    () => categories?.data?.map(item => item.name) ?? [],
    [categories.data],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/logo.png')}
        alt="Logo Image"
      />
      <Text style={styles.text2}>{name}</Text>
      <View style={styles.body}>
        <MaterialIcons name="filter-list" size={24} color="black" />
        <FilterSelect
          label="Category"
          data={option}
          value={category}
          onChangeText={setCategory}
          style={{ width: 100 }}
        />

        <FilterSelect
          label="Date Time"
          data={['Jan-2', 'Feb-3', 'Mar-3', 'Apr-7', 'May-3']}
          value={time}
          onChangeText={setTime}
          style={{ width: 80 }}
        />
        <Feather name="filter" size={24} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.product}>
          {isLoading && (
            <>
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
            </>
          )}
          {data?.data &&
            data.data.map(item => (
              <Product data={item} key={item.id} onClick={onRoute} />
            ))}
        </View>
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    gap: 24,
  },
  button: {
    width: 302,
  },
  image: {
    alignSelf: 'center',
    height: 111,
    width: 171,
  },
  body: {
    width: '100%',
    display: 'flex',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text2: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    fontSize: 13,
    fontWeight: '700',
    color: color.text.grey,
  },

  filter: {
    flexDirection: 'row',
    gap: 3,
    alignContent: 'center',
  },
  product: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    gap: 15,
    rowGap: 25,
    flexWrap: 'wrap',
    paddingHorizontal: '7%',
  },
});
