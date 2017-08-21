"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = (function () {
    function Car(name, model, year, price) {
        this._name = name;
        this._model = model;
        this._year = new Date(year);
        this._price = parseFloat(price.replace(',', '.').replace(/[^\d.-]/g, ''));
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.get_num_year = function () {
        return this._year.getFullYear();
    };
    Car.prototype.get_str_price = function () {
        return "$".concat(this._price.toFixed(2).toString());
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map