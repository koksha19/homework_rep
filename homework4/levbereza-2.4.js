var Vector = function (components) {
    this.components = components;
    this.add = function (vect) {
        if (this.components.length !== vect.components.length) {
            throw new Error("Vectors must have the same length for addition");
        }
        let result = [];
        for (let num = 0; num < this.components.length; num++) {
            let temp = this.components[num] + vect.components[num];
            result.push(temp);
        }
        return new Vector(result);
    }

    this.subtract = function (vect) {
        if (this.components.length !== vect.components.length) {
            throw new Error("Vectors must have the same length for addition");
        }
        let result = [];
        for (let num = 0; num < this.components.length; num++) {
            let temp = this.components[num] - vect.components[num];
            result.push(temp);
        }
        return new Vector(result);
    }

    this.dot = function (vect) {
        if (this.components.length !== vect.components.length) {
            throw new Error("Vectors must have the same length for addition");
        }
        let result = 0;
        for (let num = 0; num < this.components.length; num++) {
            let temp = this.components[num] * vect.components[num];
            result += temp;
        }
        return result;
    }

    this.norm = function () {
        let result = 0;
        for (let num = 0; num < this.components.length; num++) {
            result += this.components[num] * this.components[num];
        }
        return Math.sqrt(result);
    }

    this.equals = function (vect) {
        for (let num = 0; num < this.components.length; num++) {
            if(this.components[num] == vect.components[num]){
                return true;
            }
        }
    }

    this.toString = function(){
        return '(' + this.components.toString() + ')';
    }

};
