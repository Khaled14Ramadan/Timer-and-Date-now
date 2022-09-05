
let d = document.getElementById("di");
let pr = document.getElementById("do");
let s = document.getElementById("s");

d.style.textAlign = "center";
d.style.paddingTop = "50px";
pr.style.fontSize = "40px";
s.style.color ="#111";

const months = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"];
///////////////////////////////////solution 1//////////////////////////////
// function timer()
// {
//     let tim = new Date();
//     let hour = tim.getHours();
//     let min = tim.getMinutes();
//     let day =tim.getDate();
//     let month = tim.getMonth();
//     let year = tim.getFullYear();
//     pr.innerHTML = "";
//     if(hour < 12)
//     {
//         if(hour<10)
//         {
//             pr.innerHTML = "0";
//         }
//         pr.innerHTML += hour + ":";
//         if(min<10)
//         {
//             pr.innerHTML += "0";
//         }
//         pr.innerHTML += min +" Am";
//     }
//     else 
//     {
//         hour-=12;
//         if(hour<10)
//         {
//             pr.innerHTML = "0";
//         }
//         pr.innerHTML += hour + ":";
//         if(min<10)
//         {
//             pr.innerHTML += "0";
//         }
//         pr.innerHTML += min +" Bm";
//     }

//     s.innerHTML = day + " " + months[month] +" "+year ;
// }

// setInterval(timer , 200);

////////////////////////another/////////////////////////////////
function timer()
{
    var date = new Date();
    var time = date.toLocaleTimeString();
    var day =date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    pr.innerHTML = time;
    s.innerHTML = day + " " + months[month] +" "+year ;
}

setInterval(timer , 200);

///////////////////////////another/////////////////////////////////////

function timer()
{
    var date = new Date();
    var time = date.toLocaleTimeString();
    time = time.split(' ');
    var hour = time[0].split(':')[0];
    var min = time[0].split(':')[1];
    var day =date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    pr.innerHTML = hour+":"+min+" "+time[1];
    s.innerHTML = day + " " + months[month] +" "+year ;
}
setInterval(timer , 200);