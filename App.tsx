import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,


} from 'react-native';
//import BasicComponents from "./src/components/BasicComponents";
//import TextInANest from "./src/components/TextComponents";
//import TextInputExample from "./src/components/TextInputComponents";
//import DisplayAnImage from "./src/components/ImageComponents";
//import FlatListExample from "./src/components/FlatListComponents";
//import Prensable from "./src/components/PressableComponents";
//import UseStateComponents from "./src/components/UseState";
//import ListmateriaComponents from "./src/components/Calificaciones";
//import ListalumnosComponents from "./src/components/ListaAlumnos";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Componente01 from "./src/simulacro_parcial/Componente01";
import Props02 from "./src/simulacro_parcial/Props02";
import Axios03 from "./src/simulacro_parcial/Axios03";
import AsyncStorage04 from "./src/simulacro_parcial/AsyncStorage04";

const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <SafeAreaView style={styles.safeArea}>

      {/*<BasicComponents></BasicComponents>
     <TextInANest></TextInANest>
     <TextInputExample></TextInputExample>
     <DisplayAnImage></DisplayAnImage>
     <FlatListExample></FlatListExample>
     <Prensable></Prensable>
     <UseStateComponents></UseStateComponents>
     <ListmateriaComponents></ListmateriaComponents>
     <ListalumnosComponents></ListalumnosComponents>
     */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Componente01">
          <Stack.Screen name="Componente01" component={Componente01} />
          <Stack.Screen name="Props02" component={Props02} />
          <Stack.Screen name="Axios03" component={Axios03} />
          <Stack.Screen name="AsyncStorage04" component={AsyncStorage04} />


        </Stack.Navigator>
      </NavigationContainer>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Asegúrate de que el fondo sea visible
  },
});


export default App;