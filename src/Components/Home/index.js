import React, {useState, useEffect, useContext} from 'react';
import CommentContext from '../Context/Coments/CommentContext';


export default function Home() {

  const ctxComments = useContext(CommentContext)

  const {
    comments,
    getAllComments,
    createComment
  } = ctxComments
  const [ data , setData] = useState ({
    title: "",
    description: ""
  })
  const [ error , setError] = useState("")

  useEffect (()=> {
    getAllComments()
  } , []) 
  // ciclo  de vida que se carga una vez, para mandar a llamar los componentes
  
  const handleChange = (event)=> {
    setData ({
      ...data,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!data.title || !data.description){
      return setError("tienes campos vacios")
    }
    console.log(data);
    createComment(data);

  setData({
    title: "",
    description: ""
  })

  return setError
  }
  


  return (
      <>
       <h1> Seccion de comentarios</h1>
       <form onSubmit={ (evt) => {handleSubmit(evt)}}>
          <label> Titulo</label>
          <input 
          name="title"
          value={data.title}
          onChange={ (evt) => {handleChange(evt)}}
          />
          <label> Descripcion</label>
          <input 
          name="description"
          value={data.description}
          onChange={ (evt) => {handleChange(evt)}}
          />
          <button type='submit'> Enviar datos</button>
       </form>
          {error ? error: null}
       <h2> Listado de comentarios</h2>

      <ul>
        {
          comments.map((e, index) => {
           return(
                <li key={index}>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
              </li>
           )
          })
        }
      </ul>
      </>
  );
}
