/* ============================================================
   LEARN KANA QUIZ — app.js
   ============================================================ */
// ── Kana Data ── Format: [char, romaji, ...alternatives]
const KANA = {
  hiragana: {
    main: [
      [['あ','a'],['い','i'],['う','u'],['え','e'],['お','o']],
      [['か','ka'],['き','ki'],['く','ku'],['け','ke'],['こ','ko']],
      [['さ','sa'],['し','shi','si'],['す','su'],['せ','se'],['そ','so']],
      [['た','ta'],['ち','chi','ti'],['つ','tsu','tu'],['て','te'],['と','to']],
      [['な','na'],['に','ni'],['ぬ','nu'],['ね','ne'],['の','no']],
      [['は','ha'],['ひ','hi'],['ふ','fu','hu'],['へ','he'],['ほ','ho']],
      [['ま','ma'],['み','mi'],['む','mu'],['め','me'],['も','mo']],
      [['や','ya'],['ゆ','yu'],['よ','yo']],
      [['ら','ra'],['り','ri'],['る','ru'],['れ','re'],['ろ','ro']],
      [['わ','wa'],['を','wo'],['ん','n']],
    ],
    dakuten: [
      [['が','ga'],['ぎ','gi'],['ぐ','gu'],['げ','ge'],['ご','go']],
      [['ざ','za'],['じ','ji','zi'],['ず','zu'],['ぜ','ze'],['ぞ','zo']],
      [['だ','da'],['ぢ','di','ji'],['づ','du','zu'],['で','de'],['ど','do']],
      [['ば','ba'],['び','bi'],['ぶ','bu'],['べ','be'],['ぼ','bo']],
      [['ぱ','pa'],['ぴ','pi'],['ぷ','pu'],['ぺ','pe'],['ぽ','po']],
    ],
    combination: [
      [['きゃ','kya'],['きゅ','kyu'],['きょ','kyo']],
      [['しゃ','sha','sya'],['しゅ','shu','syu'],['しょ','sho','syo']],
      [['ちゃ','cha','tya'],['ちゅ','chu','tyu'],['ちょ','cho','tyo']],
      [['にゃ','nya'],['にゅ','nyu'],['にょ','nyo']],
      [['ひゃ','hya'],['ひゅ','hyu'],['ひょ','hyo']],
      [['みゃ','mya'],['みゅ','myu'],['みょ','myo']],
      [['りゃ','rya'],['りゅ','ryu'],['りょ','ryo']],
      [['ぎゃ','gya'],['ぎゅ','gyu'],['ぎょ','gyo']],
      [['じゃ','ja','zya'],['じゅ','ju','zyu'],['じょ','jo','zyo']],
      [['びゃ','bya'],['びゅ','byu'],['びょ','byo']],
      [['ぴゃ','pya'],['ぴゅ','pyu'],['ぴょ','pyo']],
    ]
  },
  katakana: {
    main: [
      [['ア','a'],['イ','i'],['ウ','u'],['エ','e'],['オ','o']],
      [['カ','ka'],['キ','ki'],['ク','ku'],['ケ','ke'],['コ','ko']],
      [['サ','sa'],['シ','shi','si'],['ス','su'],['セ','se'],['ソ','so']],
      [['タ','ta'],['チ','chi','ti'],['ツ','tsu','tu'],['テ','te'],['ト','to']],
      [['ナ','na'],['ニ','ni'],['ヌ','nu'],['ネ','ne'],['ノ','no']],
      [['ハ','ha'],['ヒ','hi'],['フ','fu','hu'],['ヘ','he'],['ホ','ho']],
      [['マ','ma'],['ミ','mi'],['ム','mu'],['メ','me'],['モ','mo']],
      [['ヤ','ya'],['ユ','yu'],['ヨ','yo']],
      [['ラ','ra'],['リ','ri'],['ル','ru'],['レ','re'],['ロ','ro']],
      [['ワ','wa'],['ヲ','wo'],['ン','n']],
    ],
    dakuten: [
      [['ガ','ga'],['ギ','gi'],['グ','gu'],['ゲ','ge'],['ゴ','go']],
      [['ザ','za'],['ジ','ji','zi'],['ズ','zu'],['ゼ','ze'],['ゾ','zo']],
      [['ダ','da'],['ヂ','di','ji'],['ヅ','du','zu'],['デ','de'],['ド','do']],
      [['バ','ba'],['ビ','bi'],['ブ','bu'],['ベ','be'],['ボ','bo']],
      [['パ','pa'],['ピ','pi'],['プ','pu'],['ペ','pe'],['ポ','po']],
      [['ヴ','vu']],
    ],
    combination: [
      [['キャ','kya'],['キュ','kyu'],['キョ','kyo']],
      [['シャ','sha','sya'],['シュ','shu','syu'],['ショ','sho','syo']],
      [['チャ','cha','tya'],['チュ','chu','tyu'],['チョ','cho','tyo']],
      [['ニャ','nya'],['ニュ','nyu'],['ニョ','nyo']],
      [['ヒャ','hya'],['ヒュ','hyu'],['ヒョ','hyo']],
      [['ミャ','mya'],['ミュ','myu'],['ミョ','myo']],
      [['リャ','rya'],['リュ','ryu'],['リョ','ryo']],
      [['ギャ','gya'],['ギュ','gyu'],['ギョ','gyo']],
      [['ジャ','ja','zya'],['ジュ','ju','zyu'],['ジョ','jo','zyo']],
      [['ビャ','bya'],['ビュ','byu'],['ビョ','byo']],
      [['ピャ','pya'],['ピュ','pyu'],['ピョ','pyo']],
      [['ヴァ','va'],['ヴィ','vi'],['ヴェ','ve'],['ヴォ','vo']],
      [['ファ','fa'],['フィ','fi'],['フェ','fe'],['フォ','fo']],
      [['ウィ','wi'],['ウェ','we'],['ウォ','wo']],
      [['ツァ','tsa'],['ツィ','tsi'],['ツェ','tse'],['ツォ','tso']],
      [['シェ','she']],
      [['チェ','che']],
      [['ジェ','je']],
      [['ティ','ti'],['ディ','di'],['デュ','dyu'],['トゥ','tu'],['ドゥ','du']],
    ]
  }
};

// ── State ──
const state = {
  kanaType: 'hiragana', font: 'Noto Sans JP', sheetType: 'hiragana',
  selected: { main: new Set(), dakuten: new Set(), combination: new Set() },
  quizMode: 'type', flashcardDir: 'kana',
  quiz: { questions: [], currentIndex: 0, startTime: null, rows: [], waitingForNext: false, currentOptions: [] },
  fc: { cards: [], index: 0, flipped: false },
};

// ── Helpers ──
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const getKana = () => KANA[state.kanaType];

function getSelectedKana() {
  const kana = getKana(); const all = [];
  ['main','dakuten','combination'].forEach(col => {
    state.selected[col].forEach(i => {
      kana[col][i].forEach(k => all.push({ char: k[0], romaji: k[1], alt: k.slice(2), rowId: `${col}-${i}` }));
    });
  });
  return all;
}
function getSelectedRows() {
  const kana = getKana(); const rows = [];
  ['main','dakuten','combination'].forEach(col => {
    state.selected[col].forEach(i => {
      rows.push({ id: `${col}-${i}`, chars: kana[col][i].map(k => ({ char: k[0], romaji: k[1] })) });
    });
  });
  return rows;
}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function isCorrect(input,item){const v=input.trim().toLowerCase();return v===item.romaji||item.alt.includes(v);}

// ── Navigation ──
function showPage(id){$$('.page').forEach(p=>p.classList.add('hidden'));$(`#${id}`).classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});}

// ── Font ──
function setFont(f){state.font=f;document.documentElement.style.setProperty('--font-jp',f==='Noto Serif JP'?"'Noto Serif JP',serif":"'Noto Sans JP',sans-serif");}

// ── Kana Type Toggle ──
function setKanaType(type){
  state.kanaType=type;state.selected={main:new Set(),dakuten:new Set(),combination:new Set()};
  const on='px-6 py-2 rounded-full bg-sakura-500 text-white text-sm font-semibold shadow-lg shadow-sakura-500/20 transition-all';
  const off='px-6 py-2 rounded-full text-gray-400 text-sm font-medium hover:text-white transition-colors';
  $('#btn-hiragana').className=type==='hiragana'?on:off;$('#btn-katakana').className=type==='katakana'?on:off;
  renderKanaRows();updateSelectionUI();
}

// ── Selection Page ──
function renderKanaRows(){
  const kana=getKana(),colId={main:'main',dakuten:'dakuten',combination:'combo'};
  ['main','dakuten','combination'].forEach(col=>{
    const ct=$(`#${colId[col]}-rows`);ct.innerHTML='';
    kana[col].forEach((row,i)=>{
      const sel=state.selected[col].has(i),lead=row[0][0],leadR=row[0][1];
      const rc=sel?'text-sakura-300':'text-gray-500';
      const chk=sel?'<div class="w-4 h-4 rounded bg-sakura-500 flex-shrink-0 flex items-center justify-center"><svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>':'<div class="w-4 h-4 rounded border-2 border-gray-600 flex-shrink-0"></div>';
      const tip=row.map(k=>`<span class="text-white">${k[0]}</span><span class="text-gray-400">/${k[1]}</span>`).join('&nbsp; ');
      const d=document.createElement('div');
      d.className=`row-btn glass ${sel?'sel-glow':'glass-h'} rounded-lg px-4 py-3 cursor-pointer transition-all relative group`;
      d.innerHTML=`<div class="flex items-center gap-2">${chk}<span class="text-xl font-jp text-white">${lead}</span><span class="text-sm ${rc}">/${leadR}</span></div><div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50 pointer-events-none"><div class="kana-tip rounded-lg px-3 py-2 text-sm font-jp whitespace-nowrap shadow-xl">${tip}</div><div class="kana-tip-arrow w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent"></div></div>`;
      d.onclick=()=>toggleRow(col,i);ct.appendChild(d);
    });
  });
}
function toggleRow(c,i){state.selected[c].has(i)?state.selected[c].delete(i):state.selected[c].add(i);renderKanaRows();updateSelectionUI();}
function toggleAllColumn(col){const n=getKana()[col].length;state.selected[col]=state.selected[col].size===n?new Set():new Set(Array.from({length:n},(_,i)=>i));renderKanaRows();updateSelectionUI();}
function toggleAllKana(){
  const k=getKana(),t=k.main.length+k.dakuten.length+k.combination.length,c=state.selected.main.size+state.selected.dakuten.size+state.selected.combination.size,fill=c<t;
  ['main','dakuten','combination'].forEach(col=>{const n=k[col].length;state.selected[col]=fill?new Set(Array.from({length:n},(_,i)=>i)):new Set();});
  renderKanaRows();updateSelectionUI();
}
function updateSelectionUI(){
  const k=getKana();
  ['main','dakuten','combination'].forEach(col=>{
    const full=state.selected[col].size===k[col].length&&k[col].length>0,el=$(`#btn-all-${col} .col-check`);
    el.innerHTML=full?'<div class="w-3.5 h-3.5 rounded bg-sakura-500 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>':'<div class="w-3.5 h-3.5 rounded border-2 border-gray-500 flex-shrink-0"></div>';
  });
  const t=k.main.length+k.dakuten.length+k.combination.length,c=state.selected.main.size+state.selected.dakuten.size+state.selected.combination.size;
  $('#btn-all-kana .all-check').innerHTML=c===t?'<div class="w-5 h-5 rounded bg-white/30 flex items-center justify-center"><svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>':'<div class="w-5 h-5 rounded border-2 border-white/50 flex-shrink-0"></div>';
  const btn=$('#btn-start-quiz');btn.disabled=c===0;btn.style.opacity=c===0?'0.5':'1';btn.style.pointerEvents=c===0?'none':'auto';
}

// ── Quiz Mode Selection ──
function selectQuizMode(m){
  state.quizMode=m;
  $('#mode-type').classList.toggle('sel-glow',m==='type');$('#mode-choose').classList.toggle('sel-glow',m==='choose');$('#mode-flashcard').classList.toggle('sel-glow',m==='flashcard');
  $('#mode-type .mode-check').classList.toggle('hidden',m!=='type');$('#mode-choose .mode-check').classList.toggle('hidden',m!=='choose');$('#mode-flashcard .mode-check').classList.toggle('hidden',m!=='flashcard');
  $('#fc-options').classList.toggle('hidden',m!=='flashcard');
  if(m==='flashcard'){
    syncFlashcardDirUI();
  }
}
function syncFlashcardDirUI(){
  ['kana','romaji','random'].forEach(d=>{
    $('#fc-dir-'+d).classList.toggle('sel-glow',d===state.flashcardDir);
  });
}
function setFlashcardDir(dir){
  state.flashcardDir=dir;
  syncFlashcardDirUI();
}
function beginQuiz(){
  const sel=getSelectedKana();if(!sel.length)return;
  if(state.quizMode==='flashcard'){beginFlashcard(sel);return;}
  state.quiz.questions=shuffle(sel).map(k=>({...k,answered:false,correct:false,misses:0}));
  state.quiz.currentIndex=0;state.quiz.startTime=Date.now();state.quiz.rows=getSelectedRows();state.quiz.waitingForNext=false;
  showPage('page-quiz');state.quizMode==='type'?renderTypeQuiz():renderChooseQuiz();
}

// ── Quiz: Type Romaji ──
function renderTypeQuiz(){
  document.onkeydown=function(e){
    if(!$('#modal-home').classList.contains('hidden')||!$('#modal-incomplete').classList.contains('hidden'))return;
    if(e.key==='Escape'){e.preventDefault();showModal('modal-home');return;}
    const isInput=e.target.tagName==='INPUT';
    if(e.key==='Enter'||e.code==='NumpadEnter'){
      e.preventDefault();
      if(isInput)e.target.blur();
      handleComplete();
      return;
    }
    if(e.key==='ArrowLeft'||(!isInput&&(e.key==='a'||e.key==='A'))){
      if(isInput&&e.target.selectionStart>0)return;
      e.preventDefault();
      if(isInput)e.target.blur();
      focusPrevTypeInput(isInput?+e.target.dataset.idx:-1);
      return;
    }
    if(e.key==='ArrowRight'||(!isInput&&(e.key==='d'||e.key==='D'))){
      if(isInput&&e.target.selectionEnd<e.target.value.length)return;
      e.preventDefault();
      if(isInput)e.target.blur();
      focusNextTypeInput(isInput?+e.target.dataset.idx:-1);
      return;
    }
  };
  const q=state.quiz.questions,ans=q.filter(x=>x.answered).length,pct=q.length?(ans/q.length*100):0;
  const lab=state.kanaType==='hiragana'?'Hiragana':'Katakana';
  $('#quiz-content').innerHTML=`
    <div class="text-center mb-2"><p class="text-xs text-gray-500 uppercase tracking-wider mb-1">${lab} Quiz — Type Romaji</p><h2 class="text-2xl font-bold text-white">Type the Romaji</h2></div>
    <div class="max-w-md mx-auto my-6"><div class="flex justify-between text-xs text-gray-500 mb-1"><span>Progress</span><span id="tp-text">${ans} / ${q.length}</span></div><div class="w-full bg-dark-700 rounded-full h-2"><div id="tp-bar" class="bg-gradient-to-r from-sakura-500 to-fuji-500 h-2 rounded-full transition-all duration-300" style="width:${pct}%"></div></div></div>
    <div class="grid grid-cols-5 gap-3 max-w-2xl mx-auto mb-8" id="type-grid"></div>
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4"><button onclick="showModal('modal-home')" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 transition-all">Home <span class="text-gray-500 text-xs ml-1 font-medium">[Esc]</span></button><button onclick="handleComplete()" class="w-full sm:w-auto btn-p rounded-xl px-10 py-3.5 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-sakura-500/20 transition-all">Complete ✓ <span class="text-white/50 text-xs ml-1 font-medium">[Enter]</span></button></div>`;
  const grid=$('#type-grid');
  q.forEach((item,i)=>{
    const cell=document.createElement('div');cell.id=`tc-${i}`;
    cell.className='glass rounded-xl p-4 text-center border border-transparent transition-all';
    if(item.answered){
      const ok=item.misses===0;cell.classList.add(ok?'q-ok':'q-ng');
      cell.innerHTML=`<div class="text-4xl font-jp mb-2 text-white">${item.char}</div><div class="${ok?'text-emerald-400':'text-red-400'} text-sm font-semibold">${item.romaji} ${ok?'✓':'✗('+item.misses+')'}</div>`;
    }else{
      const miss=item.misses>0?`<div class="text-red-400 text-[10px] mb-1">${item.misses} miss</div>`:'';
      cell.innerHTML=`<div class="text-4xl font-jp mb-2 text-white">${item.char}</div>${miss}<input type="text" data-idx="${i}" placeholder="?" class="type-input w-full bg-dark-700/80 border border-white/10 rounded-lg px-2 py-1.5 text-center text-sm text-white outline-none focus:border-sakura-500/50 transition-colors" autocomplete="off">`;
    }
    grid.appendChild(cell);
  });
  grid.querySelectorAll('.type-input').forEach(inp=>{
    inp.addEventListener('keydown',e=>{
      if(e.key==='Tab'){
         e.preventDefault();
         inp.blur();
         if(e.shiftKey) focusPrevTypeInput(+inp.dataset.idx);
         else focusNextTypeInput(+inp.dataset.idx);
      }
    });
    inp.addEventListener('blur',()=>{if(inp.value.trim())checkTypeAnswer(+inp.dataset.idx,inp);});
  });
  const first=grid.querySelector('.type-input');if(first)first.focus();
}
function checkTypeAnswer(idx,inp){
  const item=state.quiz.questions[idx];if(item.answered)return;
  if(isCorrect(inp.value,item)){
    item.answered=true;item.correct=item.misses===0;
    const cell=$(`#tc-${idx}`),ok=item.correct;cell.classList.add(ok?'q-ok':'q-ng');
    cell.innerHTML=`<div class="text-4xl font-jp mb-2 text-white">${item.char}</div><div class="${ok?'text-emerald-400':'text-red-400'} text-sm font-semibold">${item.romaji} ${ok?'✓':'✗('+item.misses+')'}</div>`;
    updateTypeProgress();
  }else{
    item.misses++;const cell=$(`#tc-${idx}`);cell.classList.add('q-ng');inp.value='';inp.placeholder=item.misses+' miss';
    setTimeout(()=>cell.classList.remove('q-ng'),600);
  }
}
function focusPrevTypeInput(cur){
  const inputs=$$('#type-grid .type-input');
  if(!inputs.length)return;
  if(cur===-1){inputs[inputs.length-1].focus();return;}
  const before=inputs.filter(inp=>+inp.dataset.idx<cur);
  const target=before.length?before[before.length-1]:inputs[inputs.length-1];
  if(target)target.focus();
}
function focusNextTypeInput(cur){
  const inputs=$$('#type-grid .type-input');
  if(!inputs.length)return;
  if(cur===-1){inputs[0].focus();return;}
  const after=inputs.filter(inp=>+inp.dataset.idx>cur);
  const target=after.length?after[0]:inputs[0];
  if(target)target.focus();
}
function updateTypeProgress(){
  const q=state.quiz.questions,a=q.filter(x=>x.answered).length,pct=(a/q.length*100);
  const bar=$('#tp-bar'),txt=$('#tp-text');if(bar)bar.style.width=pct+'%';if(txt)txt.textContent=`${a} / ${q.length}`;
}

// ── Quiz: Choose Kana ──
function renderChooseQuiz(){
  const q=state.quiz.questions,cur=state.quiz.currentIndex;
  if(cur>=q.length){
    const correct=q.filter(x=>x.correct).length;
    $('#quiz-content').innerHTML=`<div class="text-center py-16"><div class="text-6xl mb-4">🎉</div><h2 class="text-3xl font-bold grad-text mb-2">Quiz Complete!</h2><p class="text-gray-400 mb-8">${correct} / ${q.length} correct</p><button onclick="showResults()" class="w-full sm:w-auto btn-p rounded-xl px-10 py-3.5 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-sakura-500/20 transition-all mx-auto">View Results →</button></div>`;
    document.onkeydown=function(e){if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();goHome();}};return;
  }
  const item=q[cur],ans=q.filter(x=>x.answered).length,pct=q.length?(ans/q.length*100):0;
  const lab=state.kanaType==='hiragana'?'Hiragana':'Katakana';
  const pool=q.filter((x,i)=>i!==cur).map(x=>({char:x.char,romaji:x.romaji}));
  let wrong=shuffle(pool).slice(0,3);
  if(wrong.length<3){const extra=getSelectedKana().filter(x=>x.char!==item.char&&!wrong.find(w=>w.char===x.char));wrong=[...wrong,...shuffle(extra)].slice(0,3);}
  const options=shuffle([...wrong,{char:item.char,romaji:item.romaji}]);
  state.quiz.currentOptions=options;
  $('#quiz-content').innerHTML=`
    <div class="text-center mb-2"><p class="text-xs text-gray-500 uppercase tracking-wider mb-1">${lab} Quiz — Choose Kana</p><h2 class="text-2xl font-bold text-white">Choose the Kana</h2></div>
    <div class="max-w-md mx-auto my-6"><div class="flex justify-between text-xs text-gray-500 mb-1"><span>Question ${cur+1} of ${q.length}</span><span>${ans} correct</span></div><div class="w-full bg-dark-700 rounded-full h-2"><div class="bg-gradient-to-r from-fuji-500 to-sakura-500 h-2 rounded-full transition-all duration-300" style="width:${pct}%"></div></div></div>
    <div class="text-center my-10"><div class="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br from-fuji-500/20 to-sakura-500/20 border border-fuji-500/30 mb-3"><span class="text-5xl font-bold text-white">${item.romaji}</span></div><p class="text-gray-400 text-sm mt-2">Select the matching kana</p></div>
    <div class="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-4" id="choose-grid">${options.map((o,idx)=>`<button data-idx="${idx}" class="choose-opt glass glass-h rounded-xl p-5 text-center transition-all hover:scale-105 border border-transparent"><span class="text-5xl font-jp text-white">${o.char}</span><span class="block text-xs text-gray-600 mt-1">${idx+1}</span></button>`).join('')}</div>
    <div id="choose-hint" class="text-center text-xs text-gray-600 mb-6">Press 1-4 to select</div>
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4"><button onclick="showModal('modal-home')" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 transition-all">Home <span class="text-gray-500 text-xs ml-1 font-medium">[Esc]</span></button><button onclick="handleComplete()" class="w-full sm:w-auto btn-p rounded-xl px-10 py-3.5 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-sakura-500/20 transition-all">Complete ✓ <span class="text-white/50 text-xs ml-1 font-medium">[Enter]</span></button></div>`;
  $$('#choose-grid .choose-opt').forEach(b=>{b.onclick=()=>handleChooseClick(+b.dataset.idx);});
  document.onkeydown=handleChooseKey;
}
function handleChooseClick(optIdx){
  const q=state.quiz.questions[state.quiz.currentIndex];
  if(q.answered)return;
  const item=q,opt=state.quiz.currentOptions[optIdx];
  const btn=$$('#choose-grid .choose-opt')[optIdx];if(!btn||btn.disabled)return;
  if(opt.char===item.char){
    q.answered=true;q.correct=q.misses===0;
    btn.classList.add('q-ok');btn.innerHTML=`<span class="text-5xl font-jp">${opt.char}</span><span class="block text-emerald-400 text-sm mt-1">✓</span>`;
    $('#choose-hint').innerHTML='<span class="text-emerald-400">Correct!</span>';
    $$('#choose-grid .choose-opt').forEach(b=>{b.disabled=true;});
    setTimeout(()=>{state.quiz.currentIndex++;renderChooseQuiz();},800);
  }else{
    q.misses++;btn.classList.add('q-ng');btn.innerHTML=`<span class="text-5xl font-jp text-red-300">${opt.char}</span><span class="block text-red-400 text-sm mt-1">✗</span>`;btn.disabled=true;
    if(q.misses>=3){
      q.answered=true;q.correct=false;
      $$('#choose-grid .choose-opt').forEach(b=>{const i=+b.dataset.idx;if(state.quiz.currentOptions[i].char===item.char){b.classList.add('q-ok');b.innerHTML=`<span class="text-5xl font-jp">${state.quiz.currentOptions[i].char}</span><span class="block text-emerald-400 text-sm mt-1">← correct</span>`;}});
      $('#choose-hint').innerHTML='<span class="text-red-400">3 misses!</span>';
      setTimeout(()=>{state.quiz.currentIndex++;renderChooseQuiz();},1200);
    }
  }
}
function handleChooseKey(e){
  if(!$('#modal-home').classList.contains('hidden')||!$('#modal-incomplete').classList.contains('hidden'))return;
  const q=state.quiz.questions[state.quiz.currentIndex];
  if(q&&q.answered)return;
  let idx=-1;
  if(e.key>='1'&&e.key<='4')idx=+e.key-1;
  if(e.code==='Numpad1')idx=0;if(e.code==='Numpad2')idx=1;if(e.code==='Numpad3')idx=2;if(e.code==='Numpad4')idx=3;
  if(idx>=0){e.preventDefault();handleChooseClick(idx);return;}
  if(e.key==='Escape'){e.preventDefault();showModal('modal-home');return;}
  if(e.key==='Enter'||e.code==='NumpadEnter'){e.preventDefault();handleComplete();return;}
}

// ── Complete / Home ──
function handleComplete(){const u=state.quiz.questions.filter(x=>!x.answered).length;u>0?showModal('modal-incomplete'):showResults();}
function homeKeyHandler(e){
  if(!$('#modal-home').classList.contains('hidden')||!$('#modal-incomplete').classList.contains('hidden'))return;
  if(e.key==='Escape'){if(!$('#page-quiz-mode').classList.contains('hidden')){e.preventDefault();goHome();}return;}
  if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){if(!$('#page-quiz-mode').classList.contains('hidden')){e.preventDefault();const modes=['type','choose','flashcard'];const ci=modes.indexOf(state.quizMode);selectQuizMode(modes[(ci-1+3)%3]);}}
  if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){if(!$('#page-quiz-mode').classList.contains('hidden')){e.preventDefault();const modes=['type','choose','flashcard'];const ci=modes.indexOf(state.quizMode);selectQuizMode(modes[(ci+1)%3]);}}
  if(e.key==='Enter'||e.code==='NumpadEnter'){
    if(!$('#page-selection').classList.contains('hidden')){
      const btn=$('#btn-start-quiz');
      if(btn&&btn.style.pointerEvents!=='none'){e.preventDefault();btn.click();}
    }else if(!$('#page-quiz-mode').classList.contains('hidden')){
      e.preventDefault();$('#btn-begin-quiz').click();
    }
  }
}
function goHome(){document.onkeydown=homeKeyHandler;hideModal('modal-home');hideModal('modal-incomplete');showPage('page-selection');}

// ── Results ──
function showResults(){
  hideModal('modal-incomplete');
  const q=state.quiz.questions,correct=q.filter(x=>x.correct).length,wrong=q.filter(x=>x.answered&&!x.correct).length,unanswered=q.filter(x=>!x.answered).length;
  const total=q.length,pct=total?Math.round(correct/total*100):0,elapsed=Math.round((Date.now()-state.quiz.startTime)/1000);
  const mins=Math.floor(elapsed/60),secs=elapsed%60,circ=2*Math.PI*70,off=circ-(pct/100)*circ;
  // Group by rows
  let rowsHTML='';
  state.quiz.rows.forEach(row=>{
    const items=row.chars.map(ch=>{
      const m=q.find(x=>x.char===ch.char&&x.rowId===row.id);if(!m)return null;
      const st=!m.answered?'skip':m.correct?'ok':'ng';
      return{char:ch.char,romaji:ch.romaji,st,misses:m.misses};
    }).filter(Boolean);
    if(!items.length)return;
    rowsHTML+=`<div class="glass rounded-xl p-3 mb-3"><div class="flex flex-wrap gap-2">${items.map(r=>{
      const cls=r.st==='ok'?'q-ok':r.st==='ng'?'q-ng':'bg-dark-700/50';
      const icon=r.st==='ok'?'✓':r.st==='ng'?`✗(${r.misses})`:'—';
      const col=r.st==='ok'?'text-emerald-400':r.st==='ng'?'text-red-400':'text-gray-600';
      return`<div class="${cls} rounded-lg px-3 py-2 text-center border border-transparent min-w-[60px]"><div class="text-2xl font-jp text-white">${r.char}</div><div class="text-[10px] text-gray-400">${r.romaji}</div><div class="text-xs font-semibold ${col}">${icon}</div></div>`;
    }).join('')}</div></div>`;
  });
  $('#results-content').innerHTML=`
    <div class="text-center mb-8"><p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Quiz Complete</p><h2 class="text-3xl font-bold grad-text">Your Results</h2></div>
    <div class="flex justify-center mb-8"><div class="relative w-40 h-40"><svg class="w-40 h-40 -rotate-90" viewBox="0 0 160 160"><circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8"/><circle cx="80" cy="80" r="70" fill="none" stroke="url(#sg)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${off}"/><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f43f7a"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs></svg><div class="absolute inset-0 flex flex-col items-center justify-center"><span class="text-4xl font-bold text-white">${pct}%</span><span class="text-xs text-gray-400">${correct} / ${total}</span></div></div></div>
    <div class="grid grid-cols-4 gap-4 mb-8">
      <div class="glass rounded-xl p-4 text-center"><div class="text-2xl font-bold text-emerald-400">${correct}</div><div class="text-xs text-gray-500">Correct</div></div>
      <div class="glass rounded-xl p-4 text-center"><div class="text-2xl font-bold text-red-400">${wrong}</div><div class="text-xs text-gray-500">Wrong</div></div>
      <div class="glass rounded-xl p-4 text-center"><div class="text-2xl font-bold text-amber-400">${unanswered}</div><div class="text-xs text-gray-500">Skipped</div></div>
      <div class="glass rounded-xl p-4 text-center"><div class="text-2xl font-bold text-fuji-400">${mins}:${secs.toString().padStart(2,'0')}</div><div class="text-xs text-gray-500">Time</div></div>
    </div>
    <h3 class="text-sm font-semibold text-white mb-3">Detail by Row</h3>${rowsHTML}
    <div class="text-center mt-6"><button onclick="goHome()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 mx-auto transition-all">Home <span class="text-gray-500 text-xs ml-1 font-medium">[Esc]</span></button></div>`;
  showPage('page-results');
  document.onkeydown=function(e){if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();goHome();}};
}

// ── Speech ──
function speakKana(text){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang='ja-JP';u.rate=0.8;u.pitch=1;
  const voices=window.speechSynthesis.getVoices();
  const jp=voices.find(v=>v.lang.startsWith('ja'));
  if(jp)u.voice=jp;
  window.speechSynthesis.speak(u);
}

// ── Kana Sheet ──
function showSheet(){
  state.sheetType = state.kanaType || 'hiragana';
  setSheetType(state.sheetType);
  showPage('page-sheet');
}
function setSheetType(type){
  state.sheetType = type;
  const on='px-6 py-2 rounded-full bg-sakura-500 text-white text-sm font-semibold shadow-lg shadow-sakura-500/20 transition-all';
  const off='px-6 py-2 rounded-full text-gray-400 glass glass-h text-sm font-medium transition-colors hover:text-white';
  $('#btn-sheet-hiragana').className=type==='hiragana'?on:off;
  $('#btn-sheet-katakana').className=type==='katakana'?on:off;
  renderSheet();
}
function renderSheet(){
  const k = KANA[state.sheetType];
  const vowels = ['a','i','u','e','o'];
  
  const generateHTML = (data, getPrefix) => {
    let html = `<div class="grid grid-cols-[20px_repeat(5,1fr)] lg:grid-cols-[24px_repeat(5,1fr)] gap-1.5 lg:gap-2 w-full max-w-[520px] mx-auto">`;
    html += `<div></div>` + vowels.map(v => `<div class="text-center text-xs lg:text-sm font-bold text-sakura-400 self-center">${v}</div>`).join('');
    
    data.forEach((row, i) => {
      let displayRow = row;
      let hasN = false;
      let nCell = null;
      // Handle the 'n' character separated in the 'w' row
      if (row.length === 3 && row[2][1] === 'n') {
          hasN = true;
          nCell = row[2];
          displayRow = row.slice(0, 2);
      }
      
      const prefix = getPrefix(displayRow, i);
      html += `<div class="text-xs lg:text-sm font-bold text-fuji-400 self-center text-center uppercase">${prefix}</div>`;
      
      const cells = [null,null,null,null,null];
      let collision = false;
      displayRow.forEach(cell => {
         let ci = vowels.indexOf(cell[1].slice(-1));
         if(ci >= 0) {
            if(cells[ci] !== null) collision = true;
            cells[ci] = cell;
         } else {
            collision = true;
         }
      });
      
      if(!collision) {
        for(let j=0; j<5; j++) {
          if(cells[j]) {
            html += `<div class="glass glass-h rounded px-0 py-2 text-center flex flex-col items-center justify-center hover:scale-110 shadow-sm transition-transform cursor-pointer" onclick="speakKana('${cells[j][0]}')"><span class="text-2xl lg:text-[28px] font-jp text-white leading-none mb-1 lg:mb-1.5">${cells[j][0]}</span><span class="text-[11px] lg:text-xs text-gray-400 font-medium leading-none">${cells[j][1]}</span></div>`;
          } else {
            html += `<div></div>`;
          }
        }
      } else {
        html += `<div class="col-span-5 flex gap-1 lg:gap-1.5 flex-nowrap justify-center">`;
        displayRow.forEach(cell => {
           html += `<div class="glass glass-h rounded px-1 py-2 text-center flex flex-col items-center justify-center flex-1 min-w-[36px] hover:scale-110 shadow-sm transition-transform whitespace-nowrap cursor-pointer" onclick="speakKana('${cell[0]}')"><span class="text-2xl lg:text-[28px] font-jp text-white leading-none mb-1 lg:mb-1.5">${cell[0]}</span><span class="text-[11px] lg:text-xs text-gray-400 font-medium leading-none">${cell[1]}</span></div>`;
        });
        html += `</div>`;
      }
      
      if(hasN && nCell) {
          html += `<div class="text-xs lg:text-sm font-bold text-fuji-400 self-center text-center uppercase">n</div>`;
          html += `<div class="glass glass-h rounded px-0 py-2 text-center flex flex-col items-center justify-center hover:scale-110 shadow-sm transition-transform cursor-pointer" onclick="speakKana('${nCell[0]}')"><span class="text-2xl lg:text-[28px] font-jp text-white leading-none mb-1 lg:mb-1.5">${nCell[0]}</span><span class="text-[11px] lg:text-xs text-gray-400 font-medium leading-none">${nCell[1]}</span></div>`;
          html += `<div class="col-span-4"></div>`;
      }
    });
    
    html += `</div>`;
    return html;
  };

  const mainLabels = ['','k','s','t','n','h','m','y','r','w'];
  const mainHTML = generateHTML(k.main, (row, i) => mainLabels[i]);

  const dakutenLabels = ['g','z','d','b','p','v'];
  const dakutenHTML = generateHTML(k.dakuten, (row, i) => dakutenLabels[i] || '');

  const comboHTML = generateHTML(k.combination, (row, i) => {
    const r0 = row[0][1];
    if(['sha','she'].includes(r0)) return 'sh';
    if(['cha','che'].includes(r0)) return 'ch';
    if(['ja','je'].includes(r0)) return 'j';
    if(r0 === 'ti') return 't/d';
    return r0.slice(0, -1);
  });

  const block = (title, content) => `<div class="bg-dark-800 rounded-2xl p-3 sm:p-4 lg:p-5 border border-white/5 h-full flex flex-col shadow-xl"><h3 class="text-sm sm:text-base font-bold text-fuji-400 mb-3 sm:mb-4 text-center tracking-widest uppercase border-b border-white/10 pb-3">${title}</h3><div class="flex-1 flex flex-col justify-start">${content}</div></div>`;

  $('#sheet-content').innerHTML = `
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto">
        <div class="w-full">
            ${block('Main Kana', mainHTML)}
        </div>
        <div class="w-full">
            ${block('Dakuten', dakutenHTML)}
        </div>
        <div class="w-full">
            ${block('Combination', comboHTML)}
        </div>
    </div>
  `;
  document.onkeydown=function(e){if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();goHome();}};
}

// ── Writing Practice ──
const writing = { kana: [], index: 0, showStroke: true, type: 'hiragana' };
function loadWritingKana() {
  const k = KANA[writing.type];
  const main = k.main.flat().map(x=>({char:x[0],romaji:x[1], cat:'main'}));
  const dakuten = k.dakuten.flat().map(x=>({char:x[0],romaji:x[1], cat:'dakuten'}));
  writing.kana = [...main, ...dakuten];
  writing.index=0;
}
function setWritingType(t) {
  writing.type = t;
  loadWritingKana();
  renderWriting();
}
function startWritingPractice(){
  writing.type = 'hiragana';
  loadWritingKana();
  showPage('page-writing');
  renderWriting();
}
function toggleStroke(){writing.showStroke=!writing.showStroke;renderWriting();}
function renderWriting(){
  const k=writing.kana,cur=k[writing.index],total=k.length,idx=writing.index;
  const lab=writing.type==='hiragana'?'Hiragana':'Katakana';
  const genGrid = (cat) => k.map((c,i) => {
    if (c.cat !== cat) return '';
    const cls=i===idx?'bg-sakura-500/30 border-sakura-500':'glass border-transparent';
    return`<div class="${cls} rounded px-1.5 py-1 text-center border cursor-pointer text-sm font-jp text-white hover:bg-sakura-500/20 transition-all flex items-center justify-center leading-none min-w-[28px] min-h-[28px]" onclick="writing.index=${i};renderWriting()">${c.char}</div>`;
  }).join('');
  const mainGrid = genGrid('main'), dakutenGrid = genGrid('dakuten');
  const isCombo = cur.char.length > 1;
  const mainFont = isCombo ? 'text-7xl' : 'text-8xl';
  
  const strokeImages = cur.char.split('').map(ch => {
    let hex = ch.charCodeAt(0).toString(16).padStart(5, '0');
    return `<img src="https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg" class="stroke-svg w-full h-full object-contain pointer-events-none">`;
  }).join('');
  const strokeChar = writing.showStroke ? `<div class="absolute inset-0 flex items-center justify-center pointer-events-none p-2 gap-1">${strokeImages}</div>` : '';
  
  const strokeBtn=writing.showStroke?'text-sakura-400':'text-gray-300';
  const strokeLbl=writing.showStroke?'Hide Strokes':'Show Strokes';
  const hOn = writing.type === 'hiragana' ? 'bg-sakura-500 text-white shadow-lg shadow-sakura-500/20' : 'text-gray-400 glass glass-h hover:text-white';
  const kOn = writing.type === 'katakana' ? 'bg-sakura-500 text-white shadow-lg shadow-sakura-500/20' : 'text-gray-400 glass glass-h hover:text-white';
  const toggleHTML = `<div class="flex justify-center gap-3 mb-6"><button onclick="setWritingType('hiragana')" class="px-6 py-2 rounded-full text-sm font-semibold transition-all ${hOn}">Hiragana</button><button onclick="setWritingType('katakana')" class="px-6 py-2 rounded-full text-sm font-semibold transition-all ${kOn}">Katakana</button></div>`;
  $('#writing-content').innerHTML=`
    <div class="text-center mb-6"><p class="text-sm text-gray-500 uppercase tracking-wider mb-1">${lab} \u2014 Writing Practice</p><h2 class="text-3xl font-bold text-white">Practice Writing</h2></div>
    ${toggleHTML}
    <div class="flex flex-col md:flex-row gap-6 items-center justify-center mb-6">
      <div class="glass rounded-2xl p-8 text-center min-w-[200px]"><div class="${mainFont} font-jp text-white mb-2" style="line-height:1">${cur.char}</div><div class="text-xl text-sakura-400 font-semibold">/${cur.romaji}</div><div class="text-sm text-gray-500 mt-2">${idx+1} / ${total}</div></div>
      <div class="relative"><canvas id="draw-canvas" class="draw-canvas glass rounded-2xl" width="300" height="300"></canvas><div class="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"><div class="absolute left-1/2 top-2 bottom-2 border-l border-dashed border-gray-500/30"></div><div class="absolute top-1/2 left-2 right-2 border-t border-dashed border-gray-500/30"></div></div>${strokeChar}</div>
    </div>
    <div class="flex justify-center flex-wrap gap-3 mb-6">
      <button onclick="writing.index=Math.max(0,writing.index-1);renderWriting()" class="glass glass-h rounded-xl px-4 py-2.5 text-gray-300 text-sm font-medium transition-all" ${idx===0?'disabled style="opacity:.4"':''}>\u2190 Prev <span class="text-gray-600 text-[10px] ml-1">[&larr;/A]</span></button>
      <button onclick="clearDrawCanvas()" class="glass glass-h rounded-xl px-4 py-2.5 text-gray-300 text-sm font-medium transition-all">Clear \u2718 <span class="text-gray-600 text-[10px] ml-1">[C]</span></button>
      <button onclick="toggleStroke()" class="glass glass-h rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${strokeBtn}">\ud83d\udcdd ${strokeLbl} <span class="text-gray-600 text-[10px] ml-1">[S]</span></button>
      <button onclick="writing.index=Math.min(writing.kana.length-1,writing.index+1);renderWriting()" class="glass glass-h rounded-xl px-4 py-2.5 text-gray-300 text-sm font-medium transition-all" ${idx===total-1?'disabled style="opacity:.4"':''}>Next \u2192 <span class="text-gray-600 text-[10px] ml-1">[&rarr;/D]</span></button>
    </div>
    <div class="glass rounded-xl p-4 mb-6">
      <h4 class="text-xs font-semibold text-fuji-400 uppercase tracking-wider mb-2">Main Kana</h4>
      <div class="flex flex-wrap gap-1.5 mb-4">${mainGrid}</div>
      <h4 class="text-xs font-semibold text-fuji-400 uppercase tracking-wider mb-2">Dakuten Kana</h4>
      <div class="flex flex-wrap gap-1.5 mb-4">${dakutenGrid}</div>
    </div>
    <div class="text-center"><button onclick="goHome()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 mx-auto transition-all">Home <span class="text-gray-500 text-xs ml-1 font-medium">[Esc]</span></button></div>`;
  setupDrawCanvas();
  document.onkeydown=function(e){
    if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();goHome();}
    if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){e.preventDefault();if(writing.index>0){writing.index--;renderWriting();}}
    if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){e.preventDefault();if(writing.index<writing.kana.length-1){writing.index++;renderWriting();}}
    if(e.key==='Delete'||e.key==='c'||e.key==='C'){e.preventDefault();clearDrawCanvas();}
    if(e.key==='s'||e.key==='S'){e.preventDefault();toggleStroke();}
  };
}
function setupDrawCanvas(){
  const c=$('#draw-canvas');if(!c)return;
  const ctx=c.getContext('2d');
  let draw=false;
  ctx.strokeStyle='#f43f7a';ctx.lineWidth=4;ctx.lineCap='round';ctx.lineJoin='round';
  function pos(e){const r=c.getBoundingClientRect(),t=e.touches?e.touches[0]:e;return[(t.clientX-r.left)*(c.width/r.width),(t.clientY-r.top)*(c.height/r.height)];}
  c.onmousedown=e=>{draw=true;ctx.beginPath();ctx.moveTo(...pos(e));};
  c.onmousemove=e=>{if(draw){ctx.lineTo(...pos(e));ctx.stroke();}};
  c.onmouseup=()=>{draw=false;};c.onmouseleave=()=>{draw=false;};
  c.ontouchstart=e=>{e.preventDefault();draw=true;ctx.beginPath();ctx.moveTo(...pos(e));};
  c.ontouchmove=e=>{e.preventDefault();if(draw){ctx.lineTo(...pos(e));ctx.stroke();}};
  c.ontouchend=()=>{draw=false;};
}
function clearDrawCanvas(){
  const c=$('#draw-canvas');if(!c)return;
  c.getContext('2d').clearRect(0,0,c.width,c.height);
}

// ── Theme ──
function setTheme(t){
  document.body.classList.remove('theme-light','theme-minimal');
  if(t!=='dark')document.body.classList.add('theme-'+t);
  localStorage.setItem('kana-theme',t);
}

// ── Modals ──
let _modalKeyHandler=null;
function showModal(id){
  $(`#${id}`).classList.remove('hidden');
  if(_modalKeyHandler)document.removeEventListener('keydown',_modalKeyHandler);
  _modalKeyHandler=function(e){
    if(e.key==='Escape'){e.preventDefault();hideModal(id);}
    if(e.key==='Enter'||e.key===' '||e.code==='NumpadEnter'){
      e.preventDefault();
      if(id==='modal-home')goHome();
      else if(id==='modal-incomplete')showResults();
    }
  };
  document.addEventListener('keydown',_modalKeyHandler);
}
function hideModal(id){
  $(`#${id}`).classList.add('hidden');
  if(_modalKeyHandler){document.removeEventListener('keydown',_modalKeyHandler);_modalKeyHandler=null;}
}

// ── Init ──
document.addEventListener('DOMContentLoaded',()=>{
  renderKanaRows();updateSelectionUI();selectQuizMode('type');
  document.onkeydown=homeKeyHandler;
  // Preload speech voices
  if(window.speechSynthesis){window.speechSynthesis.getVoices();window.speechSynthesis.onvoiceschanged=()=>window.speechSynthesis.getVoices();}
  let saved=localStorage.getItem('kana-theme');
  if(!saved) { saved = 'minimal'; localStorage.setItem('kana-theme', saved); }
  setTheme(saved);
  const ts=$('#theme-selector');if(ts)ts.value=saved;
  $('#font-selector').addEventListener('change',e=>setFont(e.target.value));
  $('#theme-selector').addEventListener('change',e=>setTheme(e.target.value));
  $('#btn-hiragana').addEventListener('click',()=>setKanaType('hiragana'));
  $('#btn-katakana').addEventListener('click',()=>setKanaType('katakana'));
  $('#btn-all-kana').addEventListener('click',toggleAllKana);
  $('#btn-all-main').addEventListener('click',()=>toggleAllColumn('main'));
  $('#btn-all-dakuten').addEventListener('click',()=>toggleAllColumn('dakuten'));
  $('#btn-all-combination').addEventListener('click',()=>toggleAllColumn('combination'));
  $('#btn-start-quiz').addEventListener('click',()=>showPage('page-quiz-mode'));
  $('#btn-sheet').addEventListener('click', showSheet);
  $('#btn-sheet-hiragana').addEventListener('click',()=>setSheetType('hiragana'));
  $('#btn-sheet-katakana').addEventListener('click',()=>setSheetType('katakana'));
  $('#mode-type').addEventListener('click',()=>selectQuizMode('type'));
  $('#mode-choose').addEventListener('click',()=>selectQuizMode('choose'));
  $('#mode-flashcard').addEventListener('click',()=>selectQuizMode('flashcard'));
  $('#btn-begin-quiz').addEventListener('click',beginQuiz);
  $('#modal-home-cancel').addEventListener('click',()=>hideModal('modal-home'));
  $('#modal-home-confirm').addEventListener('click',goHome);
  $('#modal-incomplete-continue').addEventListener('click',()=>hideModal('modal-incomplete'));
  $('#modal-incomplete-view').addEventListener('click',showResults);
  $('#btn-writing').addEventListener('click',startWritingPractice);
  $('#btn-number').addEventListener('click',showNumberMenu);
});

// ── Flashcard Mode ──
function beginFlashcard(sel){
  const cards=shuffle(sel);
  state.fc.cards=cards;state.fc.index=0;state.fc.flipped=false;
  showPage('page-flashcard');
  renderFlashcard();
}
function getFlashcardSide(item){
  const dir=state.flashcardDir;
  if(dir==='kana') return {front:{label:'Kana',text:item.char,cls:'text-7xl font-jp'},back:{label:'Romaji',text:item.romaji,cls:'text-4xl font-bold'}};
  if(dir==='romaji') return {front:{label:'Romaji',text:item.romaji,cls:'text-4xl font-bold'},back:{label:'Kana',text:item.char,cls:'text-7xl font-jp'}};
  // random per card
  const showKana=Math.random()<0.5;
  if(showKana) return {front:{label:'Kana',text:item.char,cls:'text-7xl font-jp'},back:{label:'Romaji',text:item.romaji,cls:'text-4xl font-bold'}};
  return {front:{label:'Romaji',text:item.romaji,cls:'text-4xl font-bold'},back:{label:'Kana',text:item.char,cls:'text-7xl font-jp'}};
}
function renderFlashcard(){
  const fc=state.fc,cards=fc.cards,idx=fc.index,total=cards.length;
  if(idx>=total){$('#flashcard-content').innerHTML=`<div class="text-center py-16"><div class="text-6xl mb-4">🎴</div><h2 class="text-3xl font-bold grad-text mb-2">All Cards Reviewed!</h2><p class="text-gray-400 mb-4">${total} cards completed</p><div class="flex flex-col sm:flex-row justify-center gap-4"><button onclick="state.fc.index=0;state.fc.flipped=false;state.fc.cards=shuffle(state.fc.cards);renderFlashcard()" class="btn-s rounded-xl px-8 py-3.5 text-white font-bold text-sm shadow-lg shadow-fuji-500/20 transition-all">Shuffle & Restart ⟲</button><button onclick="goHome()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm transition-all">Home <span class="text-gray-500 text-xs ml-1">[Esc]</span></button></div></div>`;document.onkeydown=function(e){if(e.key==='Escape'){e.preventDefault();goHome();}if(e.key==='Enter'){e.preventDefault();state.fc.index=0;state.fc.flipped=false;state.fc.cards=shuffle(state.fc.cards);renderFlashcard();}};return;}
  const item=cards[idx];
  const side=getFlashcardSide(item);
  const pct=total?(idx/total*100):0;
  const lab=state.kanaType==='hiragana'?'Hiragana':'Katakana';
  const dirLabel=state.flashcardDir==='kana'?'Kana → Romaji':state.flashcardDir==='romaji'?'Romaji → Kana':'Random';
  fc.flipped=false;
  $('#flashcard-content').innerHTML=`
    <div class="text-center mb-2"><p class="text-xs text-gray-500 uppercase tracking-wider mb-1">${lab} — Flashcard · ${dirLabel}</p><h2 class="text-2xl font-bold text-white">Flashcard</h2></div>
    <div class="max-w-md mx-auto my-4"><div class="flex justify-between text-xs text-gray-500 mb-1"><span>Card ${idx+1} of ${total}</span><span>${Math.round(pct)}%</span></div><div class="w-full bg-dark-700 rounded-full h-2"><div class="bg-gradient-to-r from-sakura-500 to-fuji-500 h-2 rounded-full transition-all duration-300" style="width:${pct}%"></div></div></div>
    <div class="fc-scene flex justify-center my-10" id="fc-scene">
      <div class="fc-card" id="fc-card" onclick="flipCard()">
        <div class="fc-face glass border border-white/10 shadow-2xl">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-3">${side.front.label}</p>
          <div class="${side.front.cls} text-white mb-3" style="line-height:1">${side.front.text}</div>
          <p class="text-xs text-gray-600 mt-2">Click or press Space to flip</p>
        </div>
        <div class="fc-face fc-back glass border border-sakura-500/30 shadow-2xl shadow-sakura-500/10">
          <p class="text-xs text-sakura-400 uppercase tracking-wider mb-3">${side.back.label}</p>
          <div class="${side.back.cls} text-white mb-3" style="line-height:1">${side.back.text}</div>
          <p class="text-xs text-gray-500 mt-2">→ Next card</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center flex-wrap gap-3 mb-6">
      <button onclick="fcPrev()" class="glass glass-h rounded-xl px-5 py-2.5 text-gray-300 text-sm font-medium transition-all" ${idx===0?'disabled style="opacity:.4"':''}>← Prev <span class="text-gray-600 text-[10px] ml-1">[←/A]</span></button>
      <button onclick="flipCard()" class="glass glass-h rounded-xl px-5 py-2.5 text-gray-300 text-sm font-medium transition-all">Flip ⟲ <span class="text-gray-600 text-[10px] ml-1">[Space]</span></button>
      <button onclick="fcNext()" class="glass glass-h rounded-xl px-5 py-2.5 text-gray-300 text-sm font-medium transition-all">Next → <span class="text-gray-600 text-[10px] ml-1">[→/D]</span></button>
    </div>
    <div class="text-center"><button onclick="goHome()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 mx-auto transition-all">Home <span class="text-gray-500 text-xs ml-1 font-medium">[Esc]</span></button></div>`;
  document.onkeydown=handleFlashcardKey;
}
function flipCard(){
  const card=$('#fc-card');if(!card)return;
  state.fc.flipped=!state.fc.flipped;
  card.classList.toggle('flipped',state.fc.flipped);
}
function fcPrev(){if(state.fc.index>0){state.fc.index--;state.fc.flipped=false;renderFlashcard();}}
function fcNext(){state.fc.index++;state.fc.flipped=false;renderFlashcard();}
function handleFlashcardKey(e){
  if(!$('#modal-home').classList.contains('hidden'))return;
  if(e.key==='Escape'){e.preventDefault();goHome();return;}
  if(e.key===' '||e.code==='Space'){e.preventDefault();flipCard();return;}
  if(e.key==='Enter'||e.code==='NumpadEnter'){e.preventDefault();if(state.fc.flipped)fcNext();else flipCard();return;}
  if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){e.preventDefault();fcNext();return;}
  if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){e.preventDefault();fcPrev();return;}
}

// ── Number Learning ──
const NUMBER_CATEGORIES = [
  { id: 'natural', emoji: '🔢', title: '数字', titleEn: 'Natural Numbers', desc: 'Numbers 0 ~ 100,000' },
  { id: 'hour', emoji: '🕐', title: '時間', titleEn: 'Hours / Minutes / Seconds', desc: 'Counting hours, minutes, seconds', coming: true },
  { id: 'weekday', emoji: '📅', title: '曜日', titleEn: 'Days of Week', desc: 'Days of the week' },
  { id: 'day', emoji: '📆', title: '日', titleEn: 'Days of Month', desc: 'Days in a month', coming: true },
  { id: 'month', emoji: '🗓️', title: '月', titleEn: 'Months', desc: 'Months of the year', coming: true },
  { id: 'year', emoji: '📊', title: '年', titleEn: 'Years', desc: 'Counting years', coming: true },
  { id: 'floor', emoji: '🏢', title: '階', titleEn: 'Floors', desc: 'Building floors', coming: true },
  { id: 'general', emoji: '📦', title: 'つ', titleEn: 'General Objects', desc: 'Generic object counter', coming: true },
  { id: 'book', emoji: '📚', title: '冊', titleEn: 'Books / Magazines', desc: 'Books, magazines, volumes', coming: true },
  { id: 'flat', emoji: '👕', title: '枚', titleEn: 'Flat / Thin Objects', desc: 'Paper, shirts, flat items', coming: true },
  { id: 'cup', emoji: '🥤', title: '杯', titleEn: 'Cups / Glasses', desc: 'Cups and glasses of liquid', coming: true },
  { id: 'long', emoji: '🖊️', title: '本', titleEn: 'Long Objects', desc: 'Pens, bottles, long items', coming: true },
  { id: 'times', emoji: '🔄', title: '回', titleEn: 'Times / Occurrences', desc: 'Number of times', coming: true },
];

// Helper: style "/" separators with a muted color for readability
function formatSlash(text, cssClass) {
  return text.replace(/\//g, `<span class="${cssClass}">/</span>`);
}

// Natural Numbers Data: [number, kanji, hiragana, romaji, highlight]
// highlight = true for irregular readings / special notes
const NATURAL_NUMBERS = {
  basic: [
    [0, '零/〇', 'れい/ゼロ', 'rei / zero', true],
    [1, '一', 'いち', 'ichi', false],
    [2, '二', 'に', 'ni', false],
    [3, '三', 'さん', 'san', false],
    [4, '四', 'し/よん', 'shi / yon', true],
    [5, '五', 'ご', 'go', false],
    [6, '六', 'ろく', 'roku', false],
    [7, '七', 'しち/なな', 'shichi / nana', true],
    [8, '八', 'はち', 'hachi', false],
    [9, '九', 'く/きゅう', 'ku / kyū', true],
    [10, '十', 'じゅう', 'jū', false],
    [11, '十一', 'じゅういち', 'jū ichi', false],
    [12, '十二', 'じゅうに', 'jū ni', false],
    [13, '十三', 'じゅうさん', 'jū san', false],
    [14, '十四', 'じゅうし/じゅうよん', 'jū shi / jū yon', true],
    [15, '十五', 'じゅうご', 'jū go', false],
    [16, '十六', 'じゅうろく', 'jū roku', false],
    [17, '十七', 'じゅうしち/じゅうなな', 'jū shichi / jū nana', true],
    [18, '十八', 'じゅうはち', 'jū hachi', false],
    [19, '十九', 'じゅうく/じゅうきゅう', 'jū ku / jū kyū', true],
    [20, '二十', 'にじゅう', 'ni jū', false],
  ],
  hundreds: [
    [100, '百', 'ひゃく', 'hyaku', false],
    [200, '二百', 'にひゃく', 'ni hyaku', false],
    [300, '三百', 'さんびゃく', 'sanbyaku', true],
    [400, '四百', 'よんひゃく', 'yon hyaku', false],
    [500, '五百', 'ごひゃく', 'go hyaku', false],
    [600, '六百', 'ろっぴゃく', 'roppyaku', true],
    [700, '七百', 'ななひゃく', 'nana hyaku', false],
    [800, '八百', 'はっぴゃく', 'happyaku', true],
    [900, '九百', 'きゅうひゃく', 'kyū hyaku', false],
  ],
  thousands: [
    [1000, '千', 'せん', 'sen', false],
    [2000, '二千', 'にせん', 'ni sen', false],
    [3000, '三千', 'さんぜん', 'sanzen', true],
    [4000, '四千', 'よんせん', 'yon sen', false],
    [5000, '五千', 'ごせん', 'go sen', false],
    [6000, '六千', 'ろくせん', 'roku sen', false],
    [7000, '七千', 'ななせん', 'nana sen', false],
    [8000, '八千', 'はっせん', 'hassen', true],
    [9000, '九千', 'きゅうせん', 'kyū sen', false],
  ],
  large: [
    [10000, '一万', 'いちまん', 'ichiman', false],
    [100000, '十万', 'じゅうまん', 'jūman', false],
  ],
};

function showNumberMenu() {
  showPage('page-number-menu');
  renderNumberMenu();
  document.onkeydown = function(e) {
    if (e.key === 'Escape' || e.key === 'Backspace') { e.preventDefault(); goHome(); }
  };
}

function renderNumberMenu() {
  const grid = $('#number-menu-grid');
  grid.innerHTML = NUMBER_CATEGORIES.map(cat => {
    const coming = cat.coming ? ' opacity-60 pointer-events-none' : '';
    const badge = cat.coming ? `<span class="absolute top-2 right-2 text-[10px] bg-gray-500/20 text-gray-400 rounded-full px-2 py-0.5">Coming Soon</span>` : '';
    return `
      <div class="num-cat-btn glass glass-h rounded-2xl p-5 cursor-pointer relative${coming}" onclick="${cat.coming ? '' : `showNumberDetail('${cat.id}')`}">
        ${badge}
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sakura-500/15 to-fuji-500/15 border border-sakura-500/20 flex items-center justify-center mb-3">
          <span class="text-2xl">${cat.emoji}</span>
        </div>
        <h3 class="text-white font-semibold mb-0.5">
          <span class="font-jp text-lg">${cat.title}</span>
          <span class="text-sm text-gray-300 ml-1">${cat.titleEn}</span>
        </h3>
        <p class="text-gray-500 text-xs">${cat.desc}</p>
      </div>`;
  }).join('');
}

function showNumberDetail(catId) {
  showPage('page-number-detail');
  document.onkeydown = function(e) {
    if (e.key === 'Escape' || e.key === 'Backspace') { e.preventDefault(); showNumberMenu(); }
  };
  if (catId === 'natural') renderNaturalNumbers();
  else if (catId === 'weekday') renderWeekdays();
}

function renderNaturalNumbers() {
  const renderSection = (title, data, note) => {
    let html = `<div class="mb-8">`;
    html += `<h3 class="text-sm font-semibold text-fuji-400 tracking-wider uppercase mb-1">${title}</h3>`;
    if (note) html += `<p class="text-xs text-gray-500 mb-3">${note}</p>`;
    html += `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">`;
    data.forEach(([num, kanji, hira, roma, hl]) => {
      const hlClass = hl ? 'num-highlight' : '';
      const badge = hl ? `<div class="absolute top-1.5 right-1.5"><span class="inline-block w-2 h-2 rounded-full bg-sakura-400 animate-pulse"></span></div>` : '';
      html += `
        <div class="num-card glass rounded-xl p-4 text-center border border-transparent relative ${hlClass}">
          ${badge}
          <div class="text-xs text-gray-500 mb-1 font-mono">${num.toLocaleString()}</div>
          <div class="num-kanji text-3xl font-jp text-white mb-2 leading-tight">${formatSlash(kanji, 'text-gray-600 text-xl')}</div>
          <div class="text-sm font-jp text-sakura-300 mb-1">${formatSlash(hira, 'text-gray-600 text-xs')}</div>
          <div class="text-xs text-gray-400">${formatSlash(roma, 'text-gray-600')}</div>
        </div>`;
    });
    html += `</div></div>`;
    return html;
  };

  const legendHTML = `
    <div class="glass rounded-xl p-5 mb-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="inline-block w-3 h-3 rounded-full bg-sakura-400 animate-pulse"></span>
        <span class="text-sm font-semibold text-white">Irregular Readings & Sound Changes</span>
      </div>
      <div class="space-y-2 text-xs">
        <div class="flex items-start gap-2">
          <span class="text-sakura-400 mt-0.5">●</span>
          <span class="text-gray-300"><strong class="text-white">Two readings:</strong> 4 (<span class="font-jp">し</span> / <span class="font-jp">よん</span>), 7 (<span class="font-jp">しち</span> / <span class="font-jp">なな</span>), 9 (<span class="font-jp">く</span> / <span class="font-jp">きゅう</span>) — usage depends on context</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-sakura-400 mt-0.5">●</span>
          <span class="text-gray-300"><strong class="text-white">Hundreds:</strong> 300, 600, 800 have sound changes — <span class="font-jp">ひゃく</span> → <span class="font-jp text-sakura-300">びゃく</span> / <span class="font-jp text-sakura-300">ぴゃく</span></span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-sakura-400 mt-0.5">●</span>
          <span class="text-gray-300"><strong class="text-white">Thousands:</strong> 3000, 8000 have sound changes — <span class="font-jp">せん</span> → <span class="font-jp text-sakura-300">ぜん</span> / <span class="font-jp text-sakura-300">っせん</span></span>
        </div>
      </div>
    </div>`;

  $('#number-detail-content').innerHTML = `
    <div class="text-center mb-6">
      <p class="text-sakura-400 text-sm tracking-[.3em] uppercase mb-2">数字</p>
      <h2 class="text-3xl font-bold grad-text mb-2">Natural Numbers</h2>
      <p class="text-gray-400 text-sm">Japanese natural numbers at a glance</p>
    </div>
    ${legendHTML}
    ${renderSection('0 〜 20 — Basics', NATURAL_NUMBERS.basic, 'Numbers 4, 7, 9 have two possible readings — usage depends on context')}
    ${renderSection('100 〜 900 — Hundreds (百)', NATURAL_NUMBERS.hundreds, '300 (sanbyaku), 600 (roppyaku), 800 (happyaku) have irregular sound changes')}
    ${renderSection('1,000 〜 9,000 — Thousands (千)', NATURAL_NUMBERS.thousands, '3000 (sanzen), 8000 (hassen) have irregular sound changes')}
    ${renderSection('10,000+ — Large Numbers (万)', NATURAL_NUMBERS.large, 'Japanese counts in units of 万 (man = 10,000) instead of thousands like in English')}
    <div class="text-center mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
      <button onclick="showNumberMenu()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 transition-all">← Back <span class="text-gray-500 text-xs ml-1 font-medium">[Esc]</span></button>
      <button onclick="goHome()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 transition-all">Home</button>
    </div>`;
}

// ── Days of Week ──
// [kanji, hiragana, romaji, abbreviation, meaning, color]
const WEEKDAYS = [
  ['月曜日', 'げつようび', 'getsuyōbi', '月', 'Moon (Monday)', '#94a3b8'],
  ['火曜日', 'かようび', 'kayōbi', '火', 'Fire (Tuesday)', '#f87171'],
  ['水曜日', 'すいようび', 'suiyōbi', '水', 'Water (Wednesday)', '#60a5fa'],
  ['木曜日', 'もくようび', 'mokuyōbi', '木', 'Wood (Thursday)', '#4ade80'],
  ['金曜日', 'きんようび', 'kin\'yōbi', '金', 'Gold (Friday)', '#fbbf24'],
  ['土曜日', 'どようび', 'doyōbi', '土', 'Earth (Saturday)', '#a78bfa'],
  ['日曜日', 'にちようび', 'nichiyōbi', '日', 'Sun (Sunday)', '#fb923c'],
];

const WEEKDAY_QUESTION = ['何曜日', 'なんようび', 'nan\'yōbi', '?', 'What day?', '#f43f7a'];

function renderWeekdays() {
  let cardsHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">`;

  WEEKDAYS.forEach(([kanji, hira, roma, abbr, meaning, color]) => {
    cardsHTML += `
      <div class="num-card glass rounded-xl p-5 border border-transparent relative">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-2xl font-jp font-bold" style="background:${color}15;border:1px solid ${color}30;color:${color}">${abbr}</div>
          <div>
            <div class="text-xs text-gray-500">${meaning}</div>
          </div>
        </div>
        <div class="num-kanji text-3xl font-jp text-white mb-2 leading-tight">${kanji}</div>
        <div class="text-sm font-jp text-sakura-300 mb-1">${hira}</div>
        <div class="text-xs text-gray-400">${roma}</div>
      </div>`;
  });

  // Question card
  const [qKanji, qHira, qRoma, qAbbr, qMeaning, qColor] = WEEKDAY_QUESTION;
  cardsHTML += `
    <div class="num-card glass rounded-xl p-5 border border-transparent relative num-highlight">
      <div class="absolute top-1.5 right-1.5"><span class="inline-block w-2 h-2 rounded-full bg-sakura-400 animate-pulse"></span></div>
      <div class="flex items-center gap-3 mb-3">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-2xl font-bold" style="background:${qColor}15;border:1px solid ${qColor}30;color:${qColor}">${qAbbr}</div>
        <div>
          <div class="text-xs text-gray-500">${qMeaning}</div>
        </div>
      </div>
      <div class="num-kanji text-3xl font-jp text-white mb-2 leading-tight">${qKanji}</div>
      <div class="text-sm font-jp text-sakura-300 mb-1">${qHira}</div>
      <div class="text-xs text-gray-400">${qRoma}</div>
    </div>`;
  cardsHTML += `</div>`;

  const legendHTML = `
    <div class="glass rounded-xl p-5 mb-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-sm font-semibold text-white">📝 Notes</span>
      </div>
      <div class="space-y-2 text-xs">
        <div class="flex items-start gap-2">
          <span class="text-sakura-400 mt-0.5">●</span>
          <span class="text-gray-300"><strong class="text-white">Pattern:</strong> Each day is named after a natural element + <span class="font-jp">曜日</span> (<span class="text-gray-400">yōbi</span>)</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-sakura-400 mt-0.5">●</span>
          <span class="text-gray-300"><strong class="text-white">Abbreviation:</strong> In calendars, only the first kanji is used — e.g. <span class="font-jp">月</span> for Monday, <span class="font-jp">火</span> for Tuesday</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-sakura-400 mt-0.5">●</span>
          <span class="text-gray-300"><strong class="text-white">Asking:</strong> <span class="font-jp text-sakura-300">何曜日ですか？</span> (nan'yōbi desu ka?) = "What day is it?"</span>
        </div>
      </div>
    </div>`;

  // Structure breakdown
  const structureHTML = `
    <div class="mb-8">
      <h3 class="text-sm font-semibold text-fuji-400 tracking-wider uppercase mb-3">Structure Breakdown</h3>
      <div class="glass rounded-xl overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-white/10">
              <th class="text-left px-4 py-3 text-gray-400 font-medium text-xs uppercase tracking-wider">Element</th>
              <th class="text-center px-4 py-3 text-gray-400 font-medium text-xs uppercase tracking-wider">Kanji</th>
              <th class="text-center px-4 py-3 text-gray-400 font-medium text-xs uppercase tracking-wider">Reading</th>
              <th class="text-left px-4 py-3 text-gray-400 font-medium text-xs uppercase tracking-wider">Meaning</th>
            </tr>
          </thead>
          <tbody>
            ${WEEKDAYS.map(([kanji, hira, roma, abbr, meaning, color]) => `
              <tr class="border-b border-white/5 hover:bg-white/[.02] transition-colors">
                <td class="px-4 py-3"><span class="font-jp text-lg" style="color:${color}">${abbr}</span> <span class="text-gray-500 text-xs">${meaning.split(' ')[0]}</span></td>
                <td class="px-4 py-3 text-center"><span class="font-jp text-white text-lg">${kanji}</span></td>
                <td class="px-4 py-3 text-center"><span class="font-jp text-sakura-300">${hira}</span></td>
                <td class="px-4 py-3 text-gray-400">${roma}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  $('#number-detail-content').innerHTML = `
    <div class="text-center mb-6">
      <p class="text-sakura-400 text-sm tracking-[.3em] uppercase mb-2">曜日</p>
      <h2 class="text-3xl font-bold grad-text mb-2">Days of the Week</h2>
      <p class="text-gray-400 text-sm">Each day is named after a natural element</p>
    </div>
    ${legendHTML}
    <h3 class="text-sm font-semibold text-fuji-400 tracking-wider uppercase mb-3">All Days</h3>
    ${cardsHTML}
    ${structureHTML}
    <div class="text-center mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
      <button onclick="showNumberMenu()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 transition-all">← Back <span class="text-gray-500 text-xs ml-1 font-medium">[Esc]</span></button>
      <button onclick="goHome()" class="glass glass-h rounded-xl px-6 py-3.5 text-gray-300 font-medium text-sm flex items-center justify-center gap-2 transition-all">Home</button>
    </div>`;
}
