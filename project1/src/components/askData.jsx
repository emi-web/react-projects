import data from "../data.json";

export const askData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const askItemId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No product faund",
      });
    }
  });
};
