import { useContext } from "react";
import { MenuContext } from "./Context";

function CourseChoice({ dishType, addItems }) {
  const items = useContext(MenuContext);
  const filterItems = items.filter(
    (dish) => dish.course === dishType[0].course
  );

  return (
    <div className="d-sm-flex flex-sm-column align-items-center justify-content-center">
      <h3 className="text-decoration-underline m-3 text-center">
        {dishType[0].course}
      </h3>
      {filterItems.map((dish) => (
        <div
          key={dish.id}
          className="card d-flex flex-column justify-content-center align-items-center m-4 m-sm-5 p-3 selected-course fst-italic"
        >
          <h3>{dish.dish}</h3>
          <p className="p-sm-2">£{dish.price}</p>
          <button
            className="btn btn-success"
            onClick={() => addItems(dish.id, dish.price, dish.basket)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseChoice;
