import {Component, OnInit, Input}          from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Hero} from './hero';

import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    visible_heroes: Hero[];
    selectedHero: Hero;
    page: number;
    perPage: number;
    search_str: string;
    Math: any;

    constructor(private router: Router, private heroService: HeroService, private route: ActivatedRoute) {
        this.Math = Math;
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
            this.refresh_visible_heroes();
        });
    }

    get_opt_params(): void {
        this.route
            .queryParams
            .subscribe(params => {
                this.page = +params['p'] || 1;
                this.perPage = +params['cnt'] || 10;
            });
    }

    ngOnInit(): void {
        this.get_opt_params();
        this.getHeroes();
    }

    ngOnDestroy(): void {

    }

    gotoDetail(): void {
        this.router.navigate(['/hero', this.selectedHero.id]);
    }

    sortToMin(): void {
        this.heroes.sort(function (a: Hero, b: Hero) {
            return a.level > b.level ? -1 : 1;
        });
        this.refresh_visible_heroes();
    }

    sortToMax(): void {
        this.heroes.sort(function (a: Hero, b: Hero) {
            return a.level < b.level ? -1 : 1;
        });
        this.refresh_visible_heroes();
    }

    shuffleHeroes(): void {
        let a = this.heroes;
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        this.refresh_visible_heroes();
    }

    refresh_visible_heroes(): void {
        this.visible_heroes = this.heroes.slice(this.perPage * (this.page - 1), this.perPage * this.page);
    }

    perPageUpdate(n: number): void {
        this.perPage = n;
        this.page = 1;
        this.refresh_visible_heroes();
    }

    next_page(): void {
        this.page++;
        this.refresh_visible_heroes();
    }

    prev_page(): void {
        this.page--;
        this.refresh_visible_heroes();
    }

    find_heroes(): Hero[] {
        let tmp_heroes: Hero[] = [];
        for (let i = 0, len = this.heroes.length; i < len; i++) {
            if (this.heroes[i].name.toLocaleLowerCase().indexOf(this.search_str.toLocaleLowerCase()) !== -1) {
                tmp_heroes.push(this.heroes[i]);
            }
        }
        return tmp_heroes;
    }

    search_update(): void {
        this.page = 1;
        if (this.search_str === '') {
            this.getHeroes();
        } else {
            this.heroes = this.find_heroes();
        }
        this.refresh_visible_heroes();
    }

    reset_search(): void {
        this.search_str = "";
        this.search_update();
    }
}
