import React, { useState, useEffect, useCallback } from "react";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";
import { fetchAPI } from "../../api";
import "./assets.scss";

export const Assets = () => {
  const [assets, setAssets] = useState([]);
  const brandsList = useSelector((store) => store.brands);
  const token = useSelector((store) => store.auth.currentUser.token);

  let sortVariable = "";
  if (brandsList.brands.length !== 0) {
    brandsList.brands.map((brand) => {
      return (sortVariable += `&brand_ids[]=${brand}`);
    });
  }

  const fetchAssets = useCallback(() => {
    const params = {
      sort: sortVariable,
      token: token,
      type: "default_assets",
      assetsType: "?asset_types[]=logo",
    };
    fetchAPI
      .fetchAssetsFromServer({
        ...params,
      })
      .then(({ data: { data } }) => {
        console.log(data);
        setAssets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sortVariable, token]);

  useEffect(() => {
    fetchAssets();
  }, [brandsList, fetchAssets]);

  return (
    <>
      <Title title="Assets" />
      <div className="assets-list">
        {assets
          ? assets.map(({ attributes: { id, src, brand, href } }) => (
              <div key={id} className="asset">
                <div className="asset-thumb">
                  <img
                    src={`https://www.winningpartner.com:26134${src}`}
                    alt={brand}
                  />
                </div>
                <div className="asset-description">
                  <span className="casino-title">{`Casino: ${brand}`}</span>
                  <div className="asset-link">
                    <span className="tag">{`<a href="${href}"><img src"https://www.winningpartner.com:26134${src}" alt="${brand}" /></a>`}</span>
                  </div>
                </div>
              </div>
            ))
          : "There is no data"}
      </div>
    </>
  );
};
