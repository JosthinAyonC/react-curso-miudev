import { Square } from "./Square";
import { TURNS } from "../environments/Constants";

export const Turn = ({ turn }: { turn?: string }) => {
    return (
        <section className="turn">
            <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
            <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
    )
}