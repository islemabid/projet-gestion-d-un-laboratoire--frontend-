//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/Models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  tab = GLOBAL._db.members;


  constructor() { }
  saveMember(membreToSave: Member): Promise<Member> {
    //this.httpClient.post<Member>('linkToRestApi', membreToSave).toPromise();//pour accéder au backend
    const member = { ...membreToSave, }//extraire les elements de l'objet
    membreToSave.id = member.id ?? Math.ceil(Math.random() * 10000).toString();//if short bil ?? walet
    membreToSave.createdDate = member.createdDate ?? new Date().toISOString();//toISoSTRING FORMAT DE DATE simplifié
    this.tab = [membreToSave, ...this.tab.filter((item: { id: string; }) => item.id !== member.id)]
    return new Promise(resolve => resolve(membreToSave)); // promise andha block try/catch , il try hiya resolve ken kol chay mriguel traja3lik resultat sinon  block catch hiya reject twali 

  }
}
