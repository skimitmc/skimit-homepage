function getruntime(){
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    var pass1 = Date.parse('8/27/2019');
    var pass2 = Date.parse(m+'/'+d+'/'+y);
    var time = Math.floor((pass2-pass1)/(1000*60*60*24));
    var nv = document.getElementById("rtime");
    nv.innerHTML = (time);
};
//var urodz= new Date("8/27/2019"); 
//var now = new Date(); 
//var ile = now.getTime() - urodz.getTime(); 
//var dni = Math.floor(ile / (1000 * 60 * 60 * 24)); 