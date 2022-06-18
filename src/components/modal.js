import React,{Fragment} from "react";
import { AiFillEdit } from "react-icons/ai";

function Modal({inputedicion,inputedicion1,actualizar,handlingonchange,handlingonchange1}) {
    return(
        <Fragment>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel"><AiFillEdit className='text-primary fs-2'/> Editar</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                </div>
                <div className="modal-body">
                    {/*formulario------------------------------------------------------------formulario*/}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                            <input defaultValue={inputedicion} type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder={'Teclee nuevo correo'} onChange={handlingonchange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                            <input defaultValue={inputedicion1} type="text" className="form-control" id="exampleInputPassword1"
                                   placeholder={'Teclee nuevo nombre'} onChange={handlingonchange1}/>
                        </div>
                    </form>
                    {/*formulario------------------------------------------------------------formulario*/}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" onClick={actualizar} className="btn btn-primary" data-bs-dismiss="modal">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
        </Fragment>
    )

}
export default Modal;