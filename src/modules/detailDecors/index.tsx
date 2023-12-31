import { useUser } from '@/apis/auth';
import {
  postCommentsById,
  useCommentsByPostId,
  usePostById,
} from '@/apis/post';
import Header from '@/components/Header/Header';
import TextInput from '@/components/TextField/TextInput';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { toast } from '@backpackapp-io/react-native-toast';
import { Feather } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Skeleton } from 'moti/skeleton';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useMutation } from 'react-query';

type Props = {
  navigation: NativeStackNavigationProp<RootStackRoute, 'detailRooms'>;
  route: RouteProp<{ params: { id: string } }, 'params'>;
};

const DetailRooms: FCC<Props> = ({ route, navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [text, setText] = useState('');
  const { width: windowWidth } = useWindowDimensions();

  const { user } = useUser();

  const { id } = route.params;
  const { data, isLoading } = usePostById(id);
  const {
    data: comments,
    refetch,
    isLoading: isLoadingComments,
  } = useCommentsByPostId(id);

  const onBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  const { mutate } = useMutation(postCommentsById, {
    onSuccess: () => {
      toast.success('Your comments have been received', {
        duration: 3000,
        styles: {
          view: {
            backgroundColor: color.background.default,
          },
          text: {
            color: color.success.main,
          },
        },
        icon: '✔',
      });
      setText('');
      refetch();
    },
  });
  const onComment = () => {
    if (!text) {
      return;
    }
    mutate({ id, text });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <KeyboardAwareScrollView
          extraScrollHeight={48}
          contentContainerStyle={{ backgroundColor: color.white, flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Header leftBtnVariant="back" onPressLeftButton={onBack} />
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
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
                {!isLoading &&
                  data?.images.map((image, imageIndex) => {
                    return (
                      <View
                        style={{ width: windowWidth, height: 250 }}
                        key={imageIndex}
                      >
                        <ImageBackground
                          source={{ uri: image.url }}
                          style={styles.card}
                        />
                      </View>
                    );
                  })}
                {isLoading && (
                  <>
                    <View style={[styles.loadingBox, { width: windowWidth }]}>
                      <Skeleton
                        height={250}
                        width={windowWidth - 32}
                        radius={20}
                        colorMode="light"
                      />
                    </View>
                    <View style={[styles.loadingBox, { width: windowWidth }]}>
                      <Skeleton
                        height={250}
                        width={windowWidth - 32}
                        radius={20}
                        colorMode="light"
                      />
                    </View>
                    <View style={[styles.loadingBox, { width: windowWidth }]}>
                      <Skeleton
                        height={250}
                        width={windowWidth - 32}
                        radius={20}
                        colorMode="light"
                      />
                    </View>
                  </>
                )}
              </ScrollView>
              <View style={styles.indicatorContainer}>
                {data?.images.map((image, imageIndex) => {
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
                {isLoading ? (
                  <Skeleton
                    width={windowWidth - 32}
                    height={24}
                    colorMode="light"
                  />
                ) : (
                  <Text style={styles.title}>{data?.name}</Text>
                )}
              </View>
            </View>
            <View style={styles.flexRow}>
              {isLoading ? (
                <Skeleton
                  width={windowWidth - 32}
                  height={10}
                  colorMode="light"
                />
              ) : (
                <View style={styles.under} />
              )}
            </View>
            <View style={styles.descriptionWrapper}>
              {isLoading ? (
                <>
                  <Skeleton width={150} height={24} colorMode="light" />
                  <Skeleton
                    width={windowWidth - 32}
                    height={24}
                    colorMode="light"
                  />
                  <Skeleton
                    width={windowWidth - 32}
                    height={24}
                    colorMode="light"
                  />
                  <Skeleton
                    width={windowWidth - 32}
                    height={24}
                    colorMode="light"
                  />
                  <Skeleton
                    width={windowWidth - 32}
                    height={24}
                    colorMode="light"
                  />
                </>
              ) : (
                <>
                  <Text style={styles.description}>Description</Text>
                  <Text style={styles.descText}>{data?.description}</Text>
                </>
              )}
            </View>
            {isLoading ? (
              <View style={styles.descriptionWrapper}>
                <Skeleton width={150} height={24} colorMode="light" />
                <Skeleton
                  width={windowWidth - 32}
                  height={56}
                  colorMode="light"
                />
              </View>
            ) : (
              <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>Comment</Text>
                {user && user?.data && (
                  <TextInput
                    label="Enter your comment"
                    placeholder="Let's me know what you are thinking"
                    active
                    style={{ width: '100%' }}
                    value={text}
                    onChangeText={setText}
                    rightIcon={
                      <TouchableOpacity onPress={onComment}>
                        <Feather name="send" size={28} color={color.primary} />
                      </TouchableOpacity>
                    }
                  />
                )}
              </View>
            )}
            <View
              style={[
                styles.descriptionWrapper,
                { marginTop: 10, display: 'flex', gap: 32 },
              ]}
            >
              {(isLoading || isLoadingComments) && (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Skeleton
                      width={40}
                      height={40}
                      radius={20}
                      colorMode="light"
                    />
                    <View style={{ flex: 1, gap: 3 }}>
                      <Text style={styles.userInfo}>
                        <Skeleton width={150} height={24} colorMode="light" />
                      </Text>
                      <Skeleton width={200} height={24} colorMode="light" />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Skeleton
                      width={40}
                      height={40}
                      radius={20}
                      colorMode="light"
                    />
                    <View style={{ flex: 1, gap: 3 }}>
                      <Text style={styles.userInfo}>
                        <Skeleton width={150} height={24} colorMode="light" />
                      </Text>
                      <Skeleton width={200} height={24} colorMode="light" />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Skeleton
                      width={40}
                      height={40}
                      radius={20}
                      colorMode="light"
                    />
                    <View style={{ flex: 1, gap: 3 }}>
                      <Text style={styles.userInfo}>
                        <Skeleton width={150} height={24} colorMode="light" />
                      </Text>
                      <Skeleton width={200} height={24} colorMode="light" />
                    </View>
                  </View>
                </>
              )}
              {!isLoadingComments &&
                !isLoading &&
                comments &&
                comments?.data.map(item => (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Image
                      source={{ uri: item.createdBy.avatar }}
                      width={40}
                      height={40}
                      borderRadius={25}
                    />
                    <View style={{ flex: 1, gap: 3 }}>
                      <Text style={styles.userInfo}>
                        {item.createdBy.fullname} -{' '}
                        <Text style={{ fontSize: 10, fontWeight: '400' }}>
                          {new Date(item.createdAt).toDateString()}
                        </Text>
                      </Text>
                      <Text>{item.text}</Text>
                    </View>
                  </View>
                ))}
            </View>
            <View style={{ height: 60 }} />
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailRooms;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white,
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
  loadingBox: {
    height: 250,
    alignItems: 'center',
    flexDirection: 'row',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 16,
    fontWeight: '500',
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
    paddingHorizontal: 20,
    width: '100%',
    gap: 8,
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
