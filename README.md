# hooverIndexJs
A simple ES6 implementation of the [Hoover Index](https://en.wikipedia.org/wiki/Hoover_index). The hoover index is a value that indicates the inequality within a list of values, e.g. for income or wealth. Thus, it is similar to the [Gini-Coefficient](https://en.wikipedia.org/wiki/Gini_coefficient) (But easier to implement). While it is most commonly used to measure economic inequality, nothing hinders you to use it to measure the (in) equality of editing contributions in a Wiki or amount of food eaten by party guest or whatever. 

## Functions

<dl>
<dt><a href="#getSumOfArray">getSumOfArray(list)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getAverageOfArray">getAverageOfArray(list)</a> ⇒ <code>number</code></dt>
<dd></dd>
</dl>

<a name="hooverFromIncomeList"></a>

## hooverFromIncomeList(incomes) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - the hoover score

Each entry in the incomes array is the income of one person.   

| Param | Type | Description |
| --- | --- | --- |
| incomes | <code>Array.&lt;number&gt;</code> | array of edit counts of different users |

<a name="hooverFromAggregatedIncomes"></a>

## hooverFromAggregatedIncomes(aggregatedCounts) ⇒ <code>number</code>
**Kind**: global function
**Returns**: <code>number</code> - the hoover score

This function processes the aggregated and shorter form to 
store edit count data: a certain income and how many people have this income (frequency)  

| Param | Type | Description |
| --- | --- | --- |
| aggregatedCounts | <code>Array.&lt;object&gt;</code> | array of incomes, aggregated by their frequency |
| aggregatedCounts[].income | <code>number</code> | the income |
| aggregatedCounts[].frequency | <code>number</code> | how often that income is. |

