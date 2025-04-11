/**explore this functionality in the console browser */

let trianglePojo = {
    a: 3,
    b: 4,
    getArea: function () {
        return (this.a * this.b) / 2
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

let trianglePojoTwo = {
    b: 8,
    getArea: function () {
        return (this.a * this.b) / 2
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

/* console.log(`area triangle: ${getTriangleArea(4, 4)}`)
console.log(`hypotenuse triangle: ${getTriangleHypotenuse(4, 4)}`)

console.log(`area triangle: ${getTriangleArea(3, 2)}`)
console.log(`hypotenuse triangle: ${getTriangleHypotenuse(3, 2)}`)

console.log(`area triangle: ${getTriangleArea(8, 5)}`)
console.log(`hypotenuse triangle: ${getTriangleHypotenuse(8, 5)}`) */