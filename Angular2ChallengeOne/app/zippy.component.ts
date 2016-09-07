import {Component, Input} from 'angular2/core';


@Component({
  selector: 'zippy',
  template: `
        <div class="panel panel-default"> 
          <div class = "panel-heading " (click) = "toggle()">
            <ng-content select=".heading"></ng-content>
            <i class = "pull-right glyphicon bMargin"
              [ngClass]="
                {
                  'glyphicon-menu-down': !isExpanded,
                  'glyphicon-menu-up': isExpanded
                }
              ">
            </i>
          </div>
          <div *ngIf="isExpanded" class = "panel-body">
           <ng-content select=".body"></ng-content>
          </div>    
        </div>
  `,
  styles: [`
    .bMargin{border: 4px solid green; margin-bottom:25px;}
  `
  ]
})

export class ZipComponent {
  isExpanded = false;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
