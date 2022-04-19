import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectMentorEntities } from "../mentors/mentor.reducer";
import { IMentor } from "../models/people.model";
import { Dictionary } from "@ngrx/entity";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  public mentors!: Dictionary<IMentor>;
  public mentorList!: IMentor[];
  public mentorDataSource = new MatTableDataSource(this.mentorList);

  public mentorColumns: string[] = ['id', 'name', 'email', 'city', 'rating'];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectMentorEntities).subscribe((mentors) => {
      this.mentors = mentors;
      if (this.mentors) {
        this.mentorList = Object.values(this.mentors) as IMentor[];
      }
    });
  }

  public applyMentorFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.mentorDataSource.filter = filterValue.trim().toLowerCase();
  }

  public matchPeople() {
    console.log('match people');
  }
}
