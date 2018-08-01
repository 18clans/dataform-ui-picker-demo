import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  private _selectedRadius: SelectedRadius;
  private _radius: Array<Radius>;
  private _radiusName: Array<number>;
  constructor() { }

  get myRadiusSelection() {
    return this._selectedRadius;
  }

  get radius() {
    this._radius = new Array<Radius>();
    this._radius.push(new Radius(1, "1"));
    this._radius.push(new Radius(3, "3"));
    this._radius.push(new Radius(5, "5"));
    this._radius.push(new Radius(10, "10"));
    this._radius.push(new Radius(20, "20"));

    return this._radius;
  }

  get radiusName() {
    this._radiusName = this.radius.map((value: Radius) => value.id);
    return this._radiusName;
  }

  ngOnInit() {
    this._selectedRadius = new SelectedRadius(5);
  }

}

export class Radius {
  public id: number;
  public mile: string;

  constructor(id: number, mile: string) {
    this.id = id;
    this.mile = mile;
  }
}

export class SelectedRadius {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

