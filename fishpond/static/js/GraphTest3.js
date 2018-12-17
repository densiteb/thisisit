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



var toplabels_dataset = ['Temperature (Celsius)','Dissolved Oxygen[D.O.] (mg/L)'];
var ref = firebase.database().ref("python");
var token;
var temp;
var time;
var tempList = [];
var timeList = [];
var ctx = document.getElementById("myChart").getContext('2d');
//console.log(ctx);
var myLineChart = new Chart(ctx, {
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
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});     
ref.limitToLast(50).on("child_added", function(snapshot) 
        {
            token = snapshot.key
            console.log(token);
            firebase.database().ref('/ESP32/' + token).once("value")
                .then(function(snapshot) 
                    {
                        temp = snapshot.child("temp_now").val();
                        tempList[tempList.length] = temp;
                        console.log(temp);
                    }
                );


            firebase.database().ref('/History/' + token).once("value")
            
                .then(function(snapshot) 
                    {
                    time = snapshot.child("time").val();
                    console.log(time);
                    timeList[timeList.length] = time;
                    updateChart();
                    }
                );
        }
    );
    function updateChart(){
      myLineChart.data.dataset = tempList;
      myLineChart.data.labels = timeList;
      if (tempList.length >= 30){
        tempList.shift();
        timeList.shift();
      }

      myLineChart.update();
    }