/**
 * Title: person.class.ts
 * Author: Professor Krasso
 * Date: 7 July 2020
 * Modified by: Diandra McKenzie
 * Description: Implement Person Interface
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Diandra", "McKenzie");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);