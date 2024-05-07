let productsData = [
    { "name": "Ordinateur portable", "price": 999, "category": "Électronique", "stock": 10 },
    { "name": "Téléphone", "price": 699, "category": "Électronique", "stock": 8 },
    { "name": "T-shirt", "price": 20, "category": "Vêtements", "stock": 20 },
    { "name": "Pantalon", "price": 50, "category": "Vêtements", "stock": 15 },
    { "name": "Livre", "price": 10, "category": "Livres", "stock": 30 }
  ];
  

  const categories = new Set(productsData.map(product => product.category));
  const categoryFilter = document.getElementById('categoryFilter');
  categories.forEach(category => {
    const option = document.createElement('option');
    option.text = category;
    categoryFilter.add(option);
  });
  
  
  filterProducts();
  
 
  function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
  
    let filteredProducts = productsData.filter(product => {
      return (!category || product.category === category) &&
             (!searchInput || product.name.toLowerCase().includes(searchInput));
    });

    const sortType = localStorage.getItem('sortType');
    const sortDirection = localStorage.getItem('sortDirection');
    if (sortType && sortDirection) {
      filteredProducts = sortProducts(filteredProducts, sortType, sortDirection);
    }
  

    const totalPrice = filteredProducts.reduce((acc, product) => acc + product.price, 0);
    renderTotalPriceChart(totalPrice);
  
    // Trouver les produits en faible stock
    const lowStockProducts = filteredProducts.filter(product => product.stock < 5);
    renderLowStockChart(lowStockProducts);
  
    // Afficher les produits filtrés
    renderProductTable(filteredProducts);
  }
  
  // Trier les produits
  function sortProducts(products, sortType, sortDirection) {
    products.sort((a, b) => {
      let comparison = 0;
      if (a[sortType] > b[sortType]) {
        comparison = 1;
      } else if (a[sortType] < b[sortType]) {
        comparison = -1;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });
    return products;
  }
  
  // Rendre le graphique du prix total
  function renderTotalPriceChart(totalPrice) {
    const totalPriceChart = document.getElementById('totalPriceChart').getContext('2d');
    new Chart(totalPriceChart, {
      type: 'bar',
      data: {
        labels: ['Prix total'],
        datasets: [{
          label: 'Prix total des produits',
          data: [totalPrice],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Rendre le graphique des produits en faible stock
  function renderLowStockChart(lowStockProducts) {
    const lowStockCount = lowStockProducts.length;
    const lowStockChart = document.getElementById('lowStockChart').getContext('2d');
    new Chart(lowStockChart, {
      type: 'pie',
      data: {
        labels: ['Faible stock', 'Stock suffisant'],
        datasets: [{
          label: 'Stock des produits',
          data: [lowStockCount, productsData.length - lowStockCount],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }]
      }
    });
  }
  
  // Rendre la table des produits
  function renderProductTable(products) {
    const productTableBody = document.getElementById('productTableBody');
    productTableBody.innerHTML = '';
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>${product.stock}</td>
      `;
      productTableBody.appendChild(row);
    });
  }
  
  // Fonction de tri de la table
  function sortTable(sortType) {
    let sortDirection = 'asc';
    if (localStorage.getItem('sortType') === sortType && localStorage.getItem('sortDirection') === 'asc') {
      sortDirection = 'desc';
    }
    localStorage.setItem('sortType', sortType);
    localStorage.setItem('sortDirection', sortDirection);
    filterProducts();
  }
  