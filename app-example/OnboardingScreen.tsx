import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const OnboardingScreen = (navigation: any ) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onboardingData = [
    {
      id: 1,
      title: 'Algorithm',
      description: 'Using unique results to match you precisely to ensure you meet match with bots',
      image: require('../assets/images/default.jpg'),
      buttonText: 'Create an account',
    },
    {
      id: 2,
      title: 'Matches',
      description: 'We match you with people that have a large array of similar interests',
      image: require('../assets/images/clear-night.jpg'),
      buttonText: 'Create an account',
    },
    {
      id: 3,
      title: 'Premium',
      description: 'Sign up today to enjoy the first month of premium benefits on us',
      image: require('../assets/images/default.jpg'),
      buttonText: 'Create an account',
    },
  ];

  const renderItem = ({ item }: { item: { image: any; title: string; description: string; buttonText: string } }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>{item.buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={onboardingData}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index: React.SetStateAction<number>) => setActiveSlide(index)}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === activeSlide && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: width - 40,
    height: width - 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FF4B6A',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signInText: {
    fontSize: 14,
    color: '#666',
  },
  signInLink: {
    color: '#FF4B6A',
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#FF4B6A',
    width: 20,
  },
});

export default OnboardingScreen;