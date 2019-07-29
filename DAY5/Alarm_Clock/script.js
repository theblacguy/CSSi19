// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");
const basicAlarm = (alarmMessage) => {
    return alarmMessage;
  };
console.log(basicAlarm("My alarm!"));







function myAlarm(name,hour,minute)
{
    console.log("Hey, " + name + " wake up! It's " + hour,":",minute);
}
name= prompt("Enter name");
hour= prompt("Enter hour "+ name);
minute= prompt ("Enter minute "+ name);

if (hour<25 && minute<60){
    
    myAlarm(name,hour,minute);
}else{
console.log("You are entering a next day or hour")
}


function familyAlarm(name,hour,minute)
{
    console.log("Hey, " + name + " wake up! It's " + hour,":",minute);
}

name= prompt("Enter name");
hour= prompt("Enter hour "+ name);
minute= prompt ("Enter minute "+ name);

if (hour<25 && minute<60){
 
    familyAlarm(name,hour,minute);
}else{
console.log("You are entering a next day or hour")
}

function snoozeAlarm(name,hour,minute)
{ 
    console.log("The alarm for " +hour,";",+ minute," has been changed to", hour2,":",minute2   );
}
name= prompt("Enter name");
hour= prompt("Enter hour "+ name);
minute= prompt ("Enter minute "+ name);
Number(hour);
Number(minute);
minute2=minute+5;
if (hour<25 && minute<60){
    
    snoozeAlarm(name,hour,minute);
}
if (minute>60){
    hour2=  (minute/60)+hour
    Math.round(hour2)
}
else{
console.log("You are entering a next day or hour")
}


function momAlarm(name,hour,minute)
{
    console.log("Hey, " + name," wake up! It's " +hour,":",+minute);
}
name= prompt("Enter name");
hour= prompt("Enter hour "+ name);
minute= prompt ("Enter minute "+ name);

if (hour<25 && minute<60){
    momAlarm(name,hour,minute);
}else{
console.log("You are entering a next day or hour")
}


function importantAlarm(message)
{
    return message.toUpperCase();
    
}
console.log(importantAlarm(message))
