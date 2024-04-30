import { WINNER_LINES } from '../environments/Constants';

export const checkWinner = (boardToCheck: any) => {
    for (const line of WINNER_LINES) {
        const [a, b, c] = line;
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
};

export const checkEndGame = (boardToCheck: any) => {
    return boardToCheck.every((square: any) => square !== null);
}