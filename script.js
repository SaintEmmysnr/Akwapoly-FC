var $=function(s){return document.querySelector(s)},$$=function(s){return document.querySelectorAll(s)};
var info={owner:['Dr. Akanimo Edet Jonah (MCSN, MNIM)','Owner of Akwa Poly FC and acting rector of Akwa Ibom State Polytechnic. His backing gives students a team to play for.','photos/rector.jpg'],
coach:['Coach Saint Emmy','Akpan Emmanuel Anietie, Computer Science student and head coach. He picks the squad, runs training and leads the team on match day.','photos/coach.jpg'],
captain:['Club captain','Wears the armband for Akwa Poly FC. He leads the team out, speaks for the players and sets the example on match day.','photos/captain.jpg'],
highlights:['Match highlights','The highlights video plays here once uploaded.','']};
$$('[data-dlg]').forEach(function(b){b.onclick=function(){var d=info[b.dataset.dlg];$('#dt').textContent=d[0];$('#dp').textContent=d[1];$('#di').src=d[2];$('#di').style.display=d[2]?'block':'none';$('#dlg').showModal()}});
if($('#close'))$('#close').onclick=function(){$('#dlg').close()};
$$('.gal img').forEach(function(i){i.onclick=function(){$('#dt').textContent=i.alt;$('#dp').textContent='';$('#di').src=i.src;$('#di').style.display='block';$('#dlg').showModal()}});
if($('#yr'))$('#yr').textContent=new Date().getFullYear();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);var n=e.target.querySelector('[data-count]');if(n){var t=+n.dataset.count,i=0,x=setInterval(function(){n.textContent=++i;if(i>=t)clearInterval(x)},80)}})},{threshold:.2});
$$('.reveal').forEach(function(el){io.observe(el)});
if($('#contact'))$('#contact').onsubmit=function(e){e.preventDefault();$('#sent').style.display='block';this.reset()};
if($('#join'))$('#join').onsubmit=function(e){e.preventDefault();this.style.display='none';$('#done').style.display='block'};
if($('#bar')){
window.onscroll=function(){var h=document.documentElement;$('#bar').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'};
$('#burger').onclick=function(){$('#nav').classList.toggle('open')};$$('#nav a').forEach(function(a){a.onclick=function(){$('#nav').classList.remove('open')}});
// typed tagline
var w=['Play for your school.','Train with the best.','Win as one team.','Join the trials today.'],wi=0,ci=0,del=false;
(function t(){var s=w[wi];$('#typed').textContent=s.slice(0,ci);ci+=del?-1:1;var d=del?30:70;
if(!del&&ci>s.length){del=true;d=1400}else if(del&&ci<0){del=false;wi=(wi+1)%w.length;ci=0;d=300}setTimeout(t,d)})();
// photo tilt
var tl=$('#tilt');tl.onmousemove=function(e){var r=tl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tl.style.transform='perspective(700px) rotateY('+x*14+'deg) rotateX('+-y*14+'deg)'};tl.onmouseleave=function(){tl.style.transform=''};
// next match countdown (next Saturday 4pm)
var nm=new Date();nm.setDate(nm.getDate()+((6-nm.getDay()+7)%7||7));nm.setHours(16,0,0,0);
function dt(d){return d.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})}
$('#nextm').textContent='vs Uyo City Poly \u00b7 '+dt(nm)+' \u00b7 4:00 PM';
setInterval(function(){var s=Math.max(0,nm-new Date())/1000|0;$('#count').textContent=Math.floor(s/86400)+'d '+Math.floor(s%86400/3600)+'h '+Math.floor(s%3600/60)+'m '+s%60+'s'},1000);
var fx=[['Uyo City Poly',0],['Ikot Ekpene Tigers',7],['Eket Poly Stars',14],['Oron Rangers',21]];
var rs=[['Akwa Poly FC','2','1','Abak Lions','W'],['Akwa Poly FC','3','0','Etinan United','W'],['Akwa Poly FC','1','1','Itu Warriors','D'],['Akwa Poly FC','2','0','Ukanafun Stars','W']];
var tb=[['Akwa Poly FC',18,11,4,3,37],['Uyo City Poly',18,10,4,4,34],['Ikot Ekpene Tigers',18,9,5,4,32],['Eket Poly Stars',18,7,6,5,27],['Oron Rangers',18,5,5,8,20]];
var views={fix:function(){return fx.map(function(f){var d=new Date(nm);d.setDate(d.getDate()+f[1]);return '<div class="mrow"><b>Akwa Poly FC vs '+f[0]+'</b><span>'+dt(d)+' \u00b7 4:00 PM</span></div>'}).join('')},
res:function(){return rs.map(function(r){return '<div class="mrow"><b>'+r[0]+' '+r[1]+' - '+r[2]+' '+r[3]+'</b><span>'+({W:'Win',D:'Draw'})[r[4]]+'</span></div>'}).join('')},
tab:function(){return '<div style="overflow-x:auto"><table><tr><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>Pts</th></tr>'+tb.map(function(r){return '<tr><td><b>'+r[0]+'</b></td><td>'+r.slice(1).join('</td><td>')+'</td></tr>'}).join('')+'</table></div>'}};
$$('#tabs button').forEach(function(b){b.onclick=function(){$$('#tabs button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');$('#tabbody').innerHTML=views[b.dataset.t]()}});$('#tabbody').innerHTML=views.fix();
$('#mq').innerHTML=(function(){var m=['Trials open for the new season','Akwa Poly FC beat Abak Lions 2-1','Join the club today','Next match: vs Uyo City Poly'],o='';for(var k=0;k<2;k++)m.forEach(function(x){o+='<span>'+x+'</span>'});return o})();
// squad
var sq=[['Garri Isreal','GK',1,'garri'],['Mark Tom','DEF',2,'mark'],['Potent Aparel','DEF',3,'potent'],['Larry Lawrence','DEF',4,'larry'],['Favour Life','DEF',5,'favour'],['Sifon Abasi','MID',6,'sifon'],['Victor Okey','MID',8,'victor'],['Elder Peter','MID',10,'elder'],['Walter Wats','FWD',7,'walter'],['Bush James','FWD',9,'bush'],['Hills Top','FWD',11,'hills']];
var pos={'Garri Isreal':[50,89],'Mark Tom':[14,69],'Potent Aparel':[38,72],'Larry Lawrence':[62,72],'Favour Life':[86,69],'Sifon Abasi':[22,47],'Victor Okey':[50,51],'Elder Peter':[78,47],'Hills Top':[18,20],'Bush James':[50,13],'Walter Wats':[82,20]},names={GK:'Goalkeeper',DEF:'Defender',MID:'Midfielder',FWD:'Forward'};
function show(p){if(!$('.tk')){$('#players').innerHTML=sq.map(function(x,i){var c=pos[x[0]];return '<button class="tk" style="left:'+c[0]+'%;top:'+c[1]+'%;animation-delay:'+i*.09+'s" data-i="'+i+'"><b style="background-image:url(photos/players/'+x[3]+'.jpg)"><em>'+x[2]+'</em></b><span>'+x[0]+'</span></button>'}).join('');
$$('.tk').forEach(function(c){c.onclick=function(){var x=sq[c.dataset.i];$('#dt').textContent=x[0];$('#dp').textContent=names[x[1]]+', number '+x[2]+' for Akwa Poly FC.';$('#di').src='photos/players/'+x[3]+'.jpg';$('#di').style.display='block';$('#dlg').showModal()}})}
$$('.tk').forEach(function(c){c.classList.toggle('dim',!(p=='ALL'||sq[c.dataset.i][1]==p))})}
$$('#pos button').forEach(function(b){b.onclick=function(){$$('#pos button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');show(b.dataset.p)}});show('ALL');
// poll
var v={'Bush James':14,'Elder Peter':9,'Hills Top':6,'Garri Isreal':4},voted=false;
function poll(){var t=0;for(var k in v)t+=v[k];$('#poll').innerHTML='<p>Who was your man of the match? Tap to vote.</p>'+Object.keys(v).map(function(k){return '<button class="vb" data-k="'+k+'"><i style="width:'+(v[k]/t*100)+'%"></i><span><b>'+k+'</b><span>'+v[k]+' votes</span></span></button>'}).join('');
$$('.vb').forEach(function(b){b.onclick=function(){if(voted)return;voted=true;v[b.dataset.k]++;poll()}})}poll();
}

if($('#stabs')){var st=['Akwa Ibom State was created out of Cross River State in 1987. That decision led to a polytechnic being planned for the people of the new state.','In 1991 the state government set up Akwa Ibom State Polytechnic by Edict No. 11, with its home at Ikot Osurua, Ikot Ekpene.','On 24 January 1992 the polytechnic was officially commissioned. It opened with 961 students on 15 programmes, and most of its early staff came over from the Polytechnic in Calabar.','Today the polytechnic is accredited by the National Board for Technical Education and awards ND and HND certificates. Dr. Akanimo E. Jonah serves as acting rector.'];
function ss(i){$$('#stabs button').forEach(function(x){x.classList.toggle('on',x.dataset.s==i)});var e=$('#sbody');e.style.opacity=0;setTimeout(function(){e.textContent=st[i];e.style.opacity=1},200)}
$$('#stabs button').forEach(function(b){b.onclick=function(){ss(b.dataset.s)}});$('#sbody').textContent=st[0];
var si=0;setInterval(function(){if(!document.hidden&&!$('#stabs:hover')&&!$('#sbody:hover')){si=(si+1)%4;ss(si)}},7000)}
