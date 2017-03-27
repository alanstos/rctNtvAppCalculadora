import React from 'react';
import { View } from 'react-native';

import Topo from './components/Topo';
import Painel from './components/Painel';
import Resultado from './components/Resultado';

const App = () => (
    <View>
      <Topo />
      <Resultado />
      <Painel />
    </View>
);

export default App;
