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
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_3 = require("angular2-google-maps/core");
var event_service_1 = require("../../services/event.service");
var MapComponent = (function () {
    function MapComponent(eventService, mapsAPILoader, ngZone) {
        this.eventService = eventService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.zoom = 12;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEvents();
        // //set google maps defaults
        // this.zoom = 10;
        // this.lat = 60.5;
        // this.lng = 22.30;
        //create search FormControl
        this.searchControl = new forms_1.FormControl();
        //set current position
        this.setCurrentPosition();
        this.zoom = 12;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    MapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    MapComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents()
            .subscribe(function (events) { return _this.events = events; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    return MapComponent;
}());
__decorate([
    core_2.ViewChild("search"),
    __metadata("design:type", core_1.ElementRef)
], MapComponent.prototype, "searchElementRef", void 0);
MapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map',
        templateUrl: 'map.component.html',
        styleUrls: ['map.component.css'],
        providers: [event_service_1.EventService]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService,
        core_3.MapsAPILoader,
        core_2.NgZone])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map