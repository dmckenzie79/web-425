/**
 * Title: person.class.js
 * Author: Professor Krasso
 * Date: 7 July 2020
 * Modified by: Diandra McKenzie
 * Description: Implement Person Interface
 */

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
} ());
var myName = new Person("Diandra", "McKenzie");
console.log("My name is " + myName.firstName + " " + myName.lastName);
