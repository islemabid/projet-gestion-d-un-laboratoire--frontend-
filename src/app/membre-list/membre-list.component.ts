
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/member.model';
import { MembersService } from 'src/Services/members.service';


@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {

  //any : quelque soit le type
  public dataSource: Member[];
  //3al 9ad ma3andik columns tzidou fi displayedcolumns ==9adeh 3andik min ngcontainer fil html
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'Actions'];
  //fil constructeur na3mel instance min il service : ma3neha injectit il service 
  constructor(private ms: MembersService) {
    this.dataSource = ms.tab
  }

  ngOnInit(): void {
  }

}
