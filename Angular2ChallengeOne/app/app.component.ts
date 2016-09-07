import {Component} from 'angular2/core';
import {ZipComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `

    <!--tweet></tweet-->

    <!-- The zippy stuff could be a loop -->
    <zippy>
        <div class = "heading" > Who can see my stuff  </div>
        <div class = "body">Content of who can see my stuff</div>
    </zippy>
        <zippy>
        <div class = "heading" > Who cares to see my stuff  </div>
        <div class = "body">Content of who cares can see my stuff</div>
    </zippy>
    
    `,
    directives: [ZipComponent]
     
})
export class AppComponent {


 }