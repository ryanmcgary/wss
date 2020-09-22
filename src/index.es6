//  x CHECK RE-launch game to make sure characters are still displayed
//  Change sizing so overscroll doesn't happen
//  Add/record audio
//. show more animation characters
//  add points animatin
//  show gold/silver/bronze color of votes on last round
//  after x seconds click reconnect link to refresh page


// const fs = require('fs')

// var chars_folder = './data/characters'
// var characters = fs.readdirSync(chars_folder)
// var chars_folder = './data/characters/cartoon1.gif'
// var characters = fs.readFileSync(chars_folder)

// problems 
// x leaving during lobby phase doesn't remove player from players array
// you can submit prompt when not connected

function errors(err) {
  switch (err.type){
    case "browser-incompatible":
      // alert("Your browser is not compatible, please upgrade.")
    case "disconnected":

    case "invalid-id":

    case "invalid-key":

    case "network":
      alert("Disconnected from Game Server. Check your connection and start a new game.");
      $("gamecode h2").text("");
      break;
    case "peer-unavailable":
      alert("Cannot connect to game.")
    case "ssl-unavailable":

    case "server-error":
      // alert("Cannot connect to server, check internet connection.")
    case "socket-error":

    case "socket-closed":

    case "unavailable-id":

    case "webrtc":
  }
}
window.errors = errors;

function checkConnected(counter = 0, timer = Date.now()){
  if (window.peer){
    if (Object.values(peer.connections).flat().some(arr => arr.peerConnection.connectionState === "connected")){
      console.log('hi'); 
      if ($("#vis").text().includes("reconnecting")){
        $("#vis").html("</div>connected!</div>");  
      }else{
        $("#vis").html("");  
      }
      return "connected";
    }else{
        $("#vis").html("</div>reconnecting</div><div id='loading'></div>");
        // // MODAL Disconnected from Game, Trying to Reconnect
        client(peer, window.name, window.host)
    } 
  }
}
window.checkConnected = checkConnected;

console.log("change5")

// if (Date.now() > 1607027854970) {asdf};

window.characters = shuffle(["cartoon1.gif","cartoon2.gif","cartoon3.gif","cartoon4.gif","cartoon5.gif","cartoon6.gif","cartoon7.gif","cartoon8.gif","cartoon9.gif"]);
window.videos = ['city.mp4','clouds.mp4','jelly.mp4','lava.mp4','liquidvisual.mp4','rainbow.mp4','turntable.mp4','water.mp4','woods.mp4','zigzag.mp4'];
// for (file of chars) {
//   console.log(file)
// }
var jon = /*html*/`
    <div><a href="${console.log('')}">sdfdsf</a></div>
    <span style="width:10%;"></span>
    <div></div>
    `


const introRound1 = ["./data/audio/introround1.m4a"] //'./data/introRound1' first to fire after a player start of game
const answerCountdown = ["./data/audio10.m4a"] //'./data/answerCountdown'
const answerCountdownDone = ["./data/audio/answercountdowndone.m4a"] //'./data/answerCountdownDone'
  const voteStart = ["./data/audio/votestart.m4a"] //'./data/voteStart'
  const voteComplete = ["./data/audio/votecomplete.m4a"] //'./data/voteComplete'
const wrapupRound1 = ["./data/audio/wrapupround1.m4a"] //'./data/wrapupRound1'

const introRound2 = ["./data/audio/introround2.m4a"] //'./data/introRound2'
// const answerCountdown = ["./data/audio10.m4a"] //'./data/answerCountdown'
// const answerCountdownDone = ["./data/audio10.m4a"] //'./data/answerCountdownDone'
  // const voteStart = ["./data/audio10.m4a"] //'./data/voteStart'
  // const voteComplete = ["./data/audio10.m4a"] //'./data/voteComplete'
const wrapupRound2 = ["./data/audio/wrapupround2.m4a"] //'./data/wrapupRound2'

const introRoundFinal = ["./data/audio10.m4a"] //'./data/introRoundFinal'
// const answerCountdown = ["./data/audio10.m4a"] //'./data/answerCountdown'
// const answerCountdownDone = ["./data/audio10.m4a"] //'./data/answerCountdownDone'
// const voteStart = ["./data/audio10.m4a"] //'./data/voteStart'
// const voteComplete = ["./data/audio10.m4a"] //'./data/voteComplete'
const wrapupRoundFinal = ["./data/audio/wrapuproundfinal.m4a"] //'./data/wrapupRoundFinal'

const endGame = ["./data/audio10.m4a"] //'./data/endGame'


const vidIntroRound1 = ["./data/bfc.mp4"] //'./data/introRound1'
const vidAnswerCountdown = ["./data/bfc.mp4"] //'./data/answerCountdown'
const vidAnswerCountdownDone = ["./data/bfc.mp4"] //'./data/answerCountdownDone'
  const vidVoteStart = ["./data/bfc.mp4"] //'./data/voteStart'
  const vidVoteComplete = ["./data/bfc.mp4"] //'./data/voteComplete'
const vidWrapupRound1 = ["./data/bfc.mp4"] //'./data/wrapupRound1'
const vidIntroRound2 = ["./data/bfc.mp4"] //'./data/introRound2'
// const vidAnswerCountdown = ["./data/bfc.mp4"] //'./data/answerCountdown'
// const vidAnswerCountdownDone = ["./data/bfc.mp4"] //'./data/answerCountdownDone'
  // const vidVoteStart = ["./data/bfc.mp4"] //'./data/voteStart'
  // const vidVoteComplete = ["./data/bfc.mp4"] //'./data/voteComplete'
const vidWrapupRound2 = ["./data/bfc.mp4"] //'./data/wrapupRound2'
const vidIntroRoundFinal = ["./data/bfc.mp4"] //'./data/introRoundFinal'
// const vidAnswerCountdown = ["./data/bfc.mp4"] //'./data/answerCountdown'
// const vidAnswerCountdownDone = ["./data/bfc.mp4"] //'./data/answerCountdownDone'
// const vidVoteStart = ["./data/bfc.mp4"] //'./data/voteStart'
// const vidVoteComplete = ["./data/bfc.mp4"] //'./data/voteComplete'
const vidWrapupRoundFinal = ["./data/bfc.mp4"] //'./data/wrapupRoundFinal'
const vidEndGame = ["./data/bfc.mp4"] //'./data/endGame'

function again() {
  emit("blank");
  window.clearInterval(gameInterval);
  initHost();
  $("answers, prompt").html("")
  $("timer").html("");
  stage.lockInit();
}

window.again = again;
function restart() {
  var txt;
  if (confirm("Are you sure you want to end this game?")) {
    txt = "You pressed OK!";
    location.reload();
  } else {
    txt = "You pressed Cancel!";
  }
}
window.restart = restart;

$(document).ready(function() {
  if (url.hash === "#host" || navigator.userAgent.includes("Electron")){
    changeVideo()
    $("join").addClass("hide");
  }else{
    window.onbeforeunload = function() {
      return "Do you really want to leave the game?";
    };
    $("video").remove();
  }
})

async function changeVideo() {
  var jam = $("video.bg")
  $("video.bg").before(`<video src="./data/videos/${shuffle(videos)[0]}" class="bg" loop="true" autoplay=""></video>`)
  await sleep(150)
  $(jam).addClass("remove");
  await sleep(1000)
  $(jam).remove();
}


// function playAudio(src){
//   var audio = $.parseHTML(`<audio autoplay src="${src}"></audio>`)[0]
//   $("body").append(audio)
//   // audio.pause()
//   return audio;
// }

async function playAudio(src){
  var a = new Audio(src)  
  await sleep(100)  
  console.log("duration",a.duration)  
  a.play()
  
  await sleep(a.duration * 1000)
  console.log("done")  
  return "tru"
}


var _ = require('lodash');
window._ = _;


var initTime = Date.now();

var url = new URL(window.location.href);
if (url.hash !== "#host" && !navigator.userAgent.includes("Electron")){ // HOST
  $(document).ready(function() {
    var hidden, visibilityState, visibilityChange;

    if (typeof document.hidden !== "undefined") {
      hidden = "hidden", visibilityChange = "visibilitychange", visibilityState = "visibilityState";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden", visibilityChange = "msvisibilitychange", visibilityState = "msVisibilityState";
    }

    // var document_hidden = document[hidden];

    // document.addEventListener(visibilityChange, function() {
    //   if(document_hidden != document[hidden]) {
    //     if(document[hidden]) {
    //       console.log("hidden")
    //       window.clearInterval(monitorConnection);
    //       window.monitorConnection = setInterval(checkConnected, 3000);
    //     } else {
    //       console.log("show")
    //       window.clearInterval(monitorConnection);
    //       window.monitorConnection = setInterval(checkConnected, 3000);
    //     }

    //     document_hidden = document[hidden];
    //   }
    // });
  });
}
function checkClientList() {
  var clientArray = _.reduce(peer.connections, (arr, conns)=>{
    var meta = _.reduce(conns, (arr, conn)=>{
         if (conn.open && conn.peerConnection.connectionState === "connected" && conn.peerConnection.localDescription.type === "answer") arr.push(conn.metadata);
        return arr;
    }, []);
    arr.push(meta)
    return arr;
  }, [])
  var clientArrayFlat = clientArray.flat().filter(Boolean)
  players2 = [...new Set(clientArrayFlat)]

  if (players.sort().toString() !== players2.sort().toString()){
    return true
  }

}


window.DATA_FEEDS = [];

if (url.hash === "#host" || navigator.userAgent.includes("Electron")){ // HOST
  var code = makeid(4)
  var peerID = `wordsaladsandwich-${code}`
  var peerID_reconnect = `${initTime}-${code}`
  var innerHTML = `Room code is ${code}`

  window.peer = //new Peer();
    new Peer(peerID, {
        host: 'rumpus.xyz',
        port: 9000,
        path: '/'
      });

  peer.on("open", function(id) {
    console.log("established" ,id)
    if (id === peerID)
      $("gamecode").html(`<h4 style="margin-block-start: 0px;margin-block-end: 0px;">Join the game at <span style="color: #4242ff;">rumpus.xyz</span> using your browser and use game code:</h4><h2>${code}</h2>`)
  });
  peer.on('error', function(err) {
      console.log("Error: ", err);
      (window.errs = window.errs || []).push(err);
      errors(err);
  });
  peer.on('connection', function(conn) {
    // if any users disconnect after game start, reconnect to server
    conn.on('close', function(){
      console.log('closed what', conn, peer.disconnected, window.phase)
      if (window.phase !== "lobby" || window.player_prompts){ ///FIXEEE
        console.log('closed', conn)
        
        if (checkClientList()){
          peer._lastServerId = peerID_reconnect
          peer.reconnect();  
        }
        
        
      }else { // if player drops during lobby phase 
        console.log('closed else', conn)
        // var playerIndex = players.indexOf(conn.metadata)
        // if (playerIndex !== -1) players.splice(playerIndex, 1);
        window.stage.lobby();
      }
    });
    conn.on('error', function(err){
      console.log('err', err, conn)

    });
    conn.on('open', function(){
      // here you have conn.id

      var conn2 = peer.connect(conn.peer, {metadata: initTime});
      DATA_FEEDS.push(conn2);
      
      if (window.jam && !jam[jam.length - 1]?.includes("lobby")){
        console.log("reconnect reestablish", last_emitted_payload)
        setTimeout(function () {
          jam.forEach(function(payload){
            conn2.send(payload)  
          })
          
          // send payload
          // try and figure out why players is dropping player on host
        }, 2000);
      }else{
        setTimeout(function () {
          hostIntake(undefined, "join")
        }, 5000);
      } 

      console.log("host open", conn, conn.peer,conn2);
      
      conn.peerConnection.onconnectionstatechange = function(event) {
        console.log('closed what 2', conn)
        if (window.phase !== "lobby" && peer.disconnected){
          console.log('closed if2', conn)
          
          if (checkClientList()){
            peer._lastServerId = peerID_reconnect // changes host signal server id to reconnect-${CODE}
            peer.reconnect(); // connects host to signalling server
          }

        }else
        if (window.phase === "lobby" && conn.peerConnection.connectionState === "failed"){
          console.log('closed else2', conn)
          // var playerIndex = players.indexOf(conn.metadata)
          // if (playerIndex !== -1) players.splice(playerIndex, 1);
          window.stage.lobby();
        }
      }  

    });
    conn.on('data', function(data){
      console.log("sds",data);
      hostIntake(conn.metadata, data)    

      window.lastData = data;
      window.lastConn = conn;

    });
  })
}else{ //client

}
// UTILITIES
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function offset(n, offset=0){
  return (n + offset) % players.length
}
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //abcdefghijklmnopqrstuvwxyz0123456789
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
window.shuffle = shuffle;
window.offset = offset;
window.makeid = makeid;


function client(peer, name, host){
  if (localStorage.getItem("code")) 
    var [timeStamp, code] = localStorage.getItem("code").split(","); // `${timeStamp},${code}`
  var prefix = ""
  var host = (host || $("#roomcode")[0].value.toUpperCase());
  window.host = host;
  var name = (name || $("#name")[0].value);
  window.name = name;
  var hostID = `wordsaladsandwich-${host}`;
  var hostIDTimeCode = `${timeStamp}-${host}`;

  closer()
  window.peer?.destroy();

  window.peer =
  new Peer({
      host: 'rumpus.xyz',
      port: 9000,
      path: '/'
    });// have to initialize this every time because library won't let you delete hanged connectoin attempts
  // peer = window.peer
  

  window.peer.on("open", function(id) {
    var host = window.peer.connect(hostID, {metadata: name});
    var hostTimeCode = window.peer.connect(hostIDTimeCode, {metadata: name});
    // FIX: At some point you'll need to check if both connect and if so prefer hostTimeCode and drop host
    // because that is the specific one, and the other is a new random generated one
    DATA_FEEDS.push(host);
    DATA_FEEDS.push(hostTimeCode);
  });
  window.peer.on('connection', function(conn) {
    conn.on('open', function(){
      (window.intervalIDs = window.intervalIDs || [])
      window.intervalIDs.forEach( function(e, i) {
        window.clearInterval(e);
      });
      var monitorConnection = setInterval(checkConnected, 5100);
      (window.intervalIDs = window.intervalIDs || []).push(monitorConnection);
      localStorage.removeItem("code");
      console.log("client open",conn, conn.metadata); // need to hide "join game button once this is recieved"
      window.hostTime = conn.metadata;
      // emit(`name,${name}`) don't need to use, using metadata instead
      DATA_FEEDS.push(conn);
    });
    conn.on('data', function(data){
      console.log("DATA>>",data);
      clientIntake(data)

    });
  })
  window.peer.on('error', function(err) {
      console.log("Error: ", err);
      // (window.errs = window.errs || []).push(err)
      // if (err.type === "peer-unavailable" && err.message.includes("wordsaladsandwich")){
      //   hostID = `${window.hostTime || timeStamp}-${host}`
      //   name = (name || localStorage.getItem("name"))
      //   window.peer.connect(hostID, {metadata: name});
      // }
      // Error:  Error: Could not connect to peer reconnect-ULCJ
  });
  console.log("hostID", hostID, host, peer);
  // recheck();
}
window.client = client;

// var gameInterval = setInterval(function () {
//   tickGameState()
// }, 1000);
// clearInterval(gameInterval);

// phases = [lobby, lockInit, round1prompts, spacer, round1vote*dynamic, round2prompts, round2vote*dynamic, round3prompts, round3vote, results]

// render game component
// render timer component
// game state

function initHost(){
  window.n;
  window.phase = "lobby"
  window.round = 0
  window.prompt = 0;
  window.players = (window.players || []);
  window.stage = (window.stage || {});
  window.answers = {all:[], 0:[],1:[],2:[]}
  window.votes = []
  // ["n", "j", "z", "player_prompts", "lastData", "lastConn", "aud", "prompt_array", "prompt_round", "last_prompt"]
}
initHost()
window.initHost = initHost;

function hostIntake(user, data){
  var [phase, player_id, round_id, prompt_id, content, more] = data.split(",")
  stage[phase](phase, player_id, round_id, prompt_id, content, more)
  console.log("hostIntake", "phase", phase, "player_id", player_id, "round_id", round_id, "prompt_id", prompt_id, "content", content, "more", more);
  // if (phase_id === start)
  // if (phase_id === prompts)
  // if (phase_id === vote);
}

stage.join = function() {
    stage.lobby();
}
stage.start = function() {
    emit("blank");
    if (window.gameInterval) window.clearInterval(gameInterval);
    initHost();
    stage.lockInit();
}
stage.answer = function(phase, player_id, round_id, prompt_id, content) {
  console.log("stage.answer");
  stage.processAnswers(phase, player_id, round_id, prompt_id, content)
}

stage.processAnswers = function(phase, player_id, round_id, prompt_id, content) {
  console.log("processAnswers");
  // if (window.round == round_id){ //0 is text, boo
    console.log("processAnswers tru");
    answers.all.push({player_id: player_id, round_id: round_id, prompt_id: prompt_id, answer: content})
    answers[round_id].push({player_id: player_id, round_id: round_id, prompt_id: prompt_id, answer: content})
    if (
      answers.all.filter(ans => (ans.round_id == round_id && ans.player_id == player_id)).length == 2 ||
      answers.all.filter(ans => (ans.round_id == 2 && ans.player_id == player_id)).length == 1
    ){
      $(`#${player_id}`).removeClass("waiting");
    }
  // }
}

window.last_emitted_payload = ""

stage.lobby = function() {
  var clientArray = _.reduce(peer.connections, (arr, conns)=>{
    var meta = _.reduce(conns, (arr, conn)=>{
         if (conn.open && conn.peerConnection.connectionState === "connected" && conn.peerConnection.localDescription.type === "answer") arr.push(conn.metadata);
        return arr;
    }, []);
    arr.push(meta)
    return arr;
  }, [])
  var clientArrayFlat = clientArray.flat().filter(Boolean)
  if (window.phase === "lobby") // this ensures player array can't be changed after game is started
    players = [...new Set(clientArrayFlat)];

  var playersView = players.map((player, i) => `<player id="${i}"><img src="./data/characters/${characters[i]}"><p>${player}</p></player>`).join("")
  var innerHTML = `
    <gameview>
      ${playersView}
    </gameview>
  `
  $("gameview").replaceWith(innerHTML);
  // STEP:1 Render Initial Lobby
  emit(`lobby,${escape(players.toString())}`)
}

stage.lockInit = async function() {
    initHost();
    window.phase = "locked";


    emit(`playerList,${escape(players.toString())}`)

  // contruct prompts for game
    n = players.length // player length
    var ranNums = shuffle(prompts); // randomize
    j = ranNums.splice(0,(n * 2 + 1)) // grab player x 2 + final question
    z = j.map((p,i) => { return {id: i, p: p.text, idx: p.idx} }) // map to object
    var gp = [z.splice(0, n), z.splice(0, n), z.splice(0, 1)] // create prompt array for each of the 3 rounds
    window.z = z;
    window.gp = gp;
    players.forEach(function (e,i){ // assign players to prompts
      gp[0][i]["round"] = 0;
      (gp[0][i]["pl"] = gp[0][i]["pl"] || []).push(i);
      (gp[0][i]["pl"] = gp[0][i]["pl"] || []).push(offset(i+2));

      gp[1][i]["round"] = 1;
      (gp[1][i]["pl"] = gp[1][i]["pl"] || []).push(i);
      (gp[1][i]["pl"] = gp[1][i]["pl"] || []).push(offset(i+1));

      gp[2][0]["round"] = 2;
      (gp[2][0]["pl"] = gp[2][0]["pl"] || []).push(i);
    })
    window.player_prompts = gp.flat();
    // STEP:2 Game start button pressed: Send prompts and trigger first item

    window.peer?.disconnect()

    console.log("introRound1");
    changeVideo()
    $("gamecode").html("<h2>Round 1</h2>");
    await sleep(300)
    $("player").addClass("waiting");
    $("player").removeClass("scale-out");
    await playAudio(shuffle(introRound1)[0])
    

    emit(`promptList,${escape(JSON.stringify(gp))}`); // sends prompts and triggers first round of answer gathering
    stage.roundprompts(); // starts roundprompt loop and the timer on host    
}


const sleep = m => new Promise(r => setTimeout(r, m))
window.sleep = sleep;

stage.roundprompts = function(triggerRender) {
  console.log("roundprompts", triggerRender, window.round), window.phase;
  if (window.phase === "lobby" || window.phase === "voting" || window.phase === "locked"){
    window.phase = "prompts";
    if (triggerRender){ emit(`prompts,,${window.round}`); $("player").addClass("waiting");}
    console.log("triggerRender", triggerRender);
    var timer = 75000
    var temp_answers = []
    window.gameInterval = setInterval(async function () {
      if (timer > 0){
        timer -= 1000
        $("timer").html(timer / 1000);
        if (window.answers[window.round].length === players.length * 2) timer = 0;
        if (window.answers[window.round].length === 1 && players.length === 1) timer = 0; // for testing with 1 player
        if (window.answers[window.round].length === players.length && window.round == 2) timer = 0;
        // console.log("fuckery", timer,window.answers[window.round].length === players.length * 2);
      }else{

        emit(`answers,${escape(JSON.stringify(answers[window.round]))},${window.round}`) // this just sends answers, does not start voting
        $("timer").html("");
        emit("blank");
        window.clearInterval(gameInterval);
        // STEP:3 answers timer is up, now we send answers and get responses
          console.log("answerCountdownDone");
          $("player").addClass("scale-out");
          await sleep(600)
          $("player").removeClass("waiting");
          $("gamecode").html("");
          changeVideo()
          await playAudio(shuffle(answerCountdownDone)[0])
          // await sleep(5000)
          // aud.pause()
        stage.roundvote();
      }
    }, 1000);
  }

}

function fitText(id){
  var x = 0;
  var width = players[id].length * 7.84;
  if (width < 79){
    width = 79;
    x = 39 - (4 * players[id].length)
  }
  return `<svg viewBox="0 0 ${width} 18"><text x="${x}" y="75%">${players[id]}</text></svg>`
}
window.fitText = fitText;

stage.roundvote = async function() {
  console.log("roundprompts", window.round, window.prompt, players.length);
  // if (window.prompt !== players.length){// + one is a zero index thing
  if (window.prompt % players.length || !(window.prompt % players.length) && window.phase !== "voting" ){
    if (window.prompt > players.length + players.length) { // if prompt is greater than twice number of players then it's the last item
      $("gamecode").html("DONE BRO");
      $("answers, prompt").html("")
      var tt = calculateVotes();
      var ss = Object.keys(tt).sort(function(a,b){return tt[b]-tt[a]}).map(key => {return {key: key, score: tt[key]}});
      ss.forEach( function(el, i) {
        $("gamecode").append(
          `<score>
            <img src="./data/characters/${characters[el.key]}">
            <p class="name">${fitText(el.key)}</p>
            <p class="score">${parseInt(el.score)}</p>
          </score>`
        )
      });
      emit(`lobby,${escape(players.toString())}`)
      return true;
    } // END OF GAME
    
    // STEP:4 Start voting
      console.log("voteStart");
      var {p: prompt_text, idx: prompt_idx} = player_prompts.filter(p => p.id == window.prompt)[0]
      var answees = answers.all.filter(ans => (ans.prompt_id == window.prompt)).map(answer => `<answer player="${answer.player_id}"><p>${answer.answer.replace('{COMMA}',',')}</p></answer>`);
      await playAudio(shuffle(voteStart)[0]);
      $("prompt").html(prompt_text);
      $("answers").html("");
      await playAudio(`./data/audio/prompts/${prompt_idx}.wav`);
      

      changeVideo();
      $("answers").html(answees);
    var prom = window.prompt;
    window.phase = "voting";
    var timer = 17000
    if (window.round == 2) timer = 21000;
    emit(`vote,,${window.round},${window.prompt}`);

    window.prompt += 1;
    console.log("vote cycle", `round: ${window.round},prompt: ${window.prompt}`);

    window.gameInterval = setInterval(async function () {
      console.log("interval",prom, "prompt",prompt,"d>>", votes.filter((vote) => { return vote.prompt == prom}).length != (players.length - 2))
      if (timer > 0 && (votes.filter((vote) => { return vote.prompt == prom}).length != (players.length - 2) || window.round == 2)){
        timer -= 1000
        $("timer").html(timer / 1000);
      }else{
        $("timer").html("");
        emit("blank")
        window.clearInterval(gameInterval);
        // STEP:5 tabulate vote score
        console.log("voteComplete");
        await playAudio(shuffle(voteComplete)[0])

        var tt = calculateVotes(prom)
        for (let [key, score] of Object.entries(tt)) {
          $(`[player=${key}]`).append(`<p>${players[key]}</p>`)

          var sxam = votes.filter(vote => vote.prompt == prom && vote.votee == key).map((vote)=>{
            return `<div class="vvv"><player id="${vote.voter}"><img src="./data/characters/${characters[vote.voter]}"><p>${players[vote.voter]}</p></player></div>`
          }).join("")
          
          if (window.round == 2){ // NEW FEATURE
            var sxam = votes.filter(vote => vote.prompt == prom && vote.votee == key).sort(function (vote1, vote2) {
              if (vote1.color === "bronze" && vote2.color === "gold" ||
                    vote1.color === "bronze" && vote2.color === "silver" ||
                    vote1.color === "silver" && vote2.color === "gold"
                   ) return 1;
              if (vote1.color === "gold" && vote2.color === "silver" || 
                    vote1.color === "gold" && vote2.color === "bronze" ||
                    vote1.color === "silver" && vote2.color === "bronze"
                   ) return -1;
            }).map((vote)=>{
              return `<div class="vvv final ${vote.color}"><player id="${vote.voter}"><img src="./data/characters/${characters[vote.voter]}"><p>${players[vote.voter]}</p></player></div>`
            }).join("")
          }

          $(`[player=${key}]`).append(sxam)
        }

        // STEP:5 tabulate vote score
        await sleep(7500);
        stage.roundvote()
      }
    }, 1000);
  }else { // once no more answers to vote on
    if (window.round == 2){
      $("answers, prompt").html("")
      // STEP:FINAL
      console.log("wrapupRoundFinal");
      await playAudio(shuffle(wrapupRoundFinal)[0])
      changeVideo()
      var tt = calculateVotes();
      var ss = Object.keys(tt).sort(function(a,b){return tt[b]-tt[a]}).map(key => {return {key: key, score: tt[key]}});
      ss.forEach( function(el, i) {
        $("gamecode").append(
          `<score>
            <img src="./data/characters/${characters[el.key]}">
            <p class="name">${fitText(el.key)}</p>
            <p class="score">${parseInt(el.score)}</p>
          </score>`
        )
      });
      emit(`lobby,${escape(players.toString())}`)
      await sleep(7000)
    }else{
      // STEP:6 end round and show scores
      if (window.round == 0){
        console.log("wrapupRound1");
        await playAudio(shuffle(wrapupRound1)[0]);
      }
      if (window.round == 1){
        console.log("wrapupRound2");
        await playAudio(shuffle(wrapupRound2)[0]);
      }
      $("answers, prompt").html("")
      var tt = calculateVotes();
      var ss = Object.keys(tt).sort(function(a,b){return tt[b]-tt[a]}).map(key => {return {key: key, score: tt[key]}});
      ss.forEach( function(el, i) {
        $("gamecode").append(
          `<score>
            <img src="./data/characters/${characters[el.key]}">
            <p class="name">${fitText(el.key)}</p>
            <p class="score">${parseInt(el.score)}</p>
          </score>`
        )
      });
      await sleep(7000)
      $("gamecode").html("")
      window.round += 1;
      emit(`round,,${window.round}`);
      console.log("end of voting", "round:", round, "prompt:", prompt);
      // STEP:7 START next round
        if (window.round == 2){
          console.log("introRoundFinal");
          await playAudio(shuffle(introRoundFinal)[0])
          $("gamecode").html("<h2>Final Round!</h2>");
          await sleep(1000)
          $("player").removeClass("scale-out")
        }
        if (window.round == 1){
          console.log("introRound2");
          
          $("gamecode").html("<h2>Round 2</h2>");
          await sleep(1000)
          $("player").removeClass("scale-out")
          await playAudio(shuffle(introRound2)[0])
          await sleep(1000)
        }
      stage.roundprompts(true);
    }
  }
}
window.votes = [] // {voter:, votee:, round:, prompt:}
stage.vote = function(phase, player_id, votee, round_id, prompt_id, color) {
  votes.push({voter: player_id, votee: votee, round: round_id, prompt: prompt_id, color: color})
}

window.stage = stage;

function calculateVotes(prompt) {
  if (prompt !== undefined) prompt_array = Array.from(arguments);
  var finalscore = {} // var finalscore = {0:0, 1:0, 2:0}

  if (prompt !== undefined){
    player_prompts
    .filter((d)=>{return prompt_array.includes(Number(d.id))})
    .forEach(p => p.pl.forEach(e => finalscore[e] = 0))
  }else{
    players.forEach((e,i)=>{
      finalscore[i] = 0
    })
  }

  $("gamecode").html(``);
  prompt_round = {}

  last_prompt = answers[2].reduce((str, answer)=>{return answer.prompt_id},"")


    var x = votes.reduce(function(obj, v){ // hashtable of vote prompts to rounds
      obj[v.prompt] = Number(v.round) + 1
      return obj
    }, {})

    var c = votes.reduce(function(obj, vote){ // hashtable of vote counts to prompts
      obj[vote.prompt] = obj[vote.prompt] || {};
      if (obj[vote.prompt][vote.votee]){
          obj[vote.prompt][vote.votee] += 1;
      }else {
          obj[vote.prompt][vote.votee] = 1;
      }
      return obj
    }, {})

    for (let [prompt_key, prompt_value] of Object.entries(c)) { // iterate through promopts

      if (prompt !== undefined && !prompt_array.includes(Number(prompt_key))) continue; // only process single prompt if argument passed
      if (prompt_key != last_prompt){
        for (let [key, value] of Object.entries(c[prompt_key])) { // key is player number, value is vote count
          console.log(`${key}: ${value}`);
          console.log("fuckkksdfsd", players[key], 1000, window.round)
          if(value === (players.length - 2)){ // if vote count of prompt equals player count -2 it's a unamious vote of eligable voters give bonus
            var score = 1500 * x[prompt_key]
            // if (prompt !== undefined) $("gamecode").append(`${players[key]}, ${parseInt(score)}<br>`);
            finalscore[key] += score
          }else
          if (Object.keys(c[prompt_key]).length < 2){ // if only 1 answer got votes give full round score
            var score = 1000 * x[prompt_key] // x is round mapping for prompts
            // if (prompt !== undefined) $("gamecode").append(`${players[key]}, ${parseInt(score)}<br>`);
            finalscore[key] += score
          }else{ // else, divide point total based on percentage votes
            var score = (1000 / (players.length - 2) * value) * x[prompt_key]
            // if (prompt !== undefined) $("gamecode").append(`${players[key]}, ${parseInt(score)}<br>`);
            finalscore[key] += score
            // console.log(players[key], )
          }
        }
      }
      if (prompt_key == last_prompt){
        console.log("FFFFFFFFF");
        var z = votes.reduce(function(obj, vote){
          if (vote.prompt == last_prompt){
            obj[vote.voter].push({user:vote.votee, val:obj[vote.voter].length})
          } //Uncaught (in promise) TypeError: Cannot read property 'push' of undefined
          return obj;
        },{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]})

        // var lastRoundPoints = {0:0,1:0,2:0};
        for (let [user, votes] of Object.entries(z)) {
          votes.forEach((vote)=>{
            if (vote.val === 0) {finalscore[vote.user] += 1000;}
            if (vote.val === 1) {finalscore[vote.user] += 700;}
            if (vote.val === 2) {finalscore[vote.user] += 500;}
          })
        };
      }

    }



    return finalscore;
}
window.calculateVotes = calculateVotes;



// if round == 1
//   1000 / (players.length - 2) * number_of_votes
//   if prompt number_of_votes = (players.length - 2) then 1200
// if round == 2
//   2000 / players.length * number_of_votes
//   if prompt number_of_votes = (players.length - 2) then 2400

// phase, player_id, round_id, prompt_id, content
// vote,0,0,2,6
// emit('vote,${n},${pa.player_id},${pa.round_id},${pa.prompt_id}')

// collect answers
//   x show voting results after each quesition
//   x show voting results total at end
//   x vote for more than 1 item on last round
//   add video placeholders and timers
//   new game same people
//   new game new people
//   animate characters
//   send to collin
// publish to server or electron app
function tryReconnect() {
  var {timeStamp, code} = localStorage.getItem("code").split(",") // `${timeStamp},${code}`
  var name = localStorage.getItem("name") // `${timeStamp},${code}`
  
  // if (timeStamp === undefined) return false;

  // if (Date.now() - timeStamp < 10000){ // 10 mins
  //   $("#roomcode").text(`${code}`)
  //   $("#name").text(`${name}`)
  //   var {err, succ} = await to(connect(timeStamp, code))
  // }

  // if err === "no such server"
  //   localStorage.removeItem("code")
  //   $("#roomcode").text("")
  //   alert("cannot connect")


  // client(peer, "reconnect", window.name, code)

}
// tryReconnect();

function start(element) {
  // if (playerList.length > 2){ //test
    emit('start');
    $(element).attr('disabled',true);
    setTimeout(function(){
      $('button').attr('disabled',false)
    },6500)
  // }else{
  //   alert("Must have at least 3 players to start.")
  // }
}
window.start = start;

function clientIntake(data){
  window.datum = data;
  (window.datumArr = window.datumArr || []).push(data);
  console.log("badata", data);
  var [stage, content, round, prompt_id, answers] = data.split(",")
  if (round) window.round = round;
  window.dater = {stage: stage, content: content, round: round, promptId: prompt_id, answers: answers};

  // stages[stage](content)

  if (stage === "blank"){
    $("gameview").html(`<span class="text">Wait for the next stage!</span>`);
  }
  if (stage === "lobby"){
    window.playerList = unescape(content).split(",");
    
    localStorage.setItem("code", `${window.hostTime},${window.host}`) // `${timeStamp},${code}`
    localStorage.setItem("name", `${window.name}`)
    
    var i = playerList.indexOf(window.name)
    console.log("playerList", i, playerList);
    var style = ``;

    if (i === 0){
      var start = `<span class="text">You're the host! Press Start when everyone is ready!</span> <button type="button" onclick="start(this)" name="button">Start Game</button>`
    }else{
      var start = `<span class="text">Waiting for ${playerList[0]} to start!</span>`
    }

    var innerHTML = `
        ${style}
        ${start}
    `
    $("gameview").html(innerHTML);

  }
  if (stage === "playerList"){ // and reset
      console.log("playerList",stage, content);
      window.playerList = unescape(content).split(",");
      window.round = 0;
      window.prompt = 0;
  }
  if (stage === "promptList"){
    console.log("promptList",stage, content);
    window.n = playerList.indexOf(name)
    window.gp = JSON.parse(unescape(content))
    window.a = gp.flat(); // a =[{id: 0, p: "George W. Bush and Dick Cheney's rap duo name", round: 0, pl: Array(2)}]
    window.z = _.reduce(a, (arr, prompt) => {
      // console.log("FUCK2", prompt.round, round, prompt.round === round, prompt.pl.includes(n));
        if (prompt.pl.includes(n) && prompt.round === window.round){
          console.log("FUCK");
          arr.push(`
            <prompt>${prompt.p}
              <input></input>
              <button onclick="if (this.previousElementSibling.value.length > 1){emit('answer,${n},${prompt.round},${prompt.id},' + this.previousElementSibling.value.replace(',','{COMMA}'));this.parentElement.remove();emptyGameview();}">submit</button>
            </prompt>
          `)
        }
        return arr;
    },[]).join("")
    $("gameview").html(z)
    
    // var n = playerList.length;
    // "<prompt>You should never give alcohol to "BLANK"</prompt>
    //           <input></input>
    //           <button onclick="emit('answer,0,0,1,'+this.previousElementSibling.textContent)"></button>
    //           "
    // window.questions = unescape(content).split(",");
    // window.game_prompts = [questions.splice(0, n), questions.splice(0, n), questions.splice(0, 1)]
  }
  if (stage === "prompts"){
    window.z = _.reduce(a, (arr, prompt) => {
      // console.log("FUCK2", prompt.round, round, prompt.round === round, prompt.pl.includes(n));
        if (prompt.pl.includes(n) && prompt.round == window.round){
          console.log("FUCK");
          arr.push(`
            <prompt>${prompt.p}
              <input></input>
              <button onclick="if (this.previousElementSibling.value.length > 1){emit('answer,${n},${prompt.round},${prompt.id},' + this.previousElementSibling.value.replace(',','{COMMA}'));this.parentElement.remove();emptyGameview();}">submit</button>
            </prompt>
          `)
        }
        return arr;
    },[])
    $("gameview").html(z.join(""))
  }
  if (stage === "answers"){
    console.log("prompt", stage, content, round);
    window.answers = JSON.parse(unescape(content))
    // $("playergame phase").addClass("hide")
    // $("playergame phase.submitAnswers").removeClass("hide")
    // setTimer
    // questions.map(answer => `<input></input><button onclick="sendResponse()"><button>`)
  }
  if (stage === "vote"){
    var prompt_text;
    if (round == 2 || !window.answers.some((a)=> a.player_id == window.n && a.prompt_id == prompt_id)){
      console.log("VOTE BITH ERROR", round, prompt_id);
      var prompt_text = gp[round][prompt_id % playerList.length]?.p
      var prompt_answer = window.answers.filter((b)=>{ return (b.prompt_id == prompt_id)} )
      var prompt_ui = prompt_answer.map(pa => `<button onclick="emit('vote,${n},${pa.player_id},${pa.round_id},${pa.prompt_id}');this.parentElement.remove();nextStage('Nice Vote! ')">${pa.answer.replace('{COMMA}',',')}</button>`).join("")
      
      if (round == 2){
        prompt_ui = prompt_answer.map(pa =>{
          if (window.n != pa.player_id){
            return `<button color="gold" onclick="emit('vote,${n},${pa.player_id},${pa.round_id},${pa.prompt_id},' + this.getAttribute('color'));this.remove();$('button[color=silver]').attr('color', 'bronze');$('button[color=gold]').attr('color', 'silver');">${pa.answer.replace('{COMMA}',',')}</button>` // TODO: remove buttons after 3 clicks
          }
        }).filter(item => !!item).join("");
      }
    }
    var innerHTML = `
      <prompt>
        ${prompt_text}
        ${prompt_ui}
      </prompt>
    `
    if (prompt_text){$("gameview").html(innerHTML)}else{$("gameview").html(`<span class="text">Your answer is being voted on.</span>`)}
      console.log("vote", stage, content, round);
      // $("playergame phase").addClass("hide")
      // $("playergame phase.vote").removeClass("hide")
    // setTimer
    // var response = unescape(content).split(",");
    // response.map(answer => `<div onclick="vote(id);showNext()">${answers.text}</div>`)
  }
  if (stage === "finalVote"){
      // console.log("finalVote");
    // setTimer
    // var response = unescape(content).split(",");
    // response.map(answer => `<div onclick="vote(id)">${answers.text}</div>`)
  }
}
window.clientIntake = clientIntake;

function nextStage(pre = ""){
  $("gameview").html(`<span class="text">${pre}Wait for the next stage!</span>`);
}
window.nextStage = nextStage;
function emptyGameview(pre = ""){
  if ($("gameview").text().trim() === "") $("gameview").html(`<span class="text">Wait for the next stage!</span>`);
}
window.emptyGameview = emptyGameview;


window.clientReset = function() {
    delete datum
    delete round
    delete dater
    delete playerList
    delete n
    delete gp
    delete a
    delete round
    delete questions
    delete game_prompts
    delete z
    delete answers
}

window.checked = 0
function recheck() {
  console.log("recheck");
  window.checked++
  if (window.checked > 4) return false;
  setTimeout(function () {
    for (let [key, conn] of Object.entries(peer.connections)) {
      if (conn.some(arr => arr.open === true)){}else{client()}
    }
  }, 2000);

}

function closer() {
  // for (let [key, conn] of Object.entries(DATA_FEEDS)) {
  DATA_FEEDS.forEach((conn, i) => {
    conn?.peerConnection?.close();
  });
  // }
}
closer()
window.closer = closer;
window.jam = [];
function emit(payload) {
  last_emitted_payload = payload;
  jam.push(payload)
  DATA_FEEDS.forEach((conn, i) => {
    if (conn?.peerConnection?.localDescription?.type  === "offer") // offer or answer
      conn.send(payload)
  });
}
window.emit = emit;
// for (let [key, conn] of Object.entries(DATA_FEEDS)) {
// }


// peer.connections["79d1ed63-987e-42fb-83e5-708dc145db55"][0].onconnectionstatechange = function(){console.log("state changed")}
// = function(event) {console.log("blue")}

// for (let [key, conn] of Object.entries(peer.connections)) {
//   conn.forEach( function(element, index) {
//     console.log(element.peerConnection.connectionState)
//       element.peerConnection.onconnectionstatechange = function(event) {
//         console.log("blue", key, element.peerConnection.connectionState, element.metadata)
//         if (element.peerConnection.connectionState === "failed"){
//           var playerIndex = players.indexOf(element.metadata)
//           if (playerIndex !== -1) window.players.splice(playerIndex, 1);
//           window.stage.lobby();
//         }
//       }
//   });
// }

// for (let [key, conn] of Object.entries(peer.connections)) {
//   conn.forEach( function(element, index) {
//     console.log(element.peerConnection.connectionState, element)
    
//     element.metadata

//     element.peerConnection.onconnectionstatechange = function(event) {
//       console.log("blue", key, element.peerConnection.connectionState, element.metadata, element)
//       if (element.peerConnection.connectionState === "failed"){
//         var playerIndex = players.indexOf(element.metadata)
//         if (playerIndex !== -1) window.players.splice(playerIndex, 1);
//         window.stage.lobby();
//       }
//     }

//   });
// }


var prompts = [{idx: 1, text: `What two words would passengers never want to hear a pilot say?`}
,{idx: 2, text: `You would never go on a roller coaster called "BLANK"`}
,{idx: 3, text: `The secret to a happy life`}
,{idx: 4, text: `If a winning coach gets Gatorade dumped on his head, what should get dumped on the losing coach?`}
,{idx: 5, text: `Name a candle scent designed specifically for Kim Kardashian`}
,{idx: 6, text: `You should never give alcohol to "BLANK"`}
,{idx: 7, text: `Everyone knows that monkeys hate "BLANK"`}
,{idx: 8, text: `The biggest downside to living in Hell`}
,{idx: 9, text: `Jesus's REAL last words`}
,{idx: 10, text: `The worst thing for an evil witch to turn you into`}
,{idx: 11, text: `The Skittles flavor that just missed the cut`}
,{idx: 12, text: `On your wedding night, it would be horrible to find out that the person you married is "BLANK"`}
,{idx: 13, text: `A name for a really bad Broadway musical`}
,{idx: 14, text: `The first thing you would do after winning the lottery`}
,{idx: 15, text: `What's actually causing global warming?`}
,{idx: 16, text: `A name for a brand of designer adult diapers`}
,{idx: 17, text: `Name a TV drama that's about a vampire doctor`}
,{idx: 18, text: `Something squirrels probably do when no one is looking`}
,{idx: 19, text: `The crime you would commit if you could get away with it`}
,{idx: 20, text: `Come up with a great title for the next awkward teen sex movie`}
,{idx: 21, text: `What's the Mona Lisa smiling about?`}
,{idx: 22, text: `A terrible name for a cruise ship`}
,{idx: 23, text: `What FDR meant to say was We have nothing to fear, but "BLANK"`}
,{idx: 24, text: `Come up with a title for an adult version of any classic video game`}
,{idx: 25, text: `The name of a font nobody would ever use`}
,{idx: 26, text: `Something you should never put on an open wound`}
,{idx: 27, text: `Scientists say erosion, but we all know the Grand Canyon was actually made by "BLANK"`}
,{idx: 28, text: `The real reason the dinosaurs died`}
,{idx: 29, text: `Come up with the name of a country that doesn't exist`}
,{idx: 30, text: `The best way to keep warm on a cold winter night`}
,{idx: 31, text: `A college major you don't see at many universities`}
,{idx: 32, text: `What would make baseball more entertaining to watch?`}
,{idx: 33, text: `The best thing about going to prison`}
,{idx: 34, text: `The best title for a new national anthem for the USA`}
,{idx: 35, text: `Come up with the name of book that would sell a million copies, immediately`}
,{idx: 36, text: `What would you do if you were left alone in the White House for an hour?`}
,{idx: 37, text: `Invent a family-friendly replacement word that you could say instead of an actual curse word`}
,{idx: 38, text: `A better name for testicles`}
,{idx: 39, text: `The name of the reindeer Santa didn't pick to pull his sleigh`}
,{idx: 40, text: `What's the first thing you would do if you could time travel?`}
,{idx: 41, text: `The name of a pizza place you should never order from`}
,{idx: 42, text: `A not-very-scary name for a pirate`}
,{idx: 43, text: `Come up with a name for a beer made especially for monkeys`}
,{idx: 44, text: `The best thing about living in an igloo`}
,{idx: 45, text: `The worst way to be murdered`}
,{idx: 46, text: `Something you shouldn't get your significant other for Valentine's Day`}
,{idx: 47, text: `A dangerous thing to do while driving`}
,{idx: 48, text: `Something you shouldn't wear to a job interview`}
,{idx: 49, text: `The #1 reason penguins can't fly`}
,{idx: 50, text: `Using only two words, a new state motto for Texas`}
,{idx: 51, text: `The hardest thing about being Batman`}
,{idx: 52, text: `A great way to kill time at work`}
,{idx: 53, text: `Come up with a really bad TV show that starts with Baby`}
,{idx: 54, text: `Why does the Tower of Pisa lean?`}
,{idx: 55, text: `What's wrong with these kids today?`}
,{idx: 56, text: `A great new invention that starts with Automatic`}
,{idx: 57, text: `Come up with a really bad football penalty that begins with Intentional`}
,{idx: 58, text: `A Starbucks coffee that should never exist`}
,{idx: 59, text: `There's Gryffindor, Ravenclaw, Slytherin, and Hufflepuff, but what's the Hogwarts house few have ever heard of?`}
,{idx: 60, text: `The worst words to say for the opening of a eulogy at a funeral`}
,{idx: 61, text: `Something you should never use as a scarf`}
,{idx: 62, text: `Invent a holiday that you think everyone would enjoy`}
,{idx: 63, text: `The best news you could get today`}
,{idx: 64, text: `Usually, it's bacon,lettuce and tomato, but come up with a BLT you wouldn't want to eat`}
,{idx: 65, text: `The worst thing you could stuff a bed mattress with`}
,{idx: 66, text: `A great opening line to start a conversation with a stranger at a party`}
,{idx: 67, text: `Something you would like to fill a swimming pool with`}
,{idx: 68, text: `Miley Cyrus' Wi-Fi password, possibly`}
,{idx: 69, text: `If you were allowed to name someone else's baby any weird thing you wanted, what would you name it?`}
,{idx: 70, text: `A fun thing to think about during mediocre sex`}
,{idx: 71, text: `You know you're in for a bad taxi ride when "BLANK"`}
,{idx: 72, text: `Where do babies come from?`}
,{idx: 73, text: `The terrible fate of the snowman Olaf in a director's cut of "Frozen"`}
,{idx: 74, text: `Sometimes, after a long day, you just need to "BLANK"`}
,{idx: 75, text: `The worst way to spell Mississippi`}
,{idx: 76, text: `Give me one good reason why I shouldn't spank you right now`}
,{idx: 77, text: `The best pick-up line for an elderly singles mixer`}
,{idx: 78, text: `A good stage name for a chimpanzee stripper`}
,{idx: 79, text: `The best place to bury all those bodies`}
,{idx: 80, text: `One place a finger shouldn't go`}
,{idx: 81, text: `Come up with a name for the most difficult yoga pose known to mankind`}
,{idx: 82, text: `What's lurking under your bed when you sleep?`}
,{idx: 83, text: `The name of a canine comedy club with puppy stand-up comedians`}
,{idx: 84, text: `A great name for a nude beach in Alaska`}
,{idx: 85, text: `Make up the title of a movie that is based on the first time you had sex`}
,{idx: 86, text: `A vanity license plate a jerk in an expensive car would get`}
,{idx: 87, text: `A good fake name to use when checking into a hotel`}
,{idx: 88, text: `A good catchphrase to yell every time you finish pooping`}
,{idx: 89, text: `Your personal catchphrase if you were on one of those "Real Housewives" shows`}
,{idx: 90, text: `The Katy Perry Super Bowl halftime show would have been better with "BLANK"`}
,{idx: 91, text: `Okay... fine! What do YOU want to talk about then?!!!`}
,{idx: 92, text: `Miller Lite beer would make a lot of money if they came up with a beer called Miller Lite _____`}
,{idx: 93, text: `Something you should never stick up your butt`}
,{idx: 94, text: `A terrible name for a clown`}
,{idx: 95, text: `An inappropriate thing to do at a cemetery`}
,{idx: 96, text: `Like chicken fingers or chicken poppers, a new appetizer name for your fun, theme restaurant: chicken _____`}
,{idx: 97, text: `Thing you'd be most surprised to have a dentist a find in your mouth`}
,{idx: 98, text: `Rename Winnie-the-Pooh to something more appropriate/descriptive`}
,{idx: 99, text: `Name the sequel to "Titanic" if there were one. "Titanic 2: "BLANK""`}
,{idx: 100, text: `An alternate use for a banana`}
,{idx: 101, text: `What you'd guess is an unadvertised ingredient in most hot dogs`}
,{idx: 102, text: `Name your new haircutting establishment`}
,{idx: 103, text: `Something that would make an awful hat`}
,{idx: 104, text: `How many monkeys is too many monkeys?`}
,{idx: 105, text: `Something you'd be surprised to see a donkey do`}
,{idx: 106, text: `The title you'd come up with if you were writing the Olympics theme song`}
,{idx: 107, text: `Something you should never say to your mother`}
,{idx: 108, text: `Come up with a name for a new, very manly cocktail`}
,{idx: 109, text: `Where's the best place to hide from the shadow monsters?`}
,{idx: 110, text: `The three ingredients in the worst smoothie ever`}
,{idx: 111, text: `The best thing to use when you're out of toilet paper`}
,{idx: 112, text: `Come up with a catchier, more marketable name for the Bible`}
,{idx: 113, text: `The most presidential name you can think of (that isn't already the name of a president)`}
,{idx: 114, text: `A good way to get fired`}
,{idx: 115, text: `If we can't afford to bury or cremate you, what should we do with your body?`}
,{idx: 116, text: `Name the eighth dwarf, who got cut at the last minute`}
,{idx: 117, text: `A good place to hide boogers`}
,{idx: 118, text: `Come up with the name for a new TV show with the word Spanky in it`}
,{idx: 119, text: `A fun trick to play on the Pope`}
,{idx: 120, text: `Where do you think the beef really is?`}
,{idx: 121, text: `Something it'd be fun to throw off the Eiffel Tower`}
,{idx: 122, text: `Write a newspaper headline that will really catch people's attention`}
,{idx: 123, text: `The worst job title that starts with Assistant`}
,{idx: 124, text: `The last person you'd consider inviting to your birthday party`}
,{idx: 125, text: `The grossest thing you'd put in your mouth for $18`}
,{idx: 126, text: `What John Goodman's belches smell like`}
,{idx: 127, text: `The name of a new perfume by Betty White`}
,{idx: 128, text: `The worst name for a robot`}
,{idx: 129, text: `The first names of each of your nipples`}
,{idx: 130, text: `The most embarrassing name for a dog`}
,{idx: 131, text: `The worst thing you could discover in your burrito`}
,{idx: 132, text: `One thing never to do on a first date`}
,{idx: 133, text: `Ozzy Osbourne's Twitter password, probably`}
,{idx: 134, text: `Who let the dogs out?`}
,{idx: 135, text: `What do vegans taste like?`}
,{idx: 136, text: `An item NOT found in Taylor Swift's purse`}
,{idx: 137, text: `Name a new reggae band made up entirely of chickens`}
,{idx: 138, text: `Name a children's book by someone who hates children`}
,{idx: 139, text: `The name of your new plumbing company`}
,{idx: 140, text: `Make up a word that describes the sound of farting into a bowl of mac & cheese`}
,{idx: 141, text: `A new ice cream flavor that no one would ever order`}
,{idx: 142, text: `Name a new movie starring a talking goat who is president of the United States`}
,{idx: 143, text: `Something that would not work well as a dip for tortilla chips`}
,{idx: 144, text: `If God has a sense of humor, he welcomes people to heaven by saying, "BLANK"`}
,{idx: 145, text: `The name of a clothing store for overweight leprechauns`}
,{idx: 146, text: `Something upsetting you could say to the cable guy as he installs your television service`}
,{idx: 147, text: `The worst thing that could jump out of a bachelor party cake`}
,{idx: 148, text: `A terrible theme for a high school prom`}
,{idx: 149, text: `Make up a name for a silent-film porno from the 1920s`}
,{idx: 150, text: `Something you should not whisper to your grandmother`}
,{idx: 151, text: `A terrible name for a 1930s gangster`}
,{idx: 152, text: `Brand name of a bottled water sold in the land of Oz`}
,{idx: 153, text: `A fun thing to yell as a baby is being born`}
,{idx: 154, text: `The worst family secret that could come out over Thanksgiving dinner`}
,{idx: 155, text: `The name of a toilet paper specifically designed for the Queen of England`}
,{idx: 156, text: `Something you'd probably find a lot of in God's refrigerator`}
,{idx: 157, text: `The worst person to narrate the audiobook of "Fifty Shades of Grey"`}
,{idx: 158, text: `A lawn decoration sure to make the neighbors mad`}
,{idx: 159, text: `The worst thing to say when trying to adopt a pet`}
,{idx: 160, text: `A good name for an erotic bakery`}
,{idx: 161, text: `People wouldn't respect He-Man as much if, to gain his power, he held up his sword and shouted ____________________`}
,{idx: 162, text: `Fun thing to do if locked in the mall overnight`}
,{idx: 163, text: `The worst person to receive a sponge bath from`}
,{idx: 164, text: `Pants would be a whole lot better if they "BLANK"`}
,{idx: 165, text: `The most awesome Guinness World Record to break`}
,{idx: 166, text: `A little-known way to get gum out of your hair`}
,{idx: 167, text: `It's bad to be buried alive. It's worse to be buried alive with "BLANK".`}
,{idx: 168, text: `Something that would not work as well as skis`}
,{idx: 169, text: `A rejected title for "The Good, The Bad and the Ugly" was "The Good, the Bad and the "BLANK""`}
,{idx: 170, text: `A rejected name for a ship in the U.S. Naval Fleet: the USS "BLANK"`}
,{idx: 171, text: `What to say to get out of jury duty`}
,{idx: 172, text: `What the Statue of Liberty is hiding beneath that robe`}
,{idx: 173, text: `There's only one time that murder is acceptable and that is when "BLANK"`}
,{idx: 174, text: `Take any well-known restaurant and slightly change its name to something inappropriate`}
,{idx: 175, text: `Little-known fact: The government allows peanut butter to contain up to 10% "BLANK"`}
,{idx: 176, text: `A good sign that your house is haunted`}
,{idx: 177, text: `A catchy name for a sperm bank`}
,{idx: 178, text: `A bad occupation for a robot to have`}
,{idx: 179, text: `A sequel to the painting Dogs Playing Poker`}
,{idx: 180, text: `The Tooth Fairy's other job`}
,{idx: 181, text: `Little-known fact: A secret area in the White House is the "BLANK" room`}
,{idx: 182, text: `An invention by Thomas Edison that never caught on`}
,{idx: 183, text: `A bad place to skinny-dip`}
,{idx: 184, text: `What time is it?`}
,{idx: 185, text: `A birthday present you shouldn't get for your grandmother`}
,{idx: 186, text: `A short motto everyone should live by`}
,{idx: 187, text: `Invent a Christmas tradition sure to catch on`}
,{idx: 188, text: `A bad thing to yell during church`}
,{idx: 189, text: `The unsexiest thought you can have`}
,{idx: 190, text: `A good improvement to make to Mt. Rushmore`}
,{idx: 191, text: `The best way to start your day`}
,{idx: 192, text: `The worst name for a summer camp`}
,{idx: 193, text: `Something that's made worse by adding cheese`}
,{idx: 194, text: `Three things are certain in life: Death, Taxes, and "BLANK"`}
,{idx: 195, text: `A faster way to get home from the Land of Oz is to click your heels three times and say "BLANK".`}
,{idx: 196, text: `The first commandment in the new religion you started`}
,{idx: 197, text: `Come up with a name for a rock band made up entirely of baby ducks`}
,{idx: 198, text: `Something that is currently legal that should be banned`}
,{idx: 199, text: `A word that should never follow Beef`}
,{idx: 200, text: `The perfect song to hum on the toilet`}
,{idx: 201, text: `A bad thing to say to a cop as he writes you a speeding ticket`}
,{idx: 202, text: `Something you shouldn't buy off of Craigslist`}
,{idx: 203, text: `Take any U.S. president's name and turn it into something inappropriate`}
,{idx: 204, text: `We can all agree that "BLANK"`}
,{idx: 205, text: `The name you would give to a really mopey pig`}
,{idx: 206, text: `A great name to have on a fake I.D.`}
,{idx: 207, text: `What robots dream about`}
,{idx: 208, text: `What really happened to Amelia Earhart`}
,{idx: 209, text: `How far is too far?`}
,{idx: 210, text: `If at first you don't succeed...`}
,{idx: 211, text: `Finish this sentence: When I'm rich, my mansion will have a room called The "BLANK" Room.`}
,{idx: 212, text: `Something you'd be surprised to see come out of a pimple you pop`}
,{idx: 213, text: `Today's music needs more "BLANK"`}
,{idx: 214, text: `A fun trick to play on your doctor`}
,{idx: 215, text: `A bad place for your rocket ship to crash would be The Planet of the "BLANK"`}
,{idx: 216, text: `A bad campaign slogan for a congressperson`}
,{idx: 217, text: `The coolest way to die`}
,{idx: 218, text: `Two people from history that should definitely have sex`}
,{idx: 219, text: `The name of an all-male version of Hooters`}
,{idx: 220, text: `A little-known nickname for New Orleans`}
,{idx: 221, text: `The next product for Matthew McConaughey to endorse`}
,{idx: 222, text: `A unique way to escape from prison`}
,{idx: 223, text: `The title of a new YouTube cat video that's sure to go viral`}
,{idx: 224, text: `A gift nobody would want: The "BLANK" of the Month Club`}
,{idx: 225, text: `A just-so-crazy-it's-brilliant business idea to pitch on "Shark Tank"`}
,{idx: 226, text: `A terrifying fortune cookie fortune`}
,{idx: 227, text: `It would be scary to read on a food package, May contain trace elements of "BLANK".`}
,{idx: 228, text: `What a dog sext message might say`}
,{idx: 229, text: `Something the devil is afraid of`}
,{idx: 230, text: `CBS should air a TV show about lawyers who are also "BLANK"`}
,{idx: 231, text: `A great thing to yell before jumping out of an airplane`}
,{idx: 232, text: `What you hope the Mars Rover finds`}
,{idx: 233, text: `A TMZ headline you really want to see`}
,{idx: 234, text: `Something that will get you thrown out of a Wendy's`}
,{idx: 235, text: `A rejected phrase for one of those Valentine heart candies`}
,{idx: 236, text: `Where missing socks go`}
,{idx: 237, text: `The first sign that you're old`}
,{idx: 238, text: `The name of a cocktail for hillbillies`}
,{idx: 239, text: `Graffiti you might find in a kindergarten`}
,{idx: 240, text: `The worst thing to wear to your court trial`}
,{idx: 241, text: `A rejected crayon color`}
,{idx: 242, text: `An angry review you'd give this game`}
,{idx: 243, text: `Bad advice for new graduates`}
,{idx: 244, text: `The best way to tell if someone is dead`}
,{idx: 245, text: `A terrible talent to have for the Miss America Pageant`}
,{idx: 246, text: `Tomorrow's news headline: Scientists Are Shocked to Discover That "BLANK"`}
,{idx: 247, text: `The worst material with which to make a snowman`}
,{idx: 248, text: `A terrible sportscaster catchphrase for when somebody dunks a basketball`}
,{idx: 249, text: `The first thing a pig would say if it could talk`}
,{idx: 250, text: `A surprising job entry on Abraham Lincoln's resume`}
,{idx: 251, text: `The worst shape for an animal cracker`}
,{idx: 252, text: `A weird thing to find in your grandparents' bedside table`}
,{idx: 253, text: `The worst name for a big and tall store`}
,{idx: 254, text: `Something you'd yell to heckle the performing dolphins at Sea World`}
,{idx: 255, text: `A new name for kumquats`}
,{idx: 256, text: `The name of a shampoo for hippies`}
,{idx: 257, text: `The real secret to living to age 100`}
,{idx: 258, text: `What really happens if you tear off that mattress tag`}
,{idx: 259, text: `A bad first line for your presidential inauguration speech`}
,{idx: 260, text: `A fun thing to do with a bowl of pudding`}
,{idx: 261, text: `Another use for cooked spaghetti`}
,{idx: 262, text: `A weird physical way to greet someone`}
,{idx: 263, text: `The worst name for a tanning salon`}
,{idx: 264, text: `The worst word that can come before fart`}
,{idx: 265, text: `A bad substitute for a toothbrush`}
,{idx: 266, text: `A trick you shouldn't teach your dog`}
,{idx: 267, text: `Something you can only do in a Walmart if no one's looking`}
,{idx: 268, text: `A name for a really cheap hotel`}
,{idx: 269, text: `The second thing said on the moon`}
,{idx: 270, text: `Why so serious?`}
,{idx: 271, text: `A tourist attraction in Hell`}
,{idx: 272, text: `The worst name for a mountain`}
,{idx: 273, text: `A thought that keeps Santa Claus awake at night`}
,{idx: 274, text: `The best thing about being really dumb`}
,{idx: 275, text: `Come up with a name for a salad dressing by Lindsay Lohan`}
,{idx: 276, text: `What they call pooping in the Land of Oz`}
,{idx: 277, text: `A completely wrong way to spell Jennifer Aniston`}
,{idx: 278, text: `The worst way to remove pubic hair`}
,{idx: 279, text: `You know you're really drunk when...`}
,{idx: 280, text: `The best way to defeat terrorism is...`}
,{idx: 281, text: `An animal Noah shouldn't have saved`}
,{idx: 282, text: `The biggest secret the government keeps`}
,{idx: 283, text: `The password to the secret, high-society sex club down the street`}
,{idx: 284, text: `Another use for gravy`}
,{idx: 285, text: `The worst name for a rap artist`}
,{idx: 286, text: `An angry internet comment on a pet store's website`}
,{idx: 287, text: `A rejected shape for Marshmallow Peeps`}
,{idx: 288, text: `Something that should never be homemade`}
,{idx: 289, text: `The worst name for a funeral home`}
,{idx: 290, text: `What Chewbacca has really been yelling all these years`}
,{idx: 291, text: `An item on every pervert's grocery list`}
,{idx: 292, text: `The worst car feature that ends with holder`}
,{idx: 293, text: `A Tweet from a caveman`}
,{idx: 294, text: `Knock, knock! Who's there? "BLANK"`}
,{idx: 295, text: `A great nickname for your armpit hair`}
,{idx: 296, text: `Pick any city name and make it sound dirty`}
,{idx: 297, text: `What you want your gravestone to read`}
,{idx: 298, text: `A slogan to get everyone excited about corn`}
,{idx: 299, text: `It never ends well when you mix "BLANK" and "BLANK"`}
,{idx: 300, text: `The best reason to go to Australia`}
,{idx: 301, text: `The beauty pageant no one wants to see: Miss "BLANK"`}
,{idx: 302, text: `The perfect meal would be a "BLANK" stuffed in a "BLANK" stuffed in a "BLANK"`}
,{idx: 303, text: `What's black and white and red all over?`}
,{idx: 304, text: `A little-known fact about the Jolly Green Giant`}
,{idx: 305, text: `The worst thing to find growing on your neck`}
,{idx: 306, text: `USA! USA! America is still number one in...`}
,{idx: 307, text: `A good name for an elderly nudist colony`}
,{idx: 308, text: `You should never "BLANK" and "BLANK" at the same time`}
,{idx: 309, text: `What is a tree thinking all day?`}
,{idx: 310, text: `What you call a baby sasquatch`}
,{idx: 311, text: `A good name for a sex robot`}
,{idx: 312, text: `A bad reason to call 911`}
,{idx: 313, text: `Name the next big sexually transmitted disease`}
,{idx: 314, text: `The worst thing about Canada`}
,{idx: 315, text: `A strange thing to keep as a pet`}
,{idx: 316, text: `What kittens would say if they could talk`}
,{idx: 317, text: `A sign you probably shouldn't put up in your yard`}
,{idx: 318, text: `What dogs think when they see people naked`}
,{idx: 319, text: `The sound a tree actually makes when it falls and no one is around to hear it`}
,{idx: 320, text: `The grossest thing you could find at the bottom of a swimming pool`}
,{idx: 321, text: `What happens to circumcision skin`}
,{idx: 322, text: `The worst name for an SUV`}
,{idx: 323, text: `A good use for toenail clippings`}
,{idx: 324, text: `The title of the most boring porno ever`}
,{idx: 325, text: `Something you shouldn't stuff with cheese`}
,{idx: 326, text: `Something Godzilla does when he's drunk`}
,{idx: 327, text: `Trash talk you would hear at a chess meet`}
,{idx: 328, text: `A kinky weird thing that does NOT happen in 50 Shades of Grey (as far as you know)`}
,{idx: 329, text: `The best part about being Donald Trump`}
,{idx: 330, text: `Tip: Never eat at a place called Kentucky Fried "BLANK"`}
,{idx: 331, text: `Something overheard at the Last Supper`}
,{idx: 332, text: `The name of a species of dinosaur you wouldn't want to meet`}
,{idx: 333, text: `The worst way to fly: "BLANK" Airlines`}
,{idx: 334, text: `So... what was that movie "Birdman" about anyway?`}
,{idx: 335, text: `Little-known fact: Over the course of a lifetime, an average person accidentally eats ten "BLANK"`}
,{idx: 336, text: `A great pet name for a parasitic worm that lives in your ear`}
,{idx: 337, text: `A prank the Supreme Court Justices probably play on each other`}
,{idx: 338, text: `A crazy thing to find during a colonoscopy`}
,{idx: 339, text: `A word that should be in the dictionary but isn't`}
,{idx: 340, text: `Advice: Never stick your tongue into "BLANK"`}
,{idx: 341, text: `The perfect name for a second head that sprouts on your shoulder`}
,{idx: 342, text: `Something a weatherman might yell if he completely snapped during the weather forecast`}
,{idx: 343, text: `The worst advice a doctor could give`}
,{idx: 344, text: `Life hack! Lower your heating bills by...`}
,{idx: 345, text: `The worst thing that could crawl out of your toilet`}
,{idx: 346, text: `No one would guess this is where the treasure is buried`}
,{idx: 347, text: `What your dog thinks when he sees you naked`}
,{idx: 348, text: `How Garfield the cartoon cat will eventually die`}
,{idx: 349, text: `The worst pizza is "BLANK"-style pizza`}
,{idx: 350, text: `What to do when your parachute fails`}
,{idx: 351, text: `Sleepwalking can be a problem but it's not as bad as sleep"BLANK"`}
,{idx: 352, text: `A good name for a dog country singer`}
,{idx: 353, text: `Little-known fact: the fourth Wise Man gave baby Jesus the worst gift of all: "BLANK"`}
,{idx: 354, text: `A theme for a desk calendar that wouldn't sell very well`}
,{idx: 355, text: `A good name for a restaurant that serves animals with the faces still on them`}
,{idx: 356, text: `This just in! A "BLANK" has won the election and will become the new governor of Texas.`}
,{idx: 357, text: `The worst Halloween costume for a young child`}
,{idx: 358, text: `A lesser-known ingredient in most microwave pizza pockets`}
,{idx: 359, text: `A better name for the Washington Monument`}
,{idx: 360, text: `A terrible food truck would be one that goes around selling only "BLANK"`}
,{idx: 361, text: `The worst thing to overhear during your surgery`}
,{idx: 362, text: `A better name for dandruff`}
,{idx: 363, text: `The liquid that would make for the worst salad dressing`}
,{idx: 364, text: `Paul Bunyan's replacement for Babe The Blue Ox when he dies`}
,{idx: 365, text: `Make up a word that means "to make up a word"`}
,{idx: 366, text: `The name of Jesus' 13th apostle`}
,{idx: 367, text: `Something you don't want to find in your Christmas stocking`}
,{idx: 368, text: `George W. Bush and Dick Cheney's rap duo name`}
,{idx: 369, text: `The most bitching thing you can airbrush on your van`}
,{idx: 370, text: `Something you probably shouldn't bring on a trip across the Sahara desert`}
,{idx: 371, text: `Something you'd love to smash with a wrecking ball`}
,{idx: 372, text: `Life would be so much better if we all lived in "BLANK"`}
,{idx: 373, text: `What deer would use for bait if they hunted hunters`}
,{idx: 374, text: `The best name for an obese rapper`}
,{idx: 375, text: `If animals took over, an exhibit you'd see at the human zoo`}
,{idx: 376, text: `A magazine that should never have a nude centerfold`}
,{idx: 377, text: `Make up a word for the watery substances that come out of a ketchup bottle when you first squeeze it`}
,{idx: 378, text: `A better name for the game Duck Duck Goose`}
,{idx: 379, text: `The worst children's board game would be "BLANK", "BLANK" Hippos`}
,{idx: 380, text: `The world's most boring video game`}
,{idx: 381, text: `The difference between Grade A beef and Grade B beef`}
,{idx: 382, text: `A weird thing for the letters in your alphabet soup to suddenly spell out`}
,{idx: 383, text: `A great prank to play on a pizza delivery guy`}
,{idx: 384, text: `The most surprising thing you could find in the glove box of a rental car`}
,{idx: 385, text: `Four-leaf clovers are lucky. But if you find a five-leaf clover...`}
,{idx: 386, text: `The only job you would do for free`}
,{idx: 387, text: `The most German-sounding word you can invent`}
,{idx: 388, text: `The worst name for a country music singer`}
,{idx: 389, text: `It would be really weird to have a bobblehead doll of BLANK`}
,{idx: 390, text: `If you can't say anything nice...`}
,{idx: 391, text: `The title of Bob Saget's biopic`}
,{idx: 392, text: `The perfect time to wear stilts`}
,{idx: 393, text: `Little-known fact: In a lifetime, the average person will BLANK over 1,000 times while sleeping`}
,{idx: 394, text: `A rejected name for tater tots`}
,{idx: 395, text: `On the seventh day, God rested. On the eighth day, he BLANK`}
,{idx: 396, text: `A weird reason to have your car recalled`}
,{idx: 397, text: `You should always wear a helmet when BLANK`}
,{idx: 398, text: `Few remember Michelangelo's <i>Mona Lisa 2</i> which was a painting of BLANK`}
,{idx: 399, text: `Something a kangaroo might search for on Google`}
,{idx: 400, text: `A bad substitute for a surfboard`}
,{idx: 401, text: `Where would you live if you were two inches tall?`}
,{idx: 402, text: `What to do when a really tall person sits in front of you at the movie theater`}
,{idx: 403, text: `An entry in teenage Tarzan's diary: "Today, I BLANK"`}
,{idx: 404, text: `The absolute best place to hide your house key`}
,{idx: 405, text: `A strange place to go to while wearing a ski mask`}
,{idx: 406, text: `What those giant Easter Island heads are thinking`}
,{idx: 407, text: `So, how do you like it?`}
,{idx: 408, text: `What ruined Hannibal "The Cannibal" Lecter's credit score?`}
,{idx: 409, text: `What the lamest Transformer would morph into`}
,{idx: 410, text: `You would gladly give money to someone on the street if they asked "Can you spare some change so I can BLANK?"`}
,{idx: 411, text: `SPOILER ALERT: The big plot twist in <i>The Sisterhood of the Traveling Pants 7</i> is that the pants BLANK`}
,{idx: 412, text: `You know you're a spoiled brat when your tree house has a BLANK`}
,{idx: 413, text: `What King Kong is most self-conscious about`}
,{idx: 414, text: `The only reason to ever play a banjo`}
,{idx: 415, text: `The big conspiracy that nobody even suspects is BLANK`}
,{idx: 416, text: `How Jonah passed the time stuck inside a giant fish`}
,{idx: 417, text: `Something that the Keebler Elves chant during a strike`}
,{idx: 418, text: `The title of the most popular TV show in North Korea, probably`}
,{idx: 419, text: `A quick way to annoy Pat Sajak while playing <i>Wheel of Fortune</i>`}
,{idx: 420, text: `The title of a National Public Radio show that would put you to sleep the quickest`}
,{idx: 421, text: `Where the missing sock in the dryer ends up going`}
,{idx: 422, text: `The worst part about being seven feet tall`}
,{idx: 423, text: `A really weird protest sign would be "End BLANK Now!"`}
,{idx: 424, text: `How you can tell your new, all-vegetable diet is working`}
,{idx: 425, text: `If Cap'n Crunch ever gets court-martialed, it'll probably be because he...`}
,{idx: 426, text: `Where in the world is Carmen Sandiego? `}
,{idx: 427, text: `The name of a band in which every member plays the spoons`}
,{idx: 428, text: `A little-known use for ear wax`}
,{idx: 429, text: `The type of life they'll probably find on Mars`}
,{idx: 430, text: `The name of a board game for players age 70 & older `}
,{idx: 431, text: `Bob the Builder probably wouldn't be as popular with children if he were Bob the BLANK`}
,{idx: 432, text: `The worst thing to do when a bear is right next to you`}
,{idx: 433, text: `Unlike "Maverick" or "Iceman," a really bad Air Force fighter pilot name would be BLANK`}
,{idx: 434, text: `It would've been a much different movie if instead of "Phone home," E.T. kept saying, "BLANK"`}
,{idx: 435, text: `A weird way to dry your hair`}
,{idx: 436, text: `A new name for the U.S. Congress `}
,{idx: 437, text: `What Adam thought when he first met Eve`}
,{idx: 438, text: `What do ceramic garden gnomes do at night?`}
,{idx: 439, text: `A mystery that Sherlock Holmes could never solve: The Case of the BLANK`}
,{idx: 440, text: `The real secret to a happy marriage is...`}
,{idx: 441, text: `A rejected name for the game Yahtzee`}
,{idx: 442, text: `The best thing to blurt out in order to ruin a beautiful sunset`}
,{idx: 443, text: `A mobster's pet peeve`}
,{idx: 444, text: `You know you're comfortable in a relationship when you ask your significant other to BLANK`}
,{idx: 445, text: `The best line to say when you come out of a 10-year coma `}
,{idx: 446, text: `The real reason Mr. Clean is grinning`}
,{idx: 447, text: `The best name to give an ugly baby`}
,{idx: 448, text: `The first thing Abraham Lincoln would do if he came back from the dead`}
,{idx: 449, text: `Come up with a <i>TMZ</i> celebrity headline from five years in the future`}
,{idx: 450, text: `What the roller coaster attendant is actually saying during his mumbled preamble before the ride`}
,{idx: 451, text: `An ad slogan for cardboard: "Now with more BLANK" `}
,{idx: 452, text: `The most annoying person in a movie theater would BLANK`}
,{idx: 453, text: `A rejected Monopoly game piece `}
,{idx: 454, text: `A terrible sign-off line for a newscaster`}
,{idx: 455, text: `A good sign that you may be a ghost`}
,{idx: 456, text: `The creepiest thing to whisper in somebody's ear as you're hugging them`}
,{idx: 457, text: `A better name for the ukulele`}
,{idx: 458, text: `What happens when Wile E. Coyote finally catches The Road Runner?`}
,{idx: 459, text: `What the Queen's Guard is secretly thinking as they just stand there`}
,{idx: 460, text: `The worst part about having a mustache`}
,{idx: 461, text: `An awkward thing to hear from the person pooping in the bathroom stall next to you`}
,{idx: 462, text: `A quick way to save money on grocery bills`}
,{idx: 463, text: `A good sign you're never going to be a professional football player`}
,{idx: 464, text: `The worst Viking: Eric the BLANK`}
,{idx: 465, text: `How they really select the next Pope`}
,{idx: 466, text: `The name of a new cologne inspired by celebrity chef Guy Fieri`}
,{idx: 467, text: `A great way to quickly get out of credit card debt`}
,{idx: 468, text: `The worst upstairs neighbors would be people that BLANK`}
,{idx: 469, text: `The weirdest message your cat could write out to you in its litter box`}
,{idx: 470, text: `A good nickname for your abs`}
,{idx: 471, text: `The lesser-known sequel to <i>Old Yeller</i>: <i>Old Yeller 2: BLANK</i>`}
,{idx: 472, text: `A horrible pick-up line`}
,{idx: 473, text: `The best way to keep a co-worker from stealing your lunch`}
,{idx: 474, text: `The least scary horror movie: <i>Night of the BLANK</i>`}
,{idx: 475, text: `The worst thing to find when you move into a new house`}
,{idx: 476, text: `The worst carnival prize you could win`}
,{idx: 477, text: `The most unusual environmental cause is "BLANK the Whales"`}
,{idx: 478, text: `The only thing worse than standing in a really long line is standing in a really long line for BLANK`}
,{idx: 479, text: `You wake up 100 years in the future and are shocked to find BLANK`}
,{idx: 480, text: `A weird thing for a preacher to say to end every sermon`}
,{idx: 481, text: `A rejected tourism slogan for Des Moines, Iowa: "Home of the BLANK"`}
,{idx: 482, text: `A forgotten book in the classic Harry Potter series: <i>Harry Potter and the BLANK</i>`}
,{idx: 483, text: `The weirdest thing a restroom attendant could offer you`}
,{idx: 484, text: `The worst Thanksgiving Day balloon would be a giant, inflatable BLANK`}
,{idx: 485, text: `The big, crazy twist at the end of the next M. Night Shamalayan movie: He was BLANK the whole time!`}
,{idx: 486, text: `Most people know it as The Big Apple, but a lesser-known nickname for New York is The Big BLANK`}
,{idx: 487, text: `The next best thing to chew when you're out of gum`}
,{idx: 488, text: `You know you're in a very weird fast food restaurant when the cashier asks, "Do you want BLANK with that?"`}
,{idx: 489, text: `It's not the heat. It's not the humidity. It's the BLANK`}
,{idx: 490, text: `It's incredibly rude to BLANK with your mouth open`}
,{idx: 491, text: `You never have a BLANK when you need one`}
,{idx: 492, text: `<i>The Empire Strikes Back</i> would've been ruined if Darth Vader said "Luke, I am BLANK"`}
,{idx: 493, text: `The worst 1960s teen movie was definitely <i>BLANK Beach</i>`}
,{idx: 494, text: `The most disgusting breakfast cereal: BLANK Flakes`}
,{idx: 495, text: `In the next big sports scandal, we'll find out that BLANK`}
,{idx: 496, text: `Worse than global warming, the real threat to humanity is global BLANK`}
,{idx: 497, text: `Forget dogs. What is really man's best friend?`}
,{idx: 498, text: `How you can tell it's a doctor's first day on the job`}
,{idx: 499, text: `The worst name for an all-girl band`}
,{idx: 500, text: `A bad thing to say to your date's parents`}
,{idx: 501, text: `Pitch the worst video game idea in five words or less`}
,{idx: 502, text: `How embarrassing for you. You just BLANK`}
,{idx: 503, text: `The worst mistake you could make while streaming on Twitch.tv`}
,{idx: 504, text: `The worst song to do pairs figure skating to`}
,{idx: 505, text: `What landed you in the emergency room this time?`}
,{idx: 506, text: `The worst thing to say during a job interview`}
,{idx: 507, text: `A magazine category that hasn't been invented yet`}
,{idx: 508, text: `The top 3 ingredients in garbage truck juice`}
,{idx: 509, text: `A really bad superhero power`}
,{idx: 510, text: `The worst thing to put on a pizza`}
,{idx: 511, text: `If evolution is true, then why hasn't BLANK evolved into BLANK?`}
,{idx: 512, text: `R2D2's biggest complaint`}
,{idx: 513, text: `Come up with a bad tourism slogan for the Old Faithful geyser`}
,{idx: 514, text: `The worst possible choice for the person on the new $20 bill`}
,{idx: 515, text: `A little-known lyric in the original draft of the "Star-Spangled Banner"`}
,{idx: 516, text: `The best thing to shoot out of a cannon`}
,{idx: 517, text: `The winners on <i>The Bachelor</i> get a rose. The losers should get BLANK`}
,{idx: 518, text: `From the creators of "Whack-a-Mole" comes the new game "BLANK-a-BLANK"`}
,{idx: 519, text: `The title of a never-released Jimmy Buffett song`}
,{idx: 520, text: `The worst thing to hear from your GPS: "In two miles, BLANK"`}
,{idx: 521, text: `The weirdest sentence a judge could impose`}
,{idx: 522, text: `A fitting punishment for people who double-dip their chips`}
,{idx: 523, text: `America's energy crisis would be over if we made cars that ran on BLANK`}
,{idx: 524, text: `Something it'd be fun to watch ride an escalator `}
,{idx: 525, text: `A high school superlative you don't want to win: Most Likely To BLANK`}
,{idx: 526, text: `A rejected title for <i>Moby Dick</i>`}
,{idx: 527, text: `Something you do not want to find under your hotel bed`}
,{idx: 528, text: `You know your doctor has gone insane when he tells you to make sure you BLANK at least once a day`}
,{idx: 529, text: `The worst part about being a Teenage Mutant Ninja Turtle`}
,{idx: 530, text: `A sign that your kid isn't good at sports`}
,{idx: 531, text: `The first sign that you're no longer cool`}
,{idx: 532, text: `A video sure to get over 150 million views on YouTube would be "Chickens BLANK"`}
,{idx: 533, text: `A surprising thing to find stuck to the bottom of your shoe`}
,{idx: 534, text: `The worst thing that could follow "Honey-Roasted"`}
,{idx: 535, text: `Why are geese such jerks?`}
,{idx: 536, text: `A sign that you're a bad teacher`}
,{idx: 537, text: `The worst breakfast: pancakes shaped like BLANK`}
,{idx: 538, text: `What bears dream about all winter`}
,{idx: 539, text: `A good sign that you've drunk too much Mt. Dew`}
,{idx: 540, text: `What's in the box? WHAT'S  IN THE BOX?!`}
,{idx: 541, text: `The manliest way to start a conversation`}
,{idx: 542, text: `What the abominable snowman does when he's bored`}
,{idx: 543, text: `A good alternative for ping-pong paddles`}
,{idx: 544, text: `You know you're a chocoholic when...`}
,{idx: 545, text: `The worst reason to use a time machine`}
,{idx: 546, text: `Something you should not do while crowdsurfing`}
,{idx: 547, text: `What those bolts in Frankenstein's neck are for`}
,{idx: 548, text: `What Waldo from "Where's Waldo?" says to himself in the mirror`}
,{idx: 549, text: `The worst road trip would start with someone BLANK`}
,{idx: 550, text: `A creepy thing to write in your email signature line`}
,{idx: 551, text: `The only five words in your obituary in the newspaper`}
,{idx: 552, text: `What's the U.S. government really hiding in Area 51?`}
,{idx: 553, text: `The worst advice an IT guy could give`}
,{idx: 554, text: `A really bad name for an apartment complex: "BLANK Place"`}
,{idx: 555, text: `What should we do with all of that plastic that won't disintegrate?`}
,{idx: 556, text: `One thing that the rich truly enjoy is diamond-encrusted BLANK`}
,{idx: 557, text: `The best part of turning 100 years old`}
,{idx: 558, text: `The lesser-known other way to find the Wizard of Oz: Follow the BLANK Road`}
,{idx: 559, text: `Forget coffee. Don't talk to me until I've had my BLANK`}
,{idx: 560, text: `Odd new shampoo instructions: "Lather, Rinse, BLANK, Repeat."`}
,{idx: 561, text: `The worst magic trick`}
,{idx: 562, text: `The lost Hemingway book: <i>The Old Man and the BLANK</i>`}
,{idx: 563, text: `The title of a podcast you would never ever listen to`}
,{idx: 564, text: `The name of a new, terrifying species of spider`}
,{idx: 565, text: `The most annoying co-worker would constantly BLANK`}
,{idx: 566, text: `A surefire way to ruin Christmas`}
,{idx: 567, text: `The name of the worst baby doll`}
,{idx: 568, text: `"Don't blame me, I voted for BLANK."`}
,{idx: 569, text: `The name of a fast food restaurant in the Stone Age`}
,{idx: 570, text: `Dodgeball would be an even better sport if BLANK were allowed`}
,{idx: 571, text: `A BLANK a day keeps the doctor away`}
,{idx: 572, text: `What is the Abraham Lincoln statue thinking while he's sitting there in the Lincoln Memorial?`}
,{idx: 573, text: `Instead of "Cheese!" the worst family photographer would tell you to say, "BLANK!"`}
,{idx: 574, text: `The title of a college admission essay that would definitely get rejected`}
,{idx: 575, text: `Something Big Bird will confess on his deathbed`}
,{idx: 576, text: `What you would expect Justin Bieber's line of fragrances to smell like`}
,{idx: 577, text: `The last thing you'd want to find in your air ducts`}
,{idx: 578, text: `The worst college football team: The Fighting BLANK`}
,{idx: 579, text: `A terrible name for a dragon`}
,{idx: 580, text: `In the future, moviegoers will flock to see <i>Jurassic Park 10: BLANK</i>`}
,{idx: 581, text: `The worst way to unclog a toilet`}
,{idx: 582, text: `Something that's been hiding in the background in every episode of <i>Friends</i>`}
,{idx: 583, text: `We should combine Minnesota and Wisconsin and call them BLANK`}
,{idx: 584, text: `The name of a cable network that no one watches`}
,{idx: 585, text: `If the groundhog "kind of" sees his shadow, it's six weeks of BLANK`}
,{idx: 586, text: `What's really destroying the ozone layer?`}
,{idx: 587, text: `You know you're famous when...`}
,{idx: 588, text: `The absolute worst moment for a bird to poop on you`}
,{idx: 589, text: `A weird thing for someone to frame and hang on the wall`}
,{idx: 590, text: `The best thing to yell while going over Niagara Falls in a barrel `}
,{idx: 591, text: `What you don't want to hear from the passenger next to you at the start of a 20-hour flight`}
,{idx: 592, text: `Why ducks really fly south in the winter`}
,{idx: 593, text: `Where Charlie Brown winds up at age 45`}
,{idx: 594, text: `What a frog would say to his psychiatrist`}
,{idx: 595, text: `What is the Loch Ness Monster, really?`}
,{idx: 596, text: `The Pyramids would be even more impressive if they contained BLANK`}
,{idx: 597, text: `What Sam Elliott probably nicknames his mustache`}
,{idx: 598, text: `The worst theme for your kid's first dance recital`}
,{idx: 599, text: `The worst combination of two actors that could possibly star in the next season of <i>True Detective</i> together`}
,{idx: 600, text: `It's disappointing to put together a 1,000 piece puzzle and realize it's just a picture of BLANK`}
,{idx: 601, text: `The name of a law firm you shouldn't hire`}
,{idx: 602, text: `The worst thing to find frozen in an ice cube`}
,{idx: 603, text: `Something you don't expect to see when you spy on your neighbors`}
,{idx: 604, text: `An experiment mice actually like having performed on them`}
,{idx: 605, text: `A double rainbow doesn't have gold at the end of it. Instead, it has BLANK`}
,{idx: 606, text: `The best shirt to wear next to somebody who's wearing an "I'm with stupid" T-shirt`}
,{idx: 607, text: `The worst thing a plastic surgeon could say after he botched your surgery: "I'm sorry, I accidentally BLANK"`}
,{idx: 608, text: `The worst advice your boxing coach could give you`}
,{idx: 609, text: `What an alarm clock could say that would wake you right up`}
,{idx: 610, text: `A weird thing to hear from your doctor: "I'm afraid you have BLANK"`}
,{idx: 611, text: `In a shocking poll, it was discovered that three out of four Americans BLANK`}
,{idx: 612, text: `The most common thing you'd hear if you could read people's thoughts`}
,{idx: 613, text: `The name of a hairstyle that will never catch on`}
,{idx: 614, text: `A bad name for an Italian restaurant`}
,{idx: 615, text: `A realistic, honest fast-food slogan`}
,{idx: 616, text: `If a genie gives you three wishes, the best things to wish for are: 1) a billion dollars, 2) eternal life, and 3) BLANK`}
,{idx: 617, text: `The worst charity: Save the BLANK`}
,{idx: 618, text: `Little-known fact: An unaired episode of <i>The Brady Bunch</i> had the family dealing with BLANK`}
,{idx: 619, text: `The futuristic invention you can't wait to see exist`}
,{idx: 620, text: `What's really at the center of the Earth?`}
,{idx: 621, text: `Invent a new word for the toilet that sounds like it's from Shakespeare`}
,{idx: 622, text: `Safety tip! Don't eat a half hour before you BLANK`}
,{idx: 623, text: `The real way you can tell an alligator from a crocodile`}
,{idx: 624, text: `A very unnecessary surgery`}
,{idx: 625, text: `Survival tip! Start a fire by rubbing BLANK`}
,{idx: 626, text: `Helpful advice you would give to Super Mario`}
,{idx: 627, text: `In the future, scientists discover that the secret to eternal youth is BLANK`}
,{idx: 628, text: `Something you shouldn't use a chainsaw for`}
,{idx: 629, text: `A surprising purchase on Willy Wonka's credit card statement`}
,{idx: 630, text: `The worst album: "BLANK Sings the Blues"`}
,{idx: 631, text: `A really stupid idea for a phone app (that would still make you millions of dollars)`}
,{idx: 632, text: `The name of a new game show that sounds terrible`}
,{idx: 633, text: `The one thing you wish a politician would just say already`}
,{idx: 634, text: `A secret way to get stubborn ketchup out of the bottle`}
,{idx: 635, text: `The most surprising person to admit to being the Zodiac Killer`}
,{idx: 636, text: `A lesson that probably wouldn't be taught on <i>Sesame Street</i>`}
,{idx: 637, text: `Something you promise to yell if you win this game`}
,{idx: 638, text: `A creepy thing to find scribbled onto a dollar bill`}
,{idx: 639, text: `If you don't have extra money, an odd thing to use as a tip for your waiter`}
,{idx: 640, text: `The name of the next hot boy band`}
,{idx: 641, text: `A terrible name for a king`}
,{idx: 642, text: `A sure sign that a drifter has been secretly living in your house`}
,{idx: 643, text: `The name of a new U.S. state you would never visit`}
,{idx: 644, text: `The one thing that isn't better dipped in chocolate`}
,{idx: 645, text: `Like "dinger," "grand salami," and "jack," come up with a new slang term for a home run in baseball`}
,{idx: 646, text: `A terrible vacation idea: going to visit The Museum of BLANK`}
,{idx: 647, text: `A great gag gift would be an exploding BLANK`}
,{idx: 648, text: `The official medical term for belly button lint (probably)`}
,{idx: 649, text: `A surprising thing to hear in a nature documentary`}
,{idx: 650, text: `The years 2011 to 2020 will be remembered as "The BLANK Age"`}
,{idx: 651, text: `An inventive way to get rid of head lice`}
,{idx: 652, text: `Little-known fact: the scariest animal in the world is the BLANK cobra`}
,{idx: 653, text: `A bad name for a brand of hot sauce`}
,{idx: 654, text: `An excuse to avoid riding the mechanical bull`}
,{idx: 655, text: `What Big Foot complains about to his therapist the most`}
,{idx: 656, text: `The worst warning to read on some medicine you just swallowed`}
,{idx: 657, text: `A strange poster to hang in a college dorm room`}
,{idx: 658, text: `Never pay more than $3 for BLANK`}
,{idx: 659, text: `The name of a really bizarre diet that just never caught on`}
,{idx: 660, text: `The most popular T-shirt slogan in Mississippi, probably`}
,{idx: 661, text: `The hit song from the Broadway show <i>Fart: The Musical</i>`}
,{idx: 662, text: `A ridiculous government agency that no one knows about: The Department of BLANK`}
,{idx: 663, text: `The best thing about being thrown into a volcano`}
,{idx: 664, text: `New requirement at amusement parks: "You must be this BLANK to ride\"`}
,{idx: 665, text: `You probably shouldn't hire a moving company called BLANK`}
,{idx: 666, text: `The weirdest combination of three items that you could buy at the store`}
,{idx: 667, text: `The worst halftime show: The BLANK Dancers`}
,{idx: 668, text: `What's really in a camel's hump?`}
,{idx: 669, text: `The most obnoxious name someone could give their kid`}
,{idx: 670, text: `Something that is probably on Nicolas Cage's "To Do" list`}
,{idx: 671, text: `The newest health food: BLANK juice`}
,{idx: 672, text: `HR would probably get the most complaints on "Bring your BLANK to work" day`}
,{idx: 673, text: `A lesser-known Knight of the Round Table: Sir BLANK`}
,{idx: 674, text: `A Socrates quote that nobody bothered to write down`}
,{idx: 675, text: `Why is the sky blue?`}
,{idx: 676, text: `The best way to catch a leprechaun`}
,{idx: 677, text: `The worst things to juggle`}
,{idx: 678, text: `Turns out, the meaning of life is BLANK`}
,{idx: 679, text: `The worst tattoo to have on your forehead`}
,{idx: 680, text: `A mean text you would send to break up with a Muppet`}
,{idx: 681, text: `What really cracked the Liberty Bell?`}
,{idx: 682, text: `A weird photo to keep in your wallet`}
,{idx: 683, text: `An odd painting to hang above your bed`}
,{idx: 684, text: `A poor substitute for a necktie`}
,{idx: 685, text: `The perfect day off is just twelve straight hours of BLANK`}
,{idx: 686, text: `The worst Vegas casino: BLANK Palace`}
,{idx: 687, text: `Something awful to hold in your mouth for an hour`}
,{idx: 688, text: `A great way to start a conversation with a weird loner on the subway`}
,{idx: 689, text: `A hip, new advertising slogan for socks`}
,{idx: 690, text: `Really awful cheerleaders would yell "BLANK!"`}
,{idx: 691, text: `Why should you never turn your back on a penguin?`}
,{idx: 692, text: `The reason Pluto isn't a planet anymore`}
,{idx: 693, text: `The biggest issue facing the town of Margaritaville `}
,{idx: 694, text: `The least appetizing name for a restaurant`}
,{idx: 695, text: `Something you should not say in front of a parrot`}
,{idx: 696, text: `Something you should not put in your kid's sandbox`}
,{idx: 697, text: `A bad name for a hospital`}
,{idx: 698, text: `Something you do not want to do while standing in a police lineup`}
,{idx: 699, text: `Where's Jimmy Hoffa? `}
,{idx: 700, text: `An odd casting choice would be Clint Eastwood as BLANK`}
,{idx: 701, text: `After the Heimlich Maneuver, the second-best way to stop someone from choking`}
,{idx: 702, text: `A rejected safety technique for when you catch fire was to "stop, drop, and BLANK"`}
,{idx: 703, text: `The weirdest room you could see in an airport would be one specifically designated for BLANK`}
,{idx: 704, text: `If you really want to impress the Olympic diving judges, try a dive that involves BLANK`}
,{idx: 705, text: `What you think the word "pandiculation" means`}
,{idx: 706, text: `A body of water you definitely shouldn't swim in`}
,{idx: 707, text: `Something fun to ask the old wise man on top of the mountain`}
,{idx: 708, text: `A rejected tagline for <i>Star Trek</i> instead of "Space: the final frontier" was "Space: BLANK"`}
,{idx: 709, text: `How would YOU fix the economy?`}
,{idx: 710, text: `The hardest part about living in a submarine`}
,{idx: 711, text: `If you really, really love something, let it BLANK`}
,{idx: 712, text: `A name for a really scary swamp: BLANK Swamp`}
,{idx: 713, text: `The name of the music playlist that will definitely put an end to the party`}
,{idx: 714, text: `A bad name for a water park`}
,{idx: 715, text: `A polite way to say "booger"`}
,{idx: 716, text: `A fun outfit to dress up the statue of David in`}
,{idx: 717, text: `Kennedy's original speech said, "Ask not what your country can do for you, ask BLANK"`}
,{idx: 718, text: `What the hot trend in weddings will be in the year 2046`}
,{idx: 719, text: `Something fun to scream at a farmer's market`}
,{idx: 720, text: `Mother Teresa's deepest secret `}
,{idx: 721, text: `The most creative thing you can make entirely out of boogers`}
,{idx: 722, text: `An ill-advised outfit to wear to your first day at a new job`}
,{idx: 723, text: `Sleepwalking can be a problem but it's not as bad as sleepBLANK`}
,{idx: 724, text: `In the future, RoboCop actually retires from the police force and becomes Robo-BLANK`}
,{idx: 725, text: `Something people used to do for fun before electricity`}
,{idx: 726, text: `The most embarrassing crime to get caught committing`}
,{idx: 727, text: `The name that cavemen probably gave to diarrhea`}
,{idx: 728, text: `The worst person to share a hot tub with`}
,{idx: 729, text: `A peculiar thing to see in a Help Wanted ad would be "Help Wanted: BLANK"`}
,{idx: 730, text: `What mustaches SHOULD be called`}
,{idx: 731, text: `The worst pizza is BLANK-style pizza`}
,{idx: 732, text: `A real weirdo would fall asleep to the sounds of BLANK`}
,{idx: 733, text: `The name of a dog food brand you probably should not buy`}
,{idx: 734, text: `Come up with a name for a generic brand of hot dogs that you probably shouldn't buy`}
,{idx: 735, text: `Everything tastes better with BLANK`}
,{idx: 736, text: `A great birthday present for your worst enemy`}
,{idx: 737, text: `The name of a painting Michelangelo was ashamed he created`}
,{idx: 738, text: `A clever thing for James Bond to say as he throws someone out of an airplane`}
,{idx: 739, text: `The secret to a healthy head of hair`}
,{idx: 740, text: `A strange thing to read on a door mat`}
,{idx: 741, text: `The secret to a great marriage`}
,{idx: 742, text: `What really happens if you stare at the sun too long`}
,{idx: 743, text: `What the Easter Bunny does with his free time`}
,{idx: 744, text: `A little known-perk of being U.S. president`}
,{idx: 745, text: `A horrible charity: BLANK for Tots`}
,{idx: 746, text: `A really odd thing to say on your deathbed`}
,{idx: 747, text: `The Four Horsemen wouldn't be as scary if they were the Four BLANKmen of the Apocalypse`}
,{idx: 748, text: `It's illegal to yell "Fire!" in a crowded theater, but it should also be illegal to yell, "BLANK!"`}
,{idx: 749, text: `A good name for a pet cemetery`}
,{idx: 750, text: `A new word for people that drive too slow in the fast lane`}
,{idx: 751, text: `The worst material from which to make a pair of pajamas`}
,{idx: 752, text: `Queen Elizabeth's deepest, darkest secret`}
,{idx: 753, text: `Come up with a slogan for the Russian Tourism Board`}
,{idx: 754, text: `Tip: Never eat at a place called "Kentucky Fried BLANK"`}
,{idx: 755, text: `The worst toy store: Build-A-BLANK Workshop`}
,{idx: 756, text: `The weirdest thing you can buy at the Vatican gift shop`}
,{idx: 757, text: `The worst invention that starts with "Spray-On"`}
,{idx: 758, text: `A possible entry in Gary Busey's dream journal: "Tonight I dreamed BLANK"`}
,{idx: 759, text: `Something you can make out of body hair`}
,{idx: 760, text: `The worst way to fly: BLANK Airlines`}
,{idx: 761, text: `So... what was that movie Birdman about anyway?`}
,{idx: 762, text: `An idea for Lady Gaga's next crazy outfit: a BLANK dress`}
,{idx: 763, text: `Little-known fact: Over the course of a lifetime, an average person accidentally eats ten BLANK`}
,{idx: 764, text: `Something you probably shouldn't try to sell on eBay`}
,{idx: 765, text: `The worst air freshener scent`}
,{idx: 766, text: `A terrible thing to sign on the cast of your friend's broken leg`}
,{idx: 767, text: `It would be awesome to win <i>Jeopardy</i> with the phrase, "What is BLANK, Alex?"`}
,{idx: 768, text: `A bad title for a self-help book`}
,{idx: 769, text: `An unusual "Special Skill" to include on your resume`}
,{idx: 770, text: `You should never share BLANK with someone else`}
,{idx: 771, text: `You need three things to live: food, water, and BLANK`}
,{idx: 772, text: `What you would do with two free hours and a flamethrower`}
,{idx: 773, text: `New sport idea: professional BLANK`}
,{idx: 774, text: `Something pirates probably aren't very good at`}
,{idx: 775, text: `Everyone knows there's no such thing as BLANK`}
,{idx: 776, text: `A completely untrue rumor about Alvin from Alvin and the Chipmunks`}
,{idx: 777, text: `You should never BLANK and BLANK at the same time`}
,{idx: 778, text: `The worst thing about being a billionaire`}
,{idx: 779, text: `Briefly describe your imaginary friend`}
,{idx: 780, text: `New movie idea: <i>The Muppets Take BLANK</i>`}
,{idx: 781, text: `The best use for a leftover meatball`}
,{idx: 782, text: `The best way to quickly blow a million dollars`}
,{idx: 783, text: `Your first decree after being named Supreme Ruler of Earth`}
,{idx: 784, text: `The worst thing to receive for trick-or-treat`}
,{idx: 785, text: `Come up with a name for a kooky ostrich who solves mysteries`}
,{idx: 786, text: `A phrase you would love to hear Morgan Freeman say`}
,{idx: 787, text: `An Olympic sport that never made it: Synchronized BLANK`}
,{idx: 788, text: `The government should legalize...`}
,{idx: 789, text: `The first thing to do if you're attacked by a shark`}
,{idx: 790, text: `The perfect meal would be a BLANK stuffed in a BLANK stuffed in a BLANK`}
,{idx: 791, text: `New show idea: <i>America's Next Top BLANK</i>`}
,{idx: 792, text: `It never ends well when you mix BLANK and BLANK`}
,{idx: 793, text: `Invent a silly British term for pooping`}
,{idx: 794, text: `The beauty pageant no one wants to see: Miss BLANK`}
,{idx: 795, text: `The most boring graffiti you could see in the subway`}
,{idx: 796, text: `You never forget your first BLANK`}
,{idx: 797, text: `Little-known fact: The human body is approximately 80% BLANK`}
,{idx: 798, text: `Coming soon to a theater near you: Benedict Cumberbatch is BLANK`}
,{idx: 799, text: `Something you shouldn't buy at a yard sale`}
,{idx: 800, text: `If we only use 10% of our brains, what's the other 90% doing?`}
,{idx: 801, text: `The worst menu item that starts with "All You Can Eat"`}
,{idx: 802, text: `A sign you wouldn't want to see at a seafood restaurant`}
,{idx: 803, text: `Something fun to yell during an opera`}
,{idx: 804, text: `A group activity at a really bad summer camp`}
,{idx: 805, text: `A Girl Scouts cookie name that got rejected because it was just too ridiculous-sounding`}
,{idx: 806, text: `The least impressive Boy Scout badge`}
,{idx: 807, text: `The worst ringtone for a cell phone`}
,{idx: 808, text: `"Knock, knock!" "Who's there?" BLANK`}
,{idx: 809, text: `A message found in a bottle floating in the sea`}
,{idx: 810, text: `The worst car feature that ends with "holder"`}
,{idx: 811, text: `The most stereotypical country song title`}
,{idx: 812, text: `The best way to survive a bear attack is BLANK`}
,{idx: 813, text: `Something that should never be "homemade"`}
,{idx: 814, text: `Three things MacGyver needs to make a bomb`}
,{idx: 815, text: `Another use for marshmallows`}
,{idx: 816, text: `A great way to cure the hiccups`}
,{idx: 817, text: `Something you wouldn't expect a Ouija board to say`}
,{idx: 818, text: `The best way to tell if a tomato is ripe`}
,{idx: 819, text: `A good post-music career for Justin Bieber`}
,{idx: 820, text: `Come up with a name for a sitcom about a bunch of wacky nuns`}
,{idx: 821, text: `A completely wrong way to spell "Jennifer Aniston"`}
,{idx: 822, text: `The 11th Commandment: Thou shalt not...`}
,{idx: 823, text: `The worst thing to yell while a professional golfer putts`}
,{idx: 824, text: `The worst word that can come before "fart"`}
,{idx: 825, text: `The worst name for a "big and tall" store`}
,{idx: 826, text: `The worst question to ask during a White House tour`}
,{idx: 827, text: `Tomorrow's news headline: "Scientists Are Shocked to Discover That BLANK"`}
,{idx: 828, text: `It would be scary to read on a food package, "May contain trace elements of BLANK."`}
,{idx: 829, text: `A just-so-crazy-it's-brilliant business idea to pitch on <i>Shark Tank</i>`}
,{idx: 830, text: `CBS should air a TV show about lawyers who are also BLANK`}
,{idx: 831, text: `A gift nobody would want: The BLANK of the Month Club`}
,{idx: 832, text: `A bad way to remove unsightly chest hair`}
,{idx: 833, text: `An unusual theme for a kid's lunchbox`}
,{idx: 834, text: `What the government is hiding from the public in Area 497`}
,{idx: 835, text: `What your pancreas tests revealed`}
,{idx: 836, text: `A bad, one-word slogan for a presidential campaign`}
,{idx: 837, text: `Something you'd make a butler do the moment you hired him`}
,{idx: 838, text: `Why did the mortician cross the road?`}
,{idx: 839, text: `Something you should never try to heat in the microwave `}
,{idx: 840, text: `A surprising thing to find inside a piñata `}
,{idx: 841, text: `An alternate name for The Mona Lisa`}
,{idx: 842, text: `A reason to travel back in time to two weeks ago`}
,{idx: 843, text: `If you'd never heard the term "great white shark," what might you call it when you saw one for the first time?`}
,{idx: 844, text: `A place where you're not likely to spot Bigfoot`}
,{idx: 845, text: `Something you should never say as the captain of a bowling team`}
,{idx: 846, text: `The dumbest person in the history of all time `}
,{idx: 847, text: `Another name for the Grand Canyon`}
,{idx: 848, text: `Another name for Canada`}
,{idx: 849, text: `A bad use for clam chowder`}
,{idx: 850, text: `\"On the 147th day of Christmas, my true love gave to me...\"`}
,{idx: 851, text: `It would be most awesome for Chuck Norris to fight BLANK`}
,{idx: 852, text: `A good puck replacement if they run out of pucks in a game of hockey`}
,{idx: 853, text: `A terrible wedding gift`}
,{idx: 854, text: `A street name you never see`}
,{idx: 855, text: `The first thing that pops into your mind right now`}
,{idx: 856, text: `A weapon that should be added to the game Clue`}
,{idx: 857, text: `The toy surprise in an Unhappy Meal`}
,{idx: 858, text: `Make up a name for the space between your nostrils`}
,{idx: 859, text: `Italy's newest tourist attraction: The BLANKTower of Pisa`}
,{idx: 860, text: `The worst theme for a pinball machine`}
,{idx: 861, text: `A title of a self-help book for rats`}
,{idx: 862, text: `The worst thing you could rub all over your face`}
,{idx: 863, text: `Something you rarely see used as a car decoration`}
,{idx: 864, text: `A historical event that would make a bad theme for a restaurant`}
,{idx: 865, text: `The worst thing to try to sell door-to-door`}
,{idx: 866, text: `What's that stain?`}
,{idx: 867, text: `A bad name for a pet goldfish`}
,{idx: 868, text: `Life would be so much better if we all lived in BLANK`}
,{idx: 869, text: `Something you shouldn't put in the overhead bin on an airplane`}
,{idx: 870, text: `A weird thing for a bank robber to demand in a hostage situation`}
,{idx: 871, text: `Something they will probably never make a series of commemorative stamps for`}
,{idx: 872, text: `A club you wish they had in high school`}
,{idx: 873, text: `The best prize you could find in a Cracker Jack box`}
,{idx: 874, text: `The worst soup flavor: Cream of BLANK`}
,{idx: 875, text: `A strange place to hold a family reunion`}
,{idx: 876, text: `Something you'd sneak into space, if you were an astronaut`}
,{idx: 877, text: `What they really found in King Tut's tomb`}
,{idx: 878, text: `The name of that cheese shop you're going to open some day`}
,{idx: 879, text: `An unusual motif for a baby's nursery`}
,{idx: 880, text: `Another name for toe jam`}
,{idx: 881, text: `A terrible name to have if you're running for public office`}
,{idx: 882, text: `Four out of five dentists agree you should never BLANK`}
,{idx: 883, text: `Something that would make a creepy replacement for the horses on a merry-go-round`}
,{idx: 884, text: `The worst thing to vomit into when you suddenly need to vomit`}
,{idx: 885, text: `Like Plutonium or Einsteinium, what would you name the next Periodic Table element they discover?`}
,{idx: 886, text: `A bad name for a pirate`}
,{idx: 887, text: `Something fun to scream when you win in a game of bingo, other than "Bingo!"`}
,{idx: 888, text: `A movie that should never be made into a theme park ride`}
,{idx: 889, text: `A business or service that shouldn't have a drive-through window`}
,{idx: 890, text: `The worst flavor for a sno-cone`}
,{idx: 891, text: `What Smokey the Bear does when he's not fighting forest fires`}
,{idx: 892, text: `Combine any two words to make a fun, new made-up word`}
,{idx: 893, text: `A great place to hide an Easter egg`}
,{idx: 894, text: `A trick you'd like to see a poodle do`}
,{idx: 895, text: `You never know when you're going to need insurance. You could wake up tomorrow and BLANK`}
,{idx: 896, text: `A bad name for a brand of bottled water`}
,{idx: 897, text: `How do you like it?`}
,{idx: 898, text: `Come up with a new dessert that contains the name of a U.S. state`}
,{idx: 899, text: `The first and second rules of Fight Club are "Don't talk about Fight Club," but what's the 387th rule of Fight Club?`}
,{idx: 900, text: `A terrible food truck would be one that goes around selling only BLANK`}
,{idx: 901, text: `A reason to get into a fist fight with a koala bear `}
,{idx: 902, text: `Little-known fact: the fourth Wise Man gave baby Jesus the worst gift of all: BLANK `}
,{idx: 903, text: `A theme for a desk calendar that wouldn't sell very well `}
,{idx: 904, text: `The worst thing you could stick in a toaster `}
,{idx: 905, text: `"This just in! A BLANK has won the election and will become the new governor of Texas." `}
,{idx: 906, text: `A better name for the human bladder`}
,{idx: 907, text: `Surprising first words for your baby to speak`}
,{idx: 908, text: `People wouldn't respect He-Man as much if, to gain his power, he held up his sword and shouted "____________________"`}
,{idx: 909, text: `Pants would be a whole lot better if they BLANK`}
,{idx: 910, text: `It's bad to be buried alive. It's worse to be buried alive with BLANK.`}
,{idx: 911, text: `A rejected name for a ship in the U.S. Naval Fleet: the USS BLANK`}
,{idx: 912, text: `A rejected title for <i>The Good, The Bad and the Ugly</i> was <i>The Good, the Bad and the BLANK</i>`}
,{idx: 913, text: `Little-known fact: The government allows peanut butter to contain up to 10% BLANK`}
,{idx: 914, text: `A sequel to the painting "Dogs Playing Poker"`}
,{idx: 915, text: `Little-known fact: A secret area in the White House is the BLANK room`}
,{idx: 916, text: `Three things are certain in life: Death, Taxes, and BLANK`}
,{idx: 917, text: `A faster way to get home from the Land of Oz is to click your heels three times and say BLANK.`}
,{idx: 918, text: `Which new marshmallow should Lucky Charms cereal introduce?`}
,{idx: 919, text: `A word that should never follow "Beef"`}
,{idx: 920, text: `We can all agree that BLANK`}
,{idx: 921, text: `Today's music needs more BLANK`}
,{idx: 922, text: `Finish this sentence: "When I'm rich, my mansion will have a room called The BLANK Room."`}
,{idx: 923, text: `The best question to ask God when you meet him`}
,{idx: 924, text: `A bad place for your rocket ship to crash would be The Planet of the BLANK`}
,{idx: 925, text: `Scientists say erosion, but we all know the Grand Canyon was actually made by BLANK`}
,{idx: 926, text: `A little-known fact about Canada`}
,{idx: 927, text: `On your wedding night, it would be horrible to find out that the person you married is BLANK`}
,{idx: 928, text: `What FDR meant to say was "We have nothing to fear, but BLANK"`}
,{idx: 929, text: `Come up with a really bad TV show that starts with "Baby"`}
,{idx: 930, text: `A great new invention that starts with "Automatic"`}
,{idx: 931, text: `Come up with a really bad football penalty that begins with "Intentional"`}
,{idx: 932, text: `You know you're in for a bad taxi ride when BLANK`}
,{idx: 933, text: `The terrible fate of the snowman Olaf in a director's cut of <i>Frozen</i>`}
,{idx: 934, text: `Sometimes, after a long day, you just need to BLANK`}
,{idx: 935, text: `Usually, it's bacon, lettuce and tomato, but come up with a BLT you wouldn't want to eat`}
,{idx: 936, text: `The Katy Perry Super Bowl halftime show would have been better with BLANK`}
,{idx: 937, text: `Your personal catchphrase if you were on one of those <i>Real Housewives</i> shows`}
,{idx: 938, text: `The worst job title that starts with "Assistant"`}
,{idx: 939, text: `Come up with the name for a new TV show with the word "Spanky" in it`}
,{idx: 940, text: `Name the sequel to <i>Titanic</i> if there were one. <i>Titanic 2: BLANK</i>`}
,{idx: 941, text: `Thing you'd be most surprised to have a dentist find in your mouth`}
,{idx: 942, text: `A more environment-friendly alternative to toilet paper`}
,{idx: 943, text: `What tattoo should Justin Bieber get next?`}
,{idx: 944, text: `What do kittens dream of?`}
,{idx: 945, text: `What makes hot dogs taste so good?`}
,{idx: 946, text: `A better name for France`}
,{idx: 947, text: `The worst thing to find stuck in your teeth`}
,{idx: 948, text: `The worst excuse for showing up late to work`}
,{idx: 949, text: `Everyone knows that monkeys hate BLANK`}
,{idx: 950, text: `You would never go on a roller coaster called BLANK`}
,{idx: 951, text: `What two words would passengers never want to hear a pilot say?`}
,{idx: 952, text: `The worst name for a race horse`}
,{idx: 953, text: `Come up with a three-word sequel to the book "Eat, Pray, Love"`}
,{idx: 954, text: `You wouldn't want to share a prison cell with someone named BLANK`}
,{idx: 955, text: `Superman's special power that he never tells anyone about`}
,{idx: 956, text: `You shouldn't get a massage at a place called BLANK`}
,{idx: 957, text: `The least romantic place to propose marriage`}
,{idx: 958, text: `A rejected name for the Segway`}
  
]

window.prompts = prompts;

["url", "restart", "characters", "videos", "_", "DATA_FEEDS", "peer", "shuffle", "offset", "makeid", "client", "phase", "round", "players", "stage", "answers", "sleep", "fitText", "votes", "calculateVotes", "clientIntake", "checked", "emit", "prompts", "dir", "dirxml", "profile", "profileEnd", "clear", "table", "keys", "values", "debug", "undebug", "monitor", "unmonitor", "inspect", "copy", "queryObjects", "$_", "$0", "$1", "$2", "$3", "$4", "getEventListeners", "monitorEvents", "unmonitorEvents", "$$", "$x"]
