import React, {useState, useContext} from 'react';

import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviarDU}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoesDU = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoesDU);

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
