import MealItem from "./MealItem";

const Meals = ({ meals }) => {
    return (
        <ul id="meals">
            {meals.length > 0 ? (
                meals.map((meal) => <MealItem key={meal.id} meal={meal} />)
            ) : (
                <p></p> //?
            )}
        </ul>
    )
}

export default Meals