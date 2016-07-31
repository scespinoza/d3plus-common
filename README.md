# d3plus-common

[![NPM Release](http://img.shields.io/npm/v/d3plus-common.svg?style=flat)](https://www.npmjs.org/package/d3plus-common)
[![Build Status](https://travis-ci.org/d3plus/d3plus-common.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-common)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-common.svg?style=flat)](https://david-dm.org/d3plus/d3plus-common)
[![Slack](https://img.shields.io/badge/Slack-Click%20to%20Join!-green.svg?style=social)](https://goo.gl/forms/ynrKdvusekAwRMPf2)

Common functions and methods used across D3plus modules.

## Installing

If you use NPM, `npm install d3plus-common`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-common/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a [custom bundle using Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3plus.org](https://d3plus.org):

```html
<script src="https://d3plus.org/js/d3plus-common.v0.5.full.min.js"></script>
```


## API Reference
### Functions

<dl>
<dt><a href="#accessor">accessor(key, [def])</a></dt>
<dd><p>Wraps an object key in a simple accessor function.</p>
</dd>
<dt><a href="#colorNest">colorNest(raw, fill, [groupBy])</a></dt>
<dd><p>Returns an Array of data objects based on a given color accessor and groupBy levels.</p>
</dd>
<dt><a href="#constant">constant(value)</a></dt>
<dd><p>Wraps non-function variables in a simple return function.</p>
</dd>
<dt><a href="#getSize">getSize(elem)</a></dt>
<dd><p>Finds the available width and height for a specified HTMLElement, traversing it&#39;s parents until it finds something with constrained dimensions. Falls back to the inner dimensions of the browser window if none is found.</p>
</dd>
<dt><a href="#merge">merge(objects)</a></dt>
<dd><p>Combines an Array of Objects together and returns a new Object.</p>
</dd>
<dt><a href="#stylize">stylize(elem, styles)</a></dt>
<dd><p>Applies each key/value in an object as a style.</p>
</dd>
</dl>

<a name="accessor"></a>

### accessor(key, [def])
Wraps an object key in a simple accessor function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key to be returned from each Object passed to the function. |
| [def] | <code>\*</code> | A default value to be returned if the key is not present. |

**Example** *(this)*  
```js
accessor("id");
    
```
**Example** *(returns this)*  
```js
function(d) {
  return d["id"];
}
```
<a name="colorNest"></a>

### colorNest(raw, fill, [groupBy])
Returns an Array of data objects based on a given color accessor and groupBy levels.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| raw | <code>Array</code> |  | The raw data Array to be grouped by color. |
| fill | <code>function</code> |  | The color accessor for each data object. |
| [groupBy] | <code>Array</code> | <code>[]</code> | An optional array of grouping accessors. Will autodetect if a certain group by level is assigning the colors, and will return the appropriate accessor. |

<a name="constant"></a>

### constant(value)
Wraps non-function variables in a simple return function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> &#124; <code>Number</code> &#124; <code>Object</code> &#124; <code>String</code> | The value to be returned from the function. |

**Example** *(this)*  
```js
constant(42);
    
```
**Example** *(returns this)*  
```js
function() {
  return 42;
}
```
<a name="getSize"></a>

### getSize(elem)
Finds the available width and height for a specified HTMLElement, traversing it's parents until it finds something with constrained dimensions. Falls back to the inner dimensions of the browser window if none is found.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>HTMLElement</code> | The HTMLElement to find dimensions for. |

<a name="merge"></a>

### merge(objects)
Combines an Array of Objects together and returns a new Object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| objects | <code>Array</code> | The Array of objects to be merged together. |

**Example** *(this)*  
```js
merge([
  {id: "foo", group: "A", value: 10},
  {id: "bar", group: "A", value: 20}
]);
    
```
**Example** *(returns this)*  
```js
{id: ["bar", "foo"], group: "A", value: 30}
```
<a name="stylize"></a>

### stylize(elem, styles)
Applies each key/value in an object as a style.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>D3selection</code> | The D3 element to apply the styles to. |
| styles | <code>Object</code> | An object of key/value style pairs. |



###### <sub>Documentation generated on Sun, 31 Jul 2016 16:40:36 GMT</sub>
