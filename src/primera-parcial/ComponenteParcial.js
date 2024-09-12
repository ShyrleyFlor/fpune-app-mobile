import React, { useState } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { ListItem, Input, Text } from '@rneui/themed';

const ComponenteParcial = ({ navigation }) => {
    // Estados para almacenar el texto ingresado
    const [materia, setMateria] = useState('');
    const [nota, setNota] = useState('');

    return (
        <ScrollView>
            {/* Contenedor para el logo */}
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <Image
                    source={require('../assets/politecnica.jpg')} // Ajusta la ruta según la ubicación de tu imagen
                    style={{ width: 100, height: 100 }} // Ajusta el tamaño del logo según sea necesario
                />
            </View>
            {/* Texto: Pantalla Principal */}
            <Text h3 style={{ textAlign: 'center', marginVertical: 20 }}>
                Bienvenido al examen
            </Text>

            {/* Campo de entrada para la materia */}
            <Input
                placeholder="Ingrese la materia"
                value={materia}
                onChangeText={setMateria} // Actualiza el estado con la materia ingresada
            />

            {/* Campo de entrada para la nota */}
            <Input
                placeholder="Ingrese la nota"
                value={nota}
                onChangeText={setNota} // Actualiza el estado con la nota ingresada
            />

            {/* ListItem que navega a Props02 y pasa la materia y estado */}
            <ListItem
                bottomDivider
                onPress={() => navigation.navigate('PropsParcial', { nombre: materia, nota: parseInt(nota), estado: false })}
            >
                <ListItem.Content>
                    <ListItem.Title>PropsParcial</ListItem.Title>
                </ListItem.Content>
            </ListItem>

            {/* Otros ListItem según sea necesario */}
            <ListItem bottomDivider onPress={() => navigation.navigate('AxiosParcial')}>
                <ListItem.Content>
                    <ListItem.Title>AxiosParcial</ListItem.Title>
                </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageParcial')}>
                <ListItem.Content>
                    <ListItem.Title>AsyncStorageParcial</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </ScrollView>
    );
};

export default ComponenteParcial;
