import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ActionReducer, MetaReducer, StoreModule } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { MentorsModule } from "./mentors/mentors.module";
import { metaReducers, reducers } from './reducers';
import { environment } from '../environments/environment';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['todos'] })(reducer);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MentorsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Automatically pause recording after 5 seconds of inactivity
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
