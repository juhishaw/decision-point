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
  isDataLoading = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.http
      .get<UserList[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        this.userList = response;
        this.results = response;
        this.isDataLoading = false;
      });
  }

  search(event) {
    this.results = this.userList.filter((value) =>
      value.name.includes(event.query)
    );
  }

  randomColorCodes(): string[] {
    const colors = [
      '#FB9D9D',
      '#C8D1DB',
      '#FCA481',
      '#C38BEC',
      '#F29AD4',
      '#F8D697',
      '#8EC3F7',
      '#988BEC',
    ];
    return colors;
  }

  getRandomColor(index: number) {
    return this.randomColorCodes()[index % 6];
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
