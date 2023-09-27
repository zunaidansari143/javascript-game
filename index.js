const img1 =[]
img1[0] ='01.jpg'
img1[1] ='02.jpg'
img1[2] ='03.jpg'
img1[3] ='04.jpg'
img1[4] ='05.jpg'
img1[5] ='06.jpg'

const img2 =[]
img2[0] ='01.jpg'
img2[1] ='02.jpg'
img2[2] ='03.jpg'
img2[3] ='04.jpg'
img2[4] ='05.jpg'
img2[5] ='06.jpg'

window.onload = function(){
   
    const plyer1 = Math.floor(Math.random()* img1.length);
    const playerid =document.getElementById("img1")

    //  src =id.getAttribute("src") 
    playerid.setAttribute('src', `${img1[plyer1]}`)
    // var changeid =document.getElementById("img1")
    // var changesrc =changeid.getAttribute("src")   
    // src=`${img1[random]}`

    const plyer2 = Math.floor(Math.random()* img2.length);
    var playerid2 =document.getElementById("img2")
    playerid2.setAttribute('src', `${img2[plyer2]}`)

    // console.log(`${img1[plyer1]}`,`${img2[plyer2]}`)

//    console.log(plyer1,plyer2);

    if(plyer1 === plyer2){
        // console.log("game over")
        document.getElementById("player").innerHTML = "Game over"
    }
    else if(plyer1 >= plyer2 ){
        // console.log("win player 1")
        document.getElementById("player").innerHTML = "win player 1"
    }
    else if(plyer1 <= plyer2 ){
        // console.log("win player 2")
        document.getElementById("player").innerHTML = "win player 2"
    }else{
        document.getElementById("player").innerHTML = "refresh me"

    }

}


// function changeimg(){
//     var id =document.getElementById("img1")
//     var src =id.getAttribute("src")
// console.log(src)
// }
// function changeimg(){
//     console.log(document.body)
// }