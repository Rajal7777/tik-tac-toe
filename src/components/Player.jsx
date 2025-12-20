import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prevState) => !prevState);
    }

    function handleChange(event) {
        // console.log(event.target.value);
        setPlayerName(event.target.value);
    }

    //let btnCaption = 'Edit';
    let initialPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        initialPlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        //btnCaption = 'Save';
    }
    return (
        <li>
            <span className="player">
                {initialPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}