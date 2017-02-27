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
var event_service_1 = require("app/services/event.service");
var eventListComponent = (function () {
    function eventListComponent(eventService) {
        this.eventService = eventService;
    }
    eventListComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents()
            .subscribe(function (events) { return _this.events = events; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    eventListComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    return eventListComponent;
}());
eventListComponent = __decorate([
    core_1.Component({
        selector: 'eventList',
        moduleId: module.id,
        templateUrl: 'eventList.component.html',
        styleUrls: ['eventList.component.css'],
        providers: [event_service_1.EventService]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], eventListComponent);
exports.eventListComponent = eventListComponent;
//# sourceMappingURL=eventList.component.js.map