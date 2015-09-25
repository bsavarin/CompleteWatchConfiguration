(function () { 
 	saveOptions(); 
	submitHandler(); 
 })(); 

   function saveOptions() {
        var invertSelect = document.getElementById("invert_select");
		var tempDisplay = document.getElementById("temp_display");
		var bgcolourDisplay = document.getElementById("bgcolour_display");
		var fgcolourDisplay = document.getElementById("fgcolour_display");
		var options = {
          "invert": invertSelect.options[invertSelect.selectedIndex].value,
		  "temperature": tempDisplay.options[tempDisplay.selectedIndex].value,
		  "bgcolour": bgcolourDisplay.options[bgcolourDisplay.selectedIndex].value,
		  "fgcolour": fgcolourDisplay.options[fgcolourDisplay.selectedIndex].value
		}  

			localStorage.setItem("invert", invertSelect.options[invertSelect.selectedIndex].value);
			localStorage.setItem("temperature",tempDisplay.options[tempDisplay.selectedIndex].value);
			localStorage.setItem("bgcolour",bgcolourDisplay.options[bgcolourDisplay.selectedIndex].value);
			localStorage.setItem("fgcolour",fgcolourDisplay.options[fgcolourDisplay.selectedIndex].value);
			
			localStorage.getItem("invert");
			localStorage.getItem("temperature");
			localStorage.getItem("bgcolour");
			localStorage.getItem("fgcolour");
			
        return options;
      };

	  function submitHandler(){
		  var submitButton = document.getElementById("submitButton");
		  submitButton.addEventListener("click", function() {
          console.log("Submit");
          var options = saveOptions();
		  
		  var return_to = getQueryParam('return_to', 'pebblejs://close#');
		  document.location = return_to + encodeURIComponent(JSON.stringify(options()));
	  });
	}
		  
		// Something like this to get query variables.
		function getQueryParam(variable, default_) {
			var query = location.search.substring(1);
			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				if (pair[0] == variable)
					return decodeURIComponent(pair[1]);
			}
			return default_ || false;
		}	
		
  