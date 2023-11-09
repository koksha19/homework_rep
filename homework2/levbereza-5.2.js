const getRootProperty = (obj, target) => {
    for(const key in obj) {
        const value = obj[key];

        if(Array.isArray(value) && value.includes(target)) {
            return key;
        }

        if(typeof value === 'object') {
            const result = getRootProperty(value, target);
            if(result !== null) {
                return key;
            }
        }
    }
    return null;
}


const obj = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
};
console.log(getRootProperty(obj, 111))