import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { PassFormComponent } from './features/pass-form/pass-form.component';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, PassFormComponent],
    templateUrl: 'app.component.html',
  })
export class AppComponent {}
