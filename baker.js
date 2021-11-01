function cakes(recipe, available) {
	let minProd = [];
	let count = 0;
	for (const [recipeKey, recipeVal] of Object.entries(recipe)) {
		for (const [availableKey, availableVal] of Object.entries(available)) {
			if(availableKey === recipeKey){
				let maxProduction = Math.floor(Number(availableVal)/Number(recipeVal)).toFixed();
				minProd.push(maxProduction);
				count++;
			}
		  }
	  }
	if(Object.keys(recipe).length === count){
		return Math.min(...minProd);
	}
	else{
		return 0;
	}
  }

  cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 