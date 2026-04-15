import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({player, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {

  const [isPlayerSelected, setPlayerSelected] = useState(false);

  const handleChoosePlayerBtn = () =>{
    if(coin>= player.price){
      setPlayerSelected(true);
      setCoin(coin-player.price);
      setSelectedPlayers([...selectedPlayers, player]);
      toast.success("Purchased "+player.playerName);
      // alert("Pruchased "+player.playerName);
    }
    else{
      // alert("Not enough coin");
      toast.error("Not enough coin");
    }
  }

    return (
        <div>
<div className="card bg-base-100 shadow-sm">
  <figure>
    <img className='h-60 w-full'
      src={player.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    {/* name */}
    <h2 className="card-title"><FaUser />{player.playerName}</h2> 


    <div className='flex items-center justify-between'>
        <div className='flex flex-row gap-2 items-center'>
            <FaFlag />
            <p>{player.playerCountry}</p>
        </div>
        <button className='btn btn-xs sm:btn-sm'>{player.playerType}</button>
    </div>

    {/* divider */}
     <div className="divider"></div>

     {/* description */}

    <h1 className='font-semibold'>Rating: {player.rating}</h1>
    <div className='flex justify-between'>
        <p className='font-semibold'>{player.battingStyle}</p>
        <p className='text-right'>{player.bowlingStyle}</p>
    </div>
    <div className="card-actions justify-end flex items-center mt-1.5">
        <p className='font-semibold'>Price: ${player.price}</p>
      <button 
      className={`${isPlayerSelected? "btn btn-soft btn-primary btn-sm btn-disabled" : "btn btn-primary btn-sm"}`} 
      onClick={handleChoosePlayerBtn}>

        {isPlayerSelected? "Selected": "Choose Player"}
        
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;