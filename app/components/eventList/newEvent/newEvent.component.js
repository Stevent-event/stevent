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
var forms_1 = require("@angular/forms");
var event_service_1 = require("app/services/event.service");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var newEventComponent = (function () {
    function newEventComponent(fb, eventService, http) {
        this.fb = fb;
        this.eventService = eventService;
        this.http = http;
        this.responseStatus = [];
    }
    newEventComponent.prototype.ngOnInit = function () {
        this.event = this.fb.group({
            name: ['', [forms_1.Validators.required]],
            owner: ['', [forms_1.Validators.required]],
            /*
                  location: this.fb.group({
                    lat:'',
                    lon: '',
                  }),
            */
            /*
                address: this.fb.group({
                  street: '',
                  route: '',
                  locality: '',
                  postal_code: '',
                  country: '',
                  formatted_address:'',
                }),
                */
            address: this.fb.group({
                street: '',
                postalcode: '',
                city: '',
                country: '',
            }),
            description: '',
            category: '',
            date: '',
            startTime: '',
            endTime: '',
            //  ongoing:'',
            // attendingUsers: '',
            limitedAttendees: '',
            maximumAttendees: '',
        });
    };
    newEventComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Create button clicked, event submitted" + this.event.value);
        this.eventService.createEvent(this.event.value).subscribe(//creatEvent method from the EventService component is called
        function (//creatEvent method from the EventService component is called
            data) { return console.log(_this.responseStatus = data); }, function (err) { return console.log(err); }, function () { return console.log('Request Completed'); });
    };
    return newEventComponent;
}());
newEventComponent = __decorate([
    core_1.Component({
        selector: 'newEvent',
        moduleId: module.id,
        templateUrl: 'newEvent.component.html',
        styleUrls: ['newEvent.component.css'],
        providers: [event_service_1.EventService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, event_service_1.EventService, http_1.Http])
], newEventComponent);
exports.newEventComponent = newEventComponent;
//# sourceMappingURL=newEvent.component.js.map