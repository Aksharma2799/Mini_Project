import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName="";
  members: string[]=[]; // sachin A = 1, MsDhoni=2, youraj=3
  errorMessage="";
  numberOfTeams: number | string="";
  teams: string[][]=[]

  onInput(member:string){
    this.newMemberName=member;
    console.log();
  }
  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  addMember(){
    if(!this.newMemberName){
      this.errorMessage="Name can't be empty";
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName=''
    console.log(this.members);
  }

  generateTeams(){
    if(!this.numberOfTeams || this.numberOfTeams<=0){
      this.errorMessage='Invalid number of teams';
      return;
    }
    if(this.members.length<this.numberOfTeams){
      this.errorMessage="Not enough member";
      return;
    }
    this.errorMessage='';
  
    // 3 teams ===> index places --> 0, 1, 2

    //when we don't have limit of input best way to deal the code is with loop.
    const allMemebers=[...this.members];

      for(let i=0; i<this.numberOfTeams; i++){
        const randomIndex=Math.floor(Math.random() * allMemebers.length);
        const member=allMemebers.splice(randomIndex,1)[0];

        if(!member) break;
  
        if(this.teams[i]){
          this.teams[i].push
        }else{
          this.teams[i]=[member]
        }
        }
        this.members=[]
        this.numberOfTeams=''
        console.log(this.teams);
      }
    }