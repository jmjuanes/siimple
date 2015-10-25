//Siimple class
var Siimple = new function()
{
	//Pannel event
	this.TogglePanel = function(el)
	{
		//Get parent element
		var par = el.parentElement;

		//Check the class pf the parent
		if(par.className === 'panel')
		{
			//Changed to close
			par.className = 'panel panel-closed';
		}
		else
		{
			//Change to open
			par.className = 'panel';
		}
	};
};
