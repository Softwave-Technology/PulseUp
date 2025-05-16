import { router } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');

export default function Onboarding() {
  const slides = [
    {
      id: 1,
      title: 'Welcome to PulseUp',
      description: 'Your personal fitness companion to help you stay motivated and healthy.',
      image: require('../../assets/onboarding/onboarding1_image.jpg'),
    },
    {
      id: 2,
      title: 'Personalized Workouts',
      description: 'Discover workouts tailored to your goals and fitness level.',
      image: require('../../assets/onboarding/onboarding2_image.jpg'),
    },
    {
      id: 3,
      title: 'Nutrition Made Simple',
      description: 'Get practical tips and meal ideas to fuel your body the right way.',
      image: require('../../assets/onboarding/onboarding3_image.jpg'),
    },
    {
      id: 4,
      title: 'Join the Community',
      description: 'Challenge yourself, track progress, and stay inspired with friends.',
      image: require('../../assets/onboarding/onboarding4_image.jpg'),
    },
  ];

  return (
    <Swiper loop={false} showsButtons={false} activeDotColor="red" dotColor="#ccc">
      {slides.map((slide, index) => (
        <View key={slide.id} style={styles.slide}>
          <ImageBackground source={slide.image} resizeMode="cover" style={styles.imageBackground}>
            {/* Dark overlay */}
            <View style={styles.overlay} />

            {/* Centered content */}
            <View style={styles.content}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>

            {/* Bottom button only on last slide */}
            {index === slides.length - 1 && (
              <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => router.replace('/login')} style={styles.button}>
                  <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
              </View>
            )}
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    height,
  },
  imageBackground: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
