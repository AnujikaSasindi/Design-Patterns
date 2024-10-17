abstract class Beverage{
    public description:string;

    public getDescription() : string{
        return this.description;
    };
    
    public abstract cost(): number;
}

class Coffee extends Beverage{
    public description = "Coffee";

    public cost() : number {
        return 100;
    }
}

abstract class CoffeeOptions extends Beverage{
    decoratedCoffee: Beverage;
    public abstract getDescription() : string;
    public abstract cost() : number;
}

class AddIce extends CoffeeOptions {
    decoratedCoffee: Beverage;

    constructor(coffee: Beverage) {
        super();
        this.decoratedCoffee = coffee;    
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Ice Added';
    }
    public cost(): number {
        return this.decoratedCoffee.cost() + 20;
    }
    
}

class AddWhippedCream extends CoffeeOptions {
    decoratedCoffee: Beverage;

    constructor(coffee: Beverage) {
        super();
        this.decoratedCoffee = coffee;    
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Whipped Cream Added';
    }
    public cost(): number {
        return this.decoratedCoffee.cost() + 50;
    }
    
}

let myCoffee = new Coffee();
myCoffee = new AddIce(myCoffee);
myCoffee = new AddWhippedCream(myCoffee);

console.log(myCoffee.cost());
console.log(myCoffee.getDescription());