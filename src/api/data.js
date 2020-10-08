import axios from "axios";

const baseUrl = `https://winningpartner.com:26134/api/v2/reports/`;
const brandsUrl = `https://winningpartner.com:26134/api/v2/`;

const fetchDataFromServer = async ({
  token,
  type = "dynamic_variables",
  sort = "",
  date = "",
  page = 1,
  search,
}) => {
  try {
    const response = await axios
      .get(`${baseUrl}${type}?${date}${sort}&page=${page}${search}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((e) => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const fetchDataWithoutDateFromServer = async ({
  token,
  type = "links",
  sort = "",
}) => {
  let sortable = sort ? `?${sort}` : "";
  try {
    const response = await axios
      .get(`${brandsUrl}${type}${sortable}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((e) => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const fetchAssetsFromServer = async ({
  token,
  type = "links",
  sort = "",
  assetsType = "?asset_types[]=logo",
}) => {
  let sortable = sort ? `${sort}` : "";
  try {
    const response = await axios
      .get(`${brandsUrl}${type}${assetsType}${sortable}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((e) => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const fetchBrandsFromServer = async ({ token, type = "brands" }) => {
  try {
    const response = await axios
      .get(`${brandsUrl}${type}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((error) => {
        throw error.response.status;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const fetchAPI = {
  fetchDataFromServer,
  fetchBrandsFromServer,
  fetchDataWithoutDateFromServer,
  fetchAssetsFromServer,
};

export default fetchAPI;
