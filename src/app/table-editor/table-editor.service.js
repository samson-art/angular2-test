"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_table_1 = require("./mock-table");
var CarEditorService = (function () {
    function CarEditorService() {
    }
    CarEditorService.prototype.getCars = function () {
        return Promise.resolve(mock_table_1.TABLE);
    };
    CarEditorService.prototype.getCar = function (n) {
        return this.getCars().then(function (table) { return table[n]; });
    };
    CarEditorService.prototype.createEmptyRow = function () {
        return this.getCars().then(function (table) {
            table.push();
            return table;
        });
    };
    CarEditorService.prototype.deleteRow = function (n) {
        return this.getCars().then(function (table) {
            table.splice(n, 1);
            return table;
        });
    };
    CarEditorService.prototype.updateRow = function (n, new_table) {
        return this.getCars().then(function (table) {
            var old_tbl = table[n];
            table[n] = new_table;
            return table[n];
        });
    };
    return CarEditorService;
}());
CarEditorService = __decorate([
    core_1.Injectable()
], CarEditorService);
exports.CarEditorService = CarEditorService;
//# sourceMappingURL=table-editor.service.js.map