function f1(){var d1=document.getElementById("titleBox");d1.innerHTML=decodeURIComponent(escape(window.atob(a4)));var d2=document.getElementById("navigationBox");d2.innerHTML=decodeURIComponent(escape(window.atob(a3)));}function f2(){f1();var d6=document.getElementById("outputBox");d6.innerText="";d6.style.height=a5;d6.style.width=a6;d6.style.padding=a7;d6.style.color="White";var d3=document.getElementById("d3");d3.innerHTML=decodeURIComponent(escape(window.atob(a1)));}var t3=0;function f4(){var s1=event.keyCode;var t2=t3;if(((s1==33)||(s1==65))&&(t3 > 0)){t3--;f29(t3, t2);}else if(((s1==34)||(s1==68))&&(t3 < a2.length)){t3++;f29(t3, t2);}const s6=document.getElementById('btn');s6.disabled=true;}var t4;function f31(){var t2=t3;t3++;f29(t3, t2);if(t3 < a2.length)t4=setTimeout("f31()", 500);else clearTimeout(t4);}function f5(){f29(0, 0);t4=setTimeout("f31()", 500);const s6=document.getElementById('btn');s6.disabled=true;}const c1=0;const c2=1;const c3=2;function f29(t1, t2){if((0 <=t1)&&(t1 < a2.length)){f26(t1);f27(t1);f28(t1);if((0 <=t2)&&(t2 < a2.length)){f30("code" + a2[ t2][ c1 ], false);}f30("code" + a2[ t1 ][ c1 ], true);f22("code" + a2[ t1 ][ c1 ]);}}function f21(s2){if(s2=='cbw')return 'border:5px solid SkyBlue;background:white;margin:0px;text-align:center';else if(s2=='cb')return 'border:5px solid SkyBlue;background:SkyBlue;margin:0px;text-align:center';else if(s2=='lbw')return 'border:5px solid SkyBlue;background:white;margin:0px;text-align:left';else if(s2=='lb')return 'border:5px solid SkyBlue;background:SkyBlue;margin:0px;text-align:left';else if(s2=='rb')return 'border:5px solid SkyBlue;background:SkyBlue;margin:0px;text-align:right';else if(s2=='cgw')return 'border:5px solid MediumSeaGreen;background:white;margin:0px;text-align:center';else if(s2=='cg')return 'border:5px solid MediumSeaGreen;background:MediumSeaGreen;margin:0px;text-align:center';else if(s2=='lgw')return 'border:5px solid MediumSeaGreen;background:white;margin:0px;text-align:left';else if(s2=='lg')return 'border:5px solid MediumSeaGreen;background:MediumSeaGreen;margin:0px;text-align:left';else if(s2=='rg')return 'border:5px solid MediumSeaGreen;background:MediumSeaGreen;margin:0px;text-align:right';else if(s2=='cow')return 'border:5px solid DarkOrange;background:white;margin:0px;text-align:center';else if(s2=='co')return 'border:5px solid DarkOrange;background:DarkOrange;margin:0px;text-align:center';else if(s2=='low')return 'border:5px solid DarkOrange;background:white;margin:0px;text-align:left';else if(s2=='lo')return 'border:5px solid DarkOrange;background:DarkOrange;margin:0px;text-align:left';else if(s2=='ro')return 'border:5px solid DarkOrange;background:DarkOrange;margin:0px;text-align:right';else if(s2=='cyw')return 'border:5px solid YellowGreen;background:white;margin:0px;text-align:center';else if(s2=='cy')return 'border:5px solid YellowGreen;background:YellowGreen;margin:0px;text-align:center';else if(s2=='lyw')return 'border:5px solid YellowGreen;background:white;margin:0px;text-align:left';else if(s2=='ly')return 'border:5px solid YellowGreen;background:YellowGreen;margin:0px;text-align:left';else if(s2=='ry')return 'border:5px solid YellowGreen;background:YellowGreen;margin:0px;text-align:right';else return 'border:5px solid #FFFFFF;background:white;margin:0px;text-align:left';}function f24(){for(var d8=document.getElementById("d8");d8.rows.length > 0;d8.deleteRow(0));}function f23(i2){var d8=document.getElementById("d8");for(const l3 of a2[ i2 ][ c3 ].split('\t')){var d9=d8.insertRow(d8.rows.length);for(const v1 of l3.split('$')){var v2=v1.split(':');if(v2.length >=2){var v3=v2[0];var s2=v2[1];var s7=d9.insertCell();s7.innerHTML="<pre style='margin:0;padding:0;'>" + v3 + "</pre>";s7.style=f21(s2);}}}}function f25(i2){f24();f23(i2);}function f26(t1){var i2=t1;for(;(i2 >=0)&&(a2[ i2 ][ c3 ].length < 1);i2--);if((i2 >=0)&&(a2[ i2 ][ c3 ].indexOf("table\t")>=0)){document.getElementById("d7").width=0;f25(i2);}else if(i2 >=0){var d7=document.getElementById("d7");d7.src="https://5awf1ssnauwzzo5wgvczig.on.drv.tw/Web/J/img/" + a2[ i2 ][ c3 ];alert("["+a2[ i2 ][ c3 ]+"]"+"["+d7.src+"]");d7.width=d7.naturalWidth / 2;}}function f27(t1){var s3="";for(var i5=0;i5 <=t1;i5++)s3 +=a2[ i5 ][ c2 ];document.getElementById("outputBox").innerText=s3;}function f28(t1){var s4="";for(var i5=0;i5 <=t1;i5++)s4 +=a2[ i5 ][ c1 ] +" ";document.getElementById("d4").innerText=s4;}function f30(id, s5){if(s5)document.getElementById(id).style.backgroundColor="#BBBBBB";else document.getElementById(id).style.backgroundColor="white";}function f22(i1){var l1=document.getElementById(i1);window.scrollTo({left:0, top:(l1.offsetTop - 200)});var d5=document.getElementById("floatingBox");d5.setAttribute("style", "top:" + l1.offsetTop -(document.body.clientHeight / 2)+ "px;left:900px;");}function f3(){f1();$('#cardPile').html('');$('#cardSlots').html('');const i3=0;const i4=1;for(var i=0;i < d10.length;i++){$('<div>' + d10[i][i4] + '</div><br><br>').data('number', d10[i][i3]).attr('id', 'card' + d10[i][i3]).appendTo('#cardPile').draggable({containment: '#content', stack: '#cardPile div', cursor: 'move', revert: true});$('<div>' + '빈칸에 알맞은 답을 드래그 앤 드롭하세요 &nbsp;&nbsp;</div><br><br>').data('number', i).appendTo('#cardSlots').droppable({accept: '#cardPile div', hoverClass: 'hovered', drop: f32});}}function f32(event, ui){var s9=$(this).data('number');var s8=ui.draggable.data('number');if(s9==s8){ui.draggable.draggable('disable');$(this).droppable('disable');ui.draggable.position({of: $(this), my: 'left top', at: 'left top'});ui.draggable.draggable('option', 'revert', false);}}function f6(i6){var s10=false;var s11=document.getElementById('blank'+ i6).value.trim();for(var i5=0;i5 < d10[i6].length;i5++){if(s11==d10[i6][i5]){s10=true;break;}}if(s10==true){document.getElementById('blank'+ i6).value=d10[i6][0];document.getElementById('blank'+ i6).style.background="#ffffff";}else{document.getElementById('blank'+ i6).value=d10[i6][0] + " ";document.getElementById('blank'+ i6).style.background="#F5DA81";}}function f7(l3){f22("code"+l3);var d4=document.getElementById("d4");var s12=(d4.innerText.length < d10.length)? d10.substring(d4.innerText.length).trim(): "[실행종료]";s12=s12.substring(0,(s12.indexOf(" ")==-1)? s12.length : s12.indexOf(" ")).trim();if(l3==s12){d4.innerText=((d4.innerText=="")? l3 : d4.innerText + " " + l3);if(d4.innerText==d10){alert("맞았습니다");}}else{alert("현재 실행순서는 " + l3 + "이(가)아니고 " + s12 + "입니다. 다시 시도하세요");}}function f8(id, s5){if(s5){document.getElementById(id).style.backgroundColor="#BBBBBB";}else{document.getElementById(id).style.backgroundColor="white";}}
