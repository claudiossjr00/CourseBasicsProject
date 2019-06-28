import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemWasSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('First test recipe', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ", 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
    new Recipe('Second test recipe', "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'", 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
    new Recipe('Third test recipe', "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onItemSelected (itemSelected: Recipe) {
    this.itemWasSelected.emit(itemSelected);
  }

}
