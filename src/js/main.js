import './component/food-detail';
import './component/food-item';
import './component/food-list.js';
import './component/search-bar.js';
import DataSource from './data-source.js';


const main = () =>

{
    const searchElement = document.querySelector("search-bar");
    
    const foodListElement = document.querySelector("food-list");

    const foodDetail = document.querySelector("food-detail");

    const foodItemD = document.querySelector("food-item");
   
    const onButtonSearchClicked = async () => {
                try{
                    const result = await DataSource.searchfood(searchElement.value);
                    renderResult(result);
                } catch (message) {
                    fallbackResult(message)
                }
     
            };
            const onDetailCLicked = async () => {
                try{
                    const result = await DataSource.datafood(foodItemD.textContent);
                    renderResultD(result);
                } catch (message) {
                    fallbackResultD(message)
                }
     
            };

 
    const renderResult = results =>
    {
        foodListElement.foods = results;
    };

    const renderResultD = results =>
    {
        foodDetail.foodd = results;
    };

    const fallbackResult = (message) =>
     {
        foodListElement.renderError(message);
    };

    const fallbackResultD = (message) =>
     {
        foodDetail.renderErrord(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
    foodItemD.clickEventD = onDetailCLicked;
};

export default main;