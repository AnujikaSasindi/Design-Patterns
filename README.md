# Design-Patterns

Software design patterns are reusable solutions to common problems encountered in software design. These patterns can be applied to make your code more modular, reusable, and easier to maintain.

There are mainly 3 type Of Design Patterns…

	1.  Structural Design Patterns
	2.  Behavioral Design Patterns
	3.  Creational Design Patterns

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Structural Design Patterns**

These are concerned with how classes and objects are composed to form larger structures. 
Structural class patterns use inheritance to compose interfaces or implementations.

EX:- Adapter Pattern, Bridge Pattern, Composite Pattern, Decorator Pattern, Facade Pattern, Proxy Pattern, and Flyweight Pattern

**--Decorator Pattern--**

This pattern lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

_Code Explanation:_

The code simulates a situation where it allows to create unique coffee orders which differ in description and cost of them according to customer preferences...

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Behavioural Design Patterns**

These are concerned with algorithms and the assignment of responsibilities between objects. Behavioral patterns describe not just patterns of objects or classes but also the patterns of communication between them. These patterns characterize complex control flow that’s difficult to follow at run-time.

EX:- Observer Pattern, Strategy Pattern, State Pattern, Command Pattern, Chain of Responsibility, Template Pattern, Interpreter Pattern, Visitor Pattern, Mediator Pattern, and Memento Pattern

**--Observer Pattern--**

This pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

_Code Explanation:_

The code simulates a scenario where a coffee shop has only physical coffee machine that can be used to make different types of coffee. This help manage the machine's usage and prevent multiple machines from being created unnecessarily...

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Creational Design Patterns**

These patterns abstract the instantiation process. They help make a system independent of how its objects are created, composed, and represented. A class creational pattern uses inheritance to vary the class that’s instantiated, whereas an object creational pattern will delegate instantiation to another object.

EX:- Singleton Pattern, Factory Method Pattern, Abstract Factory Pattern, Builder Pattern, and Prototype Pattern

**--Singeleton Pattern--**

This pattern lets you ensure that a class has only one instance, while providing a global access point to this instance.

_Code Explanation:_

In the code, coffeeMachine1 and coffeeMachine2 are both references to the same CoffeeMachine instance. As a result, calling makeCoffee on either produces a coffee, and the console output shows that the two variables are equal (true), demonstrating that only one instance exists.


