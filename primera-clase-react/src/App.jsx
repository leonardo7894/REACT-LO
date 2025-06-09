import './App.css'
import { Users } from './components/users'
// sui el import es no nombrado van llaves
import Employees from './components/employde'
// si el import es no nombrado o por default es sin llaves  
function App() 
// el componente es una funcion que devuelve un contenido renderizable
// el componente siempre arranca con mayuscula
// npm run  dev es para correr el programa
{

  return (
  <>
    <Users name = "leonardo"/>
    hola mundo
    <Employees/>
  </>
  )
}

export default App
