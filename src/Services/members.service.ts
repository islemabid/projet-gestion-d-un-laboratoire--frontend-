//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Member, Members } from 'src/Models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  //public tabb:Members[]=[];
  tab = GLOBAL._db.members;


  constructor(private httpClient: HttpClient) { }

  saveMember(membreToSave: Member): Promise<Member> {
    //return this.httpClient.post<Members>('http://localhost:9000/MEMBRE-SERVICE/membres/etudiant',member).toPromise();
   // this.httpClient.post<Member>('linkToRestApi', membreToSave).toPromise();//pour accéder au backend
    const member = { ...membreToSave, }//extraire les elements de l'objet
    membreToSave.id = member.id ?? Math.ceil(Math.random() * 10000).toString();//if short bil ?? walet
    membreToSave.createdDate = member.createdDate ?? new Date().toISOString();//toISoSTRING FORMAT DE DATE simplifié
    this.tab = [membreToSave, ...this.tab.filter((item: { id: string; }) => item.id !== member.id)]
    return new Promise(resolve => resolve(membreToSave)); // promise andha block try/catch , il try hiya resolve ken kol chay mriguel traja3lik resultat sinon  block catch hiya reject twali 

  }
  getMemberById(id: string): Promise<Member> {
    //this.httpClient.post<Member>('linkToRestApi').toPromise();//pour accéder au backend
    return new Promise(resolve => resolve(this.tab.filter((item: { id: string; }) => item.id == id)[0] ?? null));
    // ken il9a il id yarmi il resultat de filter ili hiya deja traja3lik tableau  fil position 0 (ligne1) 
  }
  deleteMember(id: string): Promise<void> {
    //this.httpClient.delete<void houwa type de retour>('linkToRestApi').toPromise();//pour accéder au backend
    /*this.tab = this.tab.filter((item: { id: string; }) => item.id !== id);
    return new Promise(resolve => resolve())*/
    return this.httpClient.delete<void>('http://localhost:9000/MEMBRE-SERVICE/membres/' + id).toPromise();

  }
  GetAllMembers(): Promise<Members[]> {
    //return this.httpClient.get<Member[]>("linktoapi").toPromise();
    //return new Promise(resolve => resolve(this.tab));
    return this.httpClient.get<any[]>('http://localhost:9000/MEMBRE-SERVICE/membres').toPromise();
  }







}
