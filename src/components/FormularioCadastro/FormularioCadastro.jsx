import React, {useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

import { Typography } from '@material-ui/core';


function FormularioCadastro( {aoEnviar, validarCPFProps} ){

  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [ <DadosUsuario aoEnviarDU={proximo}/>,
    <DadosPessoais aoEnviar={proximo} validarCPFProps2={validarCPFProps}/>,
    <DadosEntrega />
  ]

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

  return (
    <>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
