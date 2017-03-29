import React, {Component} from 'react';
import {
  Picker,
  StyleSheet
} from 'react-native';

export default class Operacao extends Component { 

	constructor(props) {
		super(props);
	}

	render(){

		return (
			<Picker style={ styles.Picker } 
				selectedValue={ this.props.valor }
			  	onValueChange={ (sel) => this.props.evento(sel) }
			>
			  <Picker.Item label="Soma" value="soma" />
			  <Picker.Item label="Subtração" value="subtracao" />
			  <Picker.Item label="Multiplicação" value="multp" />
			</Picker>
		);
	}
}

const styles = StyleSheet.create({
	Picker: {
		marginTop: 15,
		marginBottom:20
	}
});