function getruntime() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    var pass1 = Date.parse('2019/5/18');
    var pass2 = Date.parse(y+'/'+m+'/'+d);
    var time = (pass2-pass1)/(1000*60*60*24);
    document.getElementById("runtime").innerHTML = (time);
};