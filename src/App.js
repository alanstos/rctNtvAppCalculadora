import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Painel, Resultado } from './components';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { num1:'', num2:'', operacao: 'soma', resultado: '' };

		this.calcular = this.calcular.bind(this);
		this.onChangeEntrada = this.onChangeEntrada.bind(this);
		this.onChangeOperacao = this.onChangeOperacao.bind(this);
		
	}

	calcular(){

		let resultado = 0;

		switch (this.state.operacao){
			case 'soma' :
				resultado = parseFloat(this.state.num1) +  parseFloat(this.state.num2);
				break;
			case 'subtracao' :
				resultado = parseFloat(this.state.num1) -  parseFloat(this.state.num2);
				break;
			case 'multp' :
				resultado = parseFloat(this.state.num1) *  parseFloat(this.state.num2);
				break;
			default: 
				resultado = 0;
		}		

		this.setState({resultado: resultado.toString() });

		alert(  this.state.operacao + ' : ' + resultado);

	}

	onChangeEntrada(nomeCampo, num){
		const obj = {};
		obj[ nomeCampo ] = num;
		return this.setState( obj );
	}

	onChangeOperacao(sel){
		this.setState({operacao: sel})
	}

	render(){
		return (
		    <View>
		      <Topo />
		      <Resultado resultado={ this.state.resultado } />
		      <Painel 
				num1={this.state.num1}
				num2={this.state.num2}
				operacao={this.state.operacao}
		      	calcular={this.calcular} 
		      	onChangeEntrada={this.onChangeEntrada} 
		      	onChangeOperacao={this.onChangeOperacao} />
		    </View>
		);

	}

}

export default App;
