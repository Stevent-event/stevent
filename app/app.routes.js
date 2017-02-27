"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var newEvent_component_1 = require("./components/eventList/newEvent/newEvent.component");
var eventList_component_1 = require("./components/eventList/eventList.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var overview_component_1 = require("./components/overview/overview.component");
var profile_component_1 = require("./components/profile/profile.component");
//import {AuthGuard} from './auth.guard';
var map_component_1 = require("./components/map/map.component");
exports.routes = [
    // { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'overview', component: overview_component_1.OverviewComponent },
    { path: 'newEvent', component: newEvent_component_1.newEventComponent },
    { path: 'eventList', component: eventList_component_1.eventListComponent },
    { path: 'dashboard', component: dashboard_component_1.dashboardComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'eventMap', component: map_component_1.MapComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map