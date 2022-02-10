const fetchItem = async (itemId) => {
  const endpoint = `https://api.mercadolibre.com/items/${itemId}`;
  const result = await fetch(endpoint);
  const data = await result.json();

  return data;
};

console.log(fetchItem('MLB1341706310'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
