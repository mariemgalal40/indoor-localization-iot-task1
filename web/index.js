// var x=0, reading_value1, reading_value2, reading;
// var layout1={title: 'Temperature'};
// var layout2={title: 'Humitidy'};

// function check(){
//     if(x==1){
//         // Plotly.deleteTraces('chart', [0]);
//         plot_temp();
//     }
//     else{
//         // Plotly.deleteTraces('chart', [0]);
//         plot_hum();
//     }}

// function get_temp(){
//     var data = firebase.database().ref().child("tempo")
//     data.on("value", (snap)=>{
//     reading_value1 = snap.val();
//     console.log(reading_value1)
//     })
// return reading_value1;
// }

// function get_humi(){
//     var data = firebase.database().ref().child("humii")
//     data.on("value", (snap)=>{
//     reading_value2 = snap.val();
//     console.log(reading_value2)

//     })
// return reading_value2;
// }

// function plot_hum(){
// x=1;
// Plotly.purge('graph');
// Plotly.plot('chart', [{ y:[0], type: 'line'}]);
// setInterval(function() {
//     Plotly.extendTraces('chart', { y:[[get_humi()]]}, [0])
// })} 


// function plot_temp(){
// x=0;
// Plotly.purge('chart');
// Plotly.plot('graph', [{ y:[0], type: 'line'}]);
// clearInterval([[get_humi()]]);
// setInterval(function() {
//     Plotly.extendTraces('graph', { y: [[get_temp()]] }, [0])
// })}            

// function send_alarm(){
//     var data = firebase.database().ref().child("status")
//     data.on("value", (snap)=>{
//     reading = snap.val();})
//     console.log(reading)
//     if (Object.values(reading) == 1){
//         firebase.database().ref().child("status").set({
//             status : 0
//         })}
//     else{
//     firebase.database().ref().child("status").set({
//         status :1
// }) }
// }




function check(){
    var x,y,z,test;
    console.log("hello")
    x=pos[pos.length -1]
    y=pos[pos.length -2]
    z=pos[pos.length -3]
    if((x==3 && y==1 && z==5)||(x==5 && y==1 && z==5)){
            position1.top = String(path1[0].t);
            position1.left = String(path1[0].b);
            position1.width = String(path1[0].w);

            position2.top = String(path2[0].t);
            position2.left = String(path2[0].b);
            position2.height = String(path2[0].h);

            position3.top = String(path3[0].t);
            position3.left = String(path3[0].b);
            position3.height = String(path3[0].h);
    }
    if((x==5 && y==0 && z==4)||(x==4 && y==0 && z==5)){
        position1.top = String(path1[5].t);
        position1.left = String(path1[5].b);
        position1.width = String(path1[5].w);

        position2.top = String(path2[5].t);
        position2.left = String(path2[5].b);
        position2.height = String(path2[5].h);

        position3.top = String(path3[5].t);
        position3.left = String(path3[5].b);
        position3.height = String(path3[5].h);
    }
    if((x==5 && y==0 && z==2)||(x==2 && y==0 && z==5)){
        position1.top = String(path1[4].t);
        position1.left = String(path1[4].b);
        position1.width = String(path1[4].w);

        position2.top = String(path2[4].t);
        position2.left = String(path2[4].b);
        position2.height = String(path2[4].h);

        position3.top = String(path3[4].t);
        position3.left = String(path3[4].b);
        position3.height = String(path3[4].h);
    }
    if((x==4 && y==0 && z==2)||(x==2 && y==0 && z==4)){
        position1.top = String(path1[3].t);
        position1.left = String(path1[3].b);
        position1.width = String(path1[3].w);

        position2.top = String(path2[3].t);
        position2.left = String(path2[3].b);
        position2.height = String(path2[3].h);

        position3.top = String(path3[3].t);
        position3.left = String(path3[3].b);
        position3.height = String(path3[3].h);
    }
    if(x==4 && y==0 && z==1){
        position1.top = String(path1[1].t);
        position1.left = String(path1[1].b);
        position1.width = String(path1[1].w);

        position2.top = String(path2[1].t);
        position2.left = String(path2[1].b);
        position2.height = String(path2[1].h);

        position3.top = String(path3[1].t);
        position3.left = String(path3[1].b);
        position3.height = String(path3[1].h);
    }
    if(x==2 && y==0 && z==1){
        position1.top = String(path1[2].t);
        position1.left = String(path1[2].b);
        position1.width = String(path1[2].w);

        position2.top = String(path2[2].t);
        position2.left = String(path2[2].b);
        position2.height = String(path2[2].h);

        position3.top = String(path3[2].t);
        position3.left = String(path3[2].b);
        position3.height = String(path3[2].h);
    }
    if(x==3 && y==1 && z==0){
        test=pos[pos.length -4]
        if(test==4){
        position1.top = String(path1[1].t);
        position1.left = String(path1[1].b);
        position1.width = String(path1[1].w);

        position2.top = String(path2[1].t);
        position2.left = String(path2[1].b);
        position2.height = String(path2[1].h);

        position3.top = String(path3[1].t);
        position3.left = String(path3[1].b);
        position3.height = String(path3[1].h);
        }
        else{
        position1.top = String(path1[2].t);
        position1.left = String(path1[2].b);
        position1.width = String(path1[2].w);

        position2.top = String(path2[2].t);
        position2.left = String(path2[2].b);
        position2.height = String(path2[2].h);

        position3.top = String(path3[2].t);
        position3.left = String(path3[2].b);
        position3.height = String(path3[2].h);

        }

}
    


}
