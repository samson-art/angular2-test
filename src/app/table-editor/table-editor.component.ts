import {Component, OnInit, NgModule} from '@angular/core';
import {Car} from "./car";
import {CarEditorService} from "./table-editor.service";

@Component({
    selector: 'table-editor',
    templateUrl: './table-editor.component.html',
    styleUrls: [
        './table-editor.component.scss',
    ],
})
export class TableEditorComponent implements OnInit{
    title: string = "Welcome to TableEditor";
    noTableStr: string = "No any row in table.";
    table: Car[];

    constructor(private carEditorService: CarEditorService) {
    }

    ngOnInit(): void {
        this.carEditorService.getCars().then(table => {
            this.table = table;
        });
    }
}