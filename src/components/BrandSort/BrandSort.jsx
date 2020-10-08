import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth/actions";
import {
  addSortBrand,
  removeSortBrand,
  resetBrands,
} from "../../store/brands/actions";
import { fetchAPI } from "../../api";

const BrandSort = () => {
  const [brands, setBrands] = useState({
    brands: [],
  });
  const [brandSelected, setSelectBrand] = useState(0);
  const [active, setActive] = useState(false);
  const brandsCount = useSelector((store) => store.brands);
  const token = useSelector((store) => store.auth.currentUser.token);
  const dispatch = useDispatch();

  const fetchBrandList = useCallback(() => {
    const params = {
      token: token,
    };
    fetchAPI
      .fetchBrandsFromServer({
        type: "brands",
        ...params,
      })
      .then((response) => {
        console.log(response);
        if (response.error === 401) {
          localStorage.removeItem("user");
          dispatch(logoutUser());
        } else if (response.status === 200) {
          setBrands({
            brands: response.data.data,
          });
        }
      });
  }, [token, dispatch]);

  useEffect(() => {
    fetchBrandList();
    setSelectBrand(brandsCount.brands.length);
  }, [brandsCount, token, fetchBrandList]);

  const turnOffCheckbox = () => {
    let checkboxes = document.querySelectorAll(".brands-checkbox");
    checkboxes.forEach((item) => (item.checked = false));
  };

  const toggleSelectBrands = () => {
    setActive(!active);
  };

  return (
    <div className="brandsSelect">
      <div className="brandsContainer">
        <button
          className="toggleBrandSelect"
          onClick={() => toggleSelectBrands()}
        >
          {brandSelected > 0
            ? `${brandSelected} casino selected`
            : "All casinos selected"}
        </button>
        <div className={`brands ${active ? "is-active" : null}`}>
          {!!brands.brands
            ? brands.brands.map(({ id, attributes: { name } }, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="brand"
                    value={id}
                    className="brands-checkbox"
                    onChange={(e) =>
                      e.target.checked
                        ? dispatch(addSortBrand(e.target.value))
                        : dispatch(removeSortBrand(e.target.value))
                    }
                  />
                  {name}
                </label>
              ))
            : "brand list is empty"}
        </div>
      </div>
      <button
        className="resetBrandList"
        onClick={() => {
          turnOffCheckbox();
          dispatch(resetBrands());
        }}
      >
        All Brands
      </button>
    </div>
  );
};

export default BrandSort;

// console.log(response);
//         if (response.error === 401) {
//           handleLogout();
//         } else if (response.status === 200) {
//           setBrands({
//             brands: response.data.data,
//             error: false,
//           });
//         }
