import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Numero from '../Numero';

export default props => (
		<View>
			<Text>Entrada</Text>
			<View style={ style.entrada }>
				<Numero />
				<Numero />
			</View>
		</View>
	);

const style = StyleSheet.create ({
	entrada: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
