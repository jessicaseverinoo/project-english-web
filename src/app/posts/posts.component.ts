import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { IPosts } from './../models/iposts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title: string;
  content: string;

  postsCol: AngularFirestoreCollection<IPosts>;
  posts: Observable<IPosts[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.postsCol = this.db.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

  addPost() {
    // this.db.collection('posts').add({'title': this.title, 'content': this.content});
    this.db.collection('posts').doc(this.title).set({'title': this.title, 'content': this.content});
  }
}
