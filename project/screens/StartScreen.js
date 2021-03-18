import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Ma Liste</Header>
    <Paragraph>
      Le meilleur moyen de s'en souvenir c'est de l'écrire
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Connexion
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')} color="#FFFFFF"    >
      S'inscrire
    </Button>
  </Background>
)

export default StartScreen
