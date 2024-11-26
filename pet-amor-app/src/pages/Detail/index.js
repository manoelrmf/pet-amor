import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import logoImg from './../../assets/logo-pt.png';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles'

export default function Detail() {

    const navigation = useNavigation()
    const route = useRoute()
    const pet = route.params.pet

    const message = `Olá, estou entrando em contato pois gostaria de adotar o ${pet.name}`

    function navigateToBack() {
        navigation.goBack()
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do bichinho: ${pet.name}`,
            recipients: [pet.email],
            body: message,

        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${pet.whatsapp}&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logoImg} />
                <TouchableOpacity
                    onPress={navigateToBack}
                >
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.pet}>
                <Image source={{ uri: pet.image }}
                    style={styles.image}
                />

                <Text style={styles.petProperty}>{pet.name} de {pet.location}</Text>
                <Text style={styles.petValue}>{pet.description}</Text>


            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Sejo o herói!</Text>
                <Text style={styles.heroTitle}>Salve a vida desse bichinho.</Text>

                <Text style={styles.heroDescription}>
                    Entre em contato:
                </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}