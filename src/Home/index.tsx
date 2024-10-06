import { Button, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>hello</Text>
      <Button
        title="Healing Resources"
        onPress={() => navigation.navigate('Healing Resources')}
      />
      <Button
        title="Legal Rights"
        onPress={() => navigation.navigate('Legal Rights')}
      />
      <Button
        title="Seek Help"
        onPress={() => navigation.navigate('Seek Help')}
      />
    </View>
  );
}
