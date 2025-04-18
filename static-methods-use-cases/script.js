class MyMath {
    static add (a, b) {
        return a + b
    }

    static multiply (a, b) {
        return a * b
    }
}

class Drill {
    static operation() {
        return 'drilling'
    }
}

class Machine {
    static createMachine(machine) {
        if (machine == 'Drill') {
            return Drill
        } 
    }
}