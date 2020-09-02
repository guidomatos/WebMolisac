import { Component } from '@angular/core';

declare function customInitFunctions();

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: []
})
export class PagesComponent {
    title = 'Pages';

    ngOnInit(): void {
        customInitFunctions();
    }

}
