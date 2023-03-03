import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";
import { CollectionComponent } from './components/collection/collection.component';
import { ProductCollectionComponent } from './components/product-collection/product-collection.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProductGorrosComponent } from './components/product-gorros/product-gorros.component';
import { GorrosComponent } from './home/gorros/gorros.component';



@NgModule({
    declarations: [
        HomeComponent,
        CollectionComponent,
        ProductCollectionComponent,
        FormContactComponent,
        ContactComponent,
        ProductGorrosComponent,
        GorrosComponent
    ],
    exports: [
        HomeComponent,
        ContactComponent,
        GorrosComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class EcommerceModule { }
