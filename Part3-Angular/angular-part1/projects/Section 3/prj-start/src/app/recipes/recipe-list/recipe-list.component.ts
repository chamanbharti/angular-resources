import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2011/09/Lemon-and-lime-ginger-crunch-1-scaled.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2011/09/Lemon-and-lime-ginger-crunch-1-scaled.jpg')
  ];
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
