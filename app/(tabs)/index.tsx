import { View, Text } from 'react-native';

import '@/global.css';

export default function HomeScreen() {
  return (
    <View className="dark:bg-black flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}