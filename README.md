class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.power = this.definePower(type); 
    }

    definePower(type) {
        if (type === "Guerreiro") {
            return "Espada";
        } else if (type === "Mago") {
            return "Magia";
        } else if (type === "Monge") {
            return "Artes Marcias";
        } else {
            return "Shuriken"
        }
    }

    attack() {
        console.log(`O ${this.type} atacou usando ${this.power}`);
    }
}

let hero = new Hero("Davi", 15, "Monge");

hero.attack();
