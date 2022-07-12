const { expect } = require("expect");



describe("animals array", () => {

    let animals = ['elephant', 'zebra', 'bear', 'tiger']

    beforeEach(() => {
        animals = ['elephant', 'zebra', 'bear', 'tiger']
    })

    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator")
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey")
    })

    it("should have initial lenght of 4", () => {
        expect(animals.length).toBe(4)
    })
})

