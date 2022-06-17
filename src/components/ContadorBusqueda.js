import React from "react";

function ContadorBusqueda({resultBusqueda,modobusqueda}) {
    return(
        <div className={`alert alert-primary ${modobusqueda?'':'mod-busqueda'}`} role="alert">
            Se han encontrado {resultBusqueda} elementos!
        </div>

    )

}
export default ContadorBusqueda;