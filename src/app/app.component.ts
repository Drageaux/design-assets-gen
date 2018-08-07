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

  screenshot(selectorQuery: string) {
    screenshooter($('#' + selectorQuery + '-preview')[0])
      .then((canvas) => {
        $('#' + selectorQuery + '-output').empty();
        $('#' + selectorQuery + '-output')[0].appendChild(canvas);
      });
  }
}
