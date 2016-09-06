import {Component} from "@angular/core";
import {TicketService} from "./ticket.service";
import "./rxjs-operators";


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    providers: [
        TicketService
    ]
})

export class AppComponent {
}
