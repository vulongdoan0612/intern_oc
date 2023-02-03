export const getData = async (url, token) => {
  const res = await fetch(`https://tiki.vn/api/v2/products/${url}`, {
    method: "GET",

  });

  const data = await res.json();
  return data;
};
