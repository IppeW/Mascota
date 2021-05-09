import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import ChiensListe from './src/Screens/chiens/ChiensListe';
import Home from './src/Screens/Home';
import Layout from './src/Components/Layout';

export default function App() {
  return (
    <NativeRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/chiensListe" component={ChiensListe} />
      </Layout>
      <StatusBar style="auto" />
    </NativeRouter>
  );
}
