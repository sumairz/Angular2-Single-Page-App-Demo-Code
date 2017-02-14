import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { HomeModule } from './home/home.module';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
