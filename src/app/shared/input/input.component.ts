import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [ ReactiveFormsModule, NgxMaskDirective ],
  providers: [ provideNgxMask() ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  control = input.required<FormControl>();
  type = input('text');
  placeholder = input('');
  format = input('')
}
