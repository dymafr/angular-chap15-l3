import { Component, OnInit } from "@angular/core";
import { User } from "../user.interface";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  public users: User[];

  constructor() {}

  ngOnInit() {}
}
