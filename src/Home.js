import React, { useEffect} from 'react';
import GameList from './GameList'
import useFetch from './useFetch'

const Home = () => {

    const {data: games, isPending, error} = useFetch('http://localhost:8000/games')
    return (
        <div>
            {games && <GameList title='Relevant Games' games={games}/>}
        </div>
    )
}

export default Home