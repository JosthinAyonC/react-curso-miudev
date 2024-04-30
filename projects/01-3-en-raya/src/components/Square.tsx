export const Square = ({ children, isSelected, updateBoard, index }:
    { children: any, isSelected?: boolean, updateBoard?: any, index?: number }) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`;
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div
            className={className}
            onClick={handleClick}
        >
            {children}
        </div>
    )
}