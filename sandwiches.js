function sandwichCalculator(slicesOfBread, slicesOfCheese) {
	var sandwiches = slicesOfBread / 2;
	 if ((slicesOfBread > 1) && (slicesOfBread % 2 === 0) && (slicesOfCheese > 0) && (slicesOfCheese <= sandwiches)){
	 	console.log(slicesOfCheese)
	 } else if ((slicesOfBread <= 1) || (slicesOfCheese < 1)) {
	 	console.log("Not enough ingredients")
	 } else if (slicesOfCheese > sandwiches) {
	 	console.log(sandwiches)
	 }
}
sandwichCalculator(10, 11)