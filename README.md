# hooverIndexJs
A simple ES6 implementation of the HooverIndex

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

As we do not need to know the names of the accounts that made the edits
this can be just an array of edit counts  

| Param | Type | Description |
| --- | --- | --- |
| incomes | <code>Array.&lt;number&gt;</code> | array of edit counts of different users |

<a name="hooverFromAggregatedIncomes"></a>

## hooverFromAggregatedIncomes(aggregatedCounts) ⇒ <code>number</code>
**Kind**: global function
**Returns**: <code>number</code> - the hoover score

This function processes the aggregated and shorter form to 
store edit count data: a certain income and how many accounts have this income (frequency)  

| Param | Type | Description |
| --- | --- | --- |
| aggregatedCounts | <code>Array.&lt;object&gt;</code> | array of incomes, aggregated by their frequency |
| aggregatedCounts[].income | <code>number</code> | the income |
| aggregatedCounts[].frequency | <code>number</code> | how often that income is. |

