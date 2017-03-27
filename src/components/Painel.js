import React from 'react';
import {View,Text} from 'react-native';

import Entrada from './Painel/Entrada';
import Comando from './Painel/Comando';
import Operacao from './Painel/Operacao';

const Painel = props => (
		<View>
			<Entrada />
			<Operacao />
			<Comando />
		</View>
	);


export { Painel }; //export { Painel: Painel};