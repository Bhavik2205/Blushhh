// // OnboardingScreen.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '../constants/Colors';
// import { getItem, setItem } from 'expo-secure-store';
// import ExitConfirmationModal from '@/components/ExitConfirmationModal';
import { useFocusEffect } from '@react-navigation/native';

interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    title: 'Find Your Perfect Match',
    description: 'Our advanced matching algorithm helps you connect with compatible people.',
    // icon: 'heart-outline',
    image: require('../assets/images/default.jpg'),
  },
  {
    id: '2',
    title: 'Safe & Secure',
    description: 'Your privacy and security are our top priority. Chat safely with verified users.',
    // icon: 'shield-checkmark-outline',
    image: require('../assets/images/default.jpg'),
  },
  {
    id: '3',
    title: 'Start Chatting',
    description: 'Begin meaningful conversations and build genuine connections.',
    // icon: 'chatbubbles-outline',
    image: require('../assets/images/default.jpg'),
  },
];

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExitModalVisible, setExitModalVisible] = useState(false);
  const colorScheme = useColorScheme();
  console.log({ colorScheme });
  const colors = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const flatListRef = useRef<FlatList>(null);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    skipButton: {
      position: 'absolute',
      top: 50,
      right: 20,
      zIndex: 1,
    },
    skipText: {
      color: '#666',
      fontSize: 16,
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    iconContainer: {
      width: 150,
      height: 150,
      backgroundColor: 'rgba(255, 140, 0, 0.1)',
      borderRadius: 75,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 0,
      marginTop: 100,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      marginTop: 160,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      paddingHorizontal: 30,
    },
    pagination: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginBottom: 20,
      backgroundColor: '#ccc',
      marginHorizontal: 5,
    },
    paginationDotActive: {
      backgroundColor: '#FF8C00',
    },
    nextButton: {
      position: 'absolute',
      bottom: 50,
      width: '90%',
      backgroundColor: '#FF8C00',
      borderRadius: 25,
      paddingVertical: 15,
      alignItems: 'center',
      alignSelf: 'center',
    },
    nextButtonText: {
      color: colors.tint,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  const buttonText = currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next';

  const completeOnboarding = async () => {
    try {
    //   setItem('hasLaunched', 'true');
    //   router.replace('/LoginScreen'); // Navigate to main app
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };


  const handleNext = async () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = async () => {
    completeOnboarding();
  };

  // Add back button handler
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setExitModalVisible(true); // Show modal when back is pressed
        return true; // Prevent default back action
      };

      // Add event listener for back press
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      // Cleanup listener on screen unfocus
      return () => backHandler.remove();
    }, [])
  );

  const handleExitApp = () => {
    setExitModalVisible(false);
    BackHandler.exitApp();
  };

  const renderItem = ({ item }: { item: OnboardingItem }) => {
    return (
      <View style={[styles.slide, { width }]}>
        <View style={styles.iconContainer}>
          {/* <Ionicons name={item.icon as any} size={80} color="#FF8C00" /> */}
          <Image source={item.image } style={{ width: 250, height: 450 }} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={handleSkip}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.pagination}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>
          {buttonText}
        </Text>
      </TouchableOpacity>
      {/* <ExitConfirmationModal
        visible={isExitModalVisible}
        onConfirmExit={handleExitApp}
        onCancelExit={() => setExitModalVisible(false)}
      /> */}
    </SafeAreaView>
  );

}