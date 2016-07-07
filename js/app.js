(function() {
 
  var app = angular.module('IpsumGenerator', ['ngAnimate']);

  app.controller('GenController', function($http){
    
    var index=0; 
    var textdata = this; 
    textdata.text = []; 
    this.paragraph = [];
    this.disp=false; 
    
	  $http.get('/data/onehundred.json').success(function(data){
		  textdata.text = data;
	  });
    
    
    
    this.selection = function(num) {
        this.disp=false; 
        this.paragraph = [];
        var array=[]; 
        
        index=textdata.text.para.length-Math.floor(10*Math.random())-num; 
        
        for (i=index; i<num+index; i++) {
          array.push(textdata.text.para[i]); 
        }
        this.paragraph=array;
        this.disp=true; 
        
        console.log(index); 
    };

  });
  
  
})();


