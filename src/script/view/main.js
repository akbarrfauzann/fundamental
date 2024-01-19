import "../component/search-bar.js";
import "../component/drink-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const drinkItemElement = document.querySelector("drink-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchDrink(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    drinkItemElement.drinks = results;
  };

  const fallbackResult = (message) => {
    drinkItemElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
