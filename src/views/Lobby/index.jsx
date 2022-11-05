import { useAtom } from "jotai"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { createGame, getGames } from "../../api"
import { gamesAtom, userAtom } from "../../store"

export const Lobby = () => {
  const [games, setGames] = useAtom(gamesAtom)
  const [user] = useAtom(userAtom)
  const [creating, setCreating] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    getGames().then(({ data, error }) => {
      if (error) {
        alert(error)
      } else {
        setGames(data.games);
      }
    })
  }, [])

  const create = async () => {
    setCreating(true)
    if (!creating) {
      console.log(user)
      const { data, error } = await createGame(user)
      if (error) {
        alert(error)
      } else {
        const game = data.game;
        navigate("/game/" + game.id);
      }
      setCreating(false);
    }
  }

  return (
    <div>
      <h1>Lobby</h1>
      <div>
        <input type="text" />
        <button onClick={create}>Create Game</button>
      </div>

      <ul>
        {games.map(game => <li key={game.id}>
          <strong>{game.id}</strong>
          <span className="mx-4">{game.users[0].nickname}</span>
          <Link to={"/game/"+game.id} className={`border-yellow-500 border-[2px] px-2`}>Join</Link>
        </li>)}
      </ul>
    </div>
  )
}
