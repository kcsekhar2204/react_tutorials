export default function Square({ value, onSquareClick, classes }) {
    return <button className={"square " + classes} onClick={onSquareClick}>{value}</button>
}