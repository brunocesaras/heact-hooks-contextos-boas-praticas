import React from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

function FormularioCadastro( {aoEnviar, validarCPFProps} ){

  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPFProps2={validarCPFProps}/>
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
