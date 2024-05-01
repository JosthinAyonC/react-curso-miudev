import React, { useState, useEffect } from 'react'
import './App.css'
import { Counter } from './components/Counter'

// Creamos un contexto para el tema de la aplicación
export const ThemeContext = React.createContext('');

function App() {
  // Use State es un hook que nos permite tener un estado en un componente funcional
  // count es el estado que vamos a tener
  // setCount es la función que nos permite modificar el estado
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  function toggleTheme(theme: string) {
    setTheme(theme)
  }

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
    // ThemeContext.Provider es un componente que nos permite pasar un valor a todos los componentes hijos
    // a traves del uso de useContext
    <ThemeContext.Provider value={theme}>
      <div className="themes">
        <button onClick={() => toggleTheme("dark")}><i className="bi bi-moon"></i></button>
        <button onClick={() => toggleTheme("light")}><i className="bi bi-sun"></i></button>
      </div>
      <Counter
        count={count}
        setCount={setCount}
      ></Counter>
    </ThemeContext.Provider>
  )
}

export default App
