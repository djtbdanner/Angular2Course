
import { Component } from '@angular/core';
import { MessagesService}  from './messages.service';

@Component({
    selector: 'messages',
    template: `<h1>Messages</h1>
    <input type = "text" [(ngModel)]="title" />
    <ul>
      <li *ngFor="let m of messages">{{ m }}</li>
    </ul>
    `
})
export class MessagesComponent {
    title = "hello world";
    messages;

    constructor(messagesService: MessagesService) {
        this.messages = messagesService.getMessages();
    }
}