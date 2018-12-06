var classname = document.getElementsByClassName("member");
var stats = document.getElementById("stats")
var selected = null;
var data = {"SebastianMonzon" : ["12", "4 years", "Freestyle"], "EamonnBurke" : ["12", "2 years", "Butterfly"], 
            "DanBouvier" : ["12", "2 years", "Breast-stroke"], "DevinMcDaid" : ["11", "3 years", "Butterfly"],
            "ThiagoNunes" : ["11", "3 years", "Freestyle"], "EthanProspere" : ["11", "3 years", "Butterfly"],
            "GabeMonzon" : ["11", "3 years", "Freestyle"], "JimFredrick" : ["11", "3 years", "Freestyle"],
            "MilesDelGrecco" : ["11", "3 years", "Breast-stroke"], "CamWhite" : ["11", "2 years", "Freestyle"],
            "AndersonPhan" : ["10", "2 years", "Freestyle"],}
var onMouseOver = function() {
    var name = this.textContent;
    
    name = name.replace(/\s/g, "");
    this.style.backgroundColor = "rgb(184, 16, 31)";
    //open info
    var memberData = data[name];
    console.log(name)
    stats.innerHTML = "Grade: " + memberData[0] + "<br>Member for: " + memberData[1] + "<br>Best Stroke: " + memberData[2] + "";

};
var onMouseOut = function() {

    this.style.backgroundColor = "rgba(30,30,30,0.75)";
    //close info
    stats.textContent = "Hover Over Member For Stats";

};
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('mouseover', onMouseOver, false);
    classname[i].addEventListener('mouseout', onMouseOut, false);
}