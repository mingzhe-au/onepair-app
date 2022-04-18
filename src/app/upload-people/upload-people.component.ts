import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-upload-people',
  templateUrl: './upload-people.component.html',
  styleUrls: ['./upload-people.component.scss']
})
export class UploadPeopleComponent implements OnInit {
  @Output() mentorUpload = new EventEmitter<any>();
  @Output() menteeUpload = new EventEmitter<any>();

  public file!: File;
  public arrayBuffer: any;
  public fileList!: any[];

  public menteeFileName!: string;
  public mentorFileName!: string;

  constructor() { }

  addMentorFile(value: any) {
    this.mentorUpload.emit(value);
  }

  addMenteeFile(value: any) {
    this.menteeUpload.emit(value);
  }

  ngOnInit(): void {
  }

  onFileSelected(event: Event, role: string) {
    this.file = (event.target as HTMLInputElement).files![0];
    if (this.file) {
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(this.file);
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        const data = new Uint8Array(this.arrayBuffer);
        const arr = [];
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, { type: 'binary' });
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        const peopleList = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        if (role === 'mentor') {
          this.mentorFileName = this.file.name;
          this.addMentorFile(peopleList)
        } else {
          this.menteeFileName = this.file.name;
          this.addMenteeFile(peopleList)
        }
      }
    }
  }

}
