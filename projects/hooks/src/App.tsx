import { useState, useEffect } from 'react'
import './App.css'
import { Counter } from './components/Counter'

function App() {
  // Use State es un hook que nos permite tener un estado en un componente funcional
  // count es el estado que vamos a tener
  // setCount es la función que nos permite modificar el estado
  const [count, setCount] = useState(0)

  // UseEffect es un hook que nos permite ejecutar código al renderizar el componente
  // El primer parámetro es la función que se va a ejecutar
  // El segundo parámetro es un arreglo de dependencias, si alguna de las dependencias cambia, se ejecuta la función
  // Si el segundo argumento se le pasa un array vacio quiere decir que solo se ejecutará una vez
  useEffect(() => {
    console.log('El valor del contador ha cambiado:', count);

    // Si queremos ejecutar código al desmontar el componente, retornamos una función
    // Con desmontar nos referimos a que el componente ya no se va a renderizar
    return () => {
      console.log('El componente se desmontó');
    }
  }, [count]);

  return (
    <Counter
      count={count}
      setCount={setCount}
    ></Counter>
  )
}

export default App
