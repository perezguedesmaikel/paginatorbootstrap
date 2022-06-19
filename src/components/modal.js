import React, {Fragment, useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import {useForm} from "react-hook-form";


function Modal({actualizar,currentuser}) {
    const [estadosubmit,setEstadosubmit]=useState(false);
    const { register, handleSubmit,setValue, formState: { errors } } = useForm(
        {
            defaultValues:currentuser
        }
    );
    setValue('name2',currentuser.name);
    setValue('email2',currentuser.email);

    const onSubmit = data2 => {
        //document.getElementById('staticBackdrop').style.display = 'none';
        console.log(data2);
    };

    return(
        <Fragment>
    <div className="modal fade" id="staticBackdrop"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel"><AiFillEdit className='text-primary fs-2'/> Editar</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                </div>
                <div className="modal-body">
                    {/*formulario------------------------------------------------------------formulario*/}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                            <input  type="email" className="form-control"
                                   aria-describedby="emailHelp" placeholder={'Teclee nuevo correo'}
                                    {...register("email2",{ required: true })}
                            />
                            {errors.email2 && <div className="alert alert-danger" role="alert">
                                Este camapo es para editar, no puede quedar vasio!!
                            </div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                            <input  type="text" className="form-control"
                                   placeholder={'Teclee nuevo nombre'}
                                    {...register("name2",{ required: true })}
                            />
                            {errors.name2 && <div className="alert alert-danger" role="alert">
                                Este camapo es para editar, no puede quedar vasio!
                            </div>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit"  className="btn btn-primary">Actualizar</button>
                        </div>
                    </form>
                    {/*formulario------------------------------------------------------------formulario*/}
                </div>

            </div>
        </div>
    </div>
        </Fragment>
    )

}
export default Modal;