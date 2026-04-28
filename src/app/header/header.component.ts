import { Component } from "@angular/core";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [TopMenuComponent, MainMenuComponent]
})
export class HeaderComponent {

}