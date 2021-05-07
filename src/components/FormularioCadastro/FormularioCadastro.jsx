import React, {useState, useEffect} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

import { Typography, Stepper, StepLabel, Step } from '@material-ui/core';

function FormularioCadastro( {aoEnviar, validarCPFProps} ){

  const [dadosColetados, setDados] = useState({});
  const [etapaAtual, setEtapaAtual] = useState(0);

  useEffect( () => {
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetados);
    }

  });

  const formularios = [
    <DadosUsuario aoEnviarDU={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados} validarCPFProps2={validarCPFProps}/>,
    <DadosEntrega aoEnviarDE={coletarDados}/>,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ]

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }
  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Endereço</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
