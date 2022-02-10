const fetchProducts = async () => {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador';
  const result = await fetch(endpoint);
  const data = await result.json();

  return data.results;
};

console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
