
var noOfClicks = 0;		// Used to count the number of Clicks.
function button_click()
{
	noOfClicks++;	// On click of the button the value is incremented.

	//	The below line changes the text written on the button to display the number
	//	of times the button has been clicked.
	window.document.ButtonForm.myButton.value="Clicked " + noOfClicks + " times";
}
