import { Component, OnInit } from '@angular/core';
import {ArNLPService} from '../../services/ar-nlp.service';
import {IText} from '../../interfaces/IText';

@Component({
  selector: 'app-ar-nlp',
  templateUrl: './ar-nlp.component.html',
  styleUrls: ['./ar-nlp.component.css']
})
export class ArNLPComponent implements OnInit {

  text: IText = { step: '' , body: '' } ;
  result: IText = { step: '' , body: '' } ;
  constructor(private arNLPService: ArNLPService) { }

  ngOnInit(): void {
  }

  // button process Text
  process(){
    if (this.text.step) {
           this.result.body = '' ;
           switch (this.text.step) {
             case 'tokenization' : this.tokenization() ; break ;
             case  'lemma' : this.lemmatization() ; break ;
             case 'stopwords' : this.removeStopWords() ; break ;
             case 'diacritization' : this.diacritization() ; break ;
             default : this.result.body = 'choose a valid option';
           }
    }
    else {
            this.result.body = 'choose an option';
    }

  }

  // Tokenization option
  tokenization(){
    this.arNLPService.process(this.text).subscribe(
       response => this.result = response
       );
  }

  // Lemmatization
  lemmatization(){
    this.arNLPService.process(this.text).subscribe(
       response => this.result = response
       );
  }

  // remove stop words
  removeStopWords(){
    this.arNLPService.process(this.text).subscribe(
       response => this.result = response
       );
  }

  // diacritization
  diacritization(){
    this.arNLPService.process(this.text).subscribe(
       response => this.result = response
       );
  }

  // clear text
  clearText(){
   this.text.body = '' ;
   this.result.body = '' ;
  }

}
