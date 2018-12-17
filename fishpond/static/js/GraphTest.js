
/* OUR Project KEY VALUE*/
// Initialize Firebase

const config = {
    apiKey: "AIzaSyAvymRwWy7fhc9cu40QdAeSgk209toOEuo",
    authDomain: "test-82f89.firebaseapp.com",
    databaseURL: "https://test-82f89.firebaseio.com",
    projectId: "test-82f89",
    storageBucket: "test-82f89.appspot.com",
    messagingSenderId: "714335591195"
  };
firebase.initializeApp(config);
//console.log(firebase);
var database = firebase.database();
//console.log(database);
var refObject_History = database.ref().child('History'); // ref to HISTORY TABLE
var refObject_ESP32= database.ref().child('ESP32'); // ref to HISTORY TABLE

//token = 'LTsRLGN7M6M3YlRhTyu';
//console(database.ref().child('ESP32'+ token));


/*    ----------------- GET DATE & TIME FROM FIREBASE AND STORE IN A LIST----------------*/
/*    ------------------------ USE ABLE CODE DONT FUCKING TOUCH ------------------------ */

//                                   DATE AND TIME

/*    ---------------------------------------------------------------------------------- */
var listofDateAndTime = [];
refObject_History.on('value',gotDateTime)
function gotDateTime(data) {
    //console.log(data.val());
    var Histories = data.val();
    var HistoriesKeys = Object.keys(Histories);
    //console.log(HistoriesKyes);
    for (var i = 0 ; i < HistoriesKeys.length;i++)
    {
        var k = HistoriesKeys[i];
        var date = Histories[k].day;
        var time = Histories[k].time;
        // <-------------------- CHANGE FORMATE HERE ---------------------->
        listofDateAndTime.push([k,date.slice(0,4),date.slice(5,7),date.slice(8,10),time.slice(0,2),time.slice(3,5),time.slice(6,8)]); 
        //console.log(date,time);
    }
}
console.log(listofDateAndTime);
/*---------------------------------------------------------------------------------------*/
//                      TYPE Format ARRAY = [KEY , YEARS , MONTH , DAY  , TIME]
/*---------------------------------------------------------------------------------------*/

/*    -------------- GET ESP32 VALUE FROM FIREBASE AND STORE IN A LIST-------------------*/
/*    ------------------------ USE ABLE CODE DONT FUCKING TOUCH ------------------------ */

//                                   ESP32 VALUE

/*    ---------------------------------------------------------------------------------- */
var listofEPS32 = [];
refObject_ESP32.on('value',gotESP32)
function gotESP32(data2) {
    //console.log(data.val());
    var eps32Table = data2.val();
    var eps32Keys = Object.keys(eps32Table);
    //console.log(eps32Keys);
    for (var a = 0 ; a < eps32Keys.length ; a++)
    {
        var b = eps32Keys[a];
        var dissolved_now_EPS32 = eps32Table[b].dissolved_now; // DO Value
        var pressure_now_EPS32 = eps32Table[b].pressure_now;   // Pressure Value
        var state_gate_ESP32 = eps32Table[b].state_gate;   // Pressure Value
        var temp_cooling_ESP32 = eps32Table[b].temp_cooling;   // Pressure Value
        var temp_now_ESP32 = eps32Table[b].temp_now;   // Pressure Value
        listofEPS32.push([b,dissolved_now_EPS32,pressure_now_EPS32,state_gate_ESP32,temp_cooling_ESP32,temp_now_ESP32,]); // <----- CHANGE FORMATE HERE 
        //console.log(date,time);
    }
}
console.log(listofEPS32);
/*---------------------------------------------------------------------------------------*/
//        TYPE Format ARRAY = [KEY , DO , PRESSURE , STATE , TEMP_COOL , TEMP_NOW ]
/*---------------------------------------------------------------------------------------*/

/* VAriable for CHART */
/*--------------------------------------------------------------------------------
                            DEMO
 -------------------------------------------------------------------------------*/
var chart_labels = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
var temp_dataset = ['20', '21', '25', '32', '30', '27'];
var DO_dataset = ['6', '7', '8', '6', '4', '2'];

var maxmin_Temp_Threshold = ['24','30']; // <------------------ Get FROM CLOUND /Setting / max
var maxmin_DO_Threshold = ['4','15']; // <------------------ GET FROM CLOUND /setting / min

//Texting

var toplabels_dataset = ['Temperature (Celsius)','Dissolved Oxygen[D.O.] (mg/L)'];

// styling value ----------------------

var thresholdBroder = 3;
//  COLOR  MAIN BLUE
var maincolorTheme_BLUE = "rgba(80, 147, 225, 1)" ; // MAIN COLOUR 1 BLUE
var maincolorTheme_BLUE_2 = "rgba(80, 147, 225, 0.8)" ; // MAIN COLOUR 1 BLUE

//  COLOR  MAIN GREEN
var maincolorTheme_GREEN = "rgba(80, 193, 78, 0.5)" ; // MAIN COLOUR 2 Green
var maincolorTheme_GREEN_2 = "rgba(80, 193, 78, 0.8)" ; // MAIN COLOUR 2 Green

//  COLOR  MAIN RED
var maincolorTheme_RED = "rgba(246, 81, 119, 1)" ; // MAIN COLOUR 2 Green
var maincolorTheme_RED_2 = "rgba(246, 81, 119, 0.7)" ; // MAIN COLOUR 2 Green

var debug_red = "rgba(255, 0, 0, 1)";

//----------------------------------
var chart_labels2 = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
/*--------------------------------------------------------------------------------
                            DEMO
 -------------------------------------------------------------------------------*/
var ref = firebase.database().ref("python");
var token;
var temp;
var time;
var tempList = [];
var timeList = [];


// Config  FOR ALL 3 TYPES OF GRAPH
// TEMP CHART
var Temp_CHART_config = {
    type: 'line',
    data:
    {
        labels: chart_labels2,
        datasets: [
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
                data: temp_dataset,
            },
        ]
    },
    options:
    {
    	responsive: true,
        scales:
        {
            yAxes:
            [
                {

                    position: "left",
                    "id": "y-axis-0",
                },
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
        labels: chart_labels2,
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
                data: DO_dataset,
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
var show_both_config = {
    type: 'line',
    data: {
        labels: chart_labels2,
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
                data: temp_dataset,
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
                data: DO_dataset,
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
};

var ctx = document.getElementById("forecast").getContext('2d');
var forecast_chart = new Chart(ctx, show_both_config);
//console.log(forecast_chart.config.options.annoation)
$("#0").click(function() {
    forecast_chart.destroy();
    forecast_chart = new Chart(ctx, show_both_config);
    console.log("destroy D.O. CHART")
});
$("#1").click(function() {
    forecast_chart.destroy();
    forecast_chart = new Chart(ctx, Temp_CHART_config);
});
$("#2").click(function() {
    forecast_chart.destroy();
    forecast_chart = new Chart(ctx, DO_CHART_config);
    console.log("destroy D.O. CHART")
});



ref.limitToLast(1).on("child_added", function(snapshot) 
    {
        token = snapshot.key
        console.log(token);
        firebase.database().ref('/ESP32/' + token).once("value")
        .then(function(snapshot) {
            temp = snapshot.child("temp_now").val();
            tempList[tempList.length] = temp;
            //console.log(temp);
    }
);

firebase.database().ref('/History/' + token).once("value")

    .then(function(snapshot) 
    {
      time = snapshot.child("time").val();
      console.log(time);
      timeList[timeList.length] = time;
      //updateChart();
    });
});