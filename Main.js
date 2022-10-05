import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Lala from './scr/img/Lala.png';

export default function Main() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={Lala}      
      />
      <Text>Aluna: Lavínia Leite da Silva</Text>
      <Text>Matrícula: 2019322657</Text>
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor:'black',
  }
});