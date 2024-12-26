const items = [
    { id: 1, name: 'Shampoo', description: 'High-quality shampoo for car wash', category: 'wash', price: 10 },
    { id: 2, name: 'Detailing Spray', description: 'Detailing spray for shine and protection', category: 'detailing', price: 15 },
    { id: 3, name: 'Wax', description: 'Protective wax for long-lasting shine', category: 'protection', price: 20 },

  ];
  
  
  export const getItems = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(items.filter(item => item.category === categoryId));
        } else {
          resolve(items);
        }
      }, 1000); 
    });
  };
  
 
  export const getItem = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.find(item => item.id === parseInt(id)));
      }, 1000); 
    });
  };