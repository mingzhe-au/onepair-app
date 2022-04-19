import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectPairEntities } from "../pairs/pair.reducer";
import { IPair } from "../models/people.model";
import { MatTableDataSource } from "@angular/material/table";
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public pairs!: IPair[];
  public pairDataSource = new MatTableDataSource(this.pairs);
  public pairTableColumns: string[] =
    ['Pair id', 'Mentor name', 'Mentee name'];

  // ['Pair id', 'Pair score', 'Mentor id', 'Mentor name', 'Mentor email', 'Mentor city', 'Mentor rating', 'Mentee id', 'Mentee name', 'Mentee email', 'Mentee city', 'Mentee rating'];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectPairEntities).subscribe(pairEntities => {
      // console.log(pairEntities);
      this.pairs = Object.values(pairEntities) as IPair[];
      this.pairDataSource = new MatTableDataSource(this.pairs);
    });
  }

  public applyPairFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.pairDataSource.filter = filterValue.trim().toLowerCase();
  }

  public exportPairToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('pair-table') as HTMLTableElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Pairs');
    XLSX.writeFile(wb, 'Pairs.xlsx');
  }
}
