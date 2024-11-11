import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  StatusBar,
  ViewToken,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const slides = [
  {
    id: '1',
    title: 'Algorithm',
    description: 'Users going through a vetting process to ensure you never match with bots.',
    image: require('../../assets/images/clear-night.jpg'), // Replace with your own images
  },
  {
    id: '2',
    title: 'Matches',
    description: 'We match you with people that have a large array of similar interests.',
    image: require('../../assets/images/default.jpg'),
  },
  {
    id: '3',
    title: 'Premium',
    description: 'Sign up today and enjoy the first month of premium benefits on us.',
    image: require('../../assets/images/cloudy.jpg'),
  },
];

const ImageSlide = ({ image }) => {
  return (
    <Image
      source={image}
      style={styles.image}
    />
  );
};

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
    if (viewableItems[0]?.index !== undefined) {
      setCurrentIndex(viewableItems[0].index as number);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderItem = ({ item }: { item: { id: string; image: any; title: string; description: string } }) => {
    return (
      <View style={styles.slide}>
        <ImageSlide image={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const Pagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 20, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Pagination />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width,
    height,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 20,
    marginTop: height * 0.1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4B6A',
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    height: 40,
    position: 'absolute',
    bottom: height * 0.3,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4B6A',
    marginTop: 14,
    marginBottom: 24,
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#FF4B6A',
    padding: 15,
    borderRadius: 30,
    width: width * 0.8,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signInText: {
    color: '#666',
  },
  signInLink: {
    color: '#FF4B6A',
    fontWeight: '600',
  },
});

export default OnboardingScreen;
