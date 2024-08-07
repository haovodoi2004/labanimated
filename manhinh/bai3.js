import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const ScrollHeader = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 150], [200, 70], Extrapolate.CLAMP),
    };
  });

  const animatedAvatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
      transform: [
        {
          scale: interpolate(scrollY.value, [0, 150], [1, 0.5], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
      transform: [
        {
          scale: interpolate(scrollY.value, [0, 150], [1, 0.8], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const animatedFixedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [0, 1], Extrapolate.CLAMP),
      transform: [
        {
          translateY: interpolate(scrollY.value, [0, 150], [-50, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const data = Array.from({ length: 20 }, (_, i) => `Item ${i}`);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.fixedText, animatedFixedTextStyle]}>
        Animation app
      </Animated.Text>
      <Animated.View style={[styles.header, animatedHeaderStyle]}>
        <Animated.Image
          source={{ uri: 'https://nhadepso.com/wp-content/uploads/2023/02/anh-sieu-nhan-gao_2.jpg' }}
          style={[styles.avatar, animatedAvatarStyle]}
        />
        <Animated.Text style={[styles.title, animatedTitleStyle]}>
          Welcome to app 
        </Animated.Text>
        <Animated.Text style={[styles.title, animatedTitleStyle]}>
           Nguyen Anh Hao
        </Animated.Text>
      </Animated.View>
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>PH45181</Text>
          </View>
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 200 }}
      />
    </View>
  );s
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF9900',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  fixedText: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    zIndex: 2,
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ScrollHeader;
