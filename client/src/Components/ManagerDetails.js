import React, {Fragment} from 'react'

const ManagerDetails = ({data, title}) => {
  
  return (
    <Fragment>
      <div>
        <h2>{title}</h2>
        <table className='table w-75 m-auto '>
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {data.map((player) => (
            <tr key={player.id}>
              <td>{player.player_name}</td>
              <td>{player.entry_name}</td>
              <td>{player.event_total}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default ManagerDetails
