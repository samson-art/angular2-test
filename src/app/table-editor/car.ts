export class Car {
    private _name: string;
    private _model: string;
    private _year: Date;
    private _price: number;

    constructor(name: string, model: string, year: number, price: string) {
        this._name = name;
        this._model = model;
        this._year = new Date(year);
        this._price = parseFloat(price.replace(',', '.').replace(/[^\d.-]/g, ''));
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get year(): Date {
        return this._year;
    }

    set year(value: Date) {
        this._year = value;
    }

    get_num_year(): number {
        return this._year.getFullYear();
    }
    get_str_price(): string {
        return "$".concat(this._price.toFixed(2).toString());
    }
}