export default function Avatar({userId, username}) {
    const colours = ['bg-red-200', 'bg-green-200', 'bg-purple-200',
                     'bg-pink-200', 'bg-yellow-200', 'bg-orange-200', 'bg-teal-200'];

    const userIdBase10 = parseInt(userId, 16);
    const colourIndex = userIdBase10 % colours.length;
    const colour = colours[colourIndex];
    return (
        <div className={"w-8 h-8 rounded-full flex items-center "+colour}>
            <div className="text-center w-full font-bold opacity-70">
                {username[0].toUpperCase()}
            </div>
        </div>
    );
}