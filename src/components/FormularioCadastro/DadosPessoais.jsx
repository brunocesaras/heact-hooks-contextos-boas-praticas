import React, {useState, useContext} from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais( {aoEnviar} ){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);

  const validarDP = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validarDP);

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

        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
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
