"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeService = class EmployeeService {
    constructor() {
        this.employees = [];
    }
    getAllEmployee() {
        return this.employees;
    }
    getEmployeeById(id) {
        return this.employees.find(employee => employee.id === id);
    }
    createEmployee(name, designation) {
        const id = new Date().toString();
        const employee = {
            id,
            name,
            designation
        };
        this.employees.push(employee);
        return employee;
    }
    deleteEmployee(id) {
        this.employees = this.employees.filter(employee => employee.id !== id);
    }
    updateEmployeeDesignation(id, designation) {
        let employee = this.getEmployeeById(id);
        employee.designation = designation;
        return employee;
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map