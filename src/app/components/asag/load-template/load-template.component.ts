import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArNLPService} from '../../../services/ar-nlp.service';
import {IQuestion} from '../../../interfaces/IQuestion';
import {IAsag_response} from '../../../interfaces/IAsag_response';
import {IAsag_request} from '../../../interfaces/IAsag_request';
import {ITemplate_info} from '../../../interfaces/ITemplate_info';
import {IResponse} from '../../../interfaces/IResponse';

@Component({
  selector: 'app-load-template',
  templateUrl: './load-template.component.html',
  styleUrls: ['./load-template.component.css']
})
export class LoadTemplateComponent implements OnInit {

  constructor(private arNLPService: ArNLPService, private route: ActivatedRoute) { }

  newTemplateInfo: ITemplate_info = { prof_name: '' , template_name: '' };
  questions: IResponse[] = [];
  asag_response: IAsag_response[] = [];
  asag_request: IAsag_request[] = [];
  submited = false ;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.newTemplateInfo.prof_name = params.prof_name;
        this.newTemplateInfo.template_name = params.template_name;
        console.log(this.newTemplateInfo.prof_name, this.newTemplateInfo.template_name);
    });
    this.loadTemplate(this.newTemplateInfo.prof_name, this.newTemplateInfo.template_name);
  }

  loadTemplate( prof_name , template_name ){
    return this.arNLPService.loadTemplate(prof_name, template_name).subscribe( response => {
      this.questions = response;
      this.loadAnswers(this.questions);
    }) ;
  }

  loadAnswers( questions: IResponse[] ){
      let elem: IResponse ;
      // tslint:disable-next-line:forin
      for ( elem of questions ) {
        if ( elem.question != null ){
          // @ts-ignore
          this.asag_request.push( { question: elem.question ,  answer: '' , keywords: [elem.keywords[0], elem.keywords[1], elem.keywords[2], elem.keywords[3]] } ) ;
        }
       }
      console.log('questions: ', this.questions);
      console.log('asag_request: ', this.asag_request);
  }

}
