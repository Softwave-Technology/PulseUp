import { StatusBar, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-[#232323]">
      <StatusBar barStyle={'light-content'} />
    </View>
  );
}
