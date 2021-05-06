import React, {useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

import { Typography } from '@material-ui/core';


function FormularioCadastro( {aoEnviar, validarCPFProps} ){

  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapa){

    switch (etapa) {
      case 0:
        return (
          <DadosUsuario />
        );
      case 1:
        return (
          <DadosPessoais aoEnviar={aoEnviar} validarCPFProps2={validarCPFProps}/>
        );
      case 2:
        return(
          <DadosEntrega />
        );
      break;
      default:
      return(
        <Typography>Erro ao selecionar renderização</Typography>
      );
    }
  }

  return (
    <>
      {formularioAtual(etapaAtual)}
    </>
  );
}

export default FormularioCadastro;
