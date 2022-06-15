import React from "react";

function Form() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Formulario</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <a className="navbar-brand" href="#">Envio de datos:</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="email" placeholder="email" aria-label="Search"/>
                        <input className="form-control me-2" type="text" placeholder="name" aria-label="Search"/>
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </nav>

    )

}
export default Form;