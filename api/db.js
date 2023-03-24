let secrets = {
    s1: {
        "id": "s1",
        "name": "secret one",
        "value": "1111"
    },
    s2: {
        "id": "s2",
        "name":
        "secret two",
        "value": "2222"
    }
    ,
    s3: {
        "id": "s3",
        "name": "secret three",
        "value": "3333"
    }
}

let count = 3;

const getSecrets = () => {
    return Object.values(secrets);
}

const addSecret = (item) => {
    count++;
    let id = `s${count}`;
    let newSecret =  Object.assign(
        {},
        {id: `s${count}`},
        item
    );
    secrets[id] = newSecret;
    return newSecret;
};

const db = {
    getSecrets,
    addSecret
}

module.exports = db;