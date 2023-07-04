
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const users = [{ email: 'john@test.com', id: 1, name: "John", verified: false }]

const getNewUser = async id => {
    await delay(100);
    const user = users.find(u => u.id === id);
    if (!user) throw new Error('User does not exist');
    return user;

}

const mapObjectToArray = (obj, callback) => {
    const results = [];

    for (const [key, value] of Object.entries(obj)) {
        results.push(callback(key, value, obj));
    }
    return results;
}

module.exports = { getNewUser, mapObjectToArray }