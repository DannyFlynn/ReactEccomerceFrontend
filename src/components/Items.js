import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MenuContext } from "./Context";
import { menu } from "./Menu";
import Home from "./Home";
import FullMenu from "./FullMenu";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Basket from "./Basket";
import Footer from "./Footer";

function Items() {
  const navigate = useNavigate();
  //main content
  const [items, setItems] = useState(menu);

  const [total, setTotal] = useState(0);
  //on mobile when user clicks items I want the basket to highlight to indicate basket has items
  const [mobileBasket, setMobileBasket] = useState(false);

  //function is used 3 components (FullMenu, CourseChoice, Basket) + to add to qty which shows in basket

  const addItems = (id, price, qty) => {
    const cost = price;
    setTotal((prev) => prev + cost);

    const basket = items.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          basket: obj.basket + 1,
        };
      }
      return obj;
    });
    //will display what items and quantity user has selected when basket is opened by user
    setItems(basket);
    //will highlight mobile basket when user has selected items
    setMobileBasket(true);
  };

  //decrement item quantity of choice
  const minusItems = (id, price, qty) => {
    const cost = price;
    setTotal((prev) => prev - cost);

    const basket = items.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          basket: obj.basket - 1,
        };
      }
      return obj;
    });
    setItems(basket);

    //basket is empty I want mobile basket to turn to its origial state (color)
    if (total.toFixed(2) - price === 0) {
      setMobileBasket(false);
      //navigate back to menu when no items are in the basket
      navigate("/menu");
    }
  };

  //clear basket and quantity
  const clearBasket = () => {
    setTotal(0);
    const basket = items.map((qty) => {
      return { ...qty, basket: 0 };
    });
    setItems(basket);
    //navigate back to menu when basket has cleared
    navigate("/menu");
    //basket is empty I want mobile basket to turn to its origial state (color)
    setMobileBasket(false);
  };

  return (
    <MenuContext.Provider value={items}>
      <Nav mobileBasket={mobileBasket} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/menu"
          element={
            <FullMenu
              addItems={addItems}
              footer={<Footer />}
              mobileBasket={mobileBasket}
            />
          }
        ></Route>
        <Route path="/about_us" element={<About footer={<Footer />} />}></Route>
        <Route
          path="/contact_us"
          element={<Contact footer={<Footer />} />}
        ></Route>
        <Route
          path="/basket"
          element={
            <Basket
              addItems={addItems}
              minusItems={minusItems}
              total={total}
              clearBasket={clearBasket}
            />
          }
        ></Route>
      </Routes>
    </MenuContext.Provider>
  );
}

export default Items;
