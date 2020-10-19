const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.js')

const game_week = 4

app.use(cors());
app.use(express.json());

app.get('/mini-league', async (req, res) => {
  try {
    const mini_league = await pool.query('SELECT * FROM mini_league WHERE game_week = $1 ORDER BY rank;', [game_week])

    res.json(mini_league.rows);
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


app.listen(5000, () => {
  console.log(`server is up and running on port 5000`)
});


