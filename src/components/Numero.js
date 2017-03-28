import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
	<TextInput style={ style.numero } value={ props.num } />
);


const style = StyleSheet.create({
	numero: {
		width: 80,
		fontSize: 16,

	}

});