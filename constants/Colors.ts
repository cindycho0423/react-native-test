/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)",
    border: "hsl(240 5.9% 90%)",
    card: "hsl(0 0% 100%)",
    notification: "hsl(0 84.2% 60.2%)",
    primary: "hsl(240 5.9% 10%)",
    text: "hsl(240 10% 3.9%)",
  },
  dark: {
    background: "hsl(240 10% 3.9%)",
    border: "hsl(240 3.7% 15.9%)",
    card: "hsl(240 10% 3.9%)",
    notification: "hsl(0 72% 51%)",
    primary: "hsl(0 0% 98%)",
    text: "hsl(0 0% 98%)",
  },
};
