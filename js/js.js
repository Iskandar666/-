
	var cont=document.getElementById('cont');
		var list=document.getElementById('list');
		var buttons=document.getElementById('button').getElementsByTagName('span');
		var prev=document.getElementById('prev');
		var next=document.getElementById('next');
		var index=1;
		var img=parseInt(document.getElementById("img").clientWidth);
        var len = 5;
        var animated = false;
        var interval = 3000;
        var timer;
		
		
            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-img){
                            list.style.left = -img * len + 'px';
                        }
                        if(left<(-img * len)) {
                            list.style.left =-img+'px';
                        }
                        animated = false;
                    }
                }
                go();
            }

			
            function showButton(){
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }



			
            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }
			
		/*	
		function showButton(){
			for(var i=0; i<button.length; i++){
				if(button[i].className=='on'){
					button[i].className='';
					break;	
					}
				}
				button[index-1].className='on';
			}*/
		function right(){
			if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-img);
                showButton();
				}
			
		function left(){
			if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(img);
                showButton();
				}
				
				/*
				for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -img * (myIndex - index);

							animate(offset);
							index=myindex;
							showButton()
                }
            }*/

			for(var i=0; i<buttons.length;i++){
					buttons[i].onclick=function(){
							var myindex=parseInt(this.getAttribute('index'));
							var offset=-img*(myindex-index);
							animate(offset);
							index=myindex;
							showButton()
						}
				}
				
            cont.onmouseover = stop;
            cont.onmouseout = play;

            play();
			
setInterval(right,2000)
