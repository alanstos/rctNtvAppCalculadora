import React from 'react';
import {
  Button,
  StyleSheet
} from 'react-native';

const calcular = () => ( alert('calcular') );

export default props => (
		<Button title="Calcular" onPress={ calcular } style={ styles.botao } />
	);

const styles = StyleSheet.create({
	botao : {
		width: 20,
		alignItems:'center',
	}
});