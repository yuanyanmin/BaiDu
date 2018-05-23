var cover = document.getElementsByClassName('cover');
var dis = document.getElementsByClassName('dis');


for(var i = 0;i<dis.length;i++){
	/*var lis = dis[i];
	lis.index = i;
	lis.onmouseover = function () {
		console.log(this.index);
	}*/
	
	dis[i].onmouseover = function (i) {
		return function(){
			cover[i].style.display = 'block';
		}
	}(i);

	dis[i].onmouseout = function (i) {
		return function(){
			cover[i].style.display = 'none';
		}
	}(i);
}

