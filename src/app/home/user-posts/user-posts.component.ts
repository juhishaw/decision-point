import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPosts } from 'src/app/shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  userPosts: UserPosts[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getUserPosts(params.id);
    });
  }

  getUserPosts(userId: number) {
    this.http
      .get<UserPosts[]>(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      )
      .subscribe((response) => {
        this.userPosts = response;
      });
  }

  backClicked() {
    this.location.back();
  }
}
