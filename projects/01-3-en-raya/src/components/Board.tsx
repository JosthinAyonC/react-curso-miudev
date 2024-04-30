import { Square } from './Square'

export const Board = ({ board, updateBoard, resetGame }: { board: any, updateBoard: any, resetGame: () => void }) => {
    return (
        <>
            <button onClick={resetGame}>Reset</button>
            <section className='game'>
                {
                    board.map(
                        (square: any, index: number) => (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard} // esto es pasar la función como referencia
                            // updateBoard={updateBoard(index)} esto es pasar la ejecución de la función
                            >
                                {square}
                            </Square>
                        )
                    )
                }
            </section>
        </>
    )
}