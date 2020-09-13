import React from 'react';
import InputBar from './inputBar';
import RecipeList from './recipeList';

class RecipeSearch extends React.Component {
	  constructor(){
	    super()
	    this.state = {
	      inputfield: '',
		  listOfRecipes: [],
	    }
	  }

	searchClicked = () => {
		let ingredient = this.state.inputfield;

		fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}+bacon,+eggs&number=6&apiKey=7b63e05c134e4f8d93e7d0c74c66e634`)
		  .then(response => response.json())
		  .then(data => this.setState({listOfRecipes: data}))
	  }

	keyPressed = (event) => {
	    if(event.key === 'Enter'){
	      this.searchClicked();
	    }
	  }

	render(){
	
	  return (
	    <div>
	      <header style={{marginTop: '7%'}}>
	        Enter the ingredients for a recipe!
	      </header>
	      <InputBar inputValue={this.state.inputfield} searchClicked = {this.searchClicked} onKeyPress={this.keyPressed}/>
	      {console.log(this.state.listOfRecipes)}
	      <RecipeList recipes = {this.state.listOfRecipes}/>
	    </div>
	  );
	}
}

export default RecipeSearch;
