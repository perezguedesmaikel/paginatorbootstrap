import React,{Fragment} from "react";
import { useForm } from "react-hook-form";

function Form({handleSubmitmia,formEnviosucces,imput1,imput2}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        handleSubmitmia(data);
        //console.log(data);
    };
    return(
        <Fragment>
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
                    <hr>

                    </hr>
                    <a className="navbar-brand form-label" href="#">Envio de datos:</a>
                    <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control me-2" type="email" placeholder="email" aria-label="email"
                               {...register("email", { required: true })} onChange={imput1}
                        />
                        <input className="form-control me-2" type="text" placeholder="name" aria-label="text"
                               {...register("name", { required: true })} onChange={imput2}
                        />
                        <button className="btn btn-primary" type="submit" >Enviar</button>
                    </form>
                    <hr>

                    </hr>
                </div>
            </div>
        </nav>
            <div className={`alert alert-success ${formEnviosucces===false?'mensajeoculto':''}`} role="alert">
                Los datos se mandaron satisfactoriamente!!!
            </div>
    {errors.email && <div className="alert alert-danger" role="alert">
        Campo email requerido!!!
    </div>}
    {errors.name && <div className="alert alert-danger" role="alert">
        Campo nombre requerido!!!
    </div>}


        </Fragment>

    )

}
export default Form;