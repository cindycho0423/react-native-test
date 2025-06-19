// import { View, Text } from 'react-native';

import "@/global.css";

// export default function HomeScreen() {
//   return (
//     <View className="dark:bg-black flex-1 items-center justify-center bg-white">
//       <Text className="text-xl font-bold text-blue-500">
//         Welcome to Nativewind!
//       </Text>
//     </View>
//   );
// }

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useColorScheme } from "@/lib/useColorScheme";
import { View } from "react-native";

export default function HomeScreen() {
  const { isDarkColorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
      <View className="flex-1 justify-center items-center p-6 gap-12">
        <View className="flex-row items-center gap-2">
          <Switch
            checked={isDarkColorScheme}
            onCheckedChange={toggleColorScheme}
            nativeID="dark-mode"
          />
          <Label
            nativeID="dark-mode"
            onPress={() => {
              toggleColorScheme();
            }}
          >
            Dark Mode
          </Label>
        </View>
      </View>
    </>
  );
}
