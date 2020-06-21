import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IQuestion} from '../../../interfaces/IQuestion';
import {IAsag_request} from '../../../interfaces/IAsag_request';
import {ITemplate_info} from '../../../interfaces/ITemplate_info';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {

  constructor() { }

  questions: IQuestion[] = [];
  asag_request: IAsag_request[] = [];
  newTemplateInfo: ITemplate_info = { prof_name: '' , template_name: '' };
  @ViewChild('fileUploader') fileUploader: ElementRef;
  ngOnInit(): void {}

  loadAnswers( questions ){
      let elem: IQuestion ;
      for ( elem of questions ) {
         this.asag_request.push( { question: elem.question,  answer: '', keywords: [[elem.keywords1], [elem.keywords2], [elem.keywords3], [elem.keywords4]] } ) ;
       }
      console.log('asag_request: ', this.asag_request);
  }

  csvJSON(csvText) {
    const lines = csvText.split('\n');
    const result = [];
    const headers = lines[0].split(',');
   // console.log(headers);
    for (let i = 1; i < lines.length ; i++) {
        const obj = {};
        const currentline = lines[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    this.questions = JSON.parse(JSON.stringify(result));
    console.log('questions: ', this.questions);
 }

  fileupload(files: FileList){
    if (files && files.length > 0) {
       const file: File = files.item(0);
       const reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
            const csv = reader.result ;
            this.csvJSON(csv);
            this.loadAnswers(this.questions);
         };
      }
  }

  newQuests($event){
    if ( !$event  ) {
      this.questions = [] ;
      this.asag_request = [] ;
      this.fileUploader.nativeElement.value = null;
    }
  }

}
