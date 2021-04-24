import { Component, OnInit} from '@angular/core';
import { Comment } from '../models';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor() {}

  comments: Comment[] = [];

  add(email: string, content: string): void {
    email = email.trim();
    content = content.trim();
    this.comments.push({ email, content } as Comment);
  }
  ngOnInit(): void {
  }

}
