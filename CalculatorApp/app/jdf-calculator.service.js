"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var JDFCalculatorService = (function () {
    function JDFCalculatorService() {
    }
    JDFCalculatorService.prototype.calculate = function () {
        return [
            { "paymentNumber": 1, "principal": 100, "interest": 10, "balance": 500, "dueDate": "08/17/1963" },
            { "paymentNumber": 2, "principal": 100, "interest": 9, "balance": 410, "dueDate": "08/17/1963" },
            { "paymentNumber": 3, "principal": 100, "interest": 8, "balance": 319, "dueDate": "08/17/1963" },
            { "paymentNumber": 4, "principal": 100, "interest": 7, "balance": 226, "dueDate": "08/17/1963" },
            { "paymentNumber": 5, "principal": 100, "interest": 6, "balance": 132, "dueDate": "08/17/1963" },
            { "paymentNumber": 6, "principal": 100, "interest": 5, "balance": 37, "dueDate": "08/17/1963" },
            { "paymentNumber": 7, "principal": 38, "interest": 1, "balance": 0, "dueDate": "08/17/1963" }
        ];
    };
    JDFCalculatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JDFCalculatorService);
    return JDFCalculatorService;
}());
exports.JDFCalculatorService = JDFCalculatorService;
//# sourceMappingURL=jdf-calculator.service.js.map