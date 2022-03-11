import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation })  {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    // </View>

     <View style={styles.screenContainer}>
      <Button title="North America" onPress={() => navigation.navigate('NorthAmerica')} />
      <Button title="South America" onPress={() => navigation.navigate('SouthAmerica')}/>
      <Button title="Europe" onPress={() => navigation.navigate('Europe')}/>
      <Button title="Asia" onPress={() => navigation.navigate('Asia')}/>
      <Button title="Africa" onPress={() => navigation.navigate('Africa')}/>
      <Button title="Australia" onPress={() => navigation.navigate('Australia')}/>
    </View>
    

    
  );
}

function NorthAmericaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      { <Text>Endangered Species in North America</Text> }

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
