import React from "react";
import Contador from "./Contador";
import Navbar from "./Navbar";

function Paginator() {
    return(
        <div className='container border'>
                {/*navbar---------------------------------------------------------------------------------------------------------------->*/}
    <Navbar/>
                {/*navbar---------------------------------------------------------------------------------------------------------------->*/}

                <table className="table table table-striped table-bordered mb-1 mt-1 table-hover">
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