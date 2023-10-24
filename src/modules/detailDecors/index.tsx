import { color } from '@/constants/color';
import { FCC } from '@/types';
import React, { useRef, useState } from 'react';
import Header from '@/components/Header/Header';
import TextInput from '@/components/TextField/TextInput';
import {
  Animated,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
const images = [
  'https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683431.jpg?t=st=1697963175~exp=1697966775~hmac=49a35ac53bae25934b67d94e9a56da68b49df6385f16c6735994275c66ca0717&w=1380',
  'https://img.freepik.com/free-photo/luxury-modern-bedroom-with-comfortable-double-bed-generated-by-ai_24640-87758.jpg?t=st=1697963227~exp=1697966827~hmac=ae4c8ef44689763ded6eb241c6b72cf5b50c4ef915ab089b06e1f163bb2dc79f&w=1380',
  'https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-shelf_105762-2077.jpg?w=1060&t=st=1697963258~exp=1697963858~hmac=e6f5d4150df7dc615c024b19aa4380cef7218443b87008276f84cfb6e6f2c69f',
];

const DetailRooms: FCC<{}> = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [text, setText] = useState('');
  const { width: windowWidth } = useWindowDimensions();

  return (
    <>
      <Header leftBtnVariant="back" onPressLeftButton={() => {}} />
      <SafeAreaView style={styles.root}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              { useNativeDriver: false },
            )}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{ width: windowWidth, height: 250 }}
                  key={imageIndex}
                >
                  <ImageBackground
                    source={{ uri: image }}
                    style={styles.card}
                  />
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [11, 23, 11],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Decor Bedroom</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.under} />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            You also lose the ability to set up a default font for an entire
            subtree. Meanwhile, fontFamily only accepts a single font name,
            which is different from font-family in CSS
          </Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Comment</Text>
        </View>
        <TextInput
          label="Add your comment"
          placeholder="Let's me know what you are thinking"
          value={text}
          onChangeText={setText}
        />
      </SafeAreaView>
    </>
  );
};

export default DetailRooms;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 58,
    paddingHorizontal: '5%',
  },
  button: {
    width: 302,
  },
  input: {
    width: '100%',
    flex: 0.92,
    fontSize: 15,
    fontWeight: '700',
    color: color.text.dark,
  },
  body: {
    width: '100%',
    display: 'flex',
    gap: 24,
    paddingHorizontal: '1%',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 11,
    width: 11,
    borderRadius: 10,
    backgroundColor: color.primary,
    marginHorizontal: 10,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 171,
    top: 30,
  },
  under: {
    flex: 1,
    height: 1.5,
    backgroundColor: color.text.dark,
    marginHorizontal: '20%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginLeft: 25,
  },
  details: {
    backgroundColor: color.white,
    width: '100%',
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    top: 20,
  },
  descriptionWrapper: {
    marginHorizontal: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: color.black,
  },
  descText: {
    fontWeight: '300',
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 50,
    marginTop: 10,
  },
});
