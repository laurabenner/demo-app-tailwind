export function Button ({ onClick, toggled, text }) {
    return (
        <button className={toggled + " border-2 border-gray-200 rounded-full px-5 py-2.5 m-2 text-teal-900"} onClick={onClick}>{text}</button>
    );
}