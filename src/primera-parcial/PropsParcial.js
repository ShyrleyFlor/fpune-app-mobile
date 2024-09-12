// Props02.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial = ({ route }) => {
  const { nombre, nota} = route.params;
  
   // Determina el estado basado en la nota
   const estadoTexto = parseInt(nota, 10) < 2 ? 'Reprobado' : 'Aprobado';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En la materia: {nombre}, recibió la siguiente calificación: {nota}. Está {estadoTexto}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black'
  }
});

export default PropsParcial;
