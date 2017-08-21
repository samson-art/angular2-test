'use strict'; // necessary for es6 output in node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var expectedH1 = 'Tour of Heroes';
var expectedTitle = "Angular " + expectedH1;
var targetHero = { id: 14, name: 'Celeritas' };
var targetHeroDashboardIndex = 3;
var nameSuffix = 'X';
var newHeroName = targetHero.name + nameSuffix;
var Hero = (function () {
    function Hero() {
    }
    // Factory methods
    // Hero from string formatted as '<id> <name>'.
    Hero.fromString = function (s) {
        return {
            id: +s.substr(0, s.indexOf(' ')),
            name: s.substr(s.indexOf(' ') + 1),
        };
    };
    // Hero from hero list <li> element.
    Hero.fromLi = function (li) {
        return __awaiter(this, void 0, void 0, function () {
            var strings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, li.all(protractor_1.by.xpath('span')).getText()];
                    case 1:
                        strings = _a.sent();
                        return [2 /*return*/, { id: +strings[0], name: strings[1] }];
                }
            });
        });
    };
    // Hero id and name from the given detail element.
    Hero.fromDetail = function (detail) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, _name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detail.all(protractor_1.by.css('div')).first().getText()];
                    case 1:
                        _id = _a.sent();
                        return [4 /*yield*/, detail.element(protractor_1.by.css('h2')).getText()];
                    case 2:
                        _name = _a.sent();
                        return [2 /*return*/, {
                                id: +_id.substr(_id.indexOf(' ') + 1),
                                name: _name.substr(0, _name.lastIndexOf(' '))
                            }];
                }
            });
        });
    };
    return Hero;
}());
describe('Tutorial part 6', function () {
    beforeAll(function () { return protractor_1.browser.get(''); });
    function getPageElts() {
        var navElts = protractor_1.element.all(protractor_1.by.css('my-app nav a'));
        return {
            navElts: navElts,
            myDashboardHref: navElts.get(0),
            myDashboard: protractor_1.element(protractor_1.by.css('my-app my-dashboard')),
            topHeroes: protractor_1.element.all(protractor_1.by.css('my-app my-dashboard > div h4')),
            myHeroesHref: navElts.get(1),
            myHeroes: protractor_1.element(protractor_1.by.css('my-app my-heroes')),
            allHeroes: protractor_1.element.all(protractor_1.by.css('my-app my-heroes li')),
            selectedHero: protractor_1.element(protractor_1.by.css('my-app li.selected')),
            selectedHeroSubview: protractor_1.element(protractor_1.by.css('my-app my-heroes > div:last-child')),
            heroDetail: protractor_1.element(protractor_1.by.css('my-app hero-detail > div')),
            searchBox: protractor_1.element(protractor_1.by.css('#search-box')),
            searchResults: protractor_1.element.all(protractor_1.by.css('.search-result'))
        };
    }
    describe('Initial page', function () {
        it("has title '" + expectedTitle + "'", function () {
            expect(protractor_1.browser.getTitle()).toEqual(expectedTitle);
        });
        it("has h1 '" + expectedH1 + "'", function () {
            expectHeading(1, expectedH1);
        });
        var expectedViewNames = ['Dashboard', 'Heroes'];
        it("has views " + expectedViewNames, function () {
            var viewNames = getPageElts().navElts.map(function (el) { return el.getText(); });
            expect(viewNames).toEqual(expectedViewNames);
        });
        it('has dashboard as the active view', function () {
            var page = getPageElts();
            expect(page.myDashboard.isPresent()).toBeTruthy();
        });
    });
    describe('Dashboard tests', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it('has top heroes', function () {
            var page = getPageElts();
            expect(page.topHeroes.count()).toEqual(4);
        });
        it("selects and routes to " + targetHero.name + " details", dashboardSelectTargetHero);
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("cancels and shows " + targetHero.name + " in Dashboard", function () {
            protractor_1.element(protractor_1.by.buttonText('Back')).click();
            protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
            var targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
            expect(targetHeroElt.getText()).toEqual(targetHero.name);
        });
        it("selects and routes to " + targetHero.name + " details", dashboardSelectTargetHero);
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("saves and shows " + newHeroName + " in Dashboard", function () {
            protractor_1.element(protractor_1.by.buttonText('Save')).click();
            protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
            var targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
            expect(targetHeroElt.getText()).toEqual(newHeroName);
        });
    });
    describe('Heroes tests', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it('can switch to Heroes view', function () {
            getPageElts().myHeroesHref.click();
            var page = getPageElts();
            expect(page.myHeroes.isPresent()).toBeTruthy();
            expect(page.allHeroes.count()).toEqual(11, 'number of heroes');
        });
        it("selects and shows " + targetHero.name + " as selected in list", function () {
            getHeroLiEltById(targetHero.id).click();
            expect(Hero.fromLi(getPageElts().selectedHero)).toEqual(targetHero);
        });
        it('shows selected hero subview', function () {
            var page = getPageElts();
            var title = page.selectedHeroSubview.element(protractor_1.by.css('h2')).getText();
            var expectedTitle = targetHero.name.toUpperCase() + " is my hero";
            expect(title).toEqual(expectedTitle);
        });
        it('can route to hero details', function () {
            protractor_1.element(protractor_1.by.buttonText('View Details')).click();
            var page = getPageElts();
            expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
            var hero = Hero.fromDetail(page.heroDetail);
            expect(hero).toEqual(targetHero);
        });
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("shows " + newHeroName + " in Heroes list", function () {
            protractor_1.element(protractor_1.by.buttonText('Save')).click();
            protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
            var expectedHero = { id: targetHero.id, name: newHeroName };
            expect(Hero.fromLi(getHeroLiEltById(targetHero.id))).toEqual(expectedHero);
        });
        it("deletes " + newHeroName + " from Heroes list", function () { return __awaiter(_this, void 0, void 0, function () {
            var heroesBefore, li, page, heroesAfter, expectedHeroes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toHeroArray(getPageElts().allHeroes)];
                    case 1:
                        heroesBefore = _a.sent();
                        li = getHeroLiEltById(targetHero.id);
                        li.element(protractor_1.by.buttonText('x')).click();
                        page = getPageElts();
                        expect(page.myHeroes.isPresent()).toBeTruthy();
                        expect(page.allHeroes.count()).toEqual(10, 'number of heroes');
                        return [4 /*yield*/, toHeroArray(page.allHeroes)];
                    case 2:
                        heroesAfter = _a.sent();
                        expectedHeroes = heroesBefore.filter(function (h) { return h.name !== newHeroName; });
                        expect(heroesAfter).toEqual(expectedHeroes);
                        expect(page.selectedHeroSubview.isPresent()).toBeFalsy();
                        return [2 /*return*/];
                }
            });
        }); });
        it("adds back " + targetHero.name, function () { return __awaiter(_this, void 0, void 0, function () {
            var newHeroName, heroesBefore, numHeroes, page, heroesAfter, maxId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newHeroName = 'Alice';
                        return [4 /*yield*/, toHeroArray(getPageElts().allHeroes)];
                    case 1:
                        heroesBefore = _a.sent();
                        numHeroes = heroesBefore.length;
                        protractor_1.element(protractor_1.by.css('input')).sendKeys(newHeroName);
                        protractor_1.element(protractor_1.by.buttonText('Add')).click();
                        page = getPageElts();
                        return [4 /*yield*/, toHeroArray(page.allHeroes)];
                    case 2:
                        heroesAfter = _a.sent();
                        expect(heroesAfter.length).toEqual(numHeroes + 1, 'number of heroes');
                        expect(heroesAfter.slice(0, numHeroes)).toEqual(heroesBefore, 'Old heroes are still there');
                        maxId = heroesBefore[heroesBefore.length - 1].id;
                        expect(heroesAfter[numHeroes]).toEqual({ id: maxId + 1, name: newHeroName });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Progressive hero search', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it("searches for 'Ce'", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                getPageElts().searchBox.sendKeys('Ce');
                protractor_1.browser.sleep(1000);
                expect(getPageElts().searchResults.count()).toBe(2);
                return [2 /*return*/];
            });
        }); });
        it("continues search with 'l'", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                getPageElts().searchBox.sendKeys('l');
                protractor_1.browser.sleep(1000);
                expect(getPageElts().searchResults.count()).toBe(1);
                return [2 /*return*/];
            });
        }); });
        it("continues search with 'e' and gets " + targetHero.name, function () { return __awaiter(_this, void 0, void 0, function () {
            var page, hero;
            return __generator(this, function (_a) {
                getPageElts().searchBox.sendKeys('e');
                protractor_1.browser.sleep(1000);
                page = getPageElts();
                expect(page.searchResults.count()).toBe(1);
                hero = page.searchResults.get(0);
                expect(hero.getText()).toEqual(targetHero.name);
                return [2 /*return*/];
            });
        }); });
        it("navigates to " + targetHero.name + " details view", function () { return __awaiter(_this, void 0, void 0, function () {
            var hero, page;
            return __generator(this, function (_a) {
                hero = getPageElts().searchResults.get(0);
                expect(hero.getText()).toEqual(targetHero.name);
                hero.click();
                page = getPageElts();
                expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
                expect(Hero.fromDetail(page.heroDetail)).toEqual(targetHero);
                return [2 /*return*/];
            });
        }); });
    });
    function dashboardSelectTargetHero() {
        var targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
        expect(targetHeroElt.getText()).toEqual(targetHero.name);
        targetHeroElt.click();
        protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
        var page = getPageElts();
        expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
        var hero = Hero.fromDetail(page.heroDetail);
        expect(hero).toEqual(targetHero);
    }
    function updateHeroNameInDetailView() {
        return __awaiter(this, void 0, void 0, function () {
            var hero;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Assumes that the current view is the hero details view.
                        addToHeroName(nameSuffix);
                        return [4 /*yield*/, Hero.fromDetail(getPageElts().heroDetail)];
                    case 1:
                        hero = _a.sent();
                        expect(hero).toEqual({ id: targetHero.id, name: newHeroName });
                        return [2 /*return*/];
                }
            });
        });
    }
});
function addToHeroName(text) {
    var input = protractor_1.element(protractor_1.by.css('input'));
    return input.sendKeys(text);
}
function expectHeading(hLevel, expectedText) {
    var hTag = "h" + hLevel;
    var hText = protractor_1.element(protractor_1.by.css(hTag)).getText();
    expect(hText).toEqual(expectedText, hTag);
}
;
function getHeroLiEltById(id) {
    var spanForId = protractor_1.element(protractor_1.by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(protractor_1.by.xpath('..'));
}
function toHeroArray(allHeroes) {
    return __awaiter(this, void 0, void 0, function () {
        var promisedHeroes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, allHeroes.map(Hero.fromLi)];
                case 1:
                    promisedHeroes = _a.sent();
                    // The cast is necessary to get around issuing with the signature of Promise.all()
                    return [2 /*return*/, Promise.all(promisedHeroes)];
            }
        });
    });
}
