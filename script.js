//declaring an array:
const beers = [] ;


//adding the obj containing the data to the beers array:
function addBeer (name, category) {
    let newBeer = {
        name : name,
        category : category
    }

    beers.push(newBeer);
}


//removing the list elements and adding new list items with the data from the obj that's in the beers arr:
function renderBeers() {
    $('.beers-list').detach('li');
    for (let item in beers) {
        $('.beers-list').append('<li></li>').text(beers[item].name + ' - '+beers[item].category);
    }
}

/*
clicking on post will invoke:
a. addBeer() with the user's inputs. 
b. renferBeers() which adds the user's inputs to the html list 
*/


$('.post-beer').click(function() {
    addBeer($('.beer-input').val(), $('.category-input').val()); 
    renderBeers();
});





/*Inside, the handler function you'll want to invoke addBeer. 
As it's arguments you'll need to give it the beer's "name" and "category" from the inputs.
*/

/*
In your JavaScript, create a global array called beers.
Inside the addBeer function, create a new beer object using the data that is passed to the function
 (ie via the parameters) and push it to a beers array.
*/

/*
Declare another function called renderBeers that takes no arguments.
Inside this function, firstly empty the beers container 
(it should be a <ul>, or a div) so that it no longer has any <li> elements inside. 
Then loop through the beers array, inside the loop append the beers to the beers <ul>
Invoke renderBeers inside your click handler just below where you're invoking the addBeer function.
*/