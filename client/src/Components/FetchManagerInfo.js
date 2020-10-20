import React, {Fragment, useState, useEffect} from 'react'
import ManagerDetails from './ManagerDetails';

const FetchManagerInfo = () => {
  const [highestManager, setHighestManager] = useState([])
  const [king, setKing] = useState([])

  const getKingOfWeek = async () => {
    try {
      const response = await fetch('http://localhost:5000/king');
      const jsonData = await response.json();
     
      // console.log(jsonData)
      setKing(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  const getHighestManager = async () => {
    try {
      const response = await fetch('http://localhost:5000/highest-gw');
      const jsonData = await response.json();

      // console.log(jsonData)
      setHighestManager(jsonData)
    } catch (err) {
        console.log(err.message)
    }
  }

  useEffect(() => {
    getHighestManager();
    getKingOfWeek();
  }, []);
  
  return (
    <Fragment>
      <ManagerDetails title={"King of the Week"} data={king}/>
      <ManagerDetails title={'Highest GW Score'} data={highestManager}/>
    </Fragment>
    
  )
}

export default FetchManagerInfo;
