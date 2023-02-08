import { useItemsCrud } from "../context/ItemsCrudContext";
import MealsItem from "./MealsItem";

const Meals = () => {
  const { itemsData } = useItemsCrud();

  const renderItemsList = itemsData.map((item) => {
    return <MealsItem item={item} key={item.id} />;
  });

  return (
    <div>
      <h2>Available Meals List</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa
        laboriosam inventore voluptatem nihil quia fugiat architecto sunt vel
        magnam minima, praesentium facilis iure esse mollitia! Aliquid autem
        aperiam veritatis.
      </p>
      <div>
        renderItemsList, this is a list of items coming from api:
        <h2>Meals Item</h2>
        <div>{renderItemsList}</div>
      </div>
    </div>
  );
};
export default Meals;
