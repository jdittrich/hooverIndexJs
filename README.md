# hooverIndexJs
A simple ES6 implementation of the HooverIndex

## Functions

<dl>
<dt><a href="#getSumOfArray">getSumOfArray(list)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getAverageOfArray">getAverageOfArray(list)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getSumDifferencesToMean">getSumDifferencesToMean(list, [cachedMean])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#hooverFromIncomeList">hooverFromIncomeList(incomes)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#hooverFromAggregatedCounts">hooverFromAggregatedCounts(aggregatedCounts)</a> ⇒ <code>number</code></dt>
<dd></dd>
</dl>

<a name="getSumOfArray"></a>

## getSumOfArray(list) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - sum of array  

| Param | Type |
| --- | --- |
| list | <code>Array.&lt;number&gt;</code> | 

<a name="getAverageOfArray"></a>

## getAverageOfArray(list) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - average of array  

| Param | Type |
| --- | --- |
| list | <code>Array.&lt;number&gt;</code> | 

<a name="getSumDifferencesToMean"></a>

## getSumDifferencesToMean(list, [cachedMean]) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - sum of all   differences of list entries to the mean of the whole list.  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array.&lt;number&gt;</code> |  |
| [cachedMean] | <code>number</code> | optional: provide mean, so it does not need to be recalculated |

<a name="hooverFromIncomeList"></a>

## hooverFromIncomeList(incomes) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - the hoover score

As we do not need to know the names of the accounts that made the edits
this can be just an array of edit counts  

| Param | Type | Description |
| --- | --- | --- |
| incomes | <code>Array.&lt;number&gt;</code> | array of edit counts of different users |

<a name="hooverFromAggregatedCounts"></a>

## hooverFromAggregatedCounts(aggregatedCounts) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - the hoover score

This function processes the aggregated and shorter form to 
store edit count data: a certain edit count (edits) and how many accounts have this edit count (frequency)  

| Param | Type | Description |
| --- | --- | --- |
| aggregatedCounts | <code>Array.&lt;object&gt;</code> | array of edit counts, aggregated by frequency |
| aggregatedCounts[].edits | <code>number</code> | the edit count |
| aggregatedCounts[].frequency | <code>number</code> | how often that edit count is. |
