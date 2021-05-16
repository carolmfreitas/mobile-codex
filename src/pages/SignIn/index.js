import React, { useEffect, useState, useRef } from 'react';
import {
  ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import App from '../App';
import Styles from './styles.android';
import { postSignIn, setStorageToken } from '../../services/AuthService';

export default function SignIn({ error }) {
  const [success, setSuccess] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState();
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [emailOnBlur, setEmailOnBlur] = useState(false);
  const [email, setEmail] = useState('');
  const [signinError, setSigninError] = useState(error);
  const [passwordInvalid, setPasswordInvalid] = useState();
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [passwordOnBlur, setPasswordOnBlur] = useState(false);
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(false);

  const onChangeEmail = (txtEmail) => {
    setEmailInvalid();
    setSigninError();
    setEmail(txtEmail);
  };

  const onChangePassword = (txtPassword) => {
    setPasswordInvalid();
    setSigninError();
    setPassword(txtPassword);
  };

  const emailFocus = useRef(null);
  useEffect(() => {
    if (emailFocus && emailFocus.current) {
      emailFocus.current.focus();
    }
  }, []);

  const onEye = () => {
    setEye(!eye);
  };

  const onSignIn = () => {
    if (!email.match(/\S+@\S+\.\S+/)) {
      setEmailInvalid('Insira um email válido');
    } else if (password === '') {
      setPasswordInvalid('Insira uma senha');
    } else {
      postSignIn({ email, password }).then((res) => {
        if (res.token) {
          setStorageToken(res.token);
          setSuccess(true);
          ToastAndroid.show('Sign In Success', ToastAndroid.SHORT);
        } else {
          setSigninError(res.signin_error);
        }
      }).catch((err) => console.log(err));
    }
  };

  if (success) {
    return <App />;
  }
  return (
    <ScrollView style={Styles.scroll_view} keyboardShouldPersistTaps="handled">
      <View style={Styles.card}>
        <View style={Styles.card_header}>
          <Text style={Styles.card_header_text}>
            Task
            {'\n'}
            Management
          </Text>
        </View>
        <View style={Styles.card_body}>
          <View style={Styles.view_email}>
            {
                emailInvalid !== ''
                  ? (<Text style={Styles.email_label_danger}>{emailInvalid}</Text>)
                  : (<></>)
              }
            {
                emailOnFocus || (emailOnBlur && email !== '')
                  ? (<Text style={Styles.email_label}>Email</Text>)
                  : (<></>)
              }
            <TextInput
              style={Styles.email_text_input}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={(emailText) => onChangeEmail(emailText)}
              ref={emailFocus}
              placeholder={emailOnFocus ? '' : 'Email'}
              placeholderTextColor="#52575c"
              onFocus={() => {
                setEmailOnFocus(true);
                setEmailOnBlur(false);
              }}
              onBlur={() => {
                setEmailOnFocus(false);
                setEmailOnBlur(true);
              }}
            />
          </View>
          <View style={Styles.view_password}>
            {
                passwordInvalid !== ''
                  ? (<Text style={Styles.password_label_danger}>{passwordInvalid}</Text>)
                  : (<></>)
              }
            {
                passwordOnFocus || (passwordOnBlur && password !== '')
                  ? (<Text style={Styles.password_label}>Password</Text>)
                  : (<></>)
              }
            <View style={Styles.view_password_text_input}>
              <TextInput
                style={Styles.password_text_input}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={!eye}
                value={password}
                onChangeText={(passwordText) => onChangePassword(passwordText)}
                placeholder={passwordOnFocus ? '' : 'Password'}
                placeholderTextColor="#52575c"
                onFocus={() => {
                  setPasswordOnFocus(true);
                  setPasswordOnBlur(false);
                }}
                onBlur={() => {
                  setPasswordOnFocus(false);
                  setPasswordOnBlur(true);
                }}
              />
              <FontAwesome
                name={eye ? 'eye' : 'eye-slash'}
                style={Styles.password_icon_eye}
                onPress={onEye}
              />
            </View>
          </View>
        </View>
        <View style={Styles.card_footer}>
          <TouchableOpacity
            style={Styles.button_signin}
            onPress={onSignIn}
          >
            {
                  signinError
                    ? (<Text style={Styles.button_signin_text_danger}>{signinError}</Text>)
                    : (<Text style={Styles.button_signin_text}>Sign In</Text>)
                }
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
