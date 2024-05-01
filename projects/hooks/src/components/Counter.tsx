import { useContext } from "react";
import { ThemeContext } from "../App";


export const Counter = ({ count, setCount }: { count: number, setCount: (value: number) => void }) => {

    // useContext es un hook que nos permite pasar un contexto a un componente
    // sin necesidad de usar un componente de orden superior (ver imagen de assets)
    // En este caso, obtenemos el valor del contexto ThemeContext
    const theme = useContext(ThemeContext);

    return (
        <>
            <h1>Contador: {count}</h1>
            <button className={theme} onClick={() => setCount(count + 1)}>+</button >
            <button className={theme} onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}