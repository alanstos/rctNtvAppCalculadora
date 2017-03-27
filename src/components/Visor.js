import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

export default props => (
		<View>
			<Text>Visor resultado </Text>
		      <TextInput
		        style={ style.input }

		      />			
		</View>
	);

const style = StyleSheet.create({
	input : {
		height: 50, 
		borderColor: 'gray', 
		borderWidth: 1,
		fontSize: 20
	}

});
