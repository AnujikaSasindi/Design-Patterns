class CoffeeMachine {

    private static instance: CoffeeMachine;
  
    private constructor() {}
  
    public static getInstance(): CoffeeMachine {
      if (!CoffeeMachine.instance) {
        CoffeeMachine.instance = new CoffeeMachine();
      }
      return CoffeeMachine.instance;
    }
  
    public makeCoffee(coffeeType: string): void {
      console.log(`Making a cup of ${coffeeType}`);
    }
  }
  
  const coffeeMachine1 = CoffeeMachine.getInstance();
  const coffeeMachine2 = CoffeeMachine.getInstance();
  
  coffeeMachine1.makeCoffee("Espresso"); 
  coffeeMachine2.makeCoffee("Latte");
  
  console.log(coffeeMachine1 === coffeeMachine2);