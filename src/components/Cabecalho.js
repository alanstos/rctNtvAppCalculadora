import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default  props => (
		<View style={ style.topo  }>
			<Text style={ style.txtTitulo } >Calculadora Beta</Text>
		</View>
	);

const style = StyleSheet.create({

	topo: {
		backgroundColor: '#2196F3',
		alignItems:'center',
		padding: 15
	},
	txtTitulo:{
		color: '#fff',
		fontSize: 20
	}
});

