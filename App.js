import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";


function HomeScreen({ navigation }) {

  const NARegion = {
    latitude: 33.1384176,
    longitude: -96.8760379,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  const SARegion = {
    latitude: -8.525238065150003, 
    longitude: -55.083973311938394,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  const Europe = {
    latitude: 51.979024203627894,
    longitude:  9.60352628522321,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const Asia = {
    latitude: 22.631112295514825, 
    longitude: 80.08026997226271,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const Africa = {
    latitude: -3.106129034728663, 
    longitude: 23.79786259692861,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const Australia = {
    latitude: -23.457937353767694,
    longitude:  134.46867849530815,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };



  return (

    <MapView style={{ flex: 0.9 }}
      initialRegion={NARegion}
    >

      <Marker coordinate={NARegion} onPress={() => navigation.navigate('NorthAmerica')} />
      <Marker coordinate={SARegion} onPress={() => navigation.navigate('SouthAmerica')}/>

      <Marker coordinate={Europe} onPress={() => navigation.navigate('Europe')}/>

      <Marker coordinate={Asia} onPress={() => navigation.navigate('Asia')}/>
      <Marker coordinate={Africa} onPress={() => navigation.navigate('Africa')}/>
      <Marker coordinate={Australia} onPress={() => navigation.navigate('Australia')}/>


    </MapView>






    /*<View style={styles.screenContainer}>
     <Button title="North America" onPress={() => navigation.navigate('NorthAmerica')} />
     <Button title="South America" onPress={() => navigation.navigate('SouthAmerica')}/>
     <Button title="Europe" onPress={() => navigation.navigate('Europe')}/>
     <Button title="Asia" onPress={() => navigation.navigate('Asia')}/>
     <Button title="Africa" onPress={() => navigation.navigate('Africa')}/>
     <Button title="Australia" onPress={() => navigation.navigate('Australia')}/>
   </View>*/

  );//
}

function NorthAmericaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {<Text>Endangered Species in North America</Text>}

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}



function SouthAmericaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>North America Screen</Text> */}

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

function EuropeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>North America Screen</Text> */}

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

function AsiaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>North America Screen</Text> */}

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

function AfricaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>North America Screen</Text> */}

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

function AustraliaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>North America Screen</Text> */}

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NorthAmerica" component={NorthAmericaScreen} />
        <Stack.Screen name="SouthAmerica" component={SouthAmericaScreen} />
        <Stack.Screen name="Europe" component={EuropeScreen} />
        <Stack.Screen name="Asia" component={AsiaScreen} />
        <Stack.Screen name="Africa" component={AfricaScreen} />
        <Stack.Screen name="Australia" component={AustraliaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    padding: 1
  }
});

export default App;
