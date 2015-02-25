$(document).ready(function() {
  $('button').click(function() {
  $('#Tobias, #Wazkelly').css({opacity: 1});

  //$('#Tobias, #Wazkelly').fadeTo("fast", 1, function() {

  //});  

//$('#Tobias, #Wazkelly').fadeTo("fast", 0.0);

var Animal = function(n, s, f) {
  this.name = n;
  this.speed = s;
  this.focus = f;
  this.position = 0;
  this.report = function() {
    return this.name + " is at " + this.position;
  };

  this.run = function() {
    if (this.focus > Math.random() * 10) {
      this.position += this.speed;
    }
  }
  this.notYetWon = function() {
    return this.position < distance;      
  }     
};

var turtle = new Animal ("Tobias Turtle", 4, 5);
    rabbit = new Animal ("Wazkelly Rabbit", 4, 5);

var distance = 55;
var count = 0;

while(turtle.notYetWon() && rabbit.notYetWon()){
      turtle.run();

if(turtle.position > distance/2 && turtle.position < distance/2 + 5 && count === 0) {
  var booster = prompt(turtle.name + " is halfway there! Help him with a booster? (yes or no)");
    if (booster.toUpperCase() == "YES") {
      turtle.position += Math.ceil(Math.random() * 20);
    }
      else if (booster.toUpperCase() === "NO") {
        turtle.position += 0;
        count += 1
        
      }   
}    
      rabbit.run();

if(rabbit.position > distance/2 && rabbit.position < distance/2 + 5 && count === 0) {
  var booster = prompt(rabbit.name + " is halfway there! Help him with a booster? (yes or no)");
    if (booster.toUpperCase() == "YES") {
      rabbit.position += Math.ceil(Math.random() * 25);
    }
      else if (booster.toUpperCase() === "NO") {
        rabbit.position += 0;
        count += 1      
      }   
    }      
};
  var tresult = turtle.position;
  var rresult = rabbit.position;
  
$(document).ready(function() {
  $('p').text(function() {
    if (tresult < rresult) {
      $('#Tobias').fadeTo("fast",.25,function() {});
      return("Wazkelly wins! Hopping all the way!")

      console.log(rabbit);
}
  else { 
    $('#Wazkelly').fadeTo("fast",.25,function() {});
    return("Tobias wins! Slow and steady all the way!");
    console.log(turtle);
  };
  });

  });
});
});
//console.log(turtle.report());
//console.log(rabbit.report());




