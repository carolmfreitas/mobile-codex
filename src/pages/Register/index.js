import React, { useEffect, useState, useRef } from 'react';
import {
  ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import App from '../App';
import Styles from './styles.android';
import { postRegister } from '../../services/AuthService';

export default function Register({ error }) {
  const [emailInvalid, setEmailInvalid] = useState();
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [emailOnBlur, setEmailOnBlur] = useState(false);
  const [email, setEmail] = useState('');
  const [nomeOnFocus, setNomeOnFocus] = useState(false);
  const [nomeOnBlur, setNomeOnBlur] = useState(false);
  const [nome, setNome] = useState('');
  const [registerError, setRegisterError] = useState(error);
  const [passwordInvalid, setPasswordInvalid] = useState();
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [passwordOnBlur, setPasswordOnBlur] = useState(false);
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(false);

  const onChangeNome = (txtNome) => {
    setNomeInvalid();
    setRegisterError();
    setNome(txtNome);
  };

  const onChangeEmail = (txtEmail) => {
    setEmailInvalid();
    setRegisterError();
    setEmail(txtEmail);
  };

  const onChangePassword = (txtPassword) => {
    setPasswordInvalid();
    setRegisterError();
    setPassword(txtPassword);
  };

  const nomeFocus = useRef(null);
  const emailFocus = useRef(null);
  useEffect(() => {
    if (nomeFocus && nomeFocus.current) {
      nomeFocus.current.focus();
    }
  }, []);

  const onEye = () => {
    setEye(!eye);
  };

  const onRegister = () => {
    if (!email.match(/\S+@\S+\.\S+/)) {
      setEmailInvalid('Insira um email válido');
    } else if (password === '') {
      setPasswordInvalid('Insira uma senha');
    } else {
      postRegister({ nome, email, password }).then((res) => {
        //redirecionar para login e verificar se esta name ou nome no backend
      }).catch((err) => console.log(err));
    }
  };

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
          <View style={Styles.view_input}>
            {
              nomeOnFocus || (nomeOnBlur && nome !== '')
                ? (<Text style={Styles.input_label}>Nome</Text>)
                : (<></>)
            }
            <TextInput
              style={Styles.text_input}
              keyboardType="name"
              autoCapitalize="words"
              value={nome}
              onChangeText={(nomeText) => onChangeNome(nomeText)}
              ref={nomeFocus}
              placeholder={nomeOnFocus ? '' : 'Nome'}
              placeholderTextColor="#52575c"
              onFocus={() => {
                setNomeOnFocus(true);
                setNomeOnBlur(false);
              }}
              onBlur={() => {
                setNomeOnFocus(false);
                setNomeOnBlur(true);
              }}
            />
          </View>
          <View style={Styles.view_input}>
            {
              emailInvalid !== ''
                ? (<Text style={Styles.input_label_danger}>{emailInvalid}</Text>)
                : (<></>)
            }
            {
              emailOnFocus || (emailOnBlur && email !== '')
                ? (<Text style={Styles.input_label}>Email</Text>)
                : (<></>)
            }
            <TextInput
              style={Styles.text_input}
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
            style={Styles.button_register}
            onPress={onRegister}
          >
            {
              registerError
                ? (<Text style={Styles.button_register_text_danger}>{registerError}</Text>)
                : (<Text style={Styles.button_register_text}>Register</Text>)
            }
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
