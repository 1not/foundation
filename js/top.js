window.onscroll = function() {scrollFunction()};


function scrollFunction()
{
    if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260)
    {
        document.getElementById("button_top").style.display = "block";
    }
    else
    {
        document.getElementById("button_top").style.display = "none";
    }
}


var timeOut;

function scrollToTop()
{   
	if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0)
    {
		window.scrollBy(0, -50);
		timeOut = setTimeout('scrollToTop()', 5);
	}
	else clearTimeout(timeOut);
}