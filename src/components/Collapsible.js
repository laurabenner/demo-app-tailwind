export function Collapsible({ onClick, expanded }) {
    return (
        <button className="collapsible" onClick={onClick} data-expanded={expanded}></button>
    );
}