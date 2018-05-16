import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    controllers: Array<any>;
    controllerstest: Array<any>;
    utds: Array<any>;
    serverUrl: string;

    constructor(private navService: NavService, private router: Router) { }

    ngOnInit(): void {
        console.log("hk2 in index.component.ts ngOnInit")

        this.serverUrl = environment.serverUrl;  // read by angular for html render
        this.navService.getNavData().subscribe(applicationData => {
            console.log("in subscribehbk");
            this.controllers = applicationData.controllers.sort((a: any, b: any) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            this.controllerstest = [{"name":"todo.ApplicationControllerhk","logicalPropertyName":"applicationhk"},{"name":"todo.TodoControllerhk","logicalPropertyName":"todohk"}];
            var hk = JSON.stringify(this.controllerstest);
            console.log("hk done index.component.ts ngOnInit hk:" + hk);

        });


    }

    hasRoute(controllerName: string): boolean {
        return this.router.config.some((route: Route) => {
            if (route.path === controllerName) {
                return true;
            }
        });
    }
}
