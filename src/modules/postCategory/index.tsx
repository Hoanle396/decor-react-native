import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

const PostCategory: FCC<{}> = () => {
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
        <View style={styles.filter}>
          <Text style={styles.text}>Category</Text>
          <AntDesign name="down" size={16} color="black" />
        </View>
        <View style={styles.filter}>
          <Text style={styles.text}>Date time</Text>
          <AntDesign name="down" size={16} color="black" />
        </View>
        <View style={styles.filter}>
          <Text style={styles.text}>zise</Text>
          <AntDesign name="down" size={16} color="black" />
        </View>
        <Feather name="filter" size={24} color="black" />
      </View>
      <ScrollView>
        <View>
          <Image
            style={styles.imageProduction}
            source={require('@/assets/product.png')}
            alt="prodution"
          />
        </View>
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
    justifyContent: 'space-between',
    gap: 5,
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
  imageProduction: {
    width: 156,
    height: 198,
    justifyContent: 'flex-start',
  },
  filter: {
    flexDirection: 'row',
    gap: 3,
    alignContent: 'center',
  },
});
