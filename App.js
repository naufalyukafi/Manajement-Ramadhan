/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Firebase from "@react-native-firebase/app"
import Router from "./src/router"

var firebaseConfig = {
  apiKey: "AIzaSyD_v1VVS9tYacG5PhVvJqEuhQvsexmorMA",
  authDomain: "hil-ramadhan-a4f62.firebaseapp.com",
  projectId: "hil-ramadhan-a4f62",
  storageBucket: "hil-ramadhan-a4f62.appspot.com",
  messagingSenderId: "7447312769",
  appId: "1:7447312769:web:8469ce3f51d6ce7368d080",
  measurementId: "G-VNXRVN6SJ2"
};

if(!Firebase.apps.length){
  Firebase.initializeApp(firebaseConfig)
}

const App = () => {


  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Router />
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
