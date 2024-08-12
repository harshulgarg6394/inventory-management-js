let inventory = [
  { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
  { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

function addItem(inventory, item) {
  inventory.push(item);
}

function updateItem(inventory, itemId, updates) {
  const item = inventory.find(item => item.id === itemId);
  if (item) {
    Object.assign(item, updates);
  }
}

function deleteItem(inventory, itemId) {
  const index = inventory.findIndex(item => item.id === itemId);
  if (index !== -1) {
    inventory.splice(index, 1);
  }
}

addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
console.log('After Adding Item:', inventory);

updateItem(inventory, 2, { quantity: 30 });
console.log('After Updating Item:', inventory);

deleteItem(inventory, 2);
console.log('After Deleting Item:', inventory);

// Output:

// After Adding Item: [
//   { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
//   { id: 2, name: 'Banana', quantity: 20, price: 0.2 },
//   { id: 3, name: 'Orange', quantity: 15, price: 0.7 }
// ]
// After Updating Item: [
//   { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
//   { id: 2, name: 'Banana', quantity: 30, price: 0.2 },
//   { id: 3, name: 'Orange', quantity: 15, price: 0.7 }
// ]
// After Deleting Item: [
//   { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
//   { id: 3, name: 'Orange', quantity: 15, price: 0.7 }
// ]
