import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private recipes: Recipe[] = [
    new Recipe('First test recipe', 'Lorem Ipsum', 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
    new Recipe('Second test recipe', 'Lorem Ipsum', 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
