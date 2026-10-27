// Personal details and destinations live here. Unknown destinations stay unset.
const PROFILE = {
  name: 'Sridurgesh Ravichandran',
  resume: 'assets/sridurgesh-ravichandran-resume.pdf', // Current version: owner-selected NTU résumé, with phone number removed.
  links: {
    github: 'https://github.com/sridurgesh007',
    linkedin: 'https://www.linkedin.com/in/sridurgesh',
    x: 'https://x.com/Sri26762339',
    scholar: 'https://scholar.google.com/citations?hl=en&user=r71zLXIAAAAJ',
    email: 'mailto:sridurgesh@u.nus.edu',
    personal: 'mailto:sridurgeshnus@gmail.com',

  }
};
const PROJECTS = {
  rna: { title: 'Reading between the bases', subtitle: '01 / RNA WORLDS', description: 'Thesis work in progress on RNA 3D structure prediction using retrieval and RNA language models, at the Yang Zhang Lab. Exploring the relationship between sequence and structure.', tags: ['RNA', 'RNA language models', 'Thesis · in progress'], background: '#c2dfca', visual: 'rna' },
  protein: { title: 'Protein fitness & epistasis', subtitle: '02 / PROTEIN THESIS', description: 'Thesis work in progress on protein mutation interactions and fitness landscape optimization through the lens of epistasis.', note: 'A detailed thesis summary will be added in the next revision.', tags: ['Proteins', 'Epistasis', 'Thesis · in progress'], background: '#d9d0e9', visual: 'protein' },
  microscopy: { title: 'iPotNET · beneath the pixels', subtitle: '03 / AI FOR MICROSCOPY', description: 'A physics-informed deep learning framework for reconstructing atomic potentials from noisy scanning transmission electron microscopy (STEM) images. The project uses SwinUNETR with an 11-channel metadata fusion pipeline, with training data generated using DFT calculations in CP2K and multislice simulations in abTEM.', note: 'Manuscript under review, as listed in the supplied résumé. The scan and lattice shown here are decorative illustrations.', tags: ['Electron microscopy', 'Physics-informed AI', 'Inverse problems'], background: '#d7dcca', visual: 'microscopy', url: 'https://github.com/sridurgesh007/microscopy_hackathon_team_iphasenet/tree/main', linkLabel: 'Explore the code' }
};

const icons = {
  github: '<path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.08c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.61 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08v3.08c0 .3.21.65.78.54A11.2 11.2 0 0 0 12 .8Z"/>',
  linkedin: '<path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.89a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.86H15.8v-4.64c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.72H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.58 1.96 3.58 4.51v5.27Z"/>',
  x: '<path d="M18.9 2H22l-6.8 7.78L23.2 22h-6.27l-4.91-7.43L5.52 22H2.4l7.7-8.8L2.4 2h6.43l4.44 6.78L18.9 2Zm-1.09 18h1.74L7.88 3.89H6.01L17.81 20Z"/>',
  scholar: '<path d="M12 1 0 9.3l12 8.3 9-6.23V18h2V9.99L24 9.3 12 1Zm0 18-7-4.84V20c3.87 4 10.13 4 14 0v-5.84L12 19Z"/>',
  email: '<path d="M2 4h20v16H2V4Zm2 2v.8l8 5.3 8-5.3V6H4Zm16 12V9.2l-8 5.3-8-5.3V18h16Z"/>',
  personal: '<path d="M2 4h20v16H2V4Zm2 2v.8l8 5.3 8-5.3V6H4Zm16 12V9.2l-8 5.3-8-5.3V18h16Z"/>',
};
const svgIcon = key => '<svg viewBox="0 0 24 24" aria-hidden="true">' + icons[key] + '</svg>';
const socialDock = document.createElement('div');
socialDock.className = 'social-dock';
socialDock.setAttribute('aria-label', 'Social profiles');
socialDock.innerHTML = ['github','linkedin','x','scholar'].map(key => {
  const label = {github:'GitHub',linkedin:'LinkedIn',x:'X',scholar:'Google Scholar'}[key];
  const icon = svgIcon(key);
  return PROFILE.links[key] ? '<a class="dock-icon '+key+'" href="'+PROFILE.links[key]+'" target="_blank" rel="noopener noreferrer" aria-label="'+label+'" title="'+label+'">'+icon+'</a>' : '<button class="dock-icon '+key+'" data-dialog="connect" aria-label="'+label+' — open address book" title="'+label+' — profile to be added">'+icon+'</button>';
}).join('') + '<span>Find me around the internet ↗</span>';
document.querySelector('.hero-copy').appendChild(socialDock);
const dialog = document.querySelector('#info-dialog');
const dialogContent = document.querySelector('#dialog-content');
function openDialog(title, content) {
  document.querySelector('#dialog-title').textContent = title;
  dialogContent.innerHTML = content;
  if (!dialog.open) dialog.showModal();
  closeStart();
}
function connectDialog() {
  const labels = {github:'GitHub',linkedin:'LinkedIn',x:'X',scholar:'Google Scholar',email:'NUS email',personal:'Personal email'};
  const details = {email:'sridurgesh@u.nus.edu',personal:'sridurgeshnus@gmail.com'};
  const socials = Object.entries(labels).map(([key,label]) => {
    const destination = PROFILE.links[key];
    const content = svgIcon(key) + '<span>' + label + (details[key] ? '<small>'+details[key]+'</small>' : '') + '</span><span>↗</span>';
    return '<a class="social-button social-'+key+'" href="' + destination + '"'+(destination.startsWith('https:')?' target="_blank" rel="noopener noreferrer"':'')+'>' + content + '</a>';
  }).join('');
  openDialog('address_book.exe', '<div class="eyebrow">SRIDURGESH RAVICHANDRAN / LET’S KEEP IN TOUCH</div><h2>Good questions welcome.</h2><p>Meeting at AACL, sharing an idea, or just curious? Let’s keep the conversation going.</p><div class="social-grid">' + socials + '</div>');
}
function showInfo(kind) {
  if (kind === 'connect') return connectDialog();
  if (kind === 'resume') return openDialog('resume.pdf', '<div class="eyebrow">SRIDURGESH RAVICHANDRAN / RÉSUMÉ</div><h2>A little more on paper.</h2>' + (PROFILE.resume ? '<p>Education, experience, and selected work.</p><div class="resume-actions"><a class="retro-button lime" href="'+PROFILE.resume+'" target="_blank" rel="noopener noreferrer">Open résumé PDF ↗</a><a class="retro-button pale" href="'+PROFILE.resume+'" download="Sridurgesh-Ravichandran-Resume.pdf">Download PDF ↓</a></div>' : '<div class="resume-file"><span aria-hidden="true">▤</span><div><b>Résumé / CV</b><p>PDF coming soon.</p></div></div>'));
  if (kind === 'bio') return openDialog('about_sridurgesh.txt','<div class="eyebrow">SRIDURGESH RAVICHANDRAN</div><h2>Curiosity across scales.</h2><p>I’m a Master of Computing (AI) candidate at the National University of Singapore. I work on AI for science and enjoy modelling cool things, from biological sequences and structures to scientific imaging.</p><p>At the Yang Zhang Lab, my thesis work explores protein mutation interactions, fitness landscapes, and RNA structure modelling. I’ve also supported multilingual SEA-LION data curation as a part-time student assistant at AI Singapore.</p><p>My background includes a BTech specialising in AI and machine learning from SRM Institute of Science and Technology. I’m drawn to good scientific questions and the models that help us explore them.</p>');
  if (kind === 'desktop') return openDialog('about_this_desktop.txt','<div class="eyebrow">BIOOS / PERSONAL RESEARCH DESKTOP</div><h2>A little science. A few pixels.</h2><p>Inspired by vintage browser windows, early personal websites, and biological structures.</p><p>The protein, RNA, microscopy scans, lattices, and landscapes are stylised illustrations. Project summaries are drawn from my résumé; thesis projects are in progress.</p>');
  openDialog('read_me.txt','<div class="eyebrow">QUICK START</div><h2>Make yourself at home.</h2><p>Browse the research folders, open the address book, or use the Start menu to jump around. The viewer’s pause button stops the molecular animation.</p><p>The top-right controls compact or expand the browser frame. On a phone, the desktop becomes a single column.</p>');
}
let toastTimer;
function toast(message) {
  const element = document.querySelector('#toast'); element.textContent = message; element.style.display = 'block';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { element.style.display = 'none'; }, 4000);
}
document.addEventListener('click', event => {
  const missing = event.target.closest('[data-missing-link]');
  if (missing) toast(missing.dataset.missingLink + ' link is waiting for your profile details.');
  const info = event.target.closest('[data-dialog]'); if (info) showInfo(info.dataset.dialog);
  const project = event.target.closest('[data-project]');
  if (project) {
    const key = project.dataset.project, data = PROJECTS[key];
    openDialog(key + '_research.folder', '<div class="eyebrow">' + data.subtitle + '</div><h2>' + data.title + '</h2>'+(data.visual?'<div class="detail-visual" style="background:' + data.background + '"><canvas id="detail-canvas" width="360" height="160" aria-label="Decorative research illustration"></canvas></div>':'')+'<p>' + data.description + '</p><div>' + data.tags.map(tag => '<span class="theme-chip">' + tag + '</span>').join('') + '</div>'+(data.note?'<p class="small-note">'+data.note+'</p>':'')+(data.url?'<a class="retro-button lime project-link" href="'+data.url+'" target="_blank" rel="noopener noreferrer">'+data.linkLabel+' ↗</a>':''));
    if(data.visual)drawLandscape(document.querySelector('#detail-canvas'), data.visual);
  }
  if (event.target.closest('.dialog-close')) dialog.close();
  const scroll = event.target.closest('[data-scroll]'); if (scroll) {document.getElementById(scroll.dataset.scroll).scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'}); closeStart();}
});
dialog.addEventListener('click', event => { if(event.target === dialog) { const bounds=dialog.getBoundingClientRect(); if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom) dialog.close(); } });
const startToggle = document.querySelector('#start-toggle');
const startMenu = document.querySelector('#start-menu');
function closeStart() { startMenu.hidden = true; startToggle.setAttribute('aria-expanded','false'); }
startToggle.addEventListener('click', () => {startMenu.hidden = !startMenu.hidden; startToggle.setAttribute('aria-expanded',String(!startMenu.hidden));});
document.addEventListener('click', event => {if(!event.target.closest('#start-menu, #start-toggle')) closeStart();});
document.addEventListener('keydown', event => {if(event.key === 'Escape') closeStart();});
document.querySelector('#theme-toggle').addEventListener('click', () => {document.body.classList.toggle('alt-desktop');closeStart();});
document.querySelector('#compact').addEventListener('click', () => document.querySelector('.browser-window').classList.toggle('compact'));
document.querySelector('#expand').addEventListener('click', () => document.querySelector('.browser-window').classList.toggle('expanded'));
function updateClock() {document.querySelector('#clock').textContent = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});}
updateClock();setInterval(updateClock,30000);document.querySelector('#year').textContent=new Date().getFullYear();

// All graphics are original mathematical illustrations drawn at deliberately low resolution.
function pixelCanvas(canvas, width, height) {
  const off = document.createElement('canvas'); off.width=width;off.height=height;
  return {c:off.getContext('2d'),finish(){const target=canvas.getContext('2d');target.imageSmoothingEnabled=false;target.clearRect(0,0,canvas.width,canvas.height);target.drawImage(off,0,0,canvas.width,canvas.height);}};
}
function line(c,x1,y1,x2,y2,color,width=1) {c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(Math.round(x1),Math.round(y1));c.lineTo(Math.round(x2),Math.round(y2));c.stroke();}
function polygon(c, points, fill, stroke) {c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(Math.round(x),Math.round(y)):c.moveTo(Math.round(x),Math.round(y)));c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=.6;c.stroke();}}
function protein(c,cx,cy,scale,phase=0,palette=['#d5f776','#a6ce59','#64ae79']) {
  const points=[];
  for(let i=0;i<=115;i++) {
    const t=i/115*Math.PI*5.8;
    const x=Math.sin(t+phase)*16+Math.sin(t*.36)*10;
    const y=(i/115-.5)*91;
    const z=Math.cos(t+phase)*15;
    points.push({x:cx+(x+z*.32)*scale,y:cy+(y-z*.22)*scale,z});
  }
  const strips=[];
  for(let i=1;i<points.length;i++){const p=points[i-1],q=points[i];strips.push({p,q,z:(p.z+q.z)/2,i});}
  strips.sort((a,b)=>a.z-b.z);
  strips.forEach(({p,q,z,i})=>{const w=(z>0?5:3.4)*scale;polygon(c,[[p.x-w,p.y],[p.x+w,p.y],[q.x+w,q.y],[q.x-w,q.y]],z>4?palette[0]:z>-5?palette[1]:palette[2]);if(i%3===0)line(c,p.x-w,p.y,p.x+w,p.y,z>0?'#efffb7':'#78ab62',.6);});
  line(c,points[0].x,points[0].y,points[0].x-12*scale,points[0].y-8*scale,palette[0],2*scale);
  line(c,points.at(-1).x,points.at(-1).y,points.at(-1).x+10*scale,points.at(-1).y+5*scale,palette[0],2*scale);
}
function rna(c,cx,cy,scale,palette=['#b8a1ed','#d8c9ff','#7985bd']) {
  const path=[];
  for(let j=0;j<10;j++)path.push([-9,31-j*5]);
  for(let i=0;i<=20;i++){const a=Math.PI*.75+i/20*Math.PI*1.5;path.push([Math.cos(a)*17,Math.sin(a)*17-28]);}
  for(let j=0;j<10;j++)path.push([9,-14+j*5]);
  path.forEach(([x,y],i)=>{const px=cx+x*scale,py=cy+y*scale;if(i){const [lx,ly]=path[i-1];line(c,cx+lx*scale,cy+ly*scale,px,py,palette[2],2.4*scale);}c.fillStyle=i%3?palette[0]:palette[1];c.fillRect(Math.round(px-1.6*scale),Math.round(py-1.6*scale),Math.max(2,3*scale),Math.max(2,3*scale));});
  for(let j=0;j<8;j++){const yy=cy+(26-j*5)*scale;line(c,cx-7*scale,yy,cx+7*scale,yy,j%2?'#97b6a1':palette[1],scale);c.fillStyle='#193f38';c.fillRect(Math.round(cx-1),Math.round(yy),2,1);}
}
function molecule(c,cx,cy,s,palette=['#9b5442','#f3e4cb','#3f897b']) {
  const rings=[[-12,0],[10,-13]];
  rings.forEach(([rx,ry])=>{let prev;for(let i=0;i<=6;i++){const a=Math.PI/3*i+Math.PI/6,x=cx+(rx+Math.cos(a)*15)*s,y=cy+(ry+Math.sin(a)*15)*s;if(prev)line(c,prev[0],prev[1],x,y,palette[0],1.8*s);prev=[x,y];}});
  line(c,cx+23*s,cy-20*s,cx+35*s,cy-26*s,palette[0],1.7*s);line(c,cx-25*s,cy+6*s,cx-37*s,cy+13*s,palette[0],1.7*s);
  c.font=`bold ${Math.round(7*s)}px monospace`;c.fillStyle=palette[2];c.fillText('N',cx-15*s,cy-9*s);c.fillStyle=palette[0];c.fillText('OH',cx+34*s,cy-25*s);c.fillText('O',cx-44*s,cy+17*s);
  c.fillStyle=palette[2];[[23,-20],[-25,6],[10,2]].forEach(([x,y])=>c.fillRect(Math.round(cx+x*s-2),Math.round(cy+y*s-2),4*s,4*s));
}
const heroCanvas = document.querySelector('#molecule');
const heroPixel = pixelCanvas(heroCanvas,220,170);
function drawHero(phase) {
  const c=heroPixel.c;c.fillStyle='#122e2b';c.fillRect(0,0,220,170);
  for(let x=-100;x<340;x+=22)line(c,110+(x-110)*.2,90,x,170,'#285044');
  for(let y=99;y<=170;y+=12)line(c,0,y,220,y,'#285044');
  c.fillStyle='#82a28e';[[20,37],[180,40],[161,78],[34,100],[190,136],[110,23]].forEach(([x,y])=>{c.fillRect(x,y,1,1);});
  c.strokeStyle='#3e6454';c.setLineDash([1,3]);c.strokeRect(13,15,194,138);c.setLineDash([]);
  c.fillStyle='#0a2524';c.beginPath();c.ellipse(83,141,35,5,0,0,Math.PI*2);c.fill();c.beginPath();c.ellipse(165,134,27,4,0,0,Math.PI*2);c.fill();
  protein(c,78,84,1.15,phase);rna(c,162,91,.95);
  line(c,120,60,133,60,'#7f9c81');line(c,126,54,126,66,'#7f9c81');
  c.font='5px monospace';c.fillStyle='#6c9782';c.fillText('STYLISED STRUCTURES',75,158);
  heroPixel.finish();
}
function drawLandscape(canvas,kind) {
  if(kind==='microscopy')return drawMicroscopy(canvas);
  const {c,finish}=pixelCanvas(canvas,240,126);
  const colors={rna:['#c2dfca','#72ad96','#376e62','#315d54'],protein:['#d9d0e9','#a796c9','#6e5c96','#574873'],molecule:['#f0d9b7','#d0a273','#99754f','#7e6548']}[kind];
  c.fillStyle=colors[0];c.fillRect(0,0,240,126);
  c.fillStyle=colors[3]+'55';for(let x=10;x<240;x+=13)for(let y=9;y<126;y+=13)c.fillRect(x,y,1,1);
  const n=18,points=[];
  for(let j=0;j<=n;j++){points[j]=[];for(let i=0;i<=n;i++){
    const x=(i-n/2)/4,y=(j-n/2)/4;
    const z=Math.exp(-((x+.8)**2+(y-.5)**2)*.9)*17+Math.exp(-((x-1.4)**2+(y+.8)**2)*1.6)*21+Math.sin(x*2+y)*2;
    points[j][i]=[120+(i-j)*5.4,57+(i+j)*1.62-z,z];
  }}
  for(let j=0;j<n;j++)for(let i=0;i<n;i++){const p=points[j][i],z=p[2];polygon(c,[p,points[j][i+1],points[j+1][i+1],points[j+1][i]],z>13?colors[1]:z>5?colors[1]+'dd':colors[1]+'88',colors[2]);}
  if(kind==='rna')rna(c,123,46,.66,['#326e60','#e6ffcf','#619b7e']);
  else if(kind==='protein')protein(c,122,39,.64,.5,['#5a447f','#8d71b0','#bea9dd']);
  else molecule(c,120,37,.85);
  c.fillStyle=colors[3];c.font='5px monospace';c.fillText('x',216,91);c.fillText('y',21,91);line(c,213,88,219,88,colors[3]);line(c,216,85,216,91,colors[3]);finish();
}
function drawMicroscopy(canvas) {
  const {c,finish}=pixelCanvas(canvas,240,126);
  c.fillStyle='#d7dcca';c.fillRect(0,0,240,126);
  c.fillStyle='#85927b';for(let x=7;x<240;x+=10)for(let y=8;y<126;y+=10)c.fillRect(x,y,1,1);
  c.fillStyle='#aab6a0';c.fillRect(9,10,105,99);
  c.fillStyle='#20352f';c.fillRect(7,8,105,99);
  c.fillStyle='#d9e3ca';c.font='5px monospace';c.fillText('STEM / SCAN VIEW',12,17);
  const image=c.createImageData(94,77);
  const atoms=[];
  for(let j=0;j<7;j++)for(let i=0;i<8;i++)atoms.push([i*13+(j%2)*6.5-3,j*12+1]);
  let seed=712;
  for(let y=0;y<77;y++)for(let x=0;x<94;x++){
    seed=(seed*1664525+1013904223)>>>0;
    let intensity=12+((seed>>>24)/255)*30;
    for(const [ax,ay] of atoms){const d=(x-ax)**2+(y-ay)**2;intensity+=Math.exp(-d/8.5)*170;}
    intensity=Math.min(238,intensity+(y%3===0?-7:0));
    const k=(y*94+x)*4;image.data[k]=intensity*.94;image.data[k+1]=intensity;image.data[k+2]=intensity*.88;image.data[k+3]=255;
  }
  c.putImageData(image,12,23);
  line(c,16,94,35,94,'#f0f5e4',2);
  c.strokeStyle='#d5f776';c.strokeRect(37,45,23,23);
  line(c,61,56,121,56,'#70856c');line(c,118,53,122,56,'#70856c');line(c,118,59,122,56,'#70856c');
  c.fillStyle='#415a47';c.font='5px monospace';c.fillText('LATTICE / ATOMIC COLUMNS',124,17);
  const project=(i,j,z=0)=>[173+(i-j)*10,40+(i+j)*4-z*13];
  for(let z=0;z<2;z++)for(let j=0;j<5;j++)for(let i=0;i<5;i++){
    const p=project(i,j,z);
    if(i<4){const q=project(i+1,j,z);line(c,...p,...q,z?'#72866a':'#a2b18f');}
    if(j<4){const q=project(i,j+1,z);line(c,...p,...q,z?'#72866a':'#a2b18f');}
    if(z===0){const q=project(i,j,1);line(c,...p,...q,'#9aab8c');}
    c.fillStyle='#334f3c';c.fillRect(p[0]-2,p[1]-2,5,5);c.fillStyle=z?'#e2f9b2':'#9fb78a';c.fillRect(p[0]-1,p[1]-1,3,3);c.fillStyle='#f6ffe5';c.fillRect(p[0]-1,p[1]-1,1,1);
  }
  c.fillStyle='#415a47';c.font='5px monospace';c.fillText('PIXELS → ATOMIC POTENTIAL',125,97);
  finish();
}
for(const kind of ['rna','protein','microscopy'])drawLandscape(document.querySelector('#terrain-'+kind),kind);
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let motion=!reducedMotion.matches,visible=true,lastFrame=0,phase=.3;
const motionButton=document.querySelector('#toggle-motion');
function updateMotionButton(){motionButton.textContent=motion?'Ⅱ':'▶';motionButton.setAttribute('aria-label',motion?'Pause molecular animation':'Play molecular animation');motionButton.title=motion?'Pause animation':'Play animation';}
motionButton.addEventListener('click',()=>{motion=!motion;updateMotionButton();});
reducedMotion.addEventListener('change',()=>{motion=!reducedMotion.matches;updateMotionButton();});
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;}).observe(heroCanvas);
function animate(time){if(time-lastFrame>90){if(motion&&visible&&!document.hidden){phase+=.025;drawHero(phase);}lastFrame=time;}requestAnimationFrame(animate);}
drawHero(phase);updateMotionButton();requestAnimationFrame(animate);
