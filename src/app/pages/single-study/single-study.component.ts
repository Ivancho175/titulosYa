import { Component, OnInit } from '@angular/core';
import { NgxDropzoneChangeEvent, NgxDropzoneRemoveBadgeComponent } from 'ngx-dropzone';
import { takeLast } from 'rxjs/operators';
import { FilesService } from 'src/app/@shared/services/files.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-single-study',
  templateUrl: './single-study.component.html',
  styleUrls: ['./single-study.component.scss']
})
export class SingleStudyComponent implements OnInit {

  files: File[] = [];
  imgRta = '';
  verify: boolean = false;
  percentageProgressBar = 0;
	showProgressBar = false;

  constructor(
    private service: FilesService,
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    console.log(event);
    this.files.push(...event.addedFiles);



  }

  /* onRemove(event: NgxDropzoneChangeEvent) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  } */

}
