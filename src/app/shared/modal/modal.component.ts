import { AfterViewInit, Component, ElementRef, inject, input, OnDestroy, viewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  modal = inject(ModalService);
  id = input.required<string>();
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('baseDialog');

  constructor() {}

  ngAfterViewInit(): void {
    this.modal.register(this.id(), this.dialog().nativeElement);
  }

  ngOnDestroy(): void {
    this.modal.unregister(this.id());
  }
}
