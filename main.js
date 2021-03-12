var names = [
    "Me,Advait",
    "My Mother,Mythil Balakrishnan",
    "My Father,Anandh Bharathan",
    "My Grandma From Mother's side,Subhalakshmi",
    "My Grandma From Father's side,Uma Bharathan",
    "My Two Cousin Brothers, Adithya And Arun"
];
var images = [
    "me.webp","mom.png","dad.png","venma.jpg","grandma.png","adi arun.png"
]
var i = 0;
function next()
 
 {
document.getElementById("name_text").innerHTML = names[i];
document.getElementById("album").src = images[i];
i++;

}

