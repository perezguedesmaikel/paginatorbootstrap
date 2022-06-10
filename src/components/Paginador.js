import React from "react";
import Contador from "./Contador";
import Navbar from "./Navbar";

function Paginator() {
    return(
        <div className='container'>
                {/*navbar---------------------------------------------------------------------------------------------------------------->*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand m-1" href="#">Paginator</a>
                   <form className='d-flex m-1'> <label className='m-2'>Show </label><select className="form-select w-auto" aria-label="Default select example" defaultValue={'pre'}>
                    <option value="pre" disabled>10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                </select><label className='m-2'>entries</label></form>

                        <form className="d-flex m-2 mb-1">
                            <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-primary" type="submit">Search</button>
                        </form>

                </div>
            </nav>
                {/*navbar---------------------------------------------------------------------------------------------------------------->*/}

                <table className="table table table-striped table-bordered mb-1 mt-1">
               <thead>
               <tr>

                   <th>Celda 1</th>

                   <th>Celda 2</th>

                   <th>Celda 3</th>

               </tr>
               </thead>
                    <tbody>
                    <tr>

                        <td>Celda 1</td>

                        <td>Celda 2</td>

                        <td>Celda 3</td>

                    </tr>

                    <tr>

                        <td>Celda 4</td>

                        <td>Celda 5</td>

                        <td>Celda 6</td>

                    </tr>
                    <tr>

                        <td>Celda 4</td>

                        <td>Celda 5</td>

                        <td>Celda 6</td>

                    </tr>
                    <tr>

                        <td>Celda 4</td>

                        <td>Celda 5</td>

                        <td>Celda 6</td>

                    </tr>
                    <tr>

                        <td>Celda 4</td>

                        <td>Celda 5</td>

                        <td>Celda 6</td>

                    </tr>

                    </tbody>


                </table>
           <Contador/>

        </div>


    )

}
export default Paginator;