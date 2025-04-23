class Circle {
    static allowedCollors = new Set(["red", "green", "blue"])

    constructor(radius, color) {
        this.setRadius(radius)
        this.setColor(color)
    }

    get diameter() {
        return this._radius * 2
    }

    get radius() {
        return this._radius
    }

    setRadius(radius) {
        if (radius < 0) {
            throw new Error('Radius cannot be negative!')
        }
    
        this._radius = radius
    }

    set radius(value) {
        this.setRadius(value)
    }

    get color() {
        return this._color
    }

    setColor(color) {
        if (!Circle.allowedCollors.has(color)) {
            throw new Error("That color is not allowed")
        }

        this._color = color
    }

    set color(color) {
        this.setColor(color)
    }
}

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName.trim()
        this.lastName = lastName.trim()
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.trim().split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }
}