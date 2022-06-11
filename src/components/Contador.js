import React from "react";

function Contador({total,Next,Previous,botondesabilitado,nextdesabilitado,arreglototalpaginas,currentpage}) {
    return(
        <nav aria-label="..." className='d-flex'>
            <label className='pt-2 me-2 '>Página {parseInt(currentpage)+1} de {total}</label>
            <ul className="pagination justify-content-end">
                <li className={`page-item ${botondesabilitado?'disabled':''}`}>
                    <a className="page-link"  onClick={Previous}>Previous</a>
                </li>
                <li className="page-item active ocultocel"><a className="page-link" href="#">1</a></li>
                {arreglototalpaginas.map(items=> <li className="page-item ocultocel" key={items.id}><a className="page-link" href="#">{items.id}</a></li>)}
                <li className={`page-item ${nextdesabilitado?'disabled':''}`}>
                    <a className="page-link"  onClick={Next}>Next</a>
                </li>
            </ul>
        </nav>

    )

}
export default Contador;