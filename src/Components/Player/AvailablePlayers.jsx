import React from 'react';
import Card from '../Player Card/Card';


const AvailablePlayers = ({players, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {
    console.log(players)
    return (
        <div className='container mx-auto'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            {players.map((player, index) => <Card key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>)}
            </div>

        </div>
    );
};

export default AvailablePlayers;