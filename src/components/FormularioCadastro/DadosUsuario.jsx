import React, {useState} from 'react';

import { TextField, Button } from '@material-ui/core';

function DadosUsuario({aoEnviarDU, validacoesDU}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: { valido: true, texto: "" }
  });

  function validarCampos(event){
    const{name, value} = event.target;
    const novoEstado = {...erros};
    novoEstado[name] = validacoesDU[name](value);
    setErros(novoEstado);
  }

  function possoEnviar(){
    for( let campo in erros ){
      if(!erros[campo].valido){
        return false;
      }
    }
    return true;
  }

  return (
    <form onSubmit={ (event) => {
          event.preventDefault();
          if( possoEnviar() ){
            aoEnviarDU({email, senha});
          }
        }}>
      <TextField onChange={ (event) => {
          setEmail(event.target.value);
        }}
        name="email" id= "email" label="email" type="email" required
        variant="outlined"
        margin="normal"
        fullWidth/>
      <TextField onChange={ (event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha" id="senha" label="senha" type="password" required
        variant="outlined"
        margin="normal"
        fullWidth/>
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  );
}

export default DadosUsuario;
