import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    getAllEmployees(): Employee[];
    getEmployeeById(id: string): Employee;
    createEmployee(name: string, designation: string): Employee;
    deleteTask(id: string): string;
    updateEmployeeStatus(id: string, designation: string): Employee;
}
