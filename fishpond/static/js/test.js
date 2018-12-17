
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
var refObject_python = database.ref().child('python');// ref to python table

database.ref().on('value',gettoken)
var listofVal = [];
function gettoken(data) {
    //console.log(data.val());

    var _root = data.val();
    //console.log(_root);
    var _root_keys = Object.keys(_root);
    //console.log(refHistory);
    var k = _root_keys[0];
    var refHistory = _root[k].Histories;
    console.log(refHistory);

    /*
    var pythonTable = data.val();
    var python_keys = Object.keys(pythonTable);
    var HistoriesKeys = Object.keys(pythonTable);
    var eps32Keys = Object.keys(pythonTable);
    //console.log(HistoriesKeys);
    //console.log(eps32Keys);
   
    for(var z = 0 ; z <python_keys.length; z++){
        
        //Python_localDatabase Value
        var k = python_keys[z];
        var peltier = pythonTable[k].peltier_set;
        //console.log(peltier);
        var date = Histories[k].day;
        console.log(date);



        //console.log("TEST"+token);
        //var ESP32dataPath =  database.ref('/ESP32/' + token);
        //var doVale = ESP32dataPath.child("dissolved_now");
        //console.log(doVale);
        //console.log(ESP32dataPath);

    }
    */

    
}

/*    ----------------- GET DATE & TIME FROM FIREBASE AND STORE IN A LIST----------------*/
/*    ------------------------ USE ABLE CODE DONT FUCKING TOUCH ------------------------ */

//                                   DATE AND TIME

/*    ---------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------");
var listofDateAndTime = [];
refObject_History.on('value',gotDateTime)
function gotDateTime(data) {
    
    //console.log(data.val());
    var Histories = data.val();
    var HistoriesKeys = Object.keys(Histories);
    //console.log(HistoriesKeys);
    for (var i = 0 ; i < HistoriesKeys.length;i++)
    {

        var k = HistoriesKeys[i];
        //console.log(k);
        var date = Histories[k].day;
        var time = Histories[k].time;
        // <-------------------- CHANGE FORMATE HERE ---------------------->
        listofDateAndTime[listofDateAndTime.length] = [k,date.slice(0,4),date.slice(5,7),date.slice(8,10),time.slice(0,2),time.slice(3,5),time.slice(6,8)]; 
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
};
//console.log(listofEPS32);
/*---------------------------------------------------------------------------------------*/
//        TYPE Format ARRAY = [KEY , DO , PRESSURE , STATE , TEMP_COOL , TEMP_NOW ]
/*---------------------------------------------------------------------------------------*/


