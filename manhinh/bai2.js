import React, { useRef, useState, useCallback } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { memo } from 'react';

const AnimatedFlatList = () => {
  const [viewableItems, setViewableItems] = useState([]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setViewableItems(viewableItems.map(item => item.key));
  });

  const data = Array.from({ length: 20 }, (_, i) => ({ key: i.toString(), title: `Item ${i}` }));

  const renderItem = useCallback(({ item }) => {
    return <AnimatedItem item={item} isVisible={viewableItems.includes(item.key)} />;
  }, [viewableItems]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

const AnimatedItem = memo(({ item, isVisible }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  if (isVisible) {
    opacity.value = withTiming(1, { duration: 500, easing: Easing.out(Easing.exp) });
    scale.value = withTiming(1, { duration: 500, easing: Easing.out(Easing.exp) });
  } else {
    opacity.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.exp) });
    scale.value = withTiming(0.5, { duration: 500, easing: Easing.out(Easing.exp) });
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99FFFF',
    marginVertical: 5,
  },
});

export default AnimatedFlatList;
