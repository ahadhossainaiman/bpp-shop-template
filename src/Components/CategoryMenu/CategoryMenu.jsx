/* eslint-disable react/no-unknown-property */
import "./CategoryMenu.css";

import { useEffect, useState } from "react";

const CategoryMenu = () => {
  const [categoriesMenu, setCategoriesMenu] = useState([]);
  useEffect(() => {
    fetch(`https://backend.bppshop.com.bd/api/v1/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0].icon);
        setCategoriesMenu(data.data);
      });
  }, []);
  return (
    <div className="hero_menu">
      <ul className="hero_content">
        {categoriesMenu.map((category, index) => {
          return (
            <li key={index} className="menu-list">
              <div className="category_icon">
                <img
                  src={`https://backend.bppshop.com.bd/storage/category/${category?.icon}`}
                  alt=""
                />
              </div>
              <div className="menu_item">
                <p>{category.name}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="#8A8A8A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="dropdown-menu">
                <ul className="sub-menu">
                  {category.childes.map((subMenu) => {
                    // console.log(subMenu);
                    return (
                      <>
                        <li className="sub-menu-list">
                          <div className="sub_menu_item">
                            <p>{subMenu.name}</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6 12L10 8L6 4"
                                stroke="#8A8A8A"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="dropdown-menu-1">
                            <ul className="sub-menu-1">
                              <h1>{subMenu.name}</h1>
                            
                            {
                              subMenu.childes[0] ? <div className="mega-sub-menu">
                              {subMenu?.childes?.map((subSubMenu) => {
                                console.log("a",subSubMenu);
                                return (
                                  <>
                        
                                 
                                      <div className="mega-sub-menu-item">
                                        {!subSubMenu?.icon ? (
                                          <img src="../../../public/No-image-found.jpg" />
                                        ) : (
                                          <img
                                            src={`https://backend.bppshop.com.bd/storage/category/${subSubMenu?.icon}`}
                                            alt=""
                                          />
                                        )}

                                        <p>{subSubMenu.name}</p>
                                      </div>
                                   
                                  </>
                                );
                              })}
                            </div> : <div className="error-msg"><p>Not Found</p></div>
                            }
                              
                            </ul>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryMenu;
