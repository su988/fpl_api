import React, {Fragment, useState, useEffect} from 'react'
import ManagerDetails from './ManagerDetails';
import './ManagerDetail.css';

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
      <div className='manager_detail_container'>
        <div className='king manager_detail'>
        <ManagerDetails title={'Manager of the Week'} data={king}/>
        </div>
        <div className="highest_score manager_detail">
          <ManagerDetails title={'Highest GW Score'} data={highestManager}/>
        </div>
      </div>
      
    </Fragment>
    
  )
}

export default FetchManagerInfo;
