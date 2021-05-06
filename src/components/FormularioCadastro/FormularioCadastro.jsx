import React, {useState} from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro( {aoEnviar, validarCPFProps} ){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({
    cpf: {valido:true, texto:""}
  });

  return (
    <form onSubmit={ (event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }}>
      <TextField
        value={nome}
        onChange = { (event) => {
          let tmpNome = event.target.value;
          setNome(tmpNome);
        }}
        id="standard-basic"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField
        value={sobrenome}
        onChange={ (event) => {
          setSobrenome(event.target.value);
        }}
        id="standard-basic"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField
        value={cpf}
        onChange={ (event) => {
          setCpf(event.target.value);
        }}

        onBlur={ (event) => {
          setErros( {cpf: validarCPFProps(cpf)});
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="standard-basic"
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

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

    </form>
  );
}

export default FormularioCadastro;
