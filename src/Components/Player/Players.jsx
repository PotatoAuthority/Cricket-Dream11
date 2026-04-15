import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Players = ({playersPromise, coin, setCoin}) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    const [selected, setSelected] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    // console.log(data);
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between mt-6 mb-6 gap-4 md:gap-0'>

                {/* <p className='text-[20px] font-semibold'>Available Players</p> */}

                {
                    selected==="available"?
                        <p className='text-[20px] font-semibold'>Available Players</p> :
                        <p className='text-[20px] font-semibold'>Selected Players ({selectedPlayers.length}/{players.length})</p>
                }

                <div className='flex'>
                    <button onClick={()=> setSelected("available")} 
                        className={`btn ${selected==="available"? "btn-primary" : ""} rounded-r-none rounded-2xl`}>
                            Available
                    </button>

                    <button onClick={()=> setSelected("selected")} 
                        className={`btn ${selected==="selected"? "btn-primary" : ""} rounded-l-none rounded-2xl`}>Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
                
            {/* Players: {players.length} */}
            {/* <AvailablePlayers players={players}></AvailablePlayers> */}

            {
                selected==="available"?
                    <AvailablePlayers players={players} coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>
            }
        </div>
    );
};

export default Players;