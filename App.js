import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image, 
  TouchableOpacity,
  TextInput

} from 'react-native';
import { styles } from "./styles";

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
          <Text style={styles.h1} >Sistema de Login</Text>
          <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo</Text>
          
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput 
            style={styles.inputField}
            placeholder="Digite seu email"
            />
          </View>
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput 
            style={styles.inputField}
            placeholder="*******"
            secureTextEntry
            />
          </View>
          <View style={styles.aditionals}>
            <TouchableOpacity style={styles.forgotBtnArea}>
              <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
         

          <View style={styles.signUpArea}>
            <Text style={styles.signUpText}>Não tem uma conta? Cadastre-se</Text>
              
          </View>
          <View  style={styles.footerArea}>
            
          </View>
        </View>
    </ScrollView>
  );
}

export default App