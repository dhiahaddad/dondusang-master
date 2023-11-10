import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { ErrorMessage,Form, FormField, SubmitButton } from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import * as firebase from 'firebase';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const auth = useAuth();
  const loginUser = async (userInfo) => {
    const result = await firebase.auth().signInWithEmailAndPassword(userInfo.email,userInfo.password);
    console.log(result.user)
      // (result) => {
      // const { accessToken } = result.user
      // console.log(result.user)
      auth.logIn("eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNjYzOGY4NDlkODVhNWVkMGQ1M2NkNDI1MzE0Y2Q1MGYwYjY1YWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZG9uZHVzYW5nLWE5OTUxIiwiYXVkIjoiZG9uZHVzYW5nLWE5OTUxIiwiYXV0aF90aW1lIjoxNjAxMDc4MDI0LCJ1c2VyX2lkIjoiREloM1hQZ3Z4dlV0dndwVXNWWUpocEVxU3kwMiIsInN1YiI6IkRJaDNYUGd2eHZVdHZ3cFVzVllKaHBFcVN5MDIiLCJpYXQiOjE2MDEwNzgwMjQsImV4cCI6MTYwMTA4MTYyNCwiZW1haWwiOiJhYWFhQGFhYWEuYWFhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFhYWFAYWFhYS5hYWEiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Z8bpbh_QMRzDlzMGN64FXkecCGYGYJczcCnpIzEBtwevdTH8zSapK91JXFxMMir8UPXWONlTy74x7eoHENZMgIRGD6GF9f76B-me8XhHdtOReaTA9XE5990iUkUyu5U2ilviCMUbGvFNBYGGkQ_nhJ2ZXVKyyVXV89k589rFtCIhrXnG3j9Xj2YpEqjSQCM5TkKEvFs0q3fkeOCjXu_ZPqz7DdgfTSgl_1GGcGUyrDq_-tvc02cnNC6YojFIsSGrNE9gPdiUE_cMIH1B-3Sg-Msdq0bXkXN8eucF7JVSNLWVMFLlntCC0eLJAnDGSrpU7yZonOjv7eLoeJtAZbOMTg");
    };
    
  const [loginFailed, setLoginFailed] = useState(false);

  // const handleSubmit = async ({ email, password }) => {
  //   const result = await authApi.login(email, password);
  //   if (!result.ok) return setLoginFailed(true);
  //   setLoginFailed(false);
  //   auth.logIn(result.data);
  // };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Logo_Trans.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={loginUser}
        validationSchema={validationSchema}
      >
                <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Mot de passe"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Se connecter" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
