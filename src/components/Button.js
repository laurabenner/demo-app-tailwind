export function Button ({ onClick, toggled, text }) {
    return (
        <button className={toggled + " appearance-none border-2 rounded-full px-5 py-2.5 m-2 " + (toggled === "toggled" ? "border-asia-trail bg-asia-trail text-white" : "text-asia-trail")} onClick={onClick}>{text}</button>
    );
}