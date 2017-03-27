import React from 'react';
import {
  Picker,
  StyleSheet
} from 'react-native';

export default props => (
	<Picker style={ styles.Picker }>
	  <Picker.Item label="Java" value="java" />
	  <Picker.Item label="JavaScript" value="js" />
	</Picker>
);

const styles = StyleSheet.create({
	Picker: {
		marginTop: 15,
		marginBottom:20
	}
});