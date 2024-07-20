import { Component } from '@angular/core';
import { MethodComponent } from '../../shared/method/method.component';
import { MethodTwoComponent } from '../../shared/method-two/method-two.component';
import { MethodThreeComponent } from '../../shared/method-three/method-three.component';
import { MethodFourComponent } from '../../shared/method-four/method-four.component';
import { MethodFiveComponent } from '../../shared/method-five/method-five.component';
import { MethodSixComponent } from '../../shared/method-six/method-six.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MethodComponent,
    MethodTwoComponent,
    MethodThreeComponent,
    MethodFourComponent,
    MethodFiveComponent,
    MethodSixComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
