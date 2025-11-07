import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppModule } from './app/app.modules';
import { AppComponent } from './app/app.component';


// passer le composant ( surtourt si il est en standalone
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
 
/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/