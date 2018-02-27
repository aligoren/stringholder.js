# String Holder

Simple string place holder with VanillaJS

# Usage

**HTML Structure**

For example these are elements that will use by **stringholder.js**

```html
<div class="test">#{test}</div>

<span id="spn">#{other_test}</span>

<span id="spn2">#{test234}</span>

<button>#{click_text}</button>
```

**Init stringholder.js**

```javascript
const stringHolder = new StringHolder();
```

**Set Strings as Object**

```javascript
stringHolder.strings = {
    test: 'test123',
    other_test: 'This is an other test!',
    click_text: 'Click!'
}
```

That's all :). If you want to use stringholder with method you can use **use()** method. But you will not need it.

```javascript
let strings = {
    test: 'test123',
    other_test: 'This is an other test!',
    click_text: 'Click!'
}

stringHolder.use(strings);
```

**Pass strings to constructor**

You can set strings when you create StringHolder object.

```javascript
new StringHolder({
    strings: {
        test: 'test123',
        other_test: 'This is an other test!',
        click_text: 'Click!'
    }
});
```