/**
 * @param {number[]} list 
 * @returns {number} sum of array
 */
const getSumOfArray = (list) => list.reduce((prev, curr) => prev + curr)

/**
 * @param {number[]} list 
 * @returns {number} average of array
 */
const getAverageOfArray = (list) => getSumOfArray(list) / list.length;

/**
 * @param {number[]} list 
 * @param {number} [cachedMean] - optional: provide mean, so it does not need to be recalculated
 * @returns {number} sum of all   differences of list entries to the mean of the whole list. 
 */
const getSumDifferencesToMean = (list, cachedMean) => {
  let mean = cachedMean || getAverageOfArray(list);
  return list.reduce((prev, curr) => prev + Math.abs(curr - mean), 0)
};

/**
 * @param {number[]} incomes - array of edit counts of different users
 * @returns {number} the hoover score
 * 
 * As we do not need to know the names of the accounts that made the edits
 * this can be just an array of edit counts
 */
const hooverFromIncomeList = function (incomes) {

  const averageIncome = getAverageOfArray(incomes);
  const totalSumOfIncome = getSumOfArray(incomes);
  const sumOfDifferencesToMean = getSumDifferencesToMean(incomes, averageIncome);

  const hoover = 0.5 * (sumOfDifferencesToMean / totalSumOfIncome)

  return hoover;
}


/**
 * @param {object[]} aggregatedCounts - array of edit counts, aggregated by frequency
 * @param {number} aggregatedCounts[].edits - the edit count
 * @param {number} aggregatedCounts[].frequency - how often that edit count is.
 * @returns {number} the hoover score
 * 
 * This function processes the aggregated and shorter form to 
 * store edit count data: a certain edit count (edits) and how many accounts have this edit count (frequency)
 * 
 */
const hooverFromAggregatedCounts = function (aggregatedIncomes) {
  const sumOfAccounts = aggregatedIncomes.reduce((prev, curr) => prev + (curr.frequency), 0);
  const totalSumOfIncome = aggregatedIncomes.reduce((prev, curr) => prev + (curr.edits * curr.frequency), 0);
  const averageIncome = totalSumOfIncome / sumOfAccounts;
  const sumOfDifferencesToMean = aggregatedIncomes.reduce((prev, curr) => prev + ((Math.abs(curr.edits - averageIncome)) * curr.frequency), 0);

  const hoover = 0.5 * (sumOfDifferencesToMean / totalSumOfIncome);

  return hoover;
}


export {
  hooverFromAggregatedCounts,
  hooverFromIncomeList,
  getSumOfArray,
  getAverageOfArray,
  getSumDifferencesToMean
}   