setInterval(function(){
				  document.querySelectorAll(".dots")[0].classList.remove('animate')
				  setTimeout(function(){
					  document.querySelectorAll(".dots")[0].classList.add('animate');
				  },600);
				},3750);