import React, {useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';


function FormularioCadastro( {aoEnviar, validarCPFProps} ){

  console.log(aoEnviar);
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [ <DadosUsuario aoEnviarDU={proximo}/>,
    <DadosPessoais aoEnviar={proximo} validarCPFProps2={validarCPFProps}/>,
    <DadosEntrega aoEnviarDE={aoEnviar}/>
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
