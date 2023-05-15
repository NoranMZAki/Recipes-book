import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Fries', 'This is Fries recipe', '../../../assets/joyce-panda-lpsbMRRqMQw-unsplash.jpg')
  ];
}
