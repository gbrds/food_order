import Button from "./UI/Button";

const MealItem = (props) => {
    const { meal } = props;

    if (!meal) {
        return <p>Meal data is missing!</p>;
    }

    return (
        <li>
            <article>
                <img className="img" src={require(`../assets/${meal.image}`)} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(meal.price)}</p>
                    <p>{meal.description}</p>
                </div>
                <p>
                    <Button textOnly={false} onClick={() => console.log('Added ${meal.name} to cart!')}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem