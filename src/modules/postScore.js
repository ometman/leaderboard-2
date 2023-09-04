const gameId = 'sFze7oYgPxXGi7TMBazQ';
const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/+${gameId}/scores/`;

const postNewScore = async (gameData) => {
  await fetch(`${gameUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameData),
  });
};

export default postNewScore;
