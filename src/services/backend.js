import * as URL from "../constants/url";

// Clear Cache of API
export const clearCache = async () => {
  const response = await fetch(URL.CLEAR_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  console.log(data);
};

// Post image to API
export const imageUploaderToApi = async (selectedFile) => {
  const formData = new FormData();

  if (selectedFile !== null) {
    formData.append("image", selectedFile);
    const response = await fetch(URL.UPLOAD_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();

    return data;
  }
};

// Edit Line Items
export const updateItemToApi = async (dataObject) => {
  console.log(dataObject);
  console.log(typeof dataObject);

  if (dataObject !== null) {
    const response = await fetch(URL.UPDATE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObject),
    });
    const data = await response.json();

    return data;
  }
};

// Function to SEND Name List to API
export const addPeopleToApi = async (nameList) => {
  const response = await fetch(URL.ADD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nameList),
  });

  const data = await response.json();

  console.log(data);
};

// Function to GET Name List to API
export const getPeopleFromApi = async () => {
  const response = await fetch(URL.GET_URL, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};

// Fetching Final Item Split Data
export const getFinalItemsFromApi = async (finalObj) => {
  const response = await fetch(URL.GET_FINAL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(finalObj),
  });

  const data = await response.json();

  return data;
};

// Function to GET Taxes to API
export const getTaxesFromApi = async () => {
  const response = await fetch(URL.GET_TAXES, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};

// Function to SAVE Taxes to API
export const saveTaxesToApi = async (dataObject) => {
  const response = await fetch(URL.SET_TAXES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataObject),
  });

  const data = await response.json();

  return data;
};
