test = function() {
let h = ".gbl-leaderboard__trainer";
let f = (d,e) => d.querySelector(e).innerText.trim();
let datas = document.querySelectorAll(h);
let output = "";
for( let data of datas ) {
    let d = f(data,h+'__rank')+",";
    d+=f(data,h+'__details__trainer__name')+",";
    d+=(f(data,h+'__details__trainer__rank').split(": "))[1]+",";
    d+=f(data,h+'__battles__rating')+",";
    d+=(f(data,h+'__battles__count').split(":"))[1];
    output+=d+"\n";
}
let blob = new Blob([output],{type:"text/csv"});
let a1 = document.createElement('a');
a1.href= URL.createObjectURL(blob);
a1.download = 'test.csv';
a1.click();
}