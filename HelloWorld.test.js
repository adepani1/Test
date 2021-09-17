const Test = require('./HelloWorld');

test("Testing to see if Hello World works", () => {
    expect(Test()).toBe("Hello World");
})