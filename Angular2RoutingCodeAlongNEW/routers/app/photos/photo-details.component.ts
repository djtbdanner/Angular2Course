
import { Component , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    template: `<h1>Photo Details {{ id }}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy{
    id;
    substription;
    constructor (private _route: ActivatedRoute){
    }

    ngOnInit(){

       this.substription =  this._route.params.subscribe(params => {
            this.id = +params["id"]
        })

       // this will keep the original id this.id = this._route.snapshot.params["id"];
    }

    ngOnDestroy(){
        this.substription.unsubscribe();
    }
}