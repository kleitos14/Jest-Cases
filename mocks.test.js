const { expect } = require("expect");

const { default: axios } = require("axios");





const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
};

it("mock callback", () => {
    const mockCalledback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCalledback)

    // expect(mockCalledback.mock.calls.length).toBe(2)// mockCalledback called two times
    // expect(mockCalledback.mock.calls[0][0]).toBe(0)
    // expect(mockCalledback.mock.results[0].value).toBe(42)
    expect(mockCalledback.mock.results[1].value).toBe(43)
})

it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("holaa");
    const results = mock();
    const results2 = mock();
    const results3 = mock();
    expect(results).toBe(true);
    expect(results2).toBe(false);
    expect(results3).toBe("holaa");
})



const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return results.data;
};

it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Get 1 million Dollars"
        }
    })
    const results = await fetchData()
    expect(results.todo).toBe("Get 1 million Dollars")
})