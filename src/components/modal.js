import React,{Fragment} from "react";
import { AiFillEdit } from "react-icons/ai";

function Modal() {
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
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder={'Teclee nuevo correo'}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"
                                   placeholder={'Teclee nuevo nombre'}/>
                        </div>
                    </form>
                    {/*formulario------------------------------------------------------------formulario*/}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
        </Fragment>
    )

}
export default Modal;