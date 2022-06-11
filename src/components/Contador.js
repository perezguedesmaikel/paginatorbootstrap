import React from "react";

function Contador({total,Next,Previous,botondesabilitado,nextdesabilitado,arreglototalpaginas,currentpage,handlingancla}) {

    return(
        <nav aria-label="..." className='d-flex'>
            <label className='pt-2 me-2 '>Página {parseInt(currentpage)+1} de {total}</label>
            <ul className="pagination justify-content-end">
                <li className={`page-item ${botondesabilitado?'disabled':''}`}>
                    <a className="page-link"  onClick={Previous}>Previous</a>
                </li>
                <li className={`page-item  ${0===currentpage?'active':''} ocultocel`} onClick={()=>handlingancla(1)}><a className="page-link" >1</a></li>
                {arreglototalpaginas.map(items=> <li onClick={()=>handlingancla(items.id+2)}
                className={`page-item  ${items.id+1===currentpage?'active':''} ocultocel`}
                 key={items.id}><a className="page-link" >{items.id+2}</a></li>)}
                <li className={`page-item ${nextdesabilitado?'disabled':''}`}>
                    <a className="page-link"  onClick={Next}>Next</a>
                </li>
            </ul>
        </nav>

    )

}
export default Contador;