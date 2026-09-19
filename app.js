const modal=document.getElementById('questModal');
function openQuest(){modal.classList.add('show')}
function closeQuest(){modal.classList.remove('show')}
function submitThought(){
  const text=document.getElementById('synthesis').value.trim();
  const saved=document.getElementById('saved');
  if(text.length<30){saved.textContent="Give yourself a little more room to explain the idea.";return}
  saved.textContent="Saved. Your thinking is now part of your Knowledge Tree.";
  setTimeout(closeQuest,1200);
}
function openTree(name){
  document.getElementById('toast').textContent=`Opening ${name} knowledge tree…`;
  document.getElementById('toast').classList.add('show');
  setTimeout(()=>document.getElementById('toast').classList.remove('show'),1800);
}
function openSandbox(){
  document.getElementById('toast').textContent="Sandbox prototype: map a problem → cause → leverage point → result.";
  document.getElementById('toast').classList.add('show');
  setTimeout(()=>document.getElementById('toast').classList.remove('show'),2500);
}
window.addEventListener('click',e=>{if(e.target===modal)closeQuest()});
