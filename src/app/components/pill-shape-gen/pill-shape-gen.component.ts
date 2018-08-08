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
  pillShapeSize = 1.00;
  pillShapeSplit = false;

  ngOnInit(): void {
  }

  parsePillInput() {
    this.pillShapesArray = this.pillShapeText.trim().split(',');
  }

  screenshot(selectorQuery: string, splitEach: boolean = false, pillShapeGenPreview) {
    console.log(pillShapeGenPreview.offsetHeight);

    let $output = $('#' + selectorQuery + '-output');
    const options = {
      backgroundColor: null,
      display: 'none',
      height: pillShapeGenPreview.offsetHeight,
      width: pillShapeGenPreview.offsetWidth,
      scale: this.pillShapeSize
    };

    if (splitEach === true) {
      // splitting each element to its own canvas
      $output.empty();
      let elArray = $('#' + selectorQuery + '-preview span');
      elArray.each(index => {
        screenshooter(elArray[index], options)
          .then((canvas) => {
            canvas.classList.add('mr-2');
            $output[0].appendChild(canvas);
          })
      });
    } else {
      // grouping up all elements into 1 canvas
      screenshooter($('#' + selectorQuery + '-preview')[0], options)
        .then((canvas) => {
          $output.empty();
          $output[0].appendChild(canvas);
        });
    }
  }

}
