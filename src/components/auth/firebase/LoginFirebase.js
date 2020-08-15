import * as firebase from "firebase/app";
import { configFirebase } from './configFirebase'
import "firebase/auth";

firebase.initializeApp(configFirebase);

export const LoginFirebase = (payload) => {
  const {email, password } = payload
  //Generamos el token de SPOTIFY
  
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((response) => {

    return response;    
  })
  .catch((err) => {
    return err;
  })
}