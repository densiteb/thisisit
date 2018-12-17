var config = 
    {
        apiKey: "AIzaSyAvymRwWy7fhc9cu40QdAeSgk209toOEuo",
        authDomain: "test-82f89.firebaseapp.com",
        databaseURL: "https://test-82f89.firebaseio.com",
        projectId: "test-82f89",
        storageBucket: "test-82f89.appspot.com",
        messagingSenderId: "714335591195"
    };
firebase.initializeApp(config);



// variable for sample data
var chart_labels = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
var temp_dataset = ['20', '21', '25', '32', '30', '27'];
var DO_dataset = ['6', '7', '8', '6', '4', '2'];
var chart_labels2 = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
var toplabels_dataset = ['Temperature (Celsius)','Dissolved Oxygen[D.O.] (mg/L)'];

// styling value ----------------------

var maxmin_Temp_Threshold = ['24','30']; // <------------------ Get FROM CLOUND /Setting / max
var maxmin_DO_Threshold = ['4','15']; // <------------------ GET FROM CLOUND /setting / min

var thresholdBroder = 3;
//  COLOR  MAIN BLUE
var maincolorTheme_BLUE = "rgba(80, 147, 225, 1)" ; // MAIN COLOUR 1 BLUE
var maincolorTheme_BLUE_2 = "rgba(80, 147, 225, 0.8)" ; // MAIN COLOUR 1 BLUE

//  COLOR  MAIN GREEN
var maincolorTheme_GREEN = "rgba(80, 193, 78, 0.5)" ; // MAIN COLOUR 2 Green
var maincolorTheme_GREEN_2 = "rgba(80, 193, 78, 0.8)" ; // MAIN COLOUR 2 Green

//  COLOR  MAIN RED
var maincolorTheme_RED = "rgba(246, 81, 119, 1)" ; // MAIN COLOUR 2 Green
var maincolorTheme_RED_2 = "rgba(246, 81, 119, 0.2)" ; // MAIN COLOUR 2 Green

var debug_red = "rgba(255, 0, 0, 1)";


// Config  FOR ALL 3 TYPES OF GRAPH
// TEMP CHART
var Temp_CHART_config = 
    {
        type: 'line',
        data: {
            labels: timeList,
            datasets: 
                    [
                        {
                            type: 'line',
                            fill: false,
    
                            //Style of  the line
                            lineTension: 0.5 ,
                            borderColor: maincolorTheme_RED,
                            borderWidth: 2,
    
                            //background color
                            backgroundColor: maincolorTheme_RED,
    
                            // Style of the point
                            pointBackgroundColor: maincolorTheme_RED,
                            pointBorderColor: maincolorTheme_RED,
                            pointRadius:3,
    
                            label: toplabels_dataset[0],
                            yAxisID: "y-axis-0",
                            data: tempList,
                        }
                    ]           
        },
        options: 
        {
            scales: 
            {
                yAxes: 
                [
                    {
                        ticks: 
                        {
                            beginAtZero:true
                        },
                        position: "left",
                        "id": "y-axis-0"
                    }
                ]
            },
            annotation:
            {
                drawTime: 'afterDatasetsDraw',
                annotations:
                [
                    {
                        // Maximum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_Temp_Threshold[1],
                        borderColor: maincolorTheme_RED_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_RED_2,
                            content: "max",
                            enabled: true
                        },
                    },
                    {
                        // Minmimum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_Temp_Threshold[0],
                        borderColor: maincolorTheme_RED_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_RED_2,
                            content: "min",
                            enabled: true
                        },
                    }
                ]
            }
        }
    };
// DO CHART -******************************************************************************************-
var DO_CHART_config = {
    type: 'line',
    data: {
        labels: timeList,
        datasets: [
            {
                type: 'line',
                fill: false,

                //Style of  the line
                lineTension: 0.5 ,
                borderColor: maincolorTheme_BLUE,
                borderWidth: 2,

                //background color
                backgroundColor: maincolorTheme_BLUE,

                // Style of the point
                pointBackgroundColor: maincolorTheme_BLUE,
                pointBorderColor: maincolorTheme_BLUE,
                pointRadius:3,

                label: toplabels_dataset[1],
                yAxisID: "y-axis-0",
                fill: false,
                data: dissolvedList,
            },
        ]
    },
    options: {
    		responsive: true,
            scales:
            {
                yAxes: [
                    {
                        position: "left",
                        "id": "y-axis-0",
                    },
                ]
            },
            annotation: {
                drawTime: 'afterDatasetsDraw',
                annotations: [
                    {
                        // Maximum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_DO_Threshold[1],
                        borderColor: maincolorTheme_BLUE_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_BLUE_2,
                            content: "max",
                            enabled: true
                        },

                    },
                    {
                        // Minmimum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_DO_Threshold[0],
                        borderColor: maincolorTheme_BLUE_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_BLUE_2,
                            content: "min",
                            enabled: true
                        },
                    }
                ]

      }


    }
};
// DO CHART -******************************************************************************************-
var show_both_config = 
$("#0").click(function() {
    myLineChart.destroy();
    myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeList,
            datasets: [
                // Temp
                {
                    type: 'line',
                    fill: false,
    
                    //Style of  the line
                    lineTension: 0.5 ,
                    borderColor: maincolorTheme_RED,
                    borderWidth: 2,
    
                    //background color
                    backgroundColor: maincolorTheme_RED,
    
                    // Style of the point
                    pointBackgroundColor: maincolorTheme_RED,
                    pointBorderColor: maincolorTheme_RED,
                    pointRadius:3,
    
                    label: toplabels_dataset[0],
                    yAxisID: "y-axis-0",
                    data: tempList,
                },
                // DO
                {
                    type: 'line',
                    fill: false,
    
                    //Style of  the line
                    lineTension: 0.5 ,
                    borderColor: maincolorTheme_BLUE,
                    borderWidth: 2,
    
                    //background color
                    backgroundColor: maincolorTheme_BLUE,
    
                    // Style of the point
                    pointBackgroundColor: maincolorTheme_BLUE,
                    pointBorderColor: maincolorTheme_BLUE,
                    pointRadius:3,
    
                    label: toplabels_dataset[1],
                    yAxisID: "y-axis-0",
                    fill: false,
                    data: dissolvedList,
                },
            ]
        },
        options: {
                responsive: true,
                scales:
                {
                    yAxes: [
                        {
                            position: "left",
                            "id": "y-axis-0",
                        },
                    ]
                },
                annotation: {
                    drawTime: 'afterDatasetsDraw',
                    annotations: [
                        //temp--------------------------------------------------------------------
                        {
                            // Maximum Threshold
                            type: 'line',
                            drawTime: 'afterDatasetsDraw',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: maxmin_Temp_Threshold[1],
                            borderColor: maincolorTheme_RED_2, //set color
                            borderWidth: 4,
                            label:
                            {
                                backgroundColor: maincolorTheme_RED_2,
                                content: "max temp",
                                enabled: true
                            },
                        },
                        {
                            // SET DAGGER LINE ----------------------------------
                            // Minmimum Threshold
                            type: 'line',
                            drawTime: 'afterDatasetsDraw',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: maxmin_Temp_Threshold[0],
                            borderColor: maincolorTheme_RED_2, //set color
                            borderWidth: 4,
                            label:
                            {
                                backgroundColor: maincolorTheme_RED_2,
                                content: "min temp",
                                enabled: true
                            },
                        },
                        // DO--------------------------------------------------------------------
                        {
                            // Maximum Threshold
                            type: 'line',
                            drawTime: 'afterDatasetsDraw',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: maxmin_DO_Threshold[1],
                            borderColor: maincolorTheme_BLUE_2, //set color
                            borderWidth: 4,
                            label:
                            {
                                backgroundColor: maincolorTheme_BLUE_2,
                                content: "max d.o.",
                                enabled: true
                            },
    
                        },
                        {
                            // Minmimum Threshold
                            type: 'line',
                            drawTime: 'afterDatasetsDraw',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: maxmin_DO_Threshold[0],
                            borderColor: maincolorTheme_BLUE_2, //set color
                            borderWidth: 4,
                            label:
                            {
                                backgroundColor: maincolorTheme_BLUE_2,
                                content: "min d.o.",
                                enabled: true
                            },
                        }
                    ]
    
          }
    
    
        }
    });
    console.log("destroy D.O. CHART")
});

$("#1").click(function() {
    myLineChart.destroy();
    myLineChart = new Chart(ctx,  {
        type: 'line',
        data: {
            labels: timeList,
            datasets: 
                    [
                        {
                            type: 'line',
                            fill: false,
    
                            //Style of  the line
                            lineTension: 0.5 ,
                            borderColor: maincolorTheme_RED,
                            borderWidth: 2,
    
                            //background color
                            backgroundColor: maincolorTheme_RED,
    
                            // Style of the point
                            pointBackgroundColor: maincolorTheme_RED,
                            pointBorderColor: maincolorTheme_RED,
                            pointRadius:3,
    
                            label: toplabels_dataset[0],
                            yAxisID: "y-axis-0",
                            data: tempList,
                        }
                    ]           
        },
        options: 
        {
            scales: 
            {
                yAxes: 
                [
                    {
                        ticks: 
                        {
                            beginAtZero:true
                        },
                        position: "left",
                        "id": "y-axis-0"
                    }
                ]
            },
            annotation:
            {
                drawTime: 'afterDatasetsDraw',
                annotations:
                [
                    {
                        // Maximum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_Temp_Threshold[1],
                        borderColor: maincolorTheme_RED_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_RED_2,
                            content: "max",
                            enabled: true
                        },
                    },
                    {
                        // Minmimum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_Temp_Threshold[0],
                        borderColor: maincolorTheme_RED_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_RED_2,
                            content: "min",
                            enabled: true
                        },
                    }
                ]
            }
        }
    });
});
$("#2").click(function() {
    myLineChart.destroy();
    myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeList,
            datasets: [
                {
                    type: 'line',
                    fill: false,
    
                    //Style of  the line
                    lineTension: 0.5 ,
                    borderColor: maincolorTheme_BLUE,
                    borderWidth: 2,
    
                    //background color
                    backgroundColor: maincolorTheme_BLUE,
    
                    // Style of the point
                    pointBackgroundColor: maincolorTheme_BLUE,
                    pointBorderColor: maincolorTheme_BLUE,
                    pointRadius:3,
    
                    label: toplabels_dataset[1],
                    yAxisID: "y-axis-0",
                    fill: false,
                    data: dissolvedList,
                },
            ]
        },
        options: {
                responsive: true,
                scales:
                {
                    yAxes: [
                        {
                            position: "left",
                            "id": "y-axis-0",
                        },
                    ]
                },
                annotation: {
                    drawTime: 'afterDatasetsDraw',
                    annotations: [
                        {
                            // Maximum Threshold
                            type: 'line',
                            drawTime: 'afterDatasetsDraw',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: maxmin_DO_Threshold[1],
                            borderColor: maincolorTheme_BLUE_2, //set color
                            borderWidth: 4,
                            label:
                            {
                                backgroundColor: maincolorTheme_BLUE_2,
                                content: "max",
                                enabled: true
                            },
    
                        },
                        {
                            // Minmimum Threshold
                            type: 'line',
                            drawTime: 'afterDatasetsDraw',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: maxmin_DO_Threshold[0],
                            borderColor: maincolorTheme_BLUE_2, //set color
                            borderWidth: 4,
                            label:
                            {
                                backgroundColor: maincolorTheme_BLUE_2,
                                content: "min",
                                enabled: true
                            },
                        }
                    ]
    
          }
    
    
        }
    });
    console.log("destroy D.O. CHART")
});


var toplabels_dataset = ['Temperature (Celsius)','Dissolved Oxygen[D.O.] (mg/L)'];
var ref = firebase.database().ref("python");
var token;
var temp;
var dissolved;
var time;
var tempList = [];
var timeList = [];
var dissolvedList = [];
var ctx = document.getElementById("myChart").getContext('2d');
//console.log(ctx);
var myLineChart = new Chart(ctx,  {
    type: 'line',
    data: {
        labels: timeList,
        datasets: [
            // Temp
            {
                type: 'line',
                fill: false,

                //Style of  the line
                lineTension: 0.5 ,
                borderColor: maincolorTheme_RED,
                borderWidth: 2,

                //background color
                backgroundColor: maincolorTheme_RED,

                // Style of the point
                pointBackgroundColor: maincolorTheme_RED,
                pointBorderColor: maincolorTheme_RED,
                pointRadius:3,

                label: toplabels_dataset[0],
                yAxisID: "y-axis-0",
                data: tempList,
            },
            // DO
            {
                type: 'line',
                fill: false,

                //Style of  the line
                lineTension: 0.5 ,
                borderColor: maincolorTheme_BLUE,
                borderWidth: 2,

                //background color
                backgroundColor: maincolorTheme_BLUE,

                // Style of the point
                pointBackgroundColor: maincolorTheme_BLUE,
                pointBorderColor: maincolorTheme_BLUE,
                pointRadius:3,

                label: toplabels_dataset[1],
                yAxisID: "y-axis-0",
                fill: false,
                data: dissolvedList,
            },
        ]
    },
    options: {
            responsive: true,
            scales:
            {
                yAxes: [
                    {
                        position: "left",
                        "id": "y-axis-0",
                    },
                ]
            },
            annotation: {
                drawTime: 'afterDatasetsDraw',
                annotations: [
                    //temp--------------------------------------------------------------------
                    {
                        // Maximum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_Temp_Threshold[1],
                        borderColor: maincolorTheme_RED_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_RED_2,
                            content: "max temp",
                            enabled: true
                        },
                    },
                    {
                        // SET DAGGER LINE ----------------------------------
                        // Minmimum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_Temp_Threshold[0],
                        borderColor: maincolorTheme_RED_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_RED_2,
                            content: "min temp",
                            enabled: true
                        },
                    },
                    // DO--------------------------------------------------------------------
                    {
                        // Maximum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_DO_Threshold[1],
                        borderColor: maincolorTheme_BLUE_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_BLUE_2,
                            content: "max d.o.",
                            enabled: true
                        },

                    },
                    {
                        // Minmimum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_DO_Threshold[0],
                        borderColor: maincolorTheme_BLUE_2, //set color
                        borderWidth: 4,
                        label:
                        {
                            backgroundColor: maincolorTheme_BLUE_2,
                            content: "min d.o.",
                            enabled: true
                        },
                    }
                ]

      }


    }
});

/*-------------------------------END OF CARD STYING------------------------------------------------*/


ref.limitToLast(50).on("child_added", function(snapshot) 
        {
            token = snapshot.key
            //console.log(token);
            firebase.database().ref('/ESP32/' + token).once("value")
                .then(function(snapshot) 
                    {
                        temp = snapshot.child("temp_now").val();
                        tempList[tempList.length] = temp;
                        //console.log(temp);
                    }
                );


            firebase.database().ref('/History/' + token).once("value")
            
                .then(function(snapshot) 
                    {
                    time = snapshot.child("time").val();
                    //console.log(time);
                    timeList[timeList.length] = time;
                    updateChart();
                    }
                );
        }
    );
    function updateChart(){
      myLineChart.data.dataset = tempList;
      myLineChart.data.labels = timeList;
      //console.log(tempList);
      if (tempList.length >= 30){
        tempList.shift();
        timeList.shift();
      }

      myLineChart.update();
    }
ref.limitToLast(50).on("child_added", function(snapshot) 
    {
            token = snapshot.key
            //console.log(token);
            firebase.database().ref('/ESP32/' + token).once("value")
                .then(function(snapshot) 
                    {
                        temp = snapshot.child("temp_now").val();
                        tempList[tempList.length] = temp;
                        //console.log(temp);
                    }
                );


            firebase.database().ref('/History/' + token).once("value")
            
                .then(function(snapshot) 
                    {
                    time = snapshot.child("time").val();
                    //console.log(time);
                    timeList[timeList.length] = time;
                    updateChart();
                    }
                );
    }
);
ref.limitToLast(50).on("child_added", function(snapshot) 
    {
            token = snapshot.key
            //console.log(token);
            firebase.database().ref('/ESP32/' + token).once("value")
                .then(function(snapshot) 
                    {
                        dissolved = snapshot.child("dissolved_now").val();
                        dissolvedList[dissolvedList.length] = dissolved;
                        console.log(dissolved);
                    }
                );
    }
);
function updateChart()
{
    myLineChart.data.dataset = tempList;
    myLineChart.data.labels = timeList;
    //console.log(tempList);
    if (tempList.length >= 30){
      tempList.shift();
      timeList.shift();
    }

    myLineChart.update();
}   

    var ref = firebase.database().ref("python");
    var temp ;
    var time;
    var dissolved ;
    ref.limitToLast(1).on("child_added", function(snapshot) {

        token = snapshot.key

        console.log(token);

        firebase.database().ref('/ESP32/' + token).once("value")
          .then(function(snapshot) {
            temp = snapshot.child("temp_now").val();
            document.getElementById("valueTemp").innerHTML = temp;
            console.log(temp);
        });
        firebase.database().ref('/History/' + token).once("value")
        .then(function(snapshot) {
          time = snapshot.child("time").val();
          console.log(time);
    });
    firebase.database().ref('/ESP32/' + token).once("value")
      .then(function(snapshot) {
        dissolved = snapshot.child("dissolved_now").val();
        document.getElementById("valueDissolved").innerHTML = dissolved;
        console.log(dissolved);



  });


});



/*-----------------------------------EPIC WIRING-----------------------------------------------------*/
    
