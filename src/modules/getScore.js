const gameId = 'sFze7oYgPxXGi7TMBazQ';
const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/+${gameId}/scores/`;

const recordedScores = async () => {
  let theScoreList;
  try {
    const response = await fetch(`${gameUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const scoreList = await response.json();
    theScoreList = scoreList.result;
  } catch (error) {
    theScoreList = [];
  }
  return theScoreList;
};

export default recordedScores;