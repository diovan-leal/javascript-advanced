/**
 * pattern name for classes
 * UpperCamelCase
 * Triangle
 * BaseTriangle
 */
class Triangle {
    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    sayHi() {
        return `Hello my name is ${this.constructor.name}`
    }
}

/* explore this funcionality in console browser
ex:
ta = new Triangle()
ta.a = 4
ta.b = 4
ta.getArea()
ta.getHypotenuse() 

ta instanceof Triangle
typeof ta
*/
