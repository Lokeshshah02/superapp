import React, { useEffect, useState } from "react";
import "./category.scss";
import { CategoryData } from "../dataset/Data";
import { RxCross1 } from "react-icons/rx";
import { IoWarningSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const [selectCategory, setSelectCategory] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleSelection = (categoryId) => {
    if (selectCategory.includes(categoryId)) {
      setSelectCategory((prevSelected) =>
        prevSelected.filter((id) => id !== categoryId)
      );
    } else {
      setSelectCategory((prevSelected) => [...prevSelected, categoryId]);
    }
  };

  const handleCancel = (categoryId) => {
    setSelectCategory((prevSelected) =>
      prevSelected.filter((id) => id !== categoryId)
    );
  };

  const handleNextButton = () => {
    if (selectCategory.length >= 3) {
      setWarning(false);
      navigate("/details");
    } else {
      setWarning(true);
    }
  };

  useEffect(() => {
    if (selectCategory.length === 0) {
      setWarning(false);
    } else if (selectCategory.length < 3) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [selectCategory]);

  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="category-container">
            <h2>Super app</h2>
            <p>Choose your entertainment category</p>

            <div className="button-container">
              {CategoryData.map((categoryId) => {
                const cardData = CategoryData.find(
                  (item) => item.id === categoryId
                );
                return (
                  <div className="button" >
                      <button key={categoryId}>
                    {cardData && (
                        <>
                          {cardData.title}
                          <span>
                            <RxCross1
                              onClick={() => handleCancel(categoryId)}
                              />
                          </span>
                              </>
                        
                        )}
                      </button>
                  </div>
                );
              })}
            </div>

            {warning && (
              <p className="warning">
                <span>
                  <IoWarningSharp />
                </span>
                Minimum 3 category required
              </p>
            )}
          </div>

          <div className="selection-container">
            <div class="grid-container">
              {CategoryData.map((items, id) => {
                const background = {
                  backgroundColor: items.background,
                  border: selectCategory.includes(items.id)
                    ? "5px solid #11B800"
                    : "none",
                };

                return (
                  <div
                    className="grid-item"
                    key={id}
                    style={background}
                    onClick={() => handleSelection(items.id)}
                  >
                    <h2>{items.title}</h2>
                    <img src={items.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={handleNextButton}>Next Page</button>
        </div>
      </div>
    </>
  );
};

export default Category;
