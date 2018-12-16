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

