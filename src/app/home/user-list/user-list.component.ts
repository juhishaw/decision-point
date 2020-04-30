import { Component, OnInit } from '@angular/core';
import { UserList, UserPosts } from 'src/app/shared/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: UserList[];
  userPosts: any[] = [];
  results: any[];
  searchText: string;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.http
      .get<UserList[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        this.userList = response;
        // this.userList.forEach((value) => {
        //   this.getUserPosts(value.id);
        // });
        this.results = response;
      });
  }

  // getUserPosts(userId: number) {
  //   this.http
  //     .get<UserPosts[]>(
  //       `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  //     )
  //     .subscribe((response) => {
  //       this.userPosts.push(response);
  //     });
  // }

  search(event) {
    this.results = this.userList.filter((value) =>
      value.name.includes(event.query)
    );
  }

  redirectToPosts(userId: number) {
    this.router.navigate([`/post/${userId}`]);
  }

  redirectToChart() {
    this.router.navigate([`/data_chart`]);
  }

  modelValueChange() {
    if (!this.searchText) {
      this.results = this.userList;
    }
  }
}
