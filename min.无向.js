欲=3,行=7,列=7,长=4,疆=16,图=Array(疆*疆).fill(0),示=0
戏=_=>{行+=[疆-1,1][欲]??0
列+=[0,0,疆-1,1][欲]
位=行%疆*疆+列%疆
头=示&&图[位]+1
if(头>2)长=戏=_
setTimeout(戏,200)
图[位]=长
if(!头){++长;do{食=Date.now()%疆**2}while(图[食])--图[食]}向=欲;示=""
图.forEach((格,序)=>{格=图[序]=!头||格<1?格:格-1;示+=(序%疆?"":"<br>")+"❌⚫⬜⬛"[格>0?3:格+2||0]});document.body.innerHTML=示}
onkeydown=e=>{键={U:0,D:1,L:2,R:3}[e.key[5]]??欲;欲=键!="1032"[向]?键:欲}
戏()