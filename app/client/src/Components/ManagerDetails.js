import React, {Fragment} from 'react'

const ManagerDetails = ({data, title}) => {
  
  return (
    <Fragment>
      <div className='gg-crown-parent'>
        <i className="gg-crown"></i>
        <h4>{title}</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Score</th>
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
