# rctNtvAppCalculadora

outro projeto

utilizou de componentes apenas funcionais

App.js
Topo.js
Resultado.js
Painel.js

-----

1 - app
1.1 - Topo
	1.1.1-cabecalho
1.2 - Resultado
	1.2.1 - Visor
1.3 - Painel
	1.3.1-entrada
		1.3.1.1-numero
	1.3.2-operacao
	1.3.3-comando


----

export default props => ( <view ... )

no index-android e index-ios.js fica o mesmo codigo

Centralizando o export para 1 arquivo index.js

export * from './Painel';
export * from './Resultado';
export * from './Topo';

alterou no Topo.js

export default props => ( <view ... )
para 
const Topo = props => ( <view ... )

export { Topo : Topo } ou melhor export { Topo }  // chave valor iguais no ES6

ficando assim no App.js

import { Topo, Resultado, Painel } from './components'; // podemos nao colocar a palavra index foi no ES6 ele busca 

por padrao.

obs: quando temos o export default, na importacao nao é necessario utilizar a chaves.

ex: import Visor from './xpot;' diferetente de import { Visor } from './xpto'

---

Topo.js

Criando um componente Cabecalho.js dentro do Topo.js que tb sera funcional
com titulo de Cabeçalho 1.0

--
Resultado.js
Criando um componente Visor.js dentro do resultado.js 

No visor utilizando o TextInput 

<TextInput placeholder='digita qualquer coisa' editable={false} />


----

papel.js

dentro do componente papel vamos criar 3 sub componentes: Entrada.js, Operacao.js e Comando.js
