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
// import {tokenNotExpired} from 'angular2-jwt';
var SearchComponent = (function () {
    function SearchComponent() {
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
    }
    SearchComponent.prototype.toggleSearch = function (field) {
        console.log(event);
        if (field == 'address') {
            this.show1 = !this.show1;
        }
        else if (field == 'category') {
            this.show2 = !this.show2;
        }
        else if (field == 'time') {
            this.show3 = !this.show3;
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-component',
        templateUrl: 'search.component.html',
        styleUrls: ['search.component.css'],
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map