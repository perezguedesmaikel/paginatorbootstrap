import React,{Fragment} from "react";
import Form from "./Form";

function Navbar({hadleonselect,input,totaldatos}) {
    return(
        <Fragment>
            {/*Formulario navbar----------------------------------------------Formulario navbar*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">

                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/*Formulario navbar----------------------------------------------Formulario navbar*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body">
            <div className="container-fluid">
                <form className='d-flex m-1'> <label className='m-2'>Show </label><select className="form-select w-auto "
                  aria-label="Default select example" defaultValue={'10'} onChange={hadleonselect}>
                    <option value='5'>5</option>
                    <option value='10' className={`${totaldatos.length<10?"opsionoculta":''}`}>10</option>
                    <option value='15' className={`${totaldatos.length<15?"opsionoculta":''}`}>15</option>
                    <option value='25' className={`${totaldatos.length<25?"opsionoculta":''}`}>25</option>
                    <option value="50" className={`${totaldatos.length<50?"opsionoculta":''}`}>50</option>
                    <option value="100" className={`${totaldatos.length<100?"opsionoculta":''}`}>100</option>
                </select><label className='m-2'>entries</label></form>
                <form className="d-flex m-2 mb-1">
                    <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search" onChange={input}/>
                </form>

            </div>
        </nav>
        </Fragment>
    )

}
export default Navbar;