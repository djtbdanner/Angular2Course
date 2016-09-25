import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MessagesComponent} from './messages.component';
import { MessagesService } from './messages.service';

@NgModule({

    imports: [
        FormsModule,
        CommonModule
    ], declarations: [
        MessagesComponent
    ],
    exports: [
        MessagesComponent
    ],
    providers: [
        MessagesService
    ]
})
export class MessagesModule { }