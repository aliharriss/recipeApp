import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list.component';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // Get the input elements rom the dom
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef;
  @ViewChild('numberInput',{static:true}) numberInput: ElementRef;
  @ViewChild('measureInput',{static:true}) measureInput: ElementRef;


  // inject the shopping list service
  constructor(private shoppingListService:ShoppingListService){}

  ngOnInit(): void {
  }

  onAddIngredient(){
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.measureInput.nativeElement.value,
      this.numberInput.nativeElement.value)
    // do an eventemmitter here
    this.shoppingListService.ingredientAdded.emit(newIngredient)
    console.log(newIngredient.name + " emitted")
  }

  onDeleteIngredient(){}

  onCancelIngredient(){}

}
