import '../component/card-list';

const main = async () => {
  const cardListElement = document.querySelector('card-list');
  try {
    const response = await fetch("https://www.thesportsdb.com/api/v1/json/1/all_sports.php");
    const responseJson = await response.json();
    if (responseJson.error) {
      console.log(responseJson.message);
    } else {
      console.log(responseJson.sports);
      // assignment data ke component card list
      cardListElement.cards = responseJson.sports;
    }
  } catch (error) {
    console.log(error);
  }
}

export default main;