
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
    template: `<h1>Photo Details {{photo}}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy{
    photo;
    substription;
    constructor (private _route: ActivatedRoute){

    }

    ngOnInit(){
       this.substription =  this._route.params.subscribe(params=>{
            this.photo = params['id'];
        });

        
        // sets the id only once - this is easier, but doesn't work
        // when coming back to page - above does
      //-  this.photo = this._route.snapshot.params["id"];
    }

    ngOnDestroy(){
        this.substription.unsubscribe;
    }

}