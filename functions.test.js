// check for thruthly & falsly values

//toBeNull => matches only null
// toBeUndefined => matches only undefined
// toBeDefined => is the opposite of toBeUndefined
// toBeTruthy => matches anything that an if statement treats as true
// toBeFalsy => matches anything that an if statement treats as false

const functions = require('./functions');

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initianized...')
const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Checking Name....')

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('user is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff')
    })

    test('user is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen')
    })
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
    // expect(load1 + load2).toBeLessThanOrEqual(1600)
    // expect(load1 + load2).toBeGreaterThan(1600)
    // expect(load1 + load2).toBeGreaterThanOrEqual(1600)

});

test('Should be close to decimal', () => {
    const load1 = 0.1;
    const load2 = 0.2;
    expect(load1 + load2).toBeCloseTo(0.3)
});

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});



test('Admin should be in usernames', () => {
    username = ['John', 'karen', 'admin'];
    expect(username).toContain('admin');
})

// working with api Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1)
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// })


// async wait
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});


function compileAndroidCode() {
    throw new Error("you are using the wrong JDK")
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow(
        "you are using the wrong JDK"
    );
});


test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow(
        "you are using the wrong JDK"
    );
});



