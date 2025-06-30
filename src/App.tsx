import React, { useState } from "react";
import { General } from "./components/General";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./ui/Wrapper";

/*
10. Lista editable de elementos
Crea una lista de elementos (por ejemplo, tareas) que permita editar cada uno haciendo clic en él. Al hacer clic, el texto se convierte en un input editable. 

  //CRUD
  c - Crear
  r - Leer
  u - Actualizar
  d - Borrar


*/

export const App = () => {
  return (
    <Wrapper className="general-section flex border-gray">
      <Sidebar />
      <General>
        <header className="border-gray"></header>
        <div className="wrapper-1">
          <div className="navbar-section border-gray">projects navbar</div>
          <div className="project-section border-gray">project info</div>
        </div>
      </General>
    </Wrapper>
  );
};
