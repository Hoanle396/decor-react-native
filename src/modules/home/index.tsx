import CategoryPost from '@/components/CategoryPost';
import Header from '@/components/Header/Header';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
const score = 33;

const Home: FCC<{}> = () => {
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
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Hoàn Lê</Text>
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
          <CategoryPost
            items={[
              {
                name: 'Đèn chùm pha lê vương miện',
                image:
                  'https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg',
              },
              {
                name: '5 cành lau sậy khô trang trí decor phòng',
                image:
                  'https://t3.ftcdn.net/jpg/01/24/43/18/240_F_124431883_b7rtANYu3KAujBnCcSmhoTBG16bVj5oA.jpg',
              },
              {
                name: 'Hoa cúc họa mi decor phòng siêu xinh ',
                image:
                  'https://t3.ftcdn.net/jpg/02/05/70/38/240_F_205703808_G2g2GEVLICIgY4brtk9rbtTrM4ECU9Hb.jpg',
              },
            ]}
            name="New post"
            seeMore="detail"
          />
          <CategoryPost
            items={[
              {
                name: 'Đèn chùm pha lê vương miện',
                image:
                  'https://t3.ftcdn.net/jpg/06/21/01/48/240_F_621014843_d1cVw0C4ANf1RUNyqSFUTMdoDFenxDWG.jpg',
              },
              {
                name: '5 cành lau sậy khô trang trí decor phòng',
                image:
                  'https://t3.ftcdn.net/jpg/01/05/15/66/240_F_105156652_kR4xiR42PYzrW8Fsm5xOqVx8Iuyw1wHc.jpg',
              },
              {
                name: 'Hoa cúc họa mi decor phòng siêu xinh ',
                image:
                  'https://t4.ftcdn.net/jpg/02/26/89/17/240_F_226891786_euuJrBPMlXnilY4cF1DtXa011igAm7nG.jpg',
              },
              {
                name: 'Hoa cúc họa mi decor phòng siêu xinh 1',
                image:
                  'https://t3.ftcdn.net/jpg/02/08/98/28/240_F_208982824_JytYAbfZEx2F1BHnzqdtcioRQvOpdEGm.jpg',
              },
            ]}
            name="Decorating bedrooms"
            seeMore="detail"
          />
          <CategoryPost
            items={[
              {
                name: 'Đèn chùm pha lê vương miện',
                image:
                  'https://t4.ftcdn.net/jpg/06/50/99/17/240_F_650991787_BAcOLgZiZkBGXK5vSLb0m3A7JdKVIYiO.jpg',
              },
              {
                name: '5 cành lau sậy khô trang trí decor phòng',
                image:
                  'https://t4.ftcdn.net/jpg/06/29/84/79/240_F_629847926_uebKBnvFUnk3CA8WJNX7dvA6yQz3ymsi.jpg',
              },
              {
                name: 'Hoa cúc họa mi decor phòng siêu xinh ',
                image:
                  'https://t3.ftcdn.net/jpg/02/08/98/28/240_F_208982824_JytYAbfZEx2F1BHnzqdtcioRQvOpdEGm.jpg',
              },
            ]}
            name="Attention"
            seeMore="detail"
          />
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Feed back</Text>
          </View>
        </View>
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
