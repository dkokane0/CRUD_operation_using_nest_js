import { Employee } from './employee.model';
export declare class EmployeeService {
    private employees;
    getAllEmployee(): Employee[];
    getEmployeeById(id: string): Employee;
    createEmployee(name: string, designation: string): Employee;
    deleteEmployee(id: string): void;
    updateEmployeeDesignation(id: string, designation: string): Employee;
}
