import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.development';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { provideFirestore,getFirestore} from "@angular/fire/firestore";
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        /*RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'products/:productId', component: ProductDetailsComponent },
            { path: 'cart', component: CartComponent },
          ]),*/
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(()=> getFirestore()),
        provideAuth(() => getAuth()),
        NavbarComponent,
        
    ],
})
export class AppModule { }
