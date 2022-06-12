import React,{useState,useEffect} from "react";
import axios from "axios";
import './App.css';
import Paginator from "./components/Paginador";
function App() {
    const[usuarios,setUsuarios]=useState([]);
    const[tablausuario,setTablausuario]=useState([]);
    const[busqueda,setBusqueda]=useState('');
    const peticionget= async ()=>{
       await axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setUsuarios(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }
    useEffect(()=>{peticionget().then()},[]);
  return (
    <div className="App">
     <Paginator/>
    </div>
  );
}

export default App;
