import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent {
  peoplelist = [
    { name: 'Juan', age: 25, pet: true },
    { name: 'Alberto', age: 16, pet: true },
    { name: 'Aurelio', age: 36, pet: true },
    { name: 'Beto', age: 65, pet: false },
    { name: 'David', age: 12, pet: false },
    { name: 'Mario', age: 31, pet: true },
    { name: 'Eduardo', age: 45, pet: true },
    { name: 'Ana', age: 17, pet: false },
    { name: 'Flor', age: 14, pet: true },
    { name: 'Erika', age: 30, pet: true },
  ];
}
