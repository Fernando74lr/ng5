import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    itemCount: number = 4;
	btnText: string = 'Add an item';
	goalText: string = 'My first life goal';
	goals = [];

    constructor() { }

    ngOnInit(): void {
    }

	addItem() {
		this.goals.push((this.goalText));
		this.goalText = '';
		this.itemCount = this.goals.length;
	}

}