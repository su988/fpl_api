import React, {Fragment, useState, useEffect} from 'react'
import PlayerInfo from './PlayerInfo';
import './Players.css'

const Players = () => {
  const [mid, setMid] = useState([])
  const [fwd, setFwd] = useState([])
  const [def, setDef] = useState([])
  const [gk, setGk] = useState([])

  const getPlayers = async () => {
    try {
      const response = await fetch('/players');
      const jsonData = await response.json();

      const midfielders = jsonData.filter(obj => obj.position === 'MID')
      const defenders = jsonData.filter(obj => obj.position === 'DEF')
      const forwards = jsonData.filter(obj => obj.position === 'FWD')
      const keepers = jsonData.filter(obj => obj.position === 'GK')

      setMid(midfielders)
      setFwd(forwards)
      setDef(defenders)
      setGk(keepers)
    } catch (err) {
        console.error(err.message)
    }
  }

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <Fragment>
      <div className="players">
        <PlayerInfo data={fwd} title={"Attackers"}/>
        <PlayerInfo data={mid} title={'Midfielders'}/>
        <PlayerInfo data={def} title={'Defenders'}/>
        <PlayerInfo data={gk} title={'Goalkeepers'}/>
      </div>
    </Fragment>
  )
}

export default Players;
