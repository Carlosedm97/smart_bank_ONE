import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { Icono, IconoTema, Btn, Box, Saldo, Detalle } from "../UI";
import styled from "styled-components";

const IconoPadding = styled(IconoTema)` // ! Herencia en Styled Components: hereda los estilos del componente estilizado Icono y se crea un nuevo componente con las variaciones.
  padding-left: 10px;
`
const IconoMargin = styled(Icono)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconoPadding // ! Aquí usamos el nuevo componente estilizado que heredó los estilos de icono.
            src={dinero} 
            alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconoMargin // ! Aquí usamos el nuevo componente estilizado que heredó los estilos de icono.
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
