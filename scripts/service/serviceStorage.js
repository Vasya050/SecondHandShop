export const getStorage = (key) =>
  localStorage.getItem(key) ?
    JSON.parse(localStorage.getItem(key)) : [];


export const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
};

export const toggleStorage = (key, id) => {
  const data = getStorage(key);
  const setData = new Set(data);
  if (setData.has(id)) {
    setData.delete(id);
  } else {
    setData.add(id);
  }

  setStorage(key, [...setData]);
}