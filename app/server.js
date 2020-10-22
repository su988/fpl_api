const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const pool = require('./db.js')
const PORT = process.env.PORT || 5000;

const game_week = 5;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))  
  
}

app.get('/mini-league', async (req, res) => {
  try {
    const mini_league = await pool.query('SELECT * FROM mini_league WHERE game_week = $1 ORDER BY rank;', [game_week])

    res.json(mini_league.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/king', async (req, res) => {
  try {
    const king = await pool.query('SELECT * FROM mini_league WHERE game_week = $1 AND event_total = (SELECT MAX(event_total) FROM mini_league WHERE game_week = $1);', [game_week])

    res.json(king.rows);
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/highest-gw', async (req, res) => {
  try {
    const manager = await pool.query('SELECT * FROM mini_league WHERE event_total = (SELECT MAX(event_total) FROM mini_league);')

    res.json(manager.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/gw-winners', async (req, res) => {
  try {
    const winners = await pool.query(
      'SELECT a.game_week, a.player_name, a.event_total, a.entry_name \
        FROM mini_league AS a \
        JOIN (SELECT game_week, MAX(event_total) as event_total \
        FROM mini_league GROUP BY game_week) AS b \
        ON a.game_week = b.game_week AND a.event_total = b.event_total \
        ORDER BY game_week;')

    res.json(winners.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/players', async (req, res) => {
  try {
    const players = await pool.query('SELECT * FROM player_data WHERE game_week = $1;', [game_week])

    res.json(players.rows);
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`)
});


