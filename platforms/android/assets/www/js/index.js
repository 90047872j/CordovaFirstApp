/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        document.getElementById("b_saludar").addEventListener("touchstart",saludar);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

function saludar (){
var otherText;
var textNom = document.getElementById("inputNom").value;
var textCognom = document.getElementById("inputCognom").value;
var finalText = document.getElementById("nuestro_texto").innerHTML + " " + textNom + " " + textCognom;
var rates = document.querySelector('input[name="gender"]:checked').value;
var x = document.getElementById("myCheck"); //afagar objecte
if (x.checked) {
    otherText = finalText + " ets major d'edat i ets un/a " + rates;
} else {
     otherText = finalText + " no ets major d'edati ets un/a " + rates;
}


document.getElementById("nuestro_texto").innerHTML = otherText;

document.getElementById('myImage').src = 'https://www.mundoperros.es/wp-content/uploads/2016/05/perro_comiendo.jpg';


alert (otherText);
}

app.initialize();