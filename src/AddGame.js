import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddGame = () => {
    const [gameName, setName] = useState('')
    const [gameCriticsRating, setCriticsRating] = useState(0)
    const [gamePublicRating, setPublicRating] = useState(0)
    const [gameCover, setCover] = useState(0)
    const [gameID, setID] = useState(0)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        const game = {
            "name": gameName,
            "ratingCritics": gameCriticsRating,
            "ratingPublic": gamePublicRating,
            "gameCover": gameCover,
            "id": gameID
        }

        fetch('http://localhost:8000/games', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(game)
        }).then(
            history.push('/')
        )
       
    }

    return ( 
        <div id="addGameForm" onSubmit={handleSubmit}>
            <h1>Add Game</h1>
            <form action="#">
                <label htmlFor="gameName">Name of the Game: </label>
                <input id="gameName" type="text" required onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label htmlFor="gameCriticsRating">Critics Rating: {gameCriticsRating} </label>
                <input id="gameCriticsRating" type="range" required min="0" max="100" onChange={(e) => setCriticsRating(parseInt(e.target.value))}/>
                <br/>
                <label htmlFor="gamePublicRating">Critics Rating: {gamePublicRating} </label>
                <input id="gamePublicRating" type="range" required min="0" max="100" onChange={(e) => setPublicRating(parseInt(e.target.value))}/>
                <br/>
                <label htmlFor="gameCover">Game Cover: </label>
                <input id="gameCover" type="text" required onChange={(e) => setCover(e.target.value)}/>
                <br/>
                <label htmlFor="gameID">Game ID: </label>
                <input id="gameID" type="text" required onChange={(e) => setID(e.target.value)}/>
                <br/>
                <button>Add Game</button>
            </form>
        </div> 
    );
}
 
export default AddGame;