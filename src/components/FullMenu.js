import { useContext, useState } from "react";
import { MenuContext } from "./Context";
import CourseChoice from "./CourseChoice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FullMenu({ addItems, footer, mobileBasket }) {
  const items = useContext(MenuContext);
  //boolean to filter from full menu a filtered course
  const [dishType, setDishType] = useState([]);
  const [selectedDish, setSelectedDish] = useState(false);
  const [underLine, setUnderLine] = useState("full menu");

  //when user selects a course dish (starter, main, dessert... full menu loads first then options to filter them out)
  const dishMenu = (selected) => {
    const dishArray = [];
    items.map((dish) => {
      if (dish.course === selected && selected !== "full menu") {
        dishArray.push(dish);
        setSelectedDish(true);
        setUnderLine(selected);
      } else if (selected === "full menu") {
        setSelectedDish(false);
        setUnderLine("full menu");
      }
    });
    return setDishType(dishArray);
  };

  return (
    <div className="d-sm-flex flex-sm-column align-items-center fullmenu">
      <Link to="/basket">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="3x"
          className={
            mobileBasket === false
              ? "mobile-basket-icon"
              : "mobile-basket-highlight"
          }
        />
      </Link>

      <div className="d-flex justify-content-center align-items-center col-12 bg-light">
        <div className="d-flex">
          <p
            className={
              underLine === "full menu"
                ? "p-3 text-decoration-underline course-cursor"
                : "p-3 course-cursor"
            }
            onClick={() => dishMenu("full menu")}
          >
            full menu
          </p>
          <p
            className={
              underLine === "Starter"
                ? "p-3 text-decoration-underline course-cursor"
                : "p-3 course-cursor"
            }
            onClick={() => dishMenu("Starter")}
          >
            starter
          </p>
          <p
            className={
              underLine === "Main"
                ? "p-3 text-decoration-underline course-cursor"
                : "p-3 course-cursor"
            }
            onClick={() => dishMenu("Main")}
          >
            main
          </p>
          <p
            className={
              underLine === "Dessert"
                ? "p-3 text-decoration-underline course-cursor"
                : "p-3 course-cursor"
            }
            onClick={() => dishMenu("Dessert")}
          >
            dessert
          </p>
        </div>
      </div>
      {selectedDish === false ? (
        items.map((dish) => (
          <div
            key={dish.id}
            className="card d-flex flex-column justify-content-center align-items-center m-4 m-sm-5 p-3 menu fst-italic"
          >
            <h3 className="text-decoration-underline p-sm-1">{dish.course}</h3>
            <h4 className="p-sm-1">{dish.dish}</h4>
            <p>£{dish.price}</p>
            <button
              className="btn btn-success"
              onClick={() => addItems(dish.id, dish.price, dish.basket)}
            >
              Add
            </button>
          </div>
        ))
      ) : (
        <CourseChoice dishType={dishType} addItems={addItems} />
      )}
      {footer}
    </div>
  );
}

export default FullMenu;
