import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
 //import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
