(function() {
 
  var app = angular.module('IpsumGenerator', ['ngAnimate']);

  app.controller('GenController', function($http){
    
    var index=0; 
    var textdata = this; 
    textdata.text = []; 
    this.paragraph = [];
    this.quote = []; 
    this.disp=false; 
    
	  $http.get('/data/onehundred.json').success(function(data){
		  textdata.text = data;
	  });
    
    this.cleartext = function() {
      this.disp=false; 
      var quotedata=this; 
      var quoteindex=0; 
      quotedata.quote=[]; 
      this.quote=[]; 
      quoteindex=Math.floor(10*Math.random());
      
      
      $http.get('/data/onehundred-quotes.json').success(function(data){
  		  quotedata.quote = data.quote[quoteindex];
  	  });
    }
    
    this.selection = function(num) {
        this.paragraph = [];
        var array=[]; 
        
        index=textdata.text.para.length-Math.floor(10*Math.random())-num; 
        
        for (i=index; i<num+index; i++) {
          array.push(textdata.text.para[i]); 
        }
        this.paragraph=array;
        this.disp=true; 

    };
    
    
    var quotedata=this; 
    var quoteindex=0; 
    quotedata.quote=[]; 
    this.quote=[]; 
    quoteindex=Math.floor(10*Math.random());
    
    
    $http.get('/data/onehundred-quotes.json').success(function(data){
		  quotedata.quote = data.quote[quoteindex];
	  });
	  
	
    console.log(this.quote);
    
    this.quote=quotedata.quote;
    
    

  });
  
  app.controller("QuoteController", ["$http", function($http){

    
  }]);
  
  
})();


