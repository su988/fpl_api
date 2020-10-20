import React, {Fragment, useState, useEffect} from 'react'
import PlayerInfo from './PlayerInfo';

const Players = () => {
  const [mid, setMid] = useState([])
  const [fwd, setFwd] = useState([])
  const [def, setDef] = useState([])
  const [gk, setGk] = useState([])

  const getPlayers = async () => {
    try {
      const response = await fetch('http://localhost:5000/players');
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
      <PlayerInfo data={fwd} title={"Forwards"}/>
      <PlayerInfo data={mid} title={'Midfielders'}/>
      <PlayerInfo data={def} title={'Defenders'}/>
      <PlayerInfo data={gk} title={'Goalkeepers'}/>

    </Fragment>
  )
}

export default Players;
