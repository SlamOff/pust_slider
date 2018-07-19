// //            1st easy
// // var textarea = document.getElementById('js-message');
// // var total = document.getElementById('js-message-left-total');
// // var left = document.getElementById('js-message-left-symbols');
// // var max = 40;
// // var p = document.getElementsByTagName('p')[0];

// // textarea.addEventListener('keyup', typing);
// // textarea.addEventListener('keydown', maxQ);

// // function typing(e){
// //     var q = this.value.length;
// //     total.textContent = q;
// //     left.textContent = max - q;
// // }

// // function maxQ(e){
// //     var q = this.value.length;
// //     var keys = [8, 45, 46, 36, 35, 37, 38, 39, 40, 18];
// //     if(q >= max){
// //         var availableChar;
// //         for(var i = 0; i < keys.length; i++){
// //             if(e.which != keys[i]){
// //                 e.preventDefault();
// //             }
// //             else {
// //                 break;
// //             }
// //         }
// //         p.style.color = 'red';
// //     }
// //     else {
// //         p.style.color = 'initial';
// //     }
// // }

// //               2nd easy
// // var Loader = (function() {
// //     'use strict';
// //     return {
// //        init: function() {
// //           /* get elements*/
// //           this.loader = document.getElementById('loader');
// //           this.preogressBar = document.getElementById('loaderProgressBar');
// //           this.loaderPercent = document.getElementById('loaderPercent');
// //           this.images = document.getElementsByTagName('img');
// //           /* add additional properties below if needed */

// //           this.events();
// //        },

// //        events: function() {
// //             var $this = this;
// //             for(let i = 0; i < this.images.length; i++){
// //                 this.images[i].onload = function(){
// //                     console.log($this.images[i].complete);
// //                 }
// //             }
// //        },

// //        loadImage: function() {
// //           // call this function on image load or error event
// //        },

// //        increaseProgressBar: function() {
// //           // use this method to increase progress bar percentage and color filling
// //        },

// //        loadedCallback: function() {
// //           // call this function once images will be loaded. Put code inside this method which will hide progress bar.
// //        }
// //     };
// //  })();

// //  /* Call component init method. Note! This method should be placed before </body> tag. */
// //  Loader.init();


// //       basic
// //1)
// // var ask1 = +prompt('Please fill in first digit', '1');
// // var ask2 = +prompt('Please fill in second digit', '1');
// // var sum = ask1 + ask2;

// // document.write(sum);
// //2)
// // var height = +prompt('Fill in the height of cylinder');
// // var radius = +prompt('Fill in the radius of cylinder');

// // var v = Math.PI * Math.pow(radius, 2) * height;
// // var s = 2 * Math.PI * radius * height;

// // document.getElementById('square').textContent += s.toFixed(2);
// // document.getElementById('volume').textContent += v.toFixed(2);

// //3)

// // function calc(x, y, a){
// //   switch (a){
// //     case '/':
// //       return x/y;
// //     break;
// //     case '*':
// //       return x*y;
// //     break;
// //     case '+':
// //       return x+y;
// //     break;
// //     case '-':
// //       return x-y;
// //     break;
// //     default: return '???'
// //   }
// // }

// // var n1 = +prompt('1st digit?');
// // var n2 = +prompt('2nd digit?');
// // var o = prompt('Operation?');

// // console.log(calc(n1, n2, o));

// // function isPositive(x){
// //   if( x < 0){
// //     return false;
// //   }
// //   else {
// //     return true;
// //   }
// // }

// function User(data){
//   this.name = data[0];
//   this.surname = data[1];
//   this.age = data[2];
//   this.positiobn = data[3];
// }
// User.prototype = {
//   constructor: User,
//   draw: function(){
// 	var info = document.getElementById('info');
// 	var ul = create('ul');
// 	for (var key in this){
// 		//console.log(this[key]);
// 		if(typeof this[key] != 'function'){
// 			var li = create('li');
// 			ul.appendChild(li);
// 			info.appendChild(ul);
// 			li.textContent = this[key];
// 		}
// 	}
//   }
// };
// Object.defineProperty(User.prototype, 'constructor', {
// 	enumerable: false
// });
// function create(el){
//   return document.createElement(el);
// };
// var form = document.forms[0];


// form.onsubmit = function(e){
//   var inputs = this.getElementsByTagName('input');
//   var valid = false;
//   e.preventDefault();
//   validate(this);
//   var error = document.getElementsByClassName('error');
//   for (var i = 0; i < error.length; i++) {
//     if (error[i].textContent == '') {
//       valid = true;
//     }
//     else {
//       valid = false;
//     }
//   }
//   if(valid){
// 	var users = [];
// 	var data = [];
//     for (var j = 0; j < inputs.length; j++){
// 	  data.push(inputs[j].value);
//       //list[j].textContent = inputs[j].value;
//     }
// 	var user = new User(data);
// 	user.draw();
//     console.log(user);
//     // var ul = create('ul');
//     // for (var j = 0; j < error.length; j++){
//     //   console.log(222);
//     //   var li = create('li');
//     //   ul.appendChild(li);
//     //   info.appendChild(ul);
//     //   var list = info.querySelectorAll('ul li');
//     //   list[j].textContent = inputs[j].value;
//     // }
//       // var inputs = this.getElementsByTagName('input');
//       // var list = info.getElementsByTagName('li');
//       // var ul = document.querySelectorAll('#info ul');
//       // for(var i = 0; i < inputs.length; i++){
        
//       // }
//     //var lastUl = ul[ul.length - 1];
//     //console.log(lastUl);
//     //var clone = lastUl.cloneNode(true);
//   }
// }



// 	function validate(form){
//     var message1 = 'Empty';
//     var message2 = 'Wrong';
// 		var elems = document.getElementsByClassName('required');
//     var nameCheck = new RegExp('^[A-Za-z]+$');
//     var positionCheck = new RegExp('^[A-Za-z]+$');
//     var ageCheck = new RegExp('/^\d+$/');

// 		if (!elems.name.value || elems.name.value.length < 2) {
// 			elems.name.nextElementSibling.textContent = message1;
// 		} else if (!nameCheck.test(elems.name.value)) {
// 			elems.name.nextElementSibling.textContent = message2;
//     }

//     if (!elems.surname.value || elems.surname.value.length < 2) {
// 			elems.surname.nextElementSibling.textContent = message1;
// 		} else if (!nameCheck.test(elems.surname.value)) {
// 			elems.surname.nextElementSibling.textContent = message2;
//     }

//     if (!elems.age.value || elems.age.value.length < 2) {
//       elems.age.nextElementSibling.textContent = message1;
//     }

//     if (!elems.position.value || elems.position.value.length < 2) {
// 			elems.position.nextElementSibling.textContent = message1;
// 		} else if (!nameCheck.test(elems.position.value)) {
// 			elems.position.nextElementSibling.textContent = message2;
//     }
    
// 		var placeholder;
// 		for (var i = 0; i < elems.length; i++) {
// 			elems[i].onfocus = function () {
// 				placeholder = this.getAttribute('placeholder');
// 				this.setAttribute('placeholder', '');
// 				this.nextElementSibling.textContent = '';
// 			};
// 			elems[i].onblur = function () {
// 				this.setAttribute('placeholder', placeholder);
// 			};
//     }
// 	}



// function Auto(s, v, h){
//     this.speed = s;
//     this.engineVolume = v;
//     this.horsePower = h;
//     var start = 0;
//     var time = 0;
//     var timer;

//     this.go = function(){
//         start = this.speed;
//         timer = setInterval(function(){
//             time++;
//         }, 1000);
//     }
//     this.stop = function(){
//         start = 0;
//         clearInterval(timer);
//     }

//     this.getMoveTime = function (){
//         return time;
//     }
//     this.getDistance = function(){
//         return this.getMoveTime() / 3600 * time;
//     }
// }



// function Elementik(id){
//     this.id = id;
//     this.width = function(w){
//         var el = document.getElementById(this.id);
//         if(w === undefined && w !== ''){
//             var style = getComputedStyle(el);
//             return style.width;
//         }
//         else {
//             w = parseFloat(w);
//             if(!isNaN(w)){
//                 el.style.width = w + 'px';
//             }
//         }
//     }
// }

// var div = new Elementik('lol');

// var width = div.width('sdf125px');

// console.log(width);


$('#lol').pust({
    slidesToShow: 3,
    slidesToScroll: 1,
    slideSpeed: 700,
    prevText: 'Prev',
    nextText: 'Next'
});


//$('#lol2').pust({
    //slidesToShow: 3
//});
// $('.kek').get().map(function(e){
//     console.info(e);
// });
