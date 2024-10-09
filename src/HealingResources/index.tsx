import { Button, View } from 'react-native';

export default function HealingResources() {
  return (
    <View>
      <Button
        title="Hope Healing Guide"
        onPress={() => console.log('does this work')}
      />
      <Button
        title="Theme Healing Resources"
        onPress={() => console.log('does this work')}
      />
    </View>
  );
}
