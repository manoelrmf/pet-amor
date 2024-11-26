import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from './../../assets/logo-pt.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Pets() {
    const [loading, setloading] = useState(false)
    const navigation = useNavigation();

    const items = [
        {
            id: 1,
            name: 'Chico',
            description: 'Oi, eu sou o Chico, um gatinho cheio de amor e pronto para encher sua vida de alegria!',
            age: '1 ano',
            location: 'Av. Senador Carlos Jereissati, Serrinha, Fortaleza - CE',
            image: 'https://meusanimais.com.br/wp-content/uploads/2016/08/adotar-um-gato-de-rua.jpg',
        },
        {
            id: 2,
            name: 'Bolt',
            description: 'Meu nome é Bolt, sou brincalhão, carinhoso e estou esperando por um lar para chamar de meu.',
            age: '2 anos',
            location: 'R. Des. Lauro Nogueira, Papicu, Fortaleza - CE',
            image: 'https://www.gcnoticias.com.br/fotos/mega_noticias_fotos/160/mid/166.jpg',
        }
    ];

    function navigateToDetail(pet) {
        navigation.navigate('detail', { pet })
    }

    async function loadpets() {
        if (loading) {
            return;
        }

        setloading(true)
        setPage(page + 1)
        setloading(false)

    }

    useEffect(() => {
        loadpets()
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{items.length} pets</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo ao Pet Amor!</Text>
            <Text style={styles.description}>
                Cada pet aqui tem uma história esperando por um final feliz. 💕
            </Text>
            <FlatList
                style={styles.petsList}
                data={items}
                keyExtractor={pet => String(pet.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadpets}
                onEndReachedThreshold={0.2}
                renderItem={({ item: pet }) => (
                    <View style={styles.pet}>

                        <Image source={{ uri: pet.image }}
                            style={styles.image}
                        />

                        <Text style={styles.petValue}>{pet.description}</Text>

                        <Text style={styles.petProperty}>Localização:</Text>
                        <Text style={styles.petValue}>{pet.location}</Text>

                        <View style={styles.line} />

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(pet)}
                        >

                            <Text style={styles.detailsButtonText}>Entrar em contato</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>

    )
}