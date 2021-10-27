import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Models/member.model';
import { MembersService } from 'src/Services/members.service';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: any;
  currentid: any;
  item1: any;


  constructor(private ms: MembersService, private router: Router, private acivateRoute: ActivatedRoute) { }
  initform(item: any): void {
    this.form = new FormGroup({
      //item? .attribut : yefhem ken si item.attribut fih valeur ye5ouha sinon ye5ou null
      cin: new FormControl(item?.cin, [Validators.required]),
      name: new FormControl(item?.name, [Validators.required]),
      cv: new FormControl(item?.cv, []),
      type: new FormControl(item?.type, [Validators.required]),


    })
  }
  onsubmit() {
    console.log(this.form.value);
    //{ ...this.item1, ...this.form.value }:ma3neha kol element fil item1 twali bil element ili ktebtou jdid fil form
    const membreToSave = { ...this.item1, ...this.form.value };
    //.then na3mlouha wa9t c'et bon il resultat fil resolve w nhebou ya3mel 7aja o5ra , 
    this.ms.saveMember(membreToSave).then(() => { this.router.navigate(['./members']) });


  }


  ngOnInit(): void {
    this.currentid = this.acivateRoute.snapshot.params.id;//récupéer l'id il mawjoud fil url
    // if truely testiha bil  !! 
    if (!!this.currentid) {
      // je suis dans edit 
      //mech tjib il membre à modifier w t9olou jibli il formulaire fih les données de ce member
      this.ms.getMemberById(this.currentid).then(
        (item: Member) => { this.item1 = item; this.initform(this.item1) }
      )


    }

    else {
      //je suis dans add
      this.initform(null);
    }


  }

}