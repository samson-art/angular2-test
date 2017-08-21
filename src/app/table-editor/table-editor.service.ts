import { Injectable } from '@angular/core';
import { TABLE } from './mock-table';
import { Car } from "./Car";

@Injectable()
export class CarEditorService {
    getCars(): Promise<Car[]> {
        return Promise.resolve(TABLE);
    }
    getCar(n: number): Promise<Car> {
        return this.getCars().then( table => table[n]);
    }
    createEmptyRow(): Promise<Car[]> {
        return this.getCars().then(table => {
            table.push();
            return table;
        });
    }
    deleteRow(n: number): Promise<Car[]> {
        return this.getCars().then(table => {
            table.splice(n,1);
            return table;
        });
    }
    updateRow(n: number, new_table: Car): Promise<Car> {
        return this.getCars().then(table => {
            let old_tbl = table[n];
            table[n] = new_table;
            return table[n];
        })
    }
}