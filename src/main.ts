import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { AppModule } from './app/app.module';  // Adjust the path as needed
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




  // main.ts or app.module.ts

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
