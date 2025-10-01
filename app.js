
// Minimal, CSP-safe quiz
console.log("Quiz app booted");
const QUESTION_POOL = [{"q": "What makes Linera different from most blockchains?", "a": ["It gives each user/app their own microchain", "It relies on a single global mempool", "It only runs as a Layer 2"], "c": 0}, {"q": "In simple words, what is a microchain?", "a": ["Your own mini‑blockchain for your app or account", "A random shard of another network", "A sidechain bridge"], "c": 0}, {"q": "Why do microchains help AI agents?", "a": ["They avoid shared queues so agents don’t block each other", "They run models on‑chain", "They remove fees entirely"], "c": 0}, {"q": "What experience does Linera aim to deliver for users?", "a": ["Real‑time, snappy interactions", "Batch settlements once a day", "Minutes‑long confirmation times"], "c": 0}, {"q": "What does 'elastic validator scaling' mean for users?", "a": ["The network adds capacity when apps get busy", "Validators change the token price", "Users must select validators manually"], "c": 0}, {"q": "Which testnet name is associated with the Game of Life theme?", "a": ["Conway", "Archimedes", "Ada"], "c": 0}, {"q": "Why is the testnet called 'Conway'?", "a": ["After John Horton Conway, whose simple rules create complex behavior", "After the city where it launched", "After a consensus algorithm"], "c": 0}, {"q": "What’s the big idea behind Linera’s architecture?", "a": ["Many small chains that talk only when needed", "One huge chain shared by everyone", "Only off‑chain databases"], "c": 0}, {"q": "How does Linera keep one busy app from slowing down others?", "a": ["Isolated execution per microchain", "Higher gas fees for all", "Longer block times"], "c": 0}, {"q": "What does 'sub‑second latency' feel like to a user?", "a": ["App actions feel immediate", "You wait for several minutes", "You need to refresh the page"], "c": 0}, {"q": "For DeFi users, why does predictable speed matter?", "a": ["Trades and liquidations trigger when they should", "It’s only cosmetic", "It makes price charts brighter"], "c": 0}, {"q": "For games, why are microchains useful?", "a": ["Burst traffic won’t jam other players or apps", "They disable multiplayer features", "They require mining GPUs"], "c": 0}, {"q": "What does a Linera wallet sign by design?", "a": ["Blocks for your microchain", "Only off‑chain messages", "NFT images"], "c": 0}, {"q": "Long‑term, how should everyday users manage their wallet?", "a": ["Through a browser extension", "Only in terminal windows", "By sending emails"], "c": 0}, {"q": "What’s the 'agentic web' in this context?", "a": ["Humans + AI agents acting in real time", "A private social network", "Another word for cloud hosting"], "c": 0}, {"q": "Why do traditional blockchains struggle with AI agents?", "a": ["Agents create thousands of small actions that clog shared queues", "Agents can’t hold keys", "Agents dislike cryptography"], "c": 0}, {"q": "How do microchains communicate when needed?", "a": ["By passing certified messages", "Through screenshots", "By copying entire databases"], "c": 0}, {"q": "What happens when one microchain gets very busy?", "a": ["Validators can scale to handle it", "All chains slow down equally", "The network pauses"], "c": 0}, {"q": "What’s a simple benefit users notice first?", "a": ["Smooth, consistent interactions", "Mining rewards increase", "No more passwords"], "c": 0}, {"q": "Linera’s roadmap names are inspired by:", "a": ["Mathematicians and computing pioneers", "Popular cities", "Constellation names only"], "c": 0}, {"q": "Which phase focuses on developer experience?", "a": ["Babbage", "Maxwell", "Ada"], "c": 0}, {"q": "Which phase focuses on elastic scaling?", "a": ["Maxwell", "Archimedes", "Babbage"], "c": 0}, {"q": "Which phase brings governance & decentralization?", "a": ["Ada", "Babbage", "Conway"], "c": 0}, {"q": "Which early phase laid protocol foundations?", "a": ["Archimedes", "Maxwell", "Ada"], "c": 0}, {"q": "What’s a quick way to describe Linera to friends?", "a": ["Personal chains that scale like cloud apps", "A meme coin network", "A mining pool"], "c": 0}, {"q": "What’s the point of Linera’s points in testnet?", "a": ["Make learning and testing more engaging", "Only reward GPU miners", "Hide fees"], "c": 0}, {"q": "How does Linera help social/coordination apps?", "a": ["Keeps messages fast without global congestion", "Requires weekly maintenance", "Forces global ordering of every like"], "c": 0}, {"q": "What kind of wallets can connect during Conway demos?", "a": ["Popular wallets via integrations (e.g., MetaMask, Phantom, Coinbase)", "Only a custom desktop wallet", "Paper wallets only"], "c": 0}, {"q": "If an agent manages your account on Linera, what’s reassuring?", "a": ["You still approve actions through your wallet", "The agent needs your seed phrase", "Everything runs on a public server"], "c": 0}, {"q": "What’s special about Linera’s approach to messages between chains?", "a": ["They’re certified, so receivers can verify them", "They’re anonymous gossip only", "They require a centralized relay"], "c": 0}, {"q": "When people say 'real‑time blockchain' here, they mean:", "a": ["Interactive apps respond almost instantly", "Blocks are produced once a day", "Only streaming video is supported"], "c": 0}, {"q": "For new users, fees on Linera aim to be:", "a": ["Predictable and reasonable", "Randomly spiking", "Paid in physical cash"], "c": 0}, {"q": "Linera’s design is most similar to what in Web2?", "a": ["Cloud‑style horizontal scaling", "Single‑threaded desktop apps", "Dial‑up modems"], "c": 0}, {"q": "Why is isolation important for fairness?", "a": ["Heavy usage in one app doesn’t punish others", "It increases speculation", "It hides prices"], "c": 0}, {"q": "What does 'end‑to‑end under a second' imply?", "a": ["User presses a button and sees a confirmed result quickly", "Only validators benefit", "It requires special hardware at home"], "c": 0}, {"q": "What’s a good use case beyond DeFi and games?", "a": ["Agent scheduling & on‑chain coordination", "DVD rentals", "Offline mailing lists"], "c": 0}, {"q": "How does Linera handle sudden surges (e.g., mints or events)?", "a": ["Elastic capacity per chain absorbs spikes", "It bans new users", "It slows the whole network"], "c": 0}, {"q": "What’s the vibe of Linera’s branding?", "a": ["Minimal, geometric, red‑and‑white", "Neon gradients and mascots", "Hand‑drawn pastel doodles"], "c": 0}, {"q": "What’s the advantage of 'talk only when needed' between chains?", "a": ["Lower overhead and faster local actions", "More spam by default", "Hard forks every week"], "c": 0}, {"q": "Why might creators like microchains?", "a": ["They get dedicated state & logic for their app", "They can’t launch tokens", "They must share configs globally"], "c": 0}, {"q": "For users joining testnet, what’s typically encouraged?", "a": ["Try demo apps, share feedback, join weekly prompts", "Run a mining rig", "Send random large transactions"], "c": 0}, {"q": "Who founded Linera?", "a": ["Mathieu Baudet, PhD", "Vitalik Buterin", "Gavin Wood"], "c": 0}, {"q": "Which investor backed Linera early?", "a": ["a16z crypto", "Sequoia China only", "No investors"], "c": 0}, {"q": "What’s a simple description of certified messages for users?", "a": ["Receipts that prove a message is valid", "Private DMs", "Coupons for gas"], "c": 0}, {"q": "If your app is 'bursty', what happens on Linera?", "a": ["Your chain handles it without jamming others", "Everyone’s fees go up together", "You must pause the app"], "c": 0}, {"q": "How does Linera relate to the 'AI era'?", "a": ["It’s designed so human + AI activity can run smoothly", "It replaces all AI models", "It bans automation"], "c": 0}, {"q": "What’s a common community hashtag for Conway boards?", "a": ["#MyConwayBoard", "#OnlyLayer2", "#GasFeesFTW"], "c": 0}, {"q": "What kind of real‑world events does Linera sometimes sponsor?", "a": ["Music/tech festivals with demos", "Only finance conferences", "Private invite‑only dinners"], "c": 0}, {"q": "At events, what was a playful perk seen at Linera Court?", "a": ["Retro swag and free snow‑cones", "On‑site GPU mining", "Paid parking vouchers"], "c": 0}, {"q": "What’s the main promise to everyday users?", "a": ["Fast, reliable apps that don’t get stuck in traffic", "Guaranteed price increases", "No need for wallets anymore"], "c": 0}, {"q": "How should builders think about Linera apps?", "a": ["Like cloud apps with on‑chain guarantees", "Like static websites only", "Like offline spreadsheets"], "c": 0}];
const TOTAL = 20, POINTS = 5;
const $ = id => document.getElementById(id);
const shuffle = arr => { for (let i=arr.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; };
const esc = s => String(s).replace(/[&<>"'`=\\/]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;','\\':'&#x5C;'}[m]));

let set = [], idx = 0, score = 0, log = [];

function pickSet() { const pool=[...QUESTION_POOL]; shuffle(pool); return pool.slice(0,TOTAL).map(q => ({ q: q.q, answers: shuffle(q.a.map((t,i)=>({t, ok:i===q.c}))) })); }

function start() {
  set = pickSet(); idx = 0; score = 0; log = [];
  $('welcome').classList.add('hidden');
  $('result').classList.add('hidden');
  $('quiz').classList.remove('hidden');
  render();
}

function render(){
  const item = set[idx];
  $('question').textContent = item.q;
  const a = $('answers'); a.innerHTML = '';
  item.answers.forEach(opt => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = opt.t;
    b.addEventListener('click', () => answer(opt.ok, opt.t, item.answers.find(x=>x.ok).t));
    a.appendChild(b);
  });
  $('progress').textContent = `Question ${idx+1} / ${TOTAL}`;
  $('scoreSoFar').textContent = `Score: ${score}/${TOTAL*POINTS}`;
}

function answer(ok, chosen, correct){
  if (ok) score += POINTS;
  log.push({q:set[idx].q, chosen, correct, ok});
  idx++;
  if (idx < TOTAL) render(); else finish();
}

function finish(){
  $('quiz').classList.add('hidden');
  $('result').classList.remove('hidden');
  $('finalScore').textContent = `${score} / ${TOTAL*POINTS}`;
  const pct = Math.round((score/(TOTAL*POINTS))*100);
  $('summary').textContent = `You answered ${score/POINTS} of ${TOTAL} correctly (${pct}%).`;
  const list = $('reviewList'); list.innerHTML = '';
  log.forEach((row,i)=>{
    const div = document.createElement('div');
    div.className = 'rev-item';
    div.innerHTML = `<div class="rev-q">${i+1}. ${esc(row.q)}</div>
                     <div class="rev-a ${row.ok?'correct':'wrong'}">Your answer: ${esc(row.chosen)}</div>
                     <div class="rev-a correct">Correct answer: ${esc(row.correct)}</div>`;
    list.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = $('startBtn');
  const restartBtn = $('restartBtn');
  if (!startBtn) return console.error("Start button missing");
  startBtn.addEventListener('click', start);
  if (restartBtn) restartBtn.addEventListener('click', () => { $('welcome').classList.remove('hidden'); $('result').classList.add('hidden'); });
  console.log("Events bound");
});
