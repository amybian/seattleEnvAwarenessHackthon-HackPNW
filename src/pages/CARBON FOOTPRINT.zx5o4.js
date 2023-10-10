// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
	    $w('#text96').text =  "  ";

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button62_click(event) {
    var total = parseInt($w('#input1').value)*105+parseInt($w('#input3').value)*105+parseInt($w('#input4').value)*113+parseInt($w('#input2').value)*0.79+parseInt($w('#input5').value)*1100
    if($w('#radioGroup3').selectedIndex == 2){
        total+= 184;
    }
    if($w('#radioGroup2').selectedIndex == 2){
        total+= 166;
    }
	    $w('#text96').text = (Math.round(total)).toString();

}