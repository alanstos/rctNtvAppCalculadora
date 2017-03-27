import React from 'react';
import { View } from 'react-native';

import { Topo, Painel, Resultado } from './components';

const App = () => (
    <View>
      <Topo />
      <Resultado />
      <Painel />
    </View>
);

export default App;
