const fetchProducts = async () => {
  const apiLink = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador';
  const request = await fetch(apiLink);
  const data = await request.json();

  return data.results;
};

console.log(fetchProducts())

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
