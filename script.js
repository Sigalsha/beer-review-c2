
const beers = [] ;



function addBeer (name, category, rating) {
    let newBeer = {
        name : name,
        category : category,
        rating : rating
    }

    beers.push(newBeer);
}




function renderBeers() {
    $('ul').empty();
    $.each( beers, function( index, value ){
        let liBeerName = 'beer: ' + value.name;
        let liBeerCategory = ' category: ' + value.category;
        let liBeerRating = ' rating: ' + value.rating + ' out of 5';
        $('.beers-list').append('<li>' + liBeerName + liBeerCategory + liBeerRating + '</li>');
    });
}




$('.post-beer').click(function() {
    addBeer($('.beer-input').val(), $('.category-input').val(), $('#rating').val()); 
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


/*
clicking on post will invoke:
a. addBeer() with the user's inputs. 
b. renferBeers() which adds the user's inputs to the html list 
*/