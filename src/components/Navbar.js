import React from "react";
function Navbar({hadleonselect,input,buscar}) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body">
            <div className="container-fluid">
                <a className="navbar-brand m-1" href="#">Paginator</a>
                <form className='d-flex m-1'> <label className='m-2'>Show </label><select className="form-select w-auto "
                  aria-label="Default select example" defaultValue={'10'} onChange={hadleonselect}>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='25'>25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select><label className='m-2'>entries</label></form>
                <form className="d-flex m-2 mb-1">
                    <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search" onChange={input}/>
                    <button className="btn btn-primary" type="submit" onClick={buscar}>Search</button>
                </form>

            </div>
        </nav>

    )

}
export default Navbar;