import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetModule } from './sandbox/widget/widget.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SandboxModule } from './sandbox/sandbox/sandbox.module';
import { LazyModule } from './lazy/lazy.module';
import { TesterModule } from './tester/tester.module';
import { SelectorPipe } from './sandbox/selector.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CtxMenuComponent } from './sandbox/ctx-menu/ctx-menu.component';


const firestoreSettings = environment.production ? undefined : {
  host: 'localhost:8080',
  ssl: false,
  // experimentalForceLongPolling: true // Could help with cypress
};

@NgModule({
  declarations: [
    AppComponent,
    SelectorPipe,
    CtxMenuComponent
  ],
  imports: [
    BrowserModule,
    WidgetModule,
    SandboxModule,
    LazyModule,
    TesterModule,
    MatMenuModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: SETTINGS,
    useValue: firestoreSettings
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
