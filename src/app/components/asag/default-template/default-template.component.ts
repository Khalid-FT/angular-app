import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAsag_response} from '../../../interfaces/IAsag_response';
import {IAsag_request} from '../../../interfaces/IAsag_request';
import {ArNLPService} from '../../../services/ar-nlp.service';
import {ITemplate_info} from '../../../interfaces/ITemplate_info';

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.css']
})
export class DefaultTemplateComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  asag_response: IAsag_response[] = [];
  // tslint:disable-next-line:variable-name
  @Input() asag_request: IAsag_request[] = [];
  template = [];
  response ;
  submited = false ;
  @Input() btnBackisDisabled  ;
  @Input() btnSubmitisDisabled  ;
  @Input() btnBAddTemplateisDisabled  ;
  @Output() newQuestions = new EventEmitter();
  @Input() newTemplateInfo: ITemplate_info ;

  constructor(private arNLPService: ArNLPService) {
   // if ( this.asag_request.length === 0 ) { this.btnSubmitisDisabled = true ; }
  }

  ngOnInit(): void {
  }

  btnSubmit(){
    this.template.push( this.newTemplateInfo );
    let item = {};
    for ( item of this.asag_request ) {
      console.log(item) ;
      this.template.push(item) ;
    }
    this.arNLPService.asag(this.template).subscribe( response => this.asag_response = response);
    // this.submited = true ;
  }

  btnBack(){
    this.asag_request = [] ;
    this.asag_response = [] ;
    this.template = [] ;
    this.newTemplateInfo.prof_name = '' ;
    this.newTemplateInfo.template_name = '' ;
    this.submited = false;
    this.newQuestions.emit(false);
    this.response = [] ;
    this.btnBAddTemplateisDisabled = false ;
  }

  btnAddTemplate(){
    this.btnBAddTemplateisDisabled = true ;
    this.template.push( this.newTemplateInfo );
    let item = {};
    for ( item of this.asag_request ) {
      console.log(item) ;
      this.template.push(item) ;
    }
    this.arNLPService.addTemplate(this.template).subscribe( response => this.response = response );
  }

}
