
// A script that randomly chooses parts of the page to be shown in the highligh area of the front page


// grabing relevant DOM elements and assigning them to a variable
var fphTitle = document.getElementById('front-page-highlight-title');
var fphDescription = document.getElementById('front-page-highlight-description');
var fphReadMore = document.getElementById('front-page-highlight-read-more');

// function, which changes the hyperlink 
function linkChange(input) {
    fphReadMore.setAttribute('href', input)
}

// randomly choosing which page gets chosen and shown 
var v = Math.floor(Math.random(3) * 3);
if (v == 0) // workouts.html
{
    fphTitle.textContent = "Plant fueled workouts";
    fphDescription.textContent = "Find out about the best way to build your muscle with one of the most popular training splits.";
    linkChange('workouts.html');
}
else if (v == 1) //supplements.html
{
    fphTitle.textContent = "Completely plant based supplements";
    fphDescription.textContent = "Find out about the supplements, containing only plant compounds, that can help you on your journey.";
    linkChange('supplements.html');
}
else if (v == 2) // nutrition.html
{
    fphTitle.textContent = "Best plant meals";
    fphDescription.textContent = "Find out about the best plant meals, that can help you in achieving a number of goals.";
    linkChange('nutrition.html');
}
