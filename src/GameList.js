import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'

const GameList = ({title, games}) => {
    const ratingColor = (rating) => {
        if(rating >= 75){
            return "#3fd611"
        }else if(rating >= 50){
            return "#fbff17"
        }else{
            return "#ff2a17"
        }
    }
    
    return(
        <div className='gameList'>
            <h1>{title}</h1>
            <div className='gameListDiv'>
                {games.map((game) => (
                    <div id='game' key={game.id}>
                        <Link to={`/game/${game.id}`}>
                            <h2>{game.name}</h2>
                            <img src={game.gameCover}/>
                            <div className="gradeBox" style={{"backgroundColor": ratingColor(game.ratingCritics)}}>
                                <p>{game.ratingCritics}</p>
                            </div>
                            
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GameList