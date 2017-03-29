import React, { Component } from 'react';
import {View} from 'react-native';

import Entrada from './Painel/Entrada';
import Comando from './Painel/Comando';
import Operacao from './Painel/Operacao';

class Painel extends Component {

	render(){
		return (
			<View>
				<Entrada num1={this.props.num1} num2={this.props.num2} 
					eventNum={ this.props.onChangeEntrada } />

				<Operacao evento={ this.props.onChangeOperacao } valor={ this.props.operacao } />

				<Comando acao={ this.props.calcular } />
			</View>
		);
	}

}

export { Painel }; //export { Painel: Painel};