import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  title = 'petiteAPP';

  constructor(private router: Router) {
    const navEndEvents =this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: any) => {
      gtag('config', 'G-DKKV5ZTWCQ',{'page_path': event.urlAfterRedirects});
      //console.log(event);
      
    });
  }
 
  ngOnInit(): void {
    initFlowbite();
  }
}
