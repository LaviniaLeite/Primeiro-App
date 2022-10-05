import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Ifal from './scr/img/ifal.jpg';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image 
          source={Ifal}
      />
      <Button 
        title="Avançar"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});