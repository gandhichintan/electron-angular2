import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';
import "reflect-metadata";
 
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);