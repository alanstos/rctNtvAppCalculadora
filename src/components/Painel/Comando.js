import React from 'react';
import {
  Button,
  StyleSheet
} from 'react-native';

export default props => (
		<Button title="Calcular" onPress={ props.acao } style={ styles.botao } />
	);

const styles = StyleSheet.create({
	botao : {
		width: 20,
		alignItems:'center',
		height: 50,
	}
});