import React from 'react';

const SelectedCard = ({player, selectedPlayers, setSelectedPlayers, coin, setCoin}) => {

    const handleDelete = (player) =>{
        console.log(player.playerName, "is deleted");
        const filteredPlayers = selectedPlayers.filter(person => person.playerName != player.playerName);
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin+player.price);
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-sm flex flex-row p-4 justify-between items-center gap-3 md:gap-0">
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className="w-[100px] card"
                        src={player.image}
                        alt="Movie" />
                    </div>
                    <div>
                        <h2 className="card-title">{player.playerName}</h2>
                        <p>{player.battingStyle}</p>
                    </div>
                </div>
                <div className="">
                    
                    <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(player)} className="btn btn-soft btn-error btn-sm md:btn-md">Remove</button>
                    </div>
                </div>
</div>
        </div>
    );
};

export default SelectedCard;