import { Component } from '@angular/core';
import { MethodComponent } from '../../shared/method/method.component';
import { MethodTwoComponent } from '../../shared/method-two/method-two.component';
import { MethodThreeComponent } from '../../shared/method-three/method-three.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MethodComponent, MethodTwoComponent, MethodThreeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
