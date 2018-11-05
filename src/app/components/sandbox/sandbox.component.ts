import { Component, OnInit } from '@angular/core';

import { DataserviceService } from '../../services/dataservice.service';
import { ObserverService } from '../../services/observer.service';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  // field
  users: string[];
  ob: any[] = [];
  getuser: any[];
  user = {
    id: '',
    name: '',
    email: '',
    phone: ''
  }
  isEdit: boolean = false;

  constructor(public dataService: DataserviceService, public obser: ObserverService, public userdata: GetService) {
    // observable1
    this.users = this.dataService.getUsers();
    // observable 2
    this.obser.getData().subscribe(data => {
      // console.log(data);
      this.ob.push(data);
    });
    //observable
    this.userdata.getusers().subscribe(users => {
      this.getuser = users;
    });
  }

  ngOnInit() {
  }

  onSubmit(isEdit) {
    if (isEdit) {
      this.userdata.updateUser(this.user).subscribe(user => {
        for (let i = 0; i < this.getuser.length; i++) {
          if (this.getuser[i].id == this.user.id) {
            this.users.splice(i, 1);
          }
        }
        this.getuser.unshift(this.user);
      });

    }
    else {
      this.userdata.adduser(this.user).subscribe(user => {
        console.log(user);
        this.getuser.unshift(user);
      });
    }

  }

  onDeleteClick(id) {
    this.userdata.deleteUser(id).subscribe(res => {
      for (let i = 0; i < this.getuser.length; i++) {
        if (this.getuser[i].id == id) {
          this.getuser.splice(i, 1);
        }
      }
    });
  }

  onEditClick(user) {
    this.isEdit = true;
    this.user = user;
  }


}
