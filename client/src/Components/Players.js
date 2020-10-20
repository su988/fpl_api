import React, {Fragment, useState, useEffect} from 'react'

const Players = () => {
  // const [mid, setMid] = useState([])
  // const [fwd, setFwd] = useState([])
  // const [def, setDef] = useState([])

  const getPlayers = async () => {
    try {
      const response = await fetch('http://localhost:5000/players');
      const jsonData = await response.json();

      // console.log(jsonData)
    } catch (err) {
        console.error(err.message)
    }
  }

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <Fragment>

    </Fragment>
  )
}

export default Players;
