import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', {static: false}) inputNameRef: ElementRef;
  @ViewChild('inputAmount', {static: false}) inputAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {
  }

  onAddClicked() {
    const inputName = this.inputNameRef.nativeElement.value;
    const inputAmount = this.inputAmountRef.nativeElement.value;
    const nIngredient = new Ingredient(inputName, inputAmount);
    this.ingredientAdded.emit(nIngredient);
  }
}
