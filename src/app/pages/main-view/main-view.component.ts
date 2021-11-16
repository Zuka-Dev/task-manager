import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.models';
import { Column } from 'src/app/models/columns.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board:Board = new Board('Test',[
    new Column('Ideas', [
      "SOme random Ideas",
      "Another Funny Idea",
      "Another Funnier Idea"
    ]),
    new Column('Research', [
      "Some random Research",
      "Another Funny Research",
      "Another Funnier Research"
    ]),
    new Column('Todo', [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column('Done', [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ])
  ])
  ngOnInit(): void {
  }
  

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  }
