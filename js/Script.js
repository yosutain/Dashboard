function makePrimary (btnID) {
	if (document.getElementById(btnID).className == "btn btn-primary") {
		document.getElementById(btnID).className = "btn btn-default";
	} else if (document.getElementById(btnID).className == "btn btn-default") {
		document.getElementById(btnID).className = "btn btn-primary";
	}
}

function fillGlyph (glyphID) {
	if (document.getElementById(glyphID).className == "glyphicon glyphicon-star-empty") {
		document.getElementById(glyphID).className = "glyphicon glyphicon-star";
	} else if (document.getElementById(glyphID).className == "glyphicon glyphicon-star") {
		document.getElementById(glyphID).className = "glyphicon glyphicon-star-empty";
	} else if (document.getElementById(glyphID).className == "glyphicon glyphicon-heart-empty") {
		document.getElementById(glyphID).className = "glyphicon glyphicon-heart";
	} else if (document.getElementById(glyphID).className == "glyphicon glyphicon-heart") {
		document.getElementById(glyphID).className = "glyphicon glyphicon-heart-empty";
	}
}

function increaseProgressValue(progressType) {
	var width = document.getElementById(progressType).style.width;
	var widthToNumber = parseInt(width);
	if (widthToNumber < 100) {
		var value = widthToNumber + 10;
	    document.getElementById(progressType).style.width = value + "%";
	}
}

function decreaseProgressValue(progressType) {
    var width = document.getElementById(progressType).style.width;
	var widthToNumber = parseInt(width);
	if (widthToNumber > 0) {
		var value = widthToNumber - 10;
	    document.getElementById(progressType).style.width = value + "%";
	}
}

function nextTab() {
    var e = $('#mytabs li.active').next().find('a[data-toggle="tab"]');
    if (e.length > 0) {
        e.click();
    }
}

function prevTab() {
    var e = $('#mytabs li.active').prev().find('a[data-toggle="tab"]');
    if (e.length > 0) {
        e.click();
    }
}

function resizeItForSomeReason () {
	document.getElementById("automaticResizer").style.height = "0" + "pt";
}

function showAlertMessage(alertID) {
	if (document.getElementById(alertID).classList.contains("hidden")) {
		document.getElementById(alertID).className =
	   		document.getElementById(alertID).className.replace( /(?:^|\s)hidden(?!\S)/g , "" );
		var myHeight = document.getElementById("automaticResizer").style.height;
		var heightToNumber = parseInt(myHeight);
		var alertHeight = document.getElementById(alertID).offsetHeight;
		var value = heightToNumber + alertHeight;
		document.getElementById("automaticResizer").style.height = value + "px";
	}
}

function hideAlertMessage(alertID) {
	if (!(document.getElementById(alertID).classList.contains("hidden"))) {
		var myHeight = document.getElementById("automaticResizer").style.height;
		var heightToNumber = parseInt(myHeight);
		var alertHeight = document.getElementById(alertID).offsetHeight;
		var value = heightToNumber - alertHeight;
		document.getElementById("automaticResizer").style.height = value + "px";
		document.getElementById(alertID).className += " hidden";
	}
}

function showAllAlertMessages(alertID1, alertID2, alertID3, alertID4) {
	showAlertMessage(alertID1)
	showAlertMessage(alertID2)
	showAlertMessage(alertID3)
	showAlertMessage(alertID4)
}

function hideAllAlertMessages(alertID1, alertID2, alertID3, alertID4) {
	hideAlertMessage(alertID1)
	hideAlertMessage(alertID2)
	hideAlertMessage(alertID3)
	hideAlertMessage(alertID4)
}