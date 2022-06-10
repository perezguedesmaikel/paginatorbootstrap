import React from "react";
import {selectOptions} from "@testing-library/user-event/dist/select-options";

function Navbar({hadleonselect,val1}) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body">
            <div className="container-fluid">
                <a className="navbar-brand m-1" href="#">Paginator</a>
                <form className='d-flex m-1'> <label className='m-2'>Show </label><select className="form-select w-auto"
                  aria-label="Default select example" defaultValue={'pre'} onChange={hadleonselect}>
                    <option value="pre">10</option>
                    <option value="1">25</option>
                    <option value="2">50</option>
                    <option value="3">100</option>
                </select><label className='m-2'>entries</label></form>

                <form className="d-flex m-2 mb-1">
                    <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>

            </div>
        </nav>

    )

}
export default Navbar;