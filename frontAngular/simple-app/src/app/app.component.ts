import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [CommonModule,HttpClientModule],
  standalone:true,
  template: `
    <h1>Angular + Backend Demo</h1>
    <button (click)="loadMessage()">Get Message</button>
    <p *ngIf="message">{{ message }}</p>
  `,
})

export class AppComponent implements OnInit {
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  loadMessage() {
    this.apiService.getMessage().subscribe(
      (data) => this.message = data,
      (err) => console.error(err)
    );
  }
}
