export class UserList {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;

  constructor(data) {
    this.id = data ? data.id : null;
    this.name = data ? data.name : null;
    this.username = data ? data.username : null;
    this.email = data ? data.email : null;
    this.address = data ? data.address : null;
    this.phone = data ? data.phone : null;
    this.website = data ? data.website : null;
    this.company = data ? data.company : null;
  }
}

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geolocation;

  constructor(data) {
    this.street = data ? data.street : null;
    this.suite = data ? data.suite : null;
    this.zipcode = data ? data.zipcode : null;
    this.geo = data ? data.geo : null;
    this.city = data ? data.city : null;
  }
}

export class Geolocation {
  lat: number;
  lang: number;

  constructor(data) {
    this.lat = data ? data.lat : null;
    this.lang = data ? data.lang : null;
  }
}

export class Company {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor(data) {
    this.name = data ? data.name : null;
    this.catchPhrase = data ? data.catchPhrase : null;
    this.bs = data ? data.bs : null;
  }
}

export class UserPosts {
  UserId: number;
  Id: number;
  Title: string;
  Body: string;

  constructor(data) {
    this.UserId = data ? data.UserId : null;
    this.Id = data ? data.Id : null;
    this.Title = data ? data.Title : null;
    this.Body = data ? data.Body : null;
  }
}
