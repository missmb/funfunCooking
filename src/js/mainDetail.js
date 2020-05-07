import './component/food-detail';
import './component/food-item';
import DataSource from './data-source.js';


const mainDetail = () =>

{
    const foodDetail = document.querySelector("food-detail");

    const foodItemD = document.querySelector("food-item");

            const onDetailCLicked = async () => {
                try{
                    const result = await DataSource.datafood(foodItemD.textContent);
                    renderResultD(result);
                } catch (message) {
                    fallbackResultD(message)
                }
     
            };
    const renderResultD = results =>
    {
        foodDetail.foodd = results;
    };

    const fallbackResultD = (message) =>
     {
        foodDetail.renderErrord(message);
    };

    foodItemD.clickEventD = onDetailCLicked;
};

export default mainDetail;