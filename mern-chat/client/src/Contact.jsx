import Avatar from "./Avatar";

export default function Contact(id) {
    return (
        <div key={id.id} onClick={() => id.onClick(id)} 
             className={"border-b border-gray-100 flex gap-2 cursor-pointer " + (id.selected ? 'bg-blue-50' : '')}>
            {id.selected && (
                <div className="w-2 bg-blue-500 h-12 rounded-r-md"></div>
            )}
            <div className="flex gap-2 py-2 pl-4 items-center">
                <Avatar online={id.online} username={id.username} userId={id.id} />
                <span className="text-gray-800"> {id.username} </span>
            </div>
        </div>
    );
}