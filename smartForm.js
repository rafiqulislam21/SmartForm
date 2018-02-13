// Your jQuery goes here

var userData = {
	name : "",
	email : "",
	html: {likes : [], dislikes:[]},
	css: {likes : [], dislikes:[]},
	js: {likes : [], dislikes:[]},
	skills: {html:"",css:"",js:""}
};

//window.localStorage.userData = JSON.stringify(userData);
//console.log(localStorage.userData);
//var testData = JSON.parse(localStorage.userData);
//console.log(testData.name);

if(window.localStorage.userData){						//store the value in local storage
	userData = JSON.parse(window.localStorage.userData);
}

var html,css,js;
var nameChange;
var emailChange;

$("#startBtn").click(function(event){
	//console.log("start clicked")
		

	$("#welcome").hide();
	$("#q1").show();
	$("#nextBtn").hide();
});
//anamition
/*$(document).ready(function(){
		    $("button").click(function(){
		        $("#f").fadeIn(3000);
		    });
		});
*/

	$("#name").change(function(event){
		if($("#name").val()){						//store the value in local storage
			userData.name = $("#name").val();
			window.localStorage.userData = JSON.stringify(userData);
		}
		//nameChange = true;
		$("#email").change(function(event){	
			//emailChange = true;
			if($("#email").val()){					//store the value in local storage
				userData.email = $("#email").val();
				window.localStorage.userData = JSON.stringify(userData);
			}
				$("#nextBtn").show();		
		});

	});	
	



$("#nextBtn").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
});
//HTML -- CSS -- javaScript-------------------
$("#htmlNxt").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2a").show();
	$("#2aNext").hide();

});

$("#cssNxt").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2b").show();
	$("#2bNext").hide();
	
});

$("#javaScriptNxt").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2c").show();
	$("#2cNext").hide();
	
});


//HTML checkbox

$("#2a1").click(function(event){
	if($("#2a1").val()){					//store the value in local storage
		userData.html.push($("#2a1").val()) ;
		window.localStorage.userData = JSON.stringify(userData);
	}
	$("#2aNext").show();
});

$("#2a2").click(function(event){
	$("#2aNext").show();
});

$("#2a3").click(function(event){
	$("#2aNext").show();
});
$("#2a4").click(function(event){
	$("#2aNext").show();
});
$("#2a5").click(function(event){
	$("#2aNext").show();
});
$("#2a6").click(function(event){
	$("#2aNext").show();
});
$("#2a7").click(function(event){
	$("#2aNext").show();
});
$("#2a8").click(function(event){
	$("#2aNext").show();
});


$("#2aNext").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2a").hide();
	//$("#q3").show();
	$("#htmlNxt").prop('disabled', true);
});

$("#2aPrevious").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2a").hide();
	$("#q3").hide();

});

//2b---------------------------------------------------

//css checkbox
$("#2b1").click(function(event){
	$("#2bNext").show();
});
$("#2b2").click(function(event){
	$("#2bNext").show();
});
$("#2b3").click(function(event){
	$("#2bNext").show();
});
$("#2b4").click(function(event){
	$("#2bNext").show();
});
$("#2b5").click(function(event){
	$("#2bNext").show();
});
$("#2b6").click(function(event){
	$("#2bNext").show();
});
$("#2b7").click(function(event){
	$("#2bNext").show();
});

$("#2bNext").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2b").hide();
	//$("#q3").show();
	$("#htmlNxt").prop('disabled', true);
	$("#cssNxt").prop('disabled', true);

});

$("#2bPrevious").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2b").hide();
	$("#q3").hide();

});

//2c----------------------------------------------------

//JavaScript checkbox
$("#2c1").click(function(event){
	$("#2cNext").show();
});
$("#2c2").click(function(event){
	$("#2cNext").show();
});
$("#2c3").click(function(event){
	$("#2cNext").show();
});
$("#2c4").click(function(event){
	$("#2cNext").show();
});
$("#2c5").click(function(event){
	$("#2cNext").show();
});
$("#2c6").click(function(event){
	$("#2cNext").show();
});
$("#2c7").click(function(event){
	$("#2cNext").show();
});

$("#2cNext").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2c").hide();
	$("#q3").show();
	$("#htmlNxt").prop('disabled', true);
	$("#cssNxt").prop('disabled', true);
	$("#javascriptNxt").prop('disabled', true);
	
});

$("#2cPrevious").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2c").hide();
	$("#q3").hide();

});

//-----------------------------------

$("#q3Next").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2a").hide();
	$("#q3").hide();
	$("#thanks").show();

});

$("#q3Previous").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2a").hide();
	$("#q3").hide();


});

//ans

$("#answer").click(function(event){
	//console.log("start clicked")
	//$("#welcome").show();
	$("#q1").show();
	$("#nextBtn").hide();
	$("#htmlNxt").hide();
	$("#2aNext").hide();
	$("#2bNext").hide();
	$("#2cNext").hide();
	$("#q3Next").hide();
	$("#cssNxt").hide();
	$("#javaScriptNxt").hide();
	$("#answer").hide();
	$("#deleteAnswer").hide();
	
	$("#2aPrevious").hide();
	$("#2bPrevious").hide();
	$("#2cPrevious").hide();
	$("#q3Previous").hide();
	$("#q2").show();
	$("#q2a").show();
	$("#q2b").show();
	$("#q2c").show();
	$("#q3").show();
	$("#thanks").show();

});

