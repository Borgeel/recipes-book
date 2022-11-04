import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg?crop=1.00xw:0.452xh;0,0.262xh&resize=1200:*'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg?crop=1.00xw:0.452xh;0,0.262xh&resize=1200:*'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
