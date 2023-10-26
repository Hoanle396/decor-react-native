import { useCategory } from '@/apis/post';
import { CategoryPost, CategoryPostLoading } from '@/components/CategoryPost';
import Header from '@/components/Header/Header';
import { color } from '@/constants/color';
import { useAuthStore } from '@/redux';
import { FCC } from '@/types';
import React from 'react';

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
const score = 33;

const Home: FCC<{}> = () => {
  const { data, isLoading } = useCategory();
  const { fullname } = useAuthStore(state => state);
  return (
    <>
      <Header
        title={
          <Image
            style={styles.image}
            source={require('@/assets/logo.png')}
            alt="Logo Image"
          />
        }
        height={100}
        leftBtnVariant="notification"
        rightBtnVariant="search"
        onPressLeftButton={() => {}}
        onPressRightButton={() => {}}
      />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.boxHello}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 20, fontWeight: '300' }}>Hello,</Text>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>{fullname}</Text>
          </View>
          <View style={styles.boxScore}>
            <Text style={styles.silverMember}>SILVER MEMBER</Text>
            <Text style={styles.textScore}>{score}</Text>
            <View style={styles.scoreRange}>
              <View style={[styles.scoreReal, { width: score }]} />
            </View>
            <Text style={styles.pointToUp}>
              {100 - score} POINTS TO UPGRADE LEVEL
            </Text>
          </View>
        </View>
        <View />
        <View style={styles.container}>
          {isLoading &&
            Array.from({ length: 3 })
              .fill(0)
              .map((_, i) => <CategoryPostLoading key={i} />)}
          {data?.data &&
            data?.data.map(item => (
              <CategoryPost
                key={item.id}
                category={item}
                name={item.name}
                onSeeMore={() => {}}
              />
            ))}
        </View>
        {/* <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Feed back</Text>
          </View>
        </View> */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    marginTop: 32,
    gap: 32,
  },
  root: {
    flex: 1,
    backgroundColor: color.white,
    width: '100%',
    paddingHorizontal: '7%',
  },
  boxHello: {
    display: 'flex',
    width: '100%',
    gap: 20,
  },
  score: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 77,
    width: 177,
  },
  boxScore: {
    backgroundColor: color.background.secondary,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    gap: 5,
  },
  silverMember: {
    fontWeight: '400',
    fontSize: 9,
    color: color.text.dark,
  },
  pointToUp: {
    fontWeight: '700',
    fontSize: 9,
    color: color.text.dark,
  },
  textScore: {
    color: color.primary,
    fontWeight: '700',
    fontSize: 26,
  },
  scoreRange: {
    position: 'relative',
    width: 100,
    height: 14,
    backgroundColor: color.white,
    borderRadius: 7,
  },
  scoreReal: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    height: 14,
    backgroundColor: color.primary,
    borderRadius: 7,
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
});
