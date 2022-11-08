import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  //NgModel way
  // nameInput: string = '';
  // amountInput: number;

  constructor() {}

  ngOnInit(): void {}

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const newIngredient = new Ingredient(
      nameInput.value,
      amountInput.valueAsNumber
    );
    // const newIngredient = new Ingredient(this.nameInput, this.amountInput);

    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
