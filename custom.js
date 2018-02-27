const stringHolder = new StringHolder();

stringHolder.strings = {
    test: 'test123',
    other_test: 'This is an other test!',
    click_text: 'Click!'
}

/*stringHolder.use({
    test: 'test123',
    other_test: 'This is an other test!',
    click_text: 'Click!'
});*/

const button = document.querySelector("button");

button.addEventListener('click', () => {
    stringHolder.strings = {
        test234: 'Test 2 3 4'
    }
})