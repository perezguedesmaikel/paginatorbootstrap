import React,{useState,useEffect} from "react";
import Contador from "./Contador";
import Navbar from "./Navbar";
import axios from "axios";
const datos_api=Array.from({length:100},(value,index)=>{
  return{id:index,title:`Item #${index}`,email:'maikel@gmail.com'}
});
let numitem=10;

function Paginator() {
    const[totaldatos,setTotaldatos]=useState([]);
    const [lista,setLista]=useState([]);
    const[tablausuario,setTablausuario]=useState([]);
    const[guardarlista,setGuardarlista]=useState([]);
    const [nextdesabilitado,setNextdesabilitado]=useState(false);
    const [prevdesabilitado,setPrevdesabilitado]=useState(true);
    const [currentpage,setCurrentpage]=useState(0);
    const peticionget= async ()=>{
        await axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setTotaldatos(response.data);
            setTablausuario(response.data);

        }).catch(error=>{
            console.log(error);
        });
    }

    useEffect(()=>{

        setLista([...totaldatos].splice(0,numitem));
    },[totaldatos]);
    useEffect(()=>{
        if(totalpageint===1){
            setNextdesabilitado(true);
        }
    },[lista]);
    //const [totaldatos,setTotaldatos]=useState(datos_api);


    let totalpage=totaldatos.length/numitem;
    let totalpageint=0;
    if (Number.isInteger(totalpage)){
        totalpageint=totalpage;
    }else
    {
        totalpageint=totalpage.toFixed();
    }
    let arreglototalpaginas=Array.from({length:totalpageint-1},(value,index)=>{
        return{id:index}
    });
    useEffect(()=>{

        peticionget().then();

    },[]);
    function hadleonselect(e) {
        numitem=parseInt(e.target.value);
      //console.log(parseInt(e.target.value));
        setLista([...totaldatos].splice(0,numitem));
        setCurrentpage(0);
        setPrevdesabilitado(true);
        setNextdesabilitado(false);
    }
    function Next() {
        const totalelementos=totaldatos.length;
        const nexpage=currentpage+1;
        const firstindex=nexpage*numitem;
        if(firstindex>=totalelementos)return;
        if(nexpage+1>=totalpageint){
            setNextdesabilitado(true);
        }
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
        setNextdesabilitado(false);

    }
    function handlingancla(val) {
        setCurrentpage(val-1);
        setLista([...totaldatos].splice((val-1)*numitem,numitem));
        if(val===1){
            setPrevdesabilitado(true);
        }else{
            setPrevdesabilitado(false);
        }
        if(val===totalpageint){
            setNextdesabilitado(true)
        }else{
            setNextdesabilitado(false)
        }
    }
    //arreglar este codigo
    function input(e) {
        //setBusqueda(e.target.value);
        setGuardarlista(lista);
        buscar(e.target.value);
        if (e.target.value===''){
            setLista(guardarlista);
        }
    }
    function buscar(terminobusqueda) {
        if(terminobusqueda!==''){

            let resultadoBusqueda=tablausuario.filter(elemento=>{
                if(elemento.name.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
                    return elemento;
                }
            });
            setLista(resultadoBusqueda);
        }else{
            setLista(guardarlista);
            console.log('aqui esta jorge');
        }


    }
    //hatsa aqui lo que hayq eu arreglar
    return(
        <div className='container border'>
            <Navbar hadleonselect={hadleonselect} input={input}/>
            <table className="table table table-striped table-bordered mb-1 mt-1 table-hover table-responsive-sm">
               <thead className='table-primary'>
               <tr>
                   <th>id</th>
                   <th>Email</th>
                   <th>Title</th>
               </tr>
               </thead>
                    <tbody>
                    {

                        lista.length>0?lista.map(item=><tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                        </tr>):<tr><td>Cargando datos...</td></tr>
                    }
                    </tbody>
                <tfoot className='table table-primary fw-bold'>
                <tr>
                    <td>{totaldatos.length}</td>
                    <td>Email</td>
                    <td>Title</td>
                </tr>
                </tfoot>
            </table>
           <Contador total={totalpageint} Next={Next} Previous={Previous} botondesabilitado={prevdesabilitado}
                     nextdesabilitado={nextdesabilitado} arreglototalpaginas={arreglototalpaginas} currentpage={currentpage}
           handlingancla={handlingancla}
           />

        </div>


    )

}
export default Paginator;