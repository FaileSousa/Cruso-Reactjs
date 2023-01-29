import React, { Component } from 'react'
import Membro from './components/Membro'
import Feed from './components/Feed'
import './estilo.css'

// Componentes de Update

/*
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hora: '00:00:00'
     }
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000)
  }

  componentDidUpdate() {
    console.log('Atualizou!!!')
  }

  render(){
    return (
      <div>
        <h1> Meu Projeto {this.state.hora }</h1>
      </div>
    )
  }
}
*/


/*
class App extends Component {
  
  render() {
    return (
      <div>
        <Membro nome="Visitante" />
      </div>
    )
  }
}
*/

/*
class App extends Component {

  constructor(props) {
    super(props)    
    this.state = {
      feed: [
        {id: 1, username: 'Faile', curtidas: 10, comentarios: 2},
        {id: 2, username: 'Aquiles', curtidas: 300, comentarios: 100},
        {id: 3, username: 'Ana', curtidas: 150, comentarios: 80},
        {id: 3, username: 'Sousa', curtidas: 1, comentarios: 0}

      ]
    }
  }


  render() {
    return (      
      <div>       
        {this.state.feed.map( (item)=>{
          return(
            <Feed id={item.id} username={item.username}
              curtidas={item.curtidas} comentarios={item.comentarios} />
          )
        })}
      </div>
    )
  }
}
*/

/*
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        nome: '',
        email: '',
        senha: '',
        sexo: ''
      }
    }

    this.dadosForm = this.dadosForm.bind(this)
}

dadosForm(e) {
  let form = this.state.form
  form[e.target.name] = e.target.value 
  this.setState({form: form})
}
 

  render() {
    return (
      <div>
        <h2>Login</h2>
        Nome:
        <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm} /> <br/>
        Email:
        <input type="email" name="email" value={this.state.form.email}
          onChange={this.dadosForm}/> <br/>

        Senha:
        <input type="password" name="senha" value={this.state.form.senha}
          onChange={this.dadosForm} /> <br/>

        Sexo:
        <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <div>          
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    )
  }
}

*/

/*
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }

    this.cadastar = this.cadastar.bind(this)
  }

  cadastar(e) {
    const {nome, email, senha } = this.state

    if(nome !== '' && email !== '' && senha !== '') {
      alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
    } else {
      this.setState({error: 'Ops! algum campo não foi preenchido!!'})
    }


    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>novo usuario</h1>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.cadastar}>
          <label>Nome:</label>
          <input type="text" value={this.state.nome} onChange={ (e) => this.setState({nome: e.target.value}) }/> <br/>
          <label>Email:</label>
          <input type="email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }/> <br/>
          <label>Senha:</label>
          <input type="password" value={this.state.senha} onChange={ (e) => this.setState({senha: e.target.value}) } /> <br/>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    )
  }
}
*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoFrase: ''
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito corpo', 
    'O riso é a menor distância entre duas pessoas.', 'Deixe de lado as preocupações e seja feliz',
    'Realize o óbvio, pense no improvável e conquiste o impossivel.', 'Acredite em milagres, mas não dependa deles',
    'A maior barreira apra o sucesso é o medo do fracasso.']
  }

  quebraBiscoito() {
      let state = this.state
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
      state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
      this.setState(state)
  }

  render() {
    return (
      <div className='conteiner'>
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App
