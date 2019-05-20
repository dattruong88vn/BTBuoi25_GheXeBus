import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //id của component để gọi ngoài index.html
  templateUrl: './app.component.html', // đường dẫn html cho component
  styleUrls: ['./app.component.scss']  // đường dẫn css của component
})
export class AppComponent {
  title = 'demo-Angular';
}
