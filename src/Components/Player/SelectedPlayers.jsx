import React from 'react';
import SelectedCard from './SelectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    console.log(selectedPlayers);
    return (
        <div className='flex flex-col gap-3'>
            {/* Selected Players */}
            { 
                selectedPlayers.length === 0? 
                <div className='card bg-base-100 shadow-sm text-center mt-10 p-10'>
                    <p className='font-bold text-2xl md:text-3xl mb-2'>No Players Selected</p>
                    <p className='text-1xl md:text-2xl'>Please select players from available page</p>
                </div>
                :
            selectedPlayers.map((player, index) => <SelectedCard 
                key={index} 
                player={player} 
                selectedPlayers={selectedPlayers} 
                setSelectedPlayers={setSelectedPlayers} 
                coin={coin} 
                setCoin={setCoin}>

                </SelectedCard>)}
        </div>
    );
};

export default SelectedPlayers;