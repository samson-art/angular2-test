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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService, route) {
        this.router = router;
        this.heroService = heroService;
        this.route = route;
        this.Math = Math;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes;
            _this.refresh_visible_heroes();
        });
    };
    HeroesComponent.prototype.get_opt_params = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.page = +params['p'] || 1;
            _this.perPage = +params['cnt'] || 10;
        });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.get_opt_params();
        this.getHeroes();
    };
    HeroesComponent.prototype.ngOnDestroy = function () {
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/hero', this.selectedHero.id]);
    };
    HeroesComponent.prototype.sortToMin = function () {
        this.heroes.sort(function (a, b) {
            return a.level > b.level ? -1 : 1;
        });
        this.refresh_visible_heroes();
    };
    HeroesComponent.prototype.sortToMax = function () {
        this.heroes.sort(function (a, b) {
            return a.level < b.level ? -1 : 1;
        });
        this.refresh_visible_heroes();
    };
    HeroesComponent.prototype.shuffleHeroes = function () {
        var a = this.heroes;
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        this.refresh_visible_heroes();
        var _a;
    };
    HeroesComponent.prototype.refresh_visible_heroes = function () {
        this.visible_heroes = this.heroes.slice(this.perPage * (this.page - 1), this.perPage * this.page);
    };
    HeroesComponent.prototype.perPageUpdate = function (n) {
        this.perPage = n;
        this.page = 1;
        this.refresh_visible_heroes();
    };
    HeroesComponent.prototype.next_page = function () {
        this.page++;
        this.refresh_visible_heroes();
    };
    HeroesComponent.prototype.prev_page = function () {
        this.page--;
        this.refresh_visible_heroes();
    };
    HeroesComponent.prototype.find_heroes = function () {
        var tmp_heroes = [];
        for (var i = 0, len = this.heroes.length; i < len; i++) {
            if (this.heroes[i].name.toLocaleLowerCase().indexOf(this.search_str.toLocaleLowerCase()) !== -1) {
                tmp_heroes.push(this.heroes[i]);
            }
        }
        return tmp_heroes;
    };
    HeroesComponent.prototype.search_update = function () {
        this.page = 1;
        if (this.search_str === '') {
            this.getHeroes();
        }
        else {
            this.heroes = this.find_heroes();
        }
        this.refresh_visible_heroes();
    };
    HeroesComponent.prototype.reset_search = function () {
        this.search_str = "";
        this.search_update();
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router, hero_service_1.HeroService, router_1.ActivatedRoute])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map