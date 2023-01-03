import { ContactlistService } from './../services/contactlist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { GlobVarService } from '../services/glob-var.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
 
 
  public folder: string;

  public data:any[];
  // films: Observable<any>;
  // UserList:any[];

  constructor(private activatedRoute: ActivatedRoute, private movieService: ContactlistService,
     public httpClient: HttpClient,public httpData: HomeService, public globVar: GlobVarService) { 

    // this.films = this.httpClient.get('https://reqres.in/api/users?page=2');
    // this.films
    // .subscribe(data => {
    //   console.log('my data: ', data.data);
    //   this.UserList = data.data;
    // })
  }

  ngOnInit() {
    this.getData();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }

  getData() {
    this.httpData.GetData().subscribe((response) => {
      if (response.data != "") {
        this.data = response.data;
      }
    });
  }
 

}


