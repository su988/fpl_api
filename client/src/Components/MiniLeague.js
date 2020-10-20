import React, {Fragment, useState, useEffect} from 'react'

const MiniLeague = () => {
  const [league, setLeague] = useState([])

  const getLeague = async () => {
    try {
      const response = await fetch('http://localhost:5000/mini-league');
      const jsonData = await response.json();
     
      // console.log(jsonData)
      setLeague(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getLeague();
  }, []);

  return (
    <Fragment>
      <div>
        <h2>OG League</h2>
        <table className='table w-75 m-auto '>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>GW</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {league.map((manager) => (
            <tr key={manager.entry}>
              <td>{manager.rank}</td>
              <td>{manager.entry_name}</td>
              <td>{manager.event_total}</td>
            <td>{manager.total}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </Fragment>
  )
}

export default MiniLeague;
