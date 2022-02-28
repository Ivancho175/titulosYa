import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  /* onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.service.uploadFile(file)
      .subscribe(rta => {
        this.imgRta = rta.location;
      })
    }
  } */

}
