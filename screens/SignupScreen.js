import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from "../navigation/AuthProvider";
const SignupScreen = ({navigation}) => {
  const [email, setEmail] =useState();
  const [password, setPassword] =useState();
  const [confirmPassword, setConfirmPassword] =useState();

  const {register, login, fbLogin, guest} = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text style={styles.text }>Create An Account</Text>
        <FormInput 
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText ="Email"
          iconType= 'user'
          keyboardType="email-address"
          autoCapitalize='none'
          autoCorrect={false}
        />
        <FormInput 
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText ="Password"
          iconType= 'lock'
          secureTextEntry={true}
        />
        <FormInput 
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText ="Confirm Password"
          iconType= 'lock'
          secureTextEntry={true}
        />
        <FormButton 
          buttonTitle = 'Sign Up'
          onPress={() => register(email, password)}
        />
        <View style ={styles.textPrivate}>
          <Text style ={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
          <TouchableOpacity >
            <Text style ={[styles.color_textPrivate,{color: '#e88832'}]}>Terms of Services</Text>
          </TouchableOpacity>
          <Text style ={styles.color_textPrivate}> and </Text>
          <Text style ={[styles.color_textPrivate,{color: '#e88832'}]}>Privacy Policy</Text>
        </View>
        <SocialButton
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => fbLogiin()}
      />
       <SocialButton
        buttonTitle="Sign Up as Guest"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => guest()}
      />
      
      </View>
    );
  };

  export default SignupScreen;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
  });
