import { Component, OnInit } from '@angular/core';
import { getHtmlTagDefinition } from '../../node_modules/@angular/compiler';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inputText: string;
  inputObj: object;

  ngOnInit() {
    this.bindToggleActions();
  }

  getObjLength(obj): number {
    if (obj) {
      return Object.keys(obj).length;
    } else {
      return 0;
    }
  }

  convert(): void {
    this.inputObj = null;
    if (!this.inputText) {
      return;
    } else if (!this.isJsonStr(this.inputText)) {
      alert('Not valid JSON');
      return;
    }
    this.inputObj = JSON.parse(this.inputText);
    this.bindToggleActions();
  }

  bindToggleActions() {
    $(document).ready(function () {
      $('.minus').click(function () {
        $(this).hide();
        $(this).next().removeClass('hide').next().hide();
      });

      $('.plus').click(function () {
        $(this).addClass('hide');
        $(this).prev().show();
        $(this).next().show();
      });
    });
  }

  isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

  isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }

  isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

  isJsonStr(str): boolean {
    if (typeof str === 'string') {
      try {
        const obj = JSON.parse(str);
        if (typeof obj === 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
  }
}
