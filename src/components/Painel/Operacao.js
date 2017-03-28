import React, {Component} from 'react';
import {
  Picker,
  StyleSheet
} from 'react-native';

export default class Operacao extends Component { 

	constructor(props) {
		super(props);
		this.state = { operacao: '' };
	}

	render(){

		return (
			<Picker style={ styles.Picker }
			  selectedValue={this.state.operacao}
			  onValueChange={ (sel) => this.setState({operacao: sel})}
			>
			  <Picker.Item label="Soma" value="soma" />
			  <Picker.Item label="Subtração" value="subtracao" />
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