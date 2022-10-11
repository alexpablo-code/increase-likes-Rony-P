

var likeElement = document.querySelector("#likes");

var likeTotal = 9000

function addLike () {
likeTotal++;
likeElement.innerText = likeTotal + "like(s)";
console.log(likeTotal);
}