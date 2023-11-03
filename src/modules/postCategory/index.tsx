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
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
type Props = {
  navigation: NativeStackNavigationProp<RootStackRoute, 'detailRooms'>;
  route: RouteProp<{ params: { id: string; name: string } }, 'params'>;
};

const HEADER_MAX_HEIGHT = 111;
const HEADER_MIN_HEIGHT = 20;
const HEADER_SCROLL_DISTANCE = 91;

const PostCategory: FCC<Props> = ({ navigation, route }) => {
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [scrollY] = useState(new Animated.Value(0));

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

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const textTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [10, -10],
    extrapolate: 'clamp',
  });

  const fontSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [20, 24],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ height: headerHeight }}>
        <Animated.Image
          style={[
            styles.image,
            {
              opacity: imageOpacity,
              height: headerHeight,
              width: headerHeight,
            },
          ]}
          source={require('@/assets/logo.png')}
        />
      </Animated.View>
      <Animated.View>
        <Animated.Text
          style={[
            styles.title,
            { fontSize: fontSize, transform: [{ translateY: textTranslate }] },
          ]}
        >
          {name}
        </Animated.Text>
      </Animated.View>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
      >
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
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  body: {
    width: '100%',
    display: 'flex',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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

  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
});
