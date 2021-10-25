import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembersService } from 'src/Services/members.service';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: any;
  currentid: any;


  constructor(private ms: MembersService, private router: Router, private acivateRoute: ActivatedRoute) { }
  initform(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, []),
      type: new FormControl(null, [Validators.required]),


    })
  }
  onsubmit() {
    console.log(this.form.value);
    const membreToSave = this.form.value;
    //.then na3mlouha wa9t c'et bon il resultat fil resolve w nhebou ya3mel 7aja o5ra , 
    this.ms.saveMember(membreToSave).then(() => { this.router.navigate(['./members']) });


  }


  ngOnInit(): void {
    this.currentid = this.acivateRoute.snapshot.params.id;
    // if truely testiha bil  !! 
    if (!!this.currentid) {
      // je suis dans edit 
      //getelementbyid) dans membreService

    }

    else {
      //je suis dans add
      this.initform();
    }
    this.initform();

  }

}