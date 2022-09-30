import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <button class="k-button" (click)="test()">Test Focus</button>
        <kendo-label class="k-form" text="Message">
            <kendo-textbox [style.width.px]="300" placeholder="Type your message here" [clearButton]="true" #contraventionField>
                
            </kendo-textbox>
        </kendo-label>
    `,
  styles: [
    `
            .k-textbox .send-button {
                color: #ff6358;
                width: 44px;
            }
        `,
  ],
})
export class AppComponent {
  @ViewChild('contraventionField') contraventionField: ElementRef;

  public test() {
    //focus on contravention field if pcn valid
    setTimeout(() => {
      this.contraventionField.nativeElement.focus();
    }, 50);
  }
}
