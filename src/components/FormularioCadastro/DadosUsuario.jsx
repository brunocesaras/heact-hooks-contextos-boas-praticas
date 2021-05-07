import React, {useState} from 'react';

import { TextField, Button } from '@material-ui/core';

function DadosUsuario({aoEnviarDU, validacoesDU}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: { valido: true, texto: "" }
  });

  return (
    <form onSubmit={ (event) => {
          event.preventDefault();
          aoEnviarDU({email, senha});
        }}>
      <TextField onChange={ (event) => {
          setEmail(event.target.value);
        }}
        id= "email" label="email" type="email" required
        variant="outlined"
        margin="normal"
        fullWidth/>
      <TextField onChange={ (event) => {
          setSenha(event.target.value);
        }}
        onBlur={ (event) => {
          setErros( {senha: validacoesDU.senha(event.target.value)} );
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}

        id="senha" label="senha" type="password" required
        variant="outlined"
        margin="normal"
        fullWidth/>
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default DadosUsuario;
