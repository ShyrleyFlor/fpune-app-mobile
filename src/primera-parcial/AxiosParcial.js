import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button } from 'react-native';
import Axios from 'axios';
import { Card, Text } from '@rneui/themed';

const AxiosParcial = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchEmail, setSearchEmail] = useState('');

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data); // Inicialmente muestra todos los datos
      })
      .catch(error => console.error(error));
  }, []);

  const filterEmails = () => {
    if (searchEmail === '') {
      setFilteredData(data); // Si no hay búsqueda, muestra todo
    } else {
      const filtered = data.filter(item =>
        item.email.toLowerCase().includes(searchEmail.toLowerCase())
      );
      setFilteredData(filtered); // Filtrar datos por correo electrónico
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Input para búsqueda por correo */}
      <TextInput
        placeholder="Buscar por correo electrónico"
        value={searchEmail}
        onChangeText={setSearchEmail}
        style={{
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          marginBottom: 10,
          color: 'black'
        }}
      />
      {/* Botón para ejecutar la búsqueda */}
      <Button title="Buscar" onPress={filterEmails} />

      {/* Lista para mostrar correos filtrados */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Text>Email: {item.email}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default AxiosParcial;
