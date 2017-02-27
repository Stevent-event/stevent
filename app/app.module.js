"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // for model-driven forms
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var profile_component_1 = require("./components/profile/profile.component");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var app_routes_1 = require("./app.routes");
var authentication_service_1 = require("./services/authentication.service");
var newEvent_component_1 = require("./components/eventList/newEvent/newEvent.component");
var eventList_component_1 = require("./components/eventList/eventList.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var overview_component_1 = require("./components/overview/overview.component");
var angular2_jwt_1 = require("angular2-jwt");
var global_component_1 = require("./components/shared/global_component/global.component");
var search_component_1 = require("./components/shared/search_component/search.component");
var map_component_1 = require("./components/map/map.component");
var core_2 = require("angular2-google-maps/core");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.routing,
            forms_1.ReactiveFormsModule,
            forms_2.FormsModule,
            http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBulfwJnO47bp7VUYkibolTaBDW3pE33MI',
                libraries: ["places"]
            }),
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            newEvent_component_1.newEventComponent,
            eventList_component_1.eventListComponent,
            dashboard_component_1.dashboardComponent,
            profile_component_1.ProfileComponent,
            welcome_component_1.WelcomeComponent,
            overview_component_1.OverviewComponent,
            global_component_1.GlobalComponent,
            search_component_1.SearchComponent,
            map_component_1.MapComponent
        ],
        providers: [authentication_service_1.Auth, angular2_jwt_1.AUTH_PROVIDERS],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map