import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectMentorEntities } from "../mentors/mentor.reducer";
import { IMentor, IPair } from "../models/people.model";
import { Dictionary } from "@ngrx/entity";
import { MatTableDataSource } from "@angular/material/table";
import { selectMenteeEntities, selectMenteesState } from "../mentees/mentee.reducer";
import { PairsService } from "../pairs/pairs.service";
import { IPairState } from "../pairs/pair.reducer";
import { upsertPairs } from "../pairs/pair.actions";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  public mentors!: Dictionary<IMentor>;
  public mentorList!: IMentor[];
  public mentorDataSource = new MatTableDataSource(this.mentorList);
  public mentees!: Dictionary<IMentor>;
  public menteeList!: IMentor[];
  public menteeDataSource = new MatTableDataSource(this.menteeList);
  public pairs: IPair[] = [];

  public mentorColumns: string[] = ['id', 'name', 'email', 'city', 'rating'];
  public menteeColumns: string[] = ['id', 'name', 'email', 'city', 'rating'];

  constructor(
    private store: Store,
    private pairsService: PairsService,
    private pairStore: Store<IPairState>) { }

  ngOnInit(): void {
    this.store.select(selectMentorEntities).subscribe((mentors) => {
      this.mentors = mentors;
      if (this.mentors) {
        this.mentorList = Object.values(this.mentors) as IMentor[];
        this.mentorDataSource = new MatTableDataSource(this.mentorList);

      }
    });
    this.store.select(selectMenteeEntities).subscribe((mentees) => {
      this.mentees = mentees;
      if (this.mentees) {
        this.menteeList = Object.values(this.mentees) as IMentor[];
        this.menteeDataSource = new MatTableDataSource(this.menteeList);
      }
    });
  }

  public applyMentorFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.mentorDataSource.filter = filterValue.trim().toLowerCase();
  }

  public applyMenteeFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.menteeDataSource.filter = filterValue.trim().toLowerCase();
  }

  public matchPeople() {
    console.log('match people');
    this.pairsService.matchPeople(this.mentorList, this.menteeList).then(
      (pairs: IPair[]) => {
        this.pairs = pairs;
        this.pairStore.dispatch(upsertPairs({ pairs: this.pairs }));
      }
    );
  }
}
