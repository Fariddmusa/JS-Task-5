/// Task 1
let Area = (r) => {
    if (typeof r === 'number') {
        let s = Math.PI * Math.pow(r, 2);
        console.log(s);
    }
    else {
        console.log('Parameter must be a number');
    }
}


/// Task 3
let LowestNumber = (x) => {
    if (Array.isArray(x)) {
        let min = x[0];
        for (let i = 0; i < x.length; i++) {
            if (x[i] < min) {
                min = x[i];
            }
        }
        console.log(min);
    }
    else {
        console.log('Parameter must be an array');
    }
}
