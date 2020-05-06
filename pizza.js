var toppings = ["pepperoni", "pineapple", "mushroom", "sausage", "olive"]

function pizza(description){
	var addToppings = toppings.join(' and ');
	return "a delicious pizza that has " + addToppings;
}
function capitalize(toppings) {
    return toppings.map(function(name) { 
        return name.split(' ').map(function(word) { 
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });
    });
}
pizza()