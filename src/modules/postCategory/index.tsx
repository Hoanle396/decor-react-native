import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Product from '@/components/Production';

const PostCategory: FCC<{}> = () => {
  const time = ['Jan-2', 'Feb-3', 'Mar-3', 'Apr-7', 'May-3'];
  const [_, setSelectedValue] = useState(null);
  const navigation = useNavigation<any>();
  const onRoute = (name: string) => {
    navigation.navigate('categoryPost', name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/logo.png')}
        alt="Logo Image"
      />
      <Text style={styles.text2}>{'Tranh treo tường'}</Text>
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
            width: 90,
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
            width: 90,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.product}>
          <Product onClick={() => onRoute('Tranh treo phòng khách')} />
          <Product onClick={() => onRoute('Tranh treo phòng khách')} />
          <Product onClick={() => onRoute('Tranh treo phòng khách')} />
          <Product onClick={() => onRoute('Tranh treo phòng khách')} />
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
    alignItems: 'center',
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
    justifyContent: 'space-between',
    gap: 5,
    rowGap: 25,
    flexWrap: 'wrap',
    paddingHorizontal: '7%',
  },
});
