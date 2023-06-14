const input = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

function findAgeDifference(arr) {
    let minAge = Infinity;
    let maxAge = -Infinity;
    let minAgePerson, maxAgePerson;

    for (let i = 0; i < arr.length; i++) {
        const { name, age } = arr[i];
        if (age < minAge) {
            minAge = age;
            minAgePerson = name;
        }
        if (age > maxAge) {
            maxAge = age;
            maxAgePerson = name;
        }
    }

    const ageDifference = maxAge - minAge;

    return {
        minAgePerson: { name: minAgePerson, age: minAge },
        maxAgePerson: { name: maxAgePerson, age: maxAge },
        ageDifference: ageDifference,
    };
}

const ageInfo = findAgeDifference(input);

console.log("Youngest Person:", ageInfo.minAgePerson);
console.log("Oldest Person:", ageInfo.maxAgePerson);
console.log("Age Difference:", ageInfo.ageDifference);
/* 
Youngest Person: { name: 'John', age: 13 }
Oldest Person: { name: 'Nate', age: 67 }
Age Difference: 54
*/



