import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';
import * as screenshooter from 'html2canvas';

@Component({
  selector: 'app-pill-shape-gen',
  templateUrl: './pill-shape-gen.component.html',
  styleUrls: ['./pill-shape-gen.component.scss']
})
export class PillShapeGenComponent implements OnInit {

  pillShapeText = '';
  pillShapesArray: string[] = [];
  pillShapeColor = 'salmon';
  pillShapeSplit = false;

  ngOnInit(): void {
  }

  parsePillInput() {
    this.pillShapesArray = this.pillShapeText.trim().split(',');
  }

  screenshot(selectorQuery: string, splitEach: boolean = false) {
    if (splitEach === true) {
      // splitting each element to its own canvas
      $('#' + selectorQuery + '-output').empty();
      let elArray = $('#' + selectorQuery + '-preview span');
      elArray.each(index => {
        screenshooter(elArray[index])
          .then((canvas) => {
            canvas.classList.add('mr-2');
            $('#' + selectorQuery + '-output')[0].appendChild(canvas);
          })
      });
    } else {
      // grouping up all elements into 1 canvas
      screenshooter($('#' + selectorQuery + '-preview')[0])
        .then((canvas) => {
          $('#' + selectorQuery + '-output').empty();
          $('#' + selectorQuery + '-output')[0].appendChild(canvas);
        });
    }
  }

}
