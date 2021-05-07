import React, {useState} from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


function DadosPessoais( {aoEnviar, validarDP} ){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({
    cpf: {valido:true, texto:""}
  });

  function validarCampos(event){
    const{name, value} = event.target;
    const novoEstado = {...erros};
    novoEstado[name] = validarDP[name](value);
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
          aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }
      }}>
      <TextField
        value={nome}
        onChange = { (event) => {
          let tmpNome = event.target.value;
          setNome(tmpNome);
        }}
        name="nome"
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField
        value={sobrenome}
        onChange={ (event) => {
          setSobrenome(event.target.value);
        }}
        name="sobrenome"
        id="sobenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField
        value={cpf}
        onChange={ (event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        name="cpf"
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth />

      <FormControlLabel
        label="Promoções"
        control={<Switch onChange={ (event) => {
            setPromocoes(event.target.checked);
        }}
        checked={promocoes}
        name="promocoes"
        color="primary"/>} />

      <FormControlLabel
        label="Novidades"
        control={<Switch onChange={ (event) => {
            setNovidades(event.target.checked);
        }}
        checked={novidades}
        name="novidades"
        color="primary"/>} />

      <Button type="submit" variant="contained" color="primary">Próximo</Button>

    </form>
  );
}

export default DadosPessoais;
