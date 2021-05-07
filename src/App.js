import React, {Component} from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {validarCPF, validarSenha} from './models/cadastro.js';

import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import './App.css';

class App extends Component {

  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center"> Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha}}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
