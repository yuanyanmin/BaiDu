/*hidden-box*/

var hiddenBox = document.getElementById('hidden-box');
var hiddenBtn = document.getElementById('hiddenBtn');
var contentBox = document.getElementById('content');

hiddenBtn.onclick = function () {
	// hiddenBox.style.display = 'none';
	if(hiddenBox.style.display == 'none'){
		hiddenBox.style.display = 'block';
		contentBox.style.paddingLeft = 350 + 'px';
	}else{
		hiddenBox.style.display = 'none';
		contentBox.style.paddingLeft = 100 + 'px';
	}
}


