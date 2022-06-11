import React,{useState,useEffect} from "react";
import Contador from "./Contador";
import Navbar from "./Navbar";
const datos_api=Array.from({length:100},(value,index)=>{
  return{id:index,title:`Item #${index}`,email:'maikel@gmail.com'}
});
let numitem=10;
function Paginator() {
    const [totaldatos,setTotaldatos]=useState(datos_api);
    const [lista,setLista]=useState([...totaldatos].splice(0,numitem));
    const [prevdesabilitado,setPrevdesabilitado]=useState(true);
    const [currentpage,setCurrentpage]=useState(0);
    function hadleonselect(e) {
        numitem=parseInt(e.target.value);
      //console.log(parseInt(e.target.value));
        setLista([...totaldatos].splice(0,numitem));
        setCurrentpage(0);
        setPrevdesabilitado(true);
    }
    function Next() {
        const totalelementos=totaldatos.length;
        const nexpage=currentpage+1;
        const firstindex=nexpage*numitem;
        if(firstindex>=totalelementos)return;
        setLista([...totaldatos].splice(firstindex,numitem));
        setCurrentpage(nexpage);
        setPrevdesabilitado(false);
    }
    function Previous() {
        const prevPage=currentpage-1;
        if(currentpage<=0){
            return;
        }
        if(prevPage<=0){
            setPrevdesabilitado(true);
        }
        const firstindex=prevPage*numitem;
        setLista([...totaldatos].splice(firstindex,numitem))
        setCurrentpage(prevPage);
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
           <Contador total={totaldatos.length} Next={Next} Previous={Previous} botondesabilitado={prevdesabilitado}/>

        </div>


    )

}
export default Paginator;