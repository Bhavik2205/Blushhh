// /**
//  * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
//  * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
//  */

// const tintColorLight = '#0a7ea4';
// const tintColorDark = '#fff';

// export const Colors = {
//   light: {
//     text: '#11181C',
//     background: '#fff',
//     tint: tintColorLight,
//     icon: '#687076',
//     tabIconDefault: '#687076',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#ECEDEE',
//     background: '#151718',
//     tint: tintColorDark,
//     icon: '#9BA1A6',
//     tabIconDefault: '#9BA1A6',
//     tabIconSelected: tintColorDark,
//   },
// };

const tintColorLightMale = '#2F4858';
const tintColorLightFemale = '#FF4B6A';
const tintColorLightDefault = '#5D64F7';

const tintColorDarkMale = '#2F4858';
const tintColorDarkFemale = '#FF4B6A';
const tintColorDarkDefault = '#5D64F7';

export const Colors = {
  light: {
    male: {
      text: '#333333',
      background: '#FFFFFF',
      tint: tintColorLightMale,
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: tintColorLightMale,
      primary: '#2F4858',
      secondary: '#86B3D1',
      accent: '#D0E4F5',
      border: '#CCCCCC',
      error: '#D32F2F',
      warning: '#FFA726',
      success: '#4CAF50',
      info: '#039BE5',
    },
    female: {
      text: '#333333',
      background: '#FFFFFF',
      tint: tintColorLightFemale,
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: tintColorLightFemale,
      primary: '#FF4B6A',
      secondary: '#FFC2D1',
      accent: '#FFEFEF',
      border: '#CCCCCC',
      error: '#D32F2F',
      warning: '#FFA726',
      success: '#4CAF50',
      info: '#039BE5',
    },
    default: {
      text: '#333333',
      background: '#FFFFFF',
      tint: tintColorLightDefault,
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: tintColorLightDefault,
      primary: '#5D64F7',
      secondary: '#95A3F5',
      accent: '#C6CDFB',
      border: '#CCCCCC',
      error: '#D32F2F',
      warning: '#FFA726',
      success: '#4CAF50',
      info: '#039BE5',
    },
  },
  dark: {
    male: {
      text: '#ECEDEE',
      background: '#151718',
      tint: tintColorDarkMale,
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: tintColorDarkMale,
      primary: '#2F4858',
      secondary: '#5A8EB2',
      accent: '#8EAFC4',
      border: '#444444',
      error: '#EF5350',
      warning: '#FFA726',
      success: '#81C784',
      info: '#64B5F6',
    },
    female: {
      text: '#ECEDEE',
      background: '#151718',
      tint: tintColorDarkFemale,
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: tintColorDarkFemale,
      primary: '#FF4B6A',
      secondary: '#C93759',
      accent: '#8D2D49',
      border: '#444444',
      error: '#EF5350',
      warning: '#FFA726',
      success: '#81C784',
      info: '#64B5F6',
    },
    default: {
      text: '#ECEDEE',
      background: '#151718',
      tint: tintColorDarkDefault,
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: tintColorDarkDefault,
      primary: '#5D64F7',
      secondary: '#7E86D1',
      accent: '#A5B0E8',
      border: '#444444',
      error: '#EF5350',
      warning: '#FFA726',
      success: '#81C784',
      info: '#64B5F6',
    },
  },
};