import React, { Component } from 'react';
import {View} from 'react-native';

import Entrada from './Painel/Entrada';
import Comando from './Painel/Comando';
import Operacao from './Painel/Operacao';

class Painel extends Component {

	constructor(props) {
		super(props);
		this.state = { num1:'1', num2:'2' };

		this.calcular = this.calcular.bind(this);
	}

	calcular(){
		
		let soma = parseFloat(this.state.num1) +  parseFloat(this.state.num2);

		alert(soma);

	}

	render(){
		return (
			<View>
				<Entrada num1={this.state.num1} num2={this.state.num2} />
				<Operacao />
				<Comando acao={ this.calcular } />
			</View>
		);
	}

}

export { Painel }; //export { Painel: Painel};