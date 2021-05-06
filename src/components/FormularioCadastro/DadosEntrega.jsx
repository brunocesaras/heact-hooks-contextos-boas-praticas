import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({aoEnviarDE}){
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

console.log(aoEnviarDE);
  return(
    <form onSubmit={ (event) => {
        event.preventDefault();
        aoEnviarDE({cep, endereco, numero, estado, cidade})
      }}>
      <TextField onChange={
          (event) => {
            setCep(event.target.value);
          }
        }
        value={cep} id= "cep" label="CEP" type="number"
        variant="outlined"
        margin="normal"/>
      <TextField onChange={
          (event) => {
            setEndereco(event.target.value);
          }
        }
        value={endereco} id= "endereco" label="Endereco" type="text"
        variant="outlined"
        margin="normal"
        fullWidth />
      <TextField onChange={
          (event) => {
            setNumero(event.target.value);
          }
        }
        value={numero} id= "numero" label="Numero" type="number"
        variant="outlined"
        margin="normal" />
      <TextField onChange={
          (event) => {
            setEstado(event.target.value);
          }
        }
        value={estado} id= "estado" label="Estado" type="text"
        variant="outlined"
        margin="normal" />
      <TextField onChange={
          (event) => {
            setCidade(event.target.value);
          }
        }
        value={cidade} id= "cidade" label="Cidade" type="text"
        variant="outlined"
        margin="normal" />

      <Button type="submit" variant="contained" color="primary" fullWidth >Finalizar Cadastro</Button>
    </form>
  );
}

export default DadosEntrega;
