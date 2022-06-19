import React,{useState,useEffect} from "react";
import Contador from "./Contador";
import Navbar from "./Navbar";
import axios from "axios";
import ContadorBusqueda from "./ContadorBusqueda";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Modal from "./modal";
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
    const [modobusqueda,setModobusqueda]=useState(false);
    const [prevdesabilitado,setPrevdesabilitado]=useState(true);
    const [resultBusqueda,setResultBusqueda]=useState(0);
    const [currentpage,setCurrentpage]=useState(0);
    const [formEnvioSucces,setFormEnvioSucces]=useState(false);
    const [imput1,setImput1]=useState('');
    const [imput2,setImput2]=useState('');
    const [currentUser,setCurrentUser]=useState({});
    const [inputchange1,setInputchange1]=useState('');
    const [inputchange2,setInputchange2]=useState('');
    const [estadosubmit,setEstadosubmit]=useState(false);
    const [tarea,setTarea]=useState([]);
    const peticionget= async ()=>{
        await axios.get('http://localhost:9000/api').then(response=>{
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
    let totalpageint=1;
    if (totalpage % 1===0){
        totalpageint=totalpage;
    }else
    {
        totalpageint=parseInt(totalpage.toFixed())+1;
        if(totalpageint-totalpage>1){
            totalpageint=totalpageint-1;
        }

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

    function input(e) {
        buscar(e.target.value);
        if (e.target.value===''){
            setLista([...totaldatos].splice(0,numitem));
        }

    }
    function buscar(terminobusqueda) {

        if(terminobusqueda!==''){
            setModobusqueda(true);
            let resultadoBusqueda=tablausuario.filter(elemento=>{
                if(elemento.name.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
                    return elemento;
                }
            });
            setLista(resultadoBusqueda);
            setResultBusqueda(resultadoBusqueda.length);
        }else{
            setModobusqueda(false);
            setLista(guardarlista);

        }
    }
    function handleSubmitmia(valor){
        setImput1('');
        setImput2('');
        setFormEnvioSucces(true);
        valor.id=totaldatos.length+2;
        setTotaldatos([...totaldatos,valor]);

        //console.log(valor);
        axios({
            method  : 'post',
            url : 'http://localhost:9000/api',
            data : valor,
        })
            .then((res)=>{
                console.log(res);
            })
            .catch((err) => {throw err});
        setTimeout(()=>setFormEnvioSucces(false), 3000);
    }

   function imput21(e) {
        setImput1(e.target.value);
        setFormEnvioSucces(false);
   }
    function imput22(e) {
        setImput2(e.target.value);
        setFormEnvioSucces(false);
    }
    function clicbotonform() {
        setFormEnvioSucces(false);
    }
    function editar(val) {
        setEstadosubmit(false);
       setCurrentUser(val);

    }
    function eliminar(val) {
        const filtrar=totaldatos.filter(dato=> (dato.id !==val)
        );
        setTotaldatos(filtrar);
        axios({
            method  : 'delete',
            url : `http://localhost:9000/api/${val}`,
        })
            .then((res)=>{
                console.log(res);
            })
            .catch((err) => {throw err});
    }
    function actualizar(tarea) {
        setEstadosubmit(true);
        const condicion=totaldatos.map(datos=>(datos.id===tarea.id?tarea:datos));
                setTotaldatos(condicion);
        axios({
            method  : 'put',
            url : `http://localhost:9000/api/${tarea.id}`,
            data:tarea,
        })
            .then((res)=>{
                console.log(res);
            })
            .catch((err) => {throw err});
    }

    return(
        <div className='container border'>
            <Navbar hadleonselect={hadleonselect} input={input} totaldatos={totaldatos} handleSubmitmia={handleSubmitmia}
                    formEnviosucces={formEnvioSucces} imput1={imput21} imput2={imput22} imput11={imput1} imput22={imput2}
                    clicbotonform={clicbotonform}
            />
            <table className="table table table-striped table-bordered mb-1 mt-1 table-hover table-responsive-sm">
               <thead className='table-primary table-responsive-sm'>
               <tr>
                   <th className='col-1'>id</th>
                   <th className='col-5 desaparecercel'>Email</th>
                   <th className='col-5'>Title</th>
                   <th className='col-1'>Edición</th>

               </tr>
               </thead>
                    <tbody>
                    {
                        lista.length>0?lista.map(item=><tr key={item.id}>
                            <td>{item.id}</td>
                            <td className='desaparecercel'>{item.email}</td>
                            <td>{item.name} </td>
                            <td><AiFillEdit className='text-primary cursorpointer' onClick={()=>editar(item)}
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop"/> |
                                <AiFillDelete className='text-danger cursorpointer' onClick={()=>eliminar(item.id)}/> </td>
                        </tr>):<tr><td> </td><td> </td><td>No hay datos para mostrar verifique su API o su filtro...</td><td> </td></tr>
                    }
                    </tbody>
                <tfoot className='table table-primary fw-bold table-responsive-sm'>
                <tr>
                    <td>{totaldatos.length}</td>
                    <td className='desaparecercel'>Email</td>
                    <td>Title</td>
                    <td>Edición</td>
                </tr>
                </tfoot>
            </table>
           <Contador total={totalpageint} Next={Next} Previous={Previous} botondesabilitado={prevdesabilitado}
                     nextdesabilitado={nextdesabilitado} arreglototalpaginas={arreglototalpaginas} currentpage={currentpage}
           handlingancla={handlingancla} modobusqueda={modobusqueda}
           />
           <ContadorBusqueda resultBusqueda={resultBusqueda} modobusqueda={modobusqueda}/>
           <Modal  actualizar={actualizar}
                  currentuser={currentUser} estadosubmit={estadosubmit}/>
        </div>


    )

}
export default Paginator;