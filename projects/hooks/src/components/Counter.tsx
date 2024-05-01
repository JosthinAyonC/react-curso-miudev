

export const Counter = ({ count, setCount }: { count: number, setCount: (value: number) => void }) => {
    return (
        <>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}