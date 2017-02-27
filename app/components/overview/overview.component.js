"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OverviewComponent = (function () {
    function OverviewComponent() {
        this.events = EVENTS;
    }
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    core_1.Component({
        selector: 'overview',
        moduleId: module.id,
        templateUrl: 'overview.component.html',
        styleUrls: ['overview.component.css'],
    })
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
var EVENTS = [
    { "title": "Sports", "url": "images/soccer.jpg" },
    { "title": "Culture", "url": "images/finnishsauna.jpg" },
    { "title": "Food", "url": "images/ruoka.jpg" },
    { "title": "ChildrenFriendly", "url": "images/preschool.jpg" },
    { "title": "Gathering", "url": "images/generation.jpg" },
    { "title": "More", "url": "images/covered.jpg" },
];
//# sourceMappingURL=overview.component.js.map