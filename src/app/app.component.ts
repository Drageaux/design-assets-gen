import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';
import * as screenshooter from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  pillShapeText = '';
  pillShapesArray: string[] = [];
  pillShapeColor = 'salmon';

  ngOnInit(): void {
  }

  parsePillInput() {
    this.pillShapesArray = this.pillShapeText.trim().split(',');
  }

  screenshot() {
    // var test1=imagify(d.body,(base64)=>{
    //   $('body').append('<img src="'+base64+'"/>')
    // });
    //
    screenshooter($('#pill-shape-gen-output')[0]).then(function (canvas) {
      document.body.appendChild(canvas);
    });
  }
}
