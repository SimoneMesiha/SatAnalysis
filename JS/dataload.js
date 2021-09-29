d3.csv("../Data/cse332hw1.csv").then(function(data){
    for(let i =0; i<data.length;i++){
        console.log(data[0]);
    }
})
