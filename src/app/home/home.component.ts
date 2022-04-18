import { Component, OnInit } from '@angular/core';
import { IMentee, IMentor } from "../models/people.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mentors!: IMentor[];
  public mentees!: IMentee[];

  constructor() { }

  ngOnInit(): void {
  }

  addMentors(newMentors: IMentor[]) {
    this.mentors = newMentors;
    console.log(this.mentors);
  }

  addMentees(newMentees: IMentor[]) {
    this.mentees = newMentees;
    console.log(this.mentees);
  }

  public uploadPeople() {
    console.log('uploading people');
  }

}
