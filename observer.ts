interface Subject{
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}

interface Observer{
    update(flavor: String);
}

// ------------------------------------------------------
class CoffeeShop implements Subject {
    private observers: Observer[] = [];
    private flavor: String; 

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.flavor);
        }
    }

    addNewFlavor(newFlavor: String) {
        this.flavor = newFlavor;
        this.notifyObservers();
    }
}

// ------------------------------------------------------
class Customer implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(flavor: string): void {
        console.log(`${this.name} has been notified of the new coffee flavor: ${flavor}`);
    }
}


const coffeeShop = new CoffeeShop();

const customer1 = new Customer("Alice");
const customer2 = new Customer("Bob");

coffeeShop.registerObserver(customer1);
coffeeShop.registerObserver(customer2);

coffeeShop.addNewFlavor("Vanilla Latte");

//coffeeShop.removeObserver(customer1);

//coffeeShop.addNewFlavor("Caramel Macchiato");

