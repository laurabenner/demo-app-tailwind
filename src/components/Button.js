export function Button ({ onClick, toggled, text }) {
    return (
        <button className={toggled} onClick={onClick}>{text}</button>
    );
}