![GitHub Workflow Status](https://img.shields.io/github/workflow/status/PrimitiveSocial/clockwork/NodeCI)
[![CodeFactor](https://www.codefactor.io/repository/github/primitivesocial/clockwork/badge)](https://www.codefactor.io/repository/github/primitivesocial/clockwork)
![NPM](https://img.shields.io/npm/l/@primitivesocial/clockwork)

# Clockwork
Clockwork is a client-side validation utilities library. 
It can be used natively or as part of any javascript framework, and offers __25+__ validation rules out of out the box.  

## Installation
Pull it via npm
```
npm i @primitivesocial/clockwork --save
```

## Usage
```js
import {is_string, min} from "primitivesocial/clockwork";

let name = 'primitive';

if(is_string(name) && min(name, 3))
    window.alert('name is valid');
```

## Available Rules
- **`after`** Validates if a given value (date string) is after another value (date string)
```js
let d = '2020-5-1';
after(d, '2020-1-1'); // returns true
```
- **`after_or_equal`** Validates if a given value (date string) is after or equal to another value (date string)
```js
let d = '2020-5-1';
after_or_equal(d, '2020-1-1'); // returns true
```
- **`alpha`** Validates if a given value (string) contains only letters
```js
let str = 'clockwork';
alpha(str); // returns true
```
- **`alpha_dash`** Validates if a given value (string) contains only letters, dashes and underscores
```js
let str = 'primtivesocial-clock_work';
alpha_dash(str); // returns true
```
- **`alpha_numeric`** Validates if a given value (string) contains only letters and numbers
```js
let str = 'clockwork123';
alpha_numeric(str); // returns true
```
- **`before`** Validates if a given date value (date string) is before another value (date string)
```js
let d = '2020-5-1';
before(d, '2020-5-5'); // returns true
```
- **`before_or_equal`** Validates if a given value (date string) is before or equal to another value (date string)
```js
let d = '2020-5-1';
before_or_equal(d, '2020-1-1'); // returns true
```
- **`boolean`** Validates that a given value is boolean
```js
let str = 'clockwork';
let isValid = false;
boolean(str); // returns false
boolean(isValid); // returns true
```
- **`date`** Validates if a given value (date string) is a valid date
```js
let d = '2020-5-1';
date(d); // returns true
```
- **`different`** Validates if a given value (numbers, strings, array and objects) is different from another value
```js
let str = 'clockwork';
let str2 = 'primitive'
different(str, str2); // returns true
```
- **`ends_with`** Validates that a given value (string) ends with a specific string 
```js
let str = 'clockwork';
ends_with(str, 'work'); // returns true
```
- **`integer`** Validates if a given value is an integer 
```js
let str = 'clockwork';
let amount = 100;
integer(str); // returns false
integer(amount); // returns true
```
- **`is_array`** Validates if a given value is an array 
```js
let arr = [ 'foo', 'bar'];
let amount = 100;
is_array(arr); // returns true
is_array(amount); // returns false
```
- **`is_in`** Validates if a given value (string) is exists in an array, or a comma separated string 
```js
let str = 'foo';
is_in(str, ['foo', 'bar']); // returns true
is_in(str, 'foo,bar') // returns true
```
- **`is_string`** Validates if a given value is a string 
```js
let str = 'foo';
is_string(str); // returns true
```
- **`json`** Validates if a given value is a json object 
```js
let obj = { foo: 'bar'};
json(obj); // returns true
```
- **`length`** Validates the length of a given value (string and arrays) 
```js
length('foo', 3); // returns true
length(['foo', 'bar'], 2); // returns true
```
- **`matches_regex`** Validates if a given value matches a specific regex 
```js
let email = "elie@leadwithprimitive.com";
matches_regex(email, "^\\S+@\\S+[\\.][0-9a-z]+$"); // return true
```
- **`max`** Validates if a given value (number and string) is less than the maximum specified 
```js
let amount = 100;
max(amount, 200); // returns true

let str='foobar';
max(str, 10); // returns true
```
- **`min`** Validates if a given value (number and string) is more than the maximum specified 
```js
let amount = 100;
min(amount, 10); // returns true

let str='foobar';
min(str, 3); // returns true
```
- **`not_in`** Validates if a given value (string) does not exist in an array, or a comma separated string 
```js
let str = 'foo';
not_in(str, ['clockwork', 'primitive']); // returns true
not_in(str, 'clockwork,primitive') // returns true
```
- **`numeric`** Validates if a given value is numeric 
```js
let amount = 100.75;
numeric(amount); // returns true
```
- **`required`** Validates if a given value is present 
```js
let str = 'primitive';
let word = '';
required(str); // returns true;
required(word); // returns false;
```
- **`same`** Validates if a given value (numbers, strings, array and objects) is the same as another value
```js
let str = 'clockwork';
let str2 = 'primitive'
same(str, str2); // returns false
```
- **`starts_with`** Validates that a given value (string) starts with a specific string 
```js
let str = 'clockwork';
starts_with(str, 'clock'); // returns true
```
- **`url`** Validates if a given value (string) is valid url 
```js
let str = 'https://example.com';
url(str); // returns true
```
- **`uuid`** Validates if a given value (string) is a valid uuid 
```js
let str = '9034dfa4-49d9-4e3f-9c6d-bc6a0e2233d1';
uuid(str); // returns true
```

## Author & Contribution
Hey, I'm Elie Andraos, a web developer at [Primitive](https://twitter.com/lead_primitive).
Pull requests are always welcome. For major changes, please open an issue first to discuss what you would like to change.
You can also [reach me out on twitter](https://twitter.com/andzilla31) for any question!