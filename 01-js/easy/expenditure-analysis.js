

module.exports = calculateTotalSpentByCategory;
function calculateTotalSpentByCategory(transactions) {
  const categoryMap = new Map();

  // Iterate over each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;

    // If the category already exists in the map, add the price to its total
    if (categoryMap.has(category)) {
      const totalSpent = categoryMap.get(category);
      categoryMap.set(category, totalSpent + price);
    }
    // Otherwise, add a new entry in the map for the category
    else {
      categoryMap.set(category, price);
    }
  }

  // Convert the map to an array of objects
  const result = [];
  for (const [category, totalSpent] of categoryMap) {
    const categoryObject = { [category]: totalSpent };
    result.push(categoryObject);
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
