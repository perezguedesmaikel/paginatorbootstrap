import React,{Fragment} from "react";
import Form from "./Form";
import { BsFillBinocularsFill} from "react-icons/bs";

function Navbar({hadleonselect,input,totaldatos,handleSubmitmia,formEnviosucces, imput1, imput2,imput11,clicbotonform,
                    imput22}) {
    return(
        <Fragment>
            {/*Formulario navbar----------------------------------------------Formulario navbar*/}
           <Form handleSubmitmia={handleSubmitmia} formEnviosucces={formEnviosucces} imput1={imput1} imput2={imput2}
                 imput11={imput11} imput22={imput22} clicbotonform={clicbotonform}/>
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
                </select><label className='m-2'>entries</label>
                </form>
                <form className="d-flex m-2 mb-1">

                    <div className="input-group mb-3">
                        <input type="search" className="form-control" placeholder="Search"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={input}/>
                        <span className="input-group-text" id="basic-addon2"><BsFillBinocularsFill/></span>
                    </div>
                </form>


            </div>
        </nav>
        </Fragment>
    )

}
export default Navbar;