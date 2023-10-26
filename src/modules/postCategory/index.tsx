import { usePostByCategoryId } from '@/apis/post';
import Product from '@/components/Production';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
type Props = {
  navigation: NativeStackNavigationProp<RootStackRoute, 'detailRooms'>;
  route: RouteProp<{ params: { id: string; name: string } }, 'params'>;
};
const PostCategory: FCC<Props> = ({ navigation, route }) => {
  const time = ['Jan-2', 'Feb-3', 'Mar-3', 'Apr-7', 'May-3'];
  const [_, setSelectedValue] = useState(null);

  const { id, name } = route.params;

  const { data } = usePostByCategoryId({ id });

  const onRoute = (postID: string) => {
    navigation.navigate('detailRooms', { id: postID });
  };
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
        <SelectDropdown
          data={time}
          onSelect={(selectedItem, _) => {
            setSelectedValue(selectedItem);
          }}
          defaultButtonText="Category"
          buttonStyle={{
            backgroundColor: color.white,
            height: 20,
            width: 100,
            paddingHorizontal: 0,
          }}
          buttonTextStyle={{
            color: color.primary,
            fontSize: 13,
            fontWeight: '700',
          }}
          renderDropdownIcon={() => (
            <AntDesign name="down" size={16} color="black" />
          )}
        />

        <SelectDropdown
          data={time}
          onSelect={(selectedItem, _) => {
            setSelectedValue(selectedItem);
          }}
          defaultButtonText="Date time"
          buttonStyle={{
            backgroundColor: color.white,
            height: 20,
            width: 100,
            paddingHorizontal: 0,
          }}
          buttonTextStyle={{
            color: color.primary,
            fontSize: 13,
            fontWeight: '700',
          }}
          renderDropdownIcon={() => (
            <AntDesign name="down" size={16} color="black" />
          )}
        />
        <Feather name="filter" size={24} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.product}>
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
    height: 171,
    top: 30,
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
