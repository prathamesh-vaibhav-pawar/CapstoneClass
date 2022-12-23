function Save_link(){
        var link2 = document.getElementById("LINK").value 
        localStorage.setItem("link", link2)
        bookmark = localStorage.getItem("link")
        division = "<div class = 'Output' id = "+bookmark+" onclick = 'redirect(this.id)'>"+bookmark+"</div><hr>"
    document.getElementById("Output").innerHTML += division 
    document.getElementById("LINK").innerHTML = ""
}
function Fav(){
    link1 =document.getElementById("LINK").value
    localStorage.setItem("FAvLink",link1)
    link3 = localStorage.getItem("FAvLink")
    Row1 = "<div class = 'Output' id = "+link3+" onclick = 'Encounter(this.id)'>"+link3+"</div><hr>"
    document.getElementById("FAv").innerHTML += Row1 
    document.getElementById("button").innerHTML = "<button class = 'btn'>Add to my Favriots <span class='glyphicon glyphicon-heart'></span></button>"
    document.getElementById("LINK").innerHTML = ""
}
function redirect(name){
    console.log(name)
    localStorage.setItem("link",name)
    window.location = name
}
function Encounter(name){
    console.log(name)
    localStorage.setItem("FAvLink",name)
    window.location = name
}