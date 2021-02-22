import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const Game = () => {
    const {id} = useParams()
    const {data: game, error, isPending} = useFetch('http://localhost:8000/games/' + id)
    const history = useHistory()

    /*const goToRatePage = () => {
        history.push(`/rate/${game.id}`)
    }*/

    return ( 
        <div id='gameInfo'>
            {isPending && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {game && (
                <article>
                    <h1>{game.name}</h1>
                    <p>Critic Rating: {game.ratingCritics}</p>
                    <p>Public Rating: {game.ratingPublic}</p>
                    {/*<button onClick={goToRatePage}>Rate Game</button>*/}
                </article>
            )}
        </div>
     );
}
 
export default Game;