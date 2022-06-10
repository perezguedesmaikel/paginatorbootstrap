import React,{useState} from "react";
import Contador from "./Contador";
import Navbar from "./Navbar";
const datos_api=Array.from({length:100},(value,index)=>{
  return{id:index,title:`Item #${index}`,email:'maikel@gmail.com'}
});

function Paginator() {
    const [totaldatos,setTotaldatos]=useState(datos_api);
    const numitem=10;
    const [lista,setLista]=useState([...totaldatos].splice(0,numitem));
    function hadleonselect(e) {
        let numitem2=10;
        if (e.target.value==='pre'){
             numitem2=10;
        }
        if (e.target.value==='1'){
             numitem2=25;
        }
        if (e.target.value==='2'){
            numitem2=50;
        }
        if (e.target.value==='3'){
            numitem2=100;
        }
        setLista([...totaldatos].splice(0,numitem2));
    }
    function Next() {
        const totalelementos=totaldatos.length;
        console.log(totalelementos);
    }
    function Previous() {
       console.log('Previous');
    }
    return(
        <div className='container border'>
            <Navbar hadleonselect={hadleonselect}/>
            <table className="table table table-striped table-bordered mb-1 mt-1 table-hover">
               <thead>
               <tr>
                   <th>id</th>
                   <th>Email</th>
                   <th>Title</th>
               </tr>
               </thead>
                    <tbody>
                    {lista.map(item=><tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.title}</td>
                    </tr>)}
                    </tbody>
            </table>
           <Contador total={totaldatos.length} Next={Next} Previous={Previous}/>

        </div>


    )

}
export default Paginator;