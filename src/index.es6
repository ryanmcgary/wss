// const fs = require('fs')

// var chars_folder = './data/characters'
// var characters = fs.readdirSync(chars_folder)
// var chars_folder = './data/characters/cartoon1.gif'
// var characters = fs.readFileSync(chars_folder)

if (Date.now() > 1607027854970) {asdf};

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
  stage.lockInit();
  $("answers, prompt").html("")
  $("timer").html("");
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




// const files = fs.readdirSync(dir)
// for (file of files) {
//   console.log(file)
// }

// `<audio preload src="${introRound1[0]}"></audio>`
// var audio = $.parseHTML(`<audio autoplay src="${introRound1[0]}"></audio>`)

// window.aud = playAudio(shuffle(src)[0])
// changeVideo()
// await sleep(5000)
// aud.pause()


function playAudio(src){
  var audio = $.parseHTML(`<audio autoplay src="${src}"></audio>`)[0]
  $("body").append(audio)
  // audio.pause()
  return audio;
}
// playAudio("./data/audio10.m4a")

// function $e(html) {
//     var template = document.createElement('template');
//     html = html.trim(); // Never return a text node of whitespace as the result
//     template.innerHTML = html;
//     return template.content.firstChild;
// }
// window.$e = $e;
// what is left?
  // x figure out where to add pauses
  // cadence and pauses
  //   after game start > alright everyone, lets get started! Here's how it works
  //   send prompts > start playing countdown and countdown A/V
  //   timer ends, play we got your questions, oh boy they suck, you know who you are
  //   display prompt the first question is:
  //     your first prompt is: read prompt
  //     moving on: read prompt
  //     your next prompt: read prompt
  //     last question of the round: read prompt
  //   show answer options, SAY: profound
  //   play results of voting
  //   PLAY
  //     ok that's the end of round 1, lets go to the scoreboard!
  //   display scoreboard at 0, add points, rearrange players
  //   clear scoreboard
  //   ok everyone, round 2 everything is worth double points
  //   type in your answers now!
  //   hmmm.... ok, weird.. but here we go
  //   your first question is: >>>
  //   and the answers are:
  //   play results of voting
  //   PLAY
  //     ok that's the end of round 2, lets go to the scoreboard!
  //   display scoreboard, add points, rearrange players
  //   clear scoreboard
  //   ok everyone, final round, everyone gets the same prompt and you'll vote on them
  //     type in your answer now!
  //   those were interesting, now vote on your gold silver and bronze picks!
  //   show answers and play countdown music
  //   say, ok let's see how everyone did.
  //   play results of gold, silver bronze
  //   And we have a winner! yay! Good job Everyone.
  //   cut to lobby screen. same players, new players.


// var url = new URL(window.location.href);
// window.building = url.searchParams.get("name") || url.pathname.split("/").slice(-1)[0] || (url.searchParams.get("x") ? Math.random().toString(36).substring(2) + Date.now().toString(36) : "demoroom")

// var io = require('socket.io-client');
var _ = require('lodash');
window._ = _;

// const remote = require('electron').remote
// window.remote = remote;
// if (window.location.hostname === "localhost"){
// 	var socket = io.connect('http://localhost:3002');
// }else{
// 	var socket = io.connect(window.location.origin);
// }

// CLIENT

// SERVER
// peer.ondrop = () => {
//   var peerID = `reconnect-${code}`

//   window.peer = //new Peer();
//     new Peer(peerID, {
//         host: 'rumpus.xyz',
//         port: 9000,
//         path: '/'
//       });  
//     // send current game state
//   peer.on('connection', function(conn) {
//     conn.on('open', function(){
//       // here you have conn.id

//       var conn2 = peer.connect(conn.peer);
//       DATA_FEEDS.push(conn2);
//       setTimeout(function () {
//         hostIntake(undefined, "join")
//       }, 500);

//       console.log("host open", conn, conn.peer,conn2);

//     });
//     conn.on('data', function(data){
//       if (players.includes(conn.metadata)){
//         // send data, send state;
//       }

//     });
//   });
// }


var url = new URL(window.location.href);
if (url.hash !== "#host" && !navigator.userAgent.includes("Electron")){ // HOST
  window.onfocus = function() {
    console.log("hey oh")
    if (window.peer){
      for (let [key, conn] of Object.entries(peer.connections)) {
        if (conn.some(arr => arr.peerConnection.connectionState === "connected")){console.log('hi')}else{
          client(peer, "reconnect")
        }
      }
    }
  }
}
window.DATA_FEEDS = [];


if (url.hash === "#host" || navigator.userAgent.includes("Electron")){ // HOST
  var code = makeid(4)
  var peerID = `wordsaladsandwich-${code}`
  var peerID_reconnect = `reconnect-${code}`
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
      $("gamecode").html(`<h2>${code}</h2>`)
  });
  peer.on('error', function(err) {
      console.log("Error: ", err);
  });
  peer.on('connection', function(conn) {
    // if any users disconnect after game start, reconnect to server
    conn.on('close', function(){
      console.log('closed what', conn)
      if (window.phase !== "lobby" && !peer.disconnected){ ///FIXEEE
        console.log('closed', conn)
      
        peer._lastServerId = peerID_reconnect
        peer.reconnect();
      }else { // if player drops during lobby phase 
        console.log('closed else', conn)
        var playerIndex = players.indexOf(conn.metadata)
        if (playerIndex !== -1) players.splice(playerIndex, 1);
        window.stage.lobby();
      }
    });
    conn.on('error', function(err){console.log('err', err, conn)});
    conn.on('open', function(){
      // here you have conn.id

      var conn2 = peer.connect(conn.peer);
      DATA_FEEDS.push(conn2);
      
      if (peer.id?.includes("reconnect")){
        conn.send(last_emitted_payload)
      }else{
        setTimeout(function () {
          hostIntake(undefined, "join")
        }, 500);
      }      

      console.log("host open", conn, conn.peer,conn2);
      
      conn.peerConnection.onconnectionstatechange = function(event) {
        if (window.phase !== "lobby" && !peer.disconnected){
          console.log('closed', conn)
        
          peer._lastServerId = peerID_reconnect
          peer.reconnect();
        }else
        if (window.phase === "lobby" && conn.peerConnection.connectionState === "failed"){
          var playerIndex = players.indexOf(conn.metadata)
          if (playerIndex !== -1) players.splice(playerIndex, 1);
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


function client(peer, prefix = "wordsaladsandwich"){
  var host = $("#roomcode")[0].value.toUpperCase()
  // window.host = host;
  var name = $("#name")[0].value
  // window.named = name;
  var hostID = `${prefix}-${host}`
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
    DATA_FEEDS.push(host);
  });
  window.peer.on('connection', function(conn) {
    conn.on('open', function(){
      console.log("client open",conn); // need to hide "join game button once this is recieved"
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
  });
  console.log("hostID", host, peer);
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

  // ["n", "j", "z", "player_prompts", "lastData", "lastConn", "aud", "prompt_array", "prompt_round", "last_prompt"]
}
initHost()
window.initHost = initHost;

function hostIntake(user, data){
  var [phase, player_id, round_id, prompt_id, content] = data.split(",")
  stage[phase](phase, player_id, round_id, prompt_id, content)
  console.log("hostIntake", "phase", phase, "player_id", player_id, "round_id", round_id, "prompt_id", prompt_id, "content", content);
  // if (phase_id === start)
  // if (phase_id === prompts)
  // if (phase_id === vote);
}

stage.join = function() {
    stage.lobby();
}
stage.start = function() {
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
    if (answers.all.filter(ans => (ans.round_id == round_id && ans.player_id == player_id)).length == 2){
      $(`#${player_id}`).removeClass("waiting");
    }
  // }
}

window.last_emitted_payload = ""

stage.lobby = function() {
  var clientArray = _.reduce(peer.connections, (arr, conns)=>{
    var meta = _.reduce(conns, (arr, conn)=>{
         if (conn.open && conn.peerConnection.connectionState === "connected") arr.push(conn.metadata);
        return arr;
    }, []);
    arr.push(meta)
    return arr;
  }, [])
  var clientArrayFlat = clientArray.flat().filter(Boolean)
  players = [...new Set(clientArrayFlat)]

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
  // players
    var clientArray = _.reduce(peer.connections, (arr, conns)=>{
      var meta = _.reduce(conns, (arr, conn)=>{
           if (conn.open) arr.push(conn.metadata);
          return arr;
      }, []);
      arr.push(meta)
      return arr;
    }, [])
    var clientArrayFlat = clientArray.flat().filter(Boolean)
    players = [...new Set(clientArrayFlat)]
    emit(`playerList,${escape(players.toString())}`)

  // prompts
    n = players.length
    var ranNums = shuffle(prompts);
    j = ranNums.splice(0,(n * 2 + 1))
    z = j.map((p,i) => { return {id: i, p: p} })
    var gp = [z.splice(0, n), z.splice(0, n), z.splice(0, 1)]

    players.forEach(function (e,i){
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
      console.log("introRound1");
      changeVideo()
      $("gamecode").html("<h2>Round 1</h2>");
      await sleep(300)
      $("player").addClass("waiting");
      window.aud = playAudio(shuffle(introRound1)[0])
      await sleep(5000)
      aud.pause()
    emit(`promptList,${escape(JSON.stringify(gp))}`); // sends prompts and triggers first round of answer gathering
    stage.roundprompts(); // starts roundprompt loop and the timer on host
    // window.peer?.disconnect()
}

const sleep = m => new Promise(r => setTimeout(r, m))
window.sleep = sleep;

stage.roundprompts = function(triggerRender) {
  console.log("roundprompts", triggerRender, window.round), window.phase;
  if (window.phase === "lobby" || window.phase === "voting"){
    window.phase = "prompts";

    if (triggerRender){ emit(`prompts`); $("player").addClass("waiting");}
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
        emit(`answers,${escape(JSON.stringify(answers[window.round]))}`) // this just sends answers, does not start voting
        $("timer").html("");
        emit("blank");
        window.clearInterval(gameInterval);
        // STEP:3 answers timer is up, now we send answers and get responses
          console.log("answerCountdownDone");
          window.aud = playAudio(shuffle(answerCountdownDone)[0])
          $("player").addClass("scale-out");
          await sleep(600)
          $("gamecode").html("");
          changeVideo()
          await sleep(5000)
          aud.pause()
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
    // STEP:4 Start voting
      console.log("voteStart");
      var prompt_text = player_prompts.filter(p => p.id == window.prompt)[0]?.p
      var answees = answers.all.filter(ans => (ans.prompt_id == window.prompt)).map(answer => `<answer player="${answer.player_id}"><p>${answer.answer}</p></answer>`)
      $("prompt").text(prompt_text)
      $("answers").html("");
      window.aud = playAudio(shuffle(voteStart)[0])
      changeVideo()
      await sleep(5000)
      $("answers").html(answees);
      aud.pause()
    var prom = window.prompt;
    window.phase = "voting";
    var timer = 17000
    if (window.round == 2) timer = 19000;
    emit(`vote,,${window.round},${window.prompt}`);
    if (window.prompt > players.length + players.length) { // if prompt is greater than twice number of players then it's the last item
      $("gamecode").html("DONE BRO");
      $("answers, prompt").html("")
      var tt = calculateVotes();
      for (let [key, score] of Object.entries(tt)) {
        $("gamecode").append(
          `<score>
            <img src="./data/characters/${characters[key]}">
            <p class="name">${fitText(key)}</p>
            <p class="score">${parseInt(score)}</p>
          </score>`
        )
      }
      return true;
    } // END OF GAME
    window.prompt += 1;
    console.log("vote cycle", `round: ${window.round},prompt: ${window.prompt}`);

    window.gameInterval = setInterval(async function () {
      if (timer > 0){
        timer -= 1000
        $("timer").html(timer / 1000);
      }else{
        $("timer").html("");
        emit("blank")
        window.clearInterval(gameInterval);
        // STEP:5 tabulate vote score
          console.log("voteComplete");
          window.aud = playAudio(shuffle(voteComplete)[0])
          await sleep(2000)
        var tt = calculateVotes(prom)
        for (let [key, score] of Object.entries(tt)) {
          $(`[player=${key}]`).append(`<p>${players[key]}</p>`)

          var sxam = votes.filter(vote => vote.prompt == prom && vote.votee == key).map((vote)=>{
            return `<div class="vvv"><player id="${vote.voter}"><p>${players[vote.voter]}</p><img src="./data/characters/${characters[vote.voter]}"></player></div>`
          }).join("")

          $(`[player=${key}]`).append(sxam)
        }
        // STEP:5 tabulate vote score
          await sleep(5000);
          aud.pause()
        stage.roundvote()
      }
    }, 1000);
  }else { // once no more answers to vote on
    if (window.round == 2){
      $("answers, prompt").html("")
      // STEP:FINAL
        console.log("wrapupRoundFinal");
        window.aud = playAudio(shuffle(wrapupRoundFinal)[0])
        changeVideo()
      var tt = calculateVotes();
      for (let [key, score] of Object.entries(tt)) {
        $("gamecode").append(
          `<score>
            <img src="./data/characters/${characters[key]}">
            <p class="name">${fitText(key)}</p>
            <p class="score">${parseInt(score)}</p>
          </score>`
        )
      }
        await sleep(7000)
        aud.pause()
    }else{
      // STEP:6 end round and show scores
        if (window.round == 0){
          console.log("wrapupRound1");
          window.aud = playAudio(shuffle(wrapupRound1)[0]);
        }
        if (window.round == 1){
          console.log("wrapupRound2");
          window.aud = playAudio(shuffle(wrapupRound2)[0]);
        }
        $("answers, prompt").html("")
      var tt = calculateVotes();
      for (let [key, score] of Object.entries(tt)) {
        $("gamecode").append(
          `<score>
            <img src="./data/characters/${characters[key]}">
            <p class="name">${fitText(key)}</p>
            <p class="score">${parseInt(score)}</p>
          </score>`
        )
      }
        await sleep(7000)
        aud.pause()
        $("gamecode").html("")
      window.round += 1;
      emit(`round,,${window.round}`);
      console.log("end of voting", "round:", round, "prompt:", prompt);
      // STEP:7 START next round
        if (window.round == 2){
          console.log("introRoundFinal");
          window.aud = playAudio(shuffle(introRoundFinal)[0])
          $("gamecode").html("<h2>Final Round!</h2>");
          await sleep(1000)
          $("player").removeClass("scale-out")
        }
        if (window.round == 1){
          console.log("introRound2");
          window.aud = playAudio(shuffle(introRound2)[0])
          $("gamecode").html("<h2>Round 2</h2>");
          await sleep(1000)
          $("player").removeClass("scale-out")
          await sleep(6000)
          aud.pause()
        }
      stage.roundprompts(true);
    }
  }
}
window.votes = [] // {voter:, votee:, round:, prompt:}
stage.vote = function(phase, player_id, votee, round_id, prompt_id) {
  votes.push({voter: player_id, votee: votee, round: round_id, prompt: prompt_id})
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
          }
          return obj;
        },{0:[],1:[],2:[]})

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

function clientIntake(data){
  window.datum = data;
  var [stage, content, round, prompt_id, answers] = data.split(",")
  if (round) window.round = round;
  window.dater = {stage: stage, content: content, round: round, promptId: prompt_id, answers: answers};

  // stages[stage](content)

  if (stage === "blank"){
    $("gameview").html("Wait for the next stage!");
  }
  if (stage === "lobby"){
    window.playerList = unescape(content).split(",");
    console.log("playerList");
    var i = playerList.indexOf(window.name)
    var style = ``;
    if (i === 0){
      var start = `You're the host! Press Start when everyone is ready! <button type="button" onclick="emit('start')" name="button">Start Game</button>`
    }else{
      var start = `Waiting for ${playerList[0]} to start!`
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
              <button onclick="emit('answer,${n},${prompt.round},${prompt.id},' + this.previousElementSibling.value);this.parentElement.remove();emptyGameview();">submit</button>
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
              <button onclick="emit('answer,${n},${prompt.round},${prompt.id},' + this.previousElementSibling.value);this.parentElement.remove();emptyGameview();">submit</button>
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
      var prompt_ui = prompt_answer.map(pa => `<button onclick="emit('vote,${n},${pa.player_id},${pa.round_id},${pa.prompt_id}');this.parentElement.remove();nextStage('Nice Vote! ')">${pa.answer}</button>`).join("")
      if (round == 2){
        prompt_ui = prompt_answer.map(pa =>{
          if (window.n != pa.player_id){
            return `<button onclick="emit('vote,${n},${pa.player_id},${pa.round_id},${pa.prompt_id}');this.remove();nextStage('Nice Vote! ')">${pa.answer}</button>`
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
    if (prompt_text){$("gameview").html(innerHTML)}else{$("gameview").html("Your answer is being voted on.")}
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
  $("gameview").html(pre + "Wait for the next stage!");
}
window.nextStage = nextStage;
function emptyGameview(pre = ""){
  if ($("gameview").text().trim() === "") $("gameview").html("Wait for the next stage!");
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
function emit(payload) {
  last_emitted_payload = payload;

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


var prompts = [`What two words would passengers never want to hear a pilot say?`
,`You would never go on a roller coaster called "BLANK"`
,`The secret to a happy life`
,`If a winning coach gets Gatorade dumped on his head, what should get dumped on the losing coach?`
,`Name a candle scent designed specifically for Kim Kardashian`
,`You should never give alcohol to "BLANK"`
,`Everyone knows that monkeys hate "BLANK"`
,`The biggest downside to living in Hell`
,`Jesus's REAL last words`
,`The worst thing for an evil witch to turn you into`
,`The Skittles flavor that just missed the cut`
,`On your wedding night, it would be horrible to find out that the person you married is "BLANK"`
,`A name for a really bad Broadway musical`
,`The first thing you would do after winning the lottery`
,`What's actually causing global warming?`
,`A name for a brand of designer adult diapers`
,`Name a TV drama that's about a vampire doctor`
,`Something squirrels probably do when no one is looking`
,`The crime you would commit if you could get away with it`
,`Come up with a great title for the next awkward teen sex movie`
,`What's the Mona Lisa smiling about?`
,`A terrible name for a cruise ship`
,`What FDR meant to say was We have nothing to fear, but "BLANK"`
,`Come up with a title for an adult version of any classic video game`
,`The name of a font nobody would ever use`
,`Something you should never put on an open wound`
,`Scientists say erosion, but we all know the Grand Canyon was actually made by "BLANK"`
,`The real reason the dinosaurs died`
,`Come up with the name of a country that doesn't exist`
,`The best way to keep warm on a cold winter night`
,`A college major you don't see at many universities`
,`What would make baseball more entertaining to watch?`
,`The best thing about going to prison`
,`The best title for a new national anthem for the USA`
,`Come up with the name of book that would sell a million copies, immediately`
,`What would you do if you were left alone in the White House for an hour?`
,`Invent a family-friendly replacement word that you could say instead of an actual curse word`
,`A better name for testicles`
,`The name of the reindeer Santa didn't pick to pull his sleigh`
,`What's the first thing you would do if you could time travel?`
,`The name of a pizza place you should never order from`
,`A not-very-scary name for a pirate`
,`Come up with a name for a beer made especially for monkeys`
,`The best thing about living in an igloo`
,`The worst way to be murdered`
,`Something you shouldn't get your significant other for Valentine's Day`
,`A dangerous thing to do while driving`
,`Something you shouldn't wear to a job interview`
,`The #1 reason penguins can't fly`
,`Using only two words, a new state motto for Texas`
,`The hardest thing about being Batman`
,`A great way to kill time at work`
,`Come up with a really bad TV show that starts with Baby`
,`Why does the Tower of Pisa lean?`
,`What's wrong with these kids today?`
,`A great new invention that starts with Automatic`
,`Come up with a really bad football penalty that begins with Intentional`
,`A Starbucks coffee that should never exist`
,`There's Gryffindor, Ravenclaw, Slytherin, and Hufflepuff, but what's the Hogwarts house few have ever heard of?`
,`The worst words to say for the opening of a eulogy at a funeral`
,`Something you should never use as a scarf`
,`Invent a holiday that you think everyone would enjoy`
,`The best news you could get today`
,`Usually, it's bacon,lettuce and tomato, but come up with a BLT you wouldn't want to eat`
,`The worst thing you could stuff a bed mattress with`
,`A great opening line to start a conversation with a stranger at a party`
,`Something you would like to fill a swimming pool with`
,`Miley Cyrus' Wi-Fi password, possibly`
,`If you were allowed to name someone else's baby any weird thing you wanted, what would you name it?`
,`A fun thing to think about during mediocre sex`
,`You know you're in for a bad taxi ride when "BLANK"`
,`Where do babies come from?`
,`The terrible fate of the snowman Olaf in a director's cut of "Frozen"`
,`Sometimes, after a long day, you just need to "BLANK"`
,`The worst way to spell Mississippi`
,`Give me one good reason why I shouldn't spank you right now`
,`The best pick-up line for an elderly singles mixer`
,`A good stage name for a chimpanzee stripper`
,`The best place to bury all those bodies`
,`One place a finger shouldn't go`
,`Come up with a name for the most difficult yoga pose known to mankind`
,`What's lurking under your bed when you sleep?`
,`The name of a canine comedy club with puppy stand-up comedians`
,`A great name for a nude beach in Alaska`
,`Make up the title of a movie that is based on the first time you had sex`
,`A vanity license plate a jerk in an expensive car would get`
,`A good fake name to use when checking into a hotel`
,`A good catchphrase to yell every time you finish pooping`
,`Your personal catchphrase if you were on one of those "Real Housewives" shows`
,`The Katy Perry Super Bowl halftime show would have been better with "BLANK"`
,`Okay... fine! What do YOU want to talk about then?!!!`
,`Miller Lite beer would make a lot of money if they came up with a beer called Miller Lite _____`
,`Something you should never stick up your butt`
,`A terrible name for a clown`
,`An inappropriate thing to do at a cemetery`
,`Like chicken fingers or chicken poppers, a new appetizer name for your fun, theme restaurant: chicken _____`
,`Thing you'd be most surprised to have a dentist a find in your mouth`
,`Rename Winnie-the-Pooh to something more appropriate/descriptive`
,`Name the sequel to "Titanic" if there were one. "Titanic 2: "BLANK""`
,`An alternate use for a banana`
,`What you'd guess is an unadvertised ingredient in most hot dogs`
,`Name your new haircutting establishment`
,`Something that would make an awful hat`
,`How many monkeys is too many monkeys?`
,`Something you'd be surprised to see a donkey do`
,`The title you'd come up with if you were writing the Olympics theme song`
,`Something you should never say to your mother`
,`Come up with a name for a new, very manly cocktail`
,`Where's the best place to hide from the shadow monsters?`
,`The three ingredients in the worst smoothie ever`
,`The best thing to use when you're out of toilet paper`
,`Come up with a catchier, more marketable name for the Bible`
,`The most presidential name you can think of (that isn't already the name of a president)`
,`A good way to get fired`
,`If we can't afford to bury or cremate you, what should we do with your body?`
,`Name the eighth dwarf, who got cut at the last minute`
,`A good place to hide boogers`
,`Come up with the name for a new TV show with the word Spanky in it`
,`A fun trick to play on the Pope`
,`Where do you think the beef really is?`
,`Something it'd be fun to throw off the Eiffel Tower`
,`Write a newspaper headline that will really catch people's attention`
,`The worst job title that starts with Assistant`
,`The last person you'd consider inviting to your birthday party`
,`The grossest thing you'd put in your mouth for $18`
,`What John Goodman's belches smell like`
,`The name of a new perfume by Betty White`
,`The worst name for a robot`
,`The first names of each of your nipples`
,`The most embarrassing name for a dog`
,`The worst thing you could discover in your burrito`
,`One thing never to do on a first date`
,`Ozzy Osbourne's Twitter password, probably`
,`Who let the dogs out?`
,`What do vegans taste like?`
,`An item NOT found in Taylor Swift's purse`
,`Name a new reggae band made up entirely of chickens`
,`Name a children's book by someone who hates children`
,`The name of your new plumbing company`
,`Make up a word that describes the sound of farting into a bowl of mac & cheese`
,`A new ice cream flavor that no one would ever order`
,`Name a new movie starring a talking goat who is president of the United States`
,`Something that would not work well as a dip for tortilla chips`
,`If God has a sense of humor, he welcomes people to heaven by saying, "BLANK"`
,`The name of a clothing store for overweight leprechauns`
,`Something upsetting you could say to the cable guy as he installs your television service`
,`The worst thing that could jump out of a bachelor party cake`
,`Come up with a name for a new beer marketed toward babies`
,`A terrible theme for a high school prom`
,`Make up a name for a silent-film porno from the 1920s`
,`Something you should not whisper to your grandmother`
,`A terrible name for a 1930s gangster`
,`Brand name of a bottled water sold in the land of Oz`
,`A fun thing to yell as a baby is being born`
,`The worst family secret that could come out over Thanksgiving dinner`
,`The name of a toilet paper specifically designed for the Queen of England`
,`Something you'd probably find a lot of in God's refrigerator`
,`The worst person to narrate the audiobook of "Fifty Shades of Grey"`
,`A lawn decoration sure to make the neighbors mad`
,`The worst thing to say when trying to adopt a pet`
,`A good name for an erotic bakery`
,`People wouldn't respect He-Man as much if, to gain his power, he held up his sword and shouted ____________________`
,`Fun thing to do if locked in the mall overnight`
,`The worst person to receive a sponge bath from`
,`Pants would be a whole lot better if they "BLANK"`
,`The most awesome Guinness World Record to break`
,`A little-known way to get gum out of your hair`
,`It's bad to be buried alive. It's worse to be buried alive with "BLANK".`
,`Something that would not work as well as skis`
,`A rejected title for "The Good, The Bad and the Ugly" was "The Good, the Bad and the "BLANK""`
,`A rejected name for a ship in the U.S. Naval Fleet: the USS "BLANK"`
,`What to say to get out of jury duty`
,`What the Statue of Liberty is hiding beneath that robe`
,`There's only one time that murder is acceptable and that is when "BLANK"`
,`Take any well-known restaurant and slightly change its name to something inappropriate`
,`Little-known fact: The government allows peanut butter to contain up to 10% "BLANK"`
,`A good sign that your house is haunted`
,`A catchy name for a sperm bank`
,`A bad occupation for a robot to have`
,`A sequel to the painting Dogs Playing Poker`
,`The Tooth Fairy's other job`
,`Little-known fact: A secret area in the White House is the "BLANK" room`
,`An invention by Thomas Edison that never caught on`
,`A bad place to skinny-dip`
,`What time is it?`
,`A birthday present you shouldn't get for your grandmother`
,`A short motto everyone should live by`
,`Invent a Christmas tradition sure to catch on`
,`A bad thing to yell during church`
,`The unsexiest thought you can have`
,`A good improvement to make to Mt. Rushmore`
,`The best way to start your day`
,`The worst name for a summer camp`
,`Something that's made worse by adding cheese`
,`Three things are certain in life: Death, Taxes, and "BLANK"`
,`A faster way to get home from the Land of Oz is to click your heels three times and say "BLANK".`
,`The first commandment in the new religion you started`
,`Come up with a name for a rock band made up entirely of baby ducks`
,`Something that is currently legal that should be banned`
,`A word that should never follow Beef`
,`The perfect song to hum on the toilet`
,`A bad thing to say to a cop as he writes you a speeding ticket`
,`Something you shouldn't buy off of Craigslist`
,`Take any U.S. president's name and turn it into something inappropriate`
,`We can all agree that "BLANK"`
,`The name you would give to a really mopey pig`
,`A great name to have on a fake I.D.`
,`What robots dream about`
,`What really happened to Amelia Earhart`
,`How far is too far?`
,`If at first you don't succeed...`
,`Finish this sentence: When I'm rich, my mansion will have a room called The "BLANK" Room.`
,`The best`
,`Something you'd be surprised to see come out of a pimple you pop`
,`Today's music needs more "BLANK"`
,`A fun trick to play on your doctor`
,`A bad place for your rocket ship to crash would be The Planet of the "BLANK"`
,`A bad campaign slogan for a congressperson`
,`The coolest way to die`
,`Two people from history that should definitely have sex`
,`The name of an all-male version of Hooters`
,`A little-known nickname for New Orleans`
,`The next product for Matthew McConaughey to endorse`
,`A unique way to escape from prison`
,`The title of a new YouTube cat video that's sure to go viral`
,`A gift nobody would want: The "BLANK" of the Month Club`
,`A just-so-crazy-it's-brilliant business idea to pitch on "Shark Tank"`
,`A terrifying fortune cookie fortune`
,`It would be scary to read on a food package, May contain trace elements of "BLANK".`
,`What a dog sext message might say`
,`Something the devil is afraid of`
,`CBS should air a TV show about lawyers who are also "BLANK"`
,`A great thing to yell before jumping out of an airplane`
,`What you hope the Mars Rover finds`
,`A TMZ headline you really want to see`
,`Something that will get you thrown out of a Wendy's`
,`A rejected phrase for one of those Valentine heart candies`
,`Where missing socks go`
,`The first sign that you're old`
,`The name of a cocktail for hillbillies`
,`Graffiti you might find in a kindergarten`
,`The worst thing to wear to your court trial`
,`A rejected crayon color`
,`An angry review you'd give this game`
,`Bad advice for new graduates`
,`The best way to tell if someone is dead`
,`A terrible talent to have for the Miss America Pageant`
,`The worst`
,`Tomorrow's news headline: Scientists Are Shocked to Discover That "BLANK"`
,`The worst material with which to make a snowman`
,`A terrible sportscaster catchphrase for when somebody dunks a basketball`
,`The first thing a pig would say if it could talk`
,`A surprising job entry on Abraham Lincoln's resume`
,`The worst shape for an animal cracker`
,`A weird thing to find in your grandparents' bedside table`
,`The worst name for a big and tall store`
,`Something you'd yell to heckle the performing dolphins at Sea World`
,`A new name for kumquats`
,`The name of a shampoo for hippies`
,`The real secret to living to age 100`
,`What really happens if you tear off that mattress tag`
,`A bad first line for your presidential inauguration speech`
,`A fun thing to do with a bowl of pudding`
,`Another use for cooked spaghetti`
,`A weird physical way to greet someone`
,`The worst name for a tanning salon`
,`The worst word that can come before fart`
,`A bad substitute for a toothbrush`
,`A trick you shouldn't teach your dog`
,`Something you can only do in a Walmart if no one's looking`
,`A name for a really cheap hotel`
,`The second thing said on the moon`
,`Why so serious?`
,`A tourist attraction in Hell`
,`The worst name for a mountain`
,`A thought that keeps Santa Claus awake at night`
,`The best thing about being really dumb`
,`Come up with a name for a salad dressing by Lindsay Lohan`
,`What they call pooping in the Land of Oz`
,`A completely wrong way to spell Jennifer Aniston`
,`The worst way to remove pubic hair`
,`You know you're really drunk when...`
,`The best way to defeat terrorism is...`
,`An animal Noah shouldn't have saved`
,`The biggest secret the government keeps`
,`The password to the secret, high-society sex club down the street`
,`Another use for gravy`
,`The worst name for a rap artist`
,`An angry internet comment on a pet store's website`
,`A rejected shape for Marshmallow Peeps`
,`Something that should never be homemade`
,`The worst name for a funeral home`
,`What Chewbacca has really been yelling all these years`
,`An item on every pervert's grocery list`
,`The worst car feature that ends with holder`
,`A Tweet from a caveman`
,`Knock, knock! Who's there? "BLANK"`
,`A great nickname for your armpit hair`
,`Pick any city name and make it sound dirty`
,`What you want your gravestone to read`
,`A slogan to get everyone excited about corn`
,`It never ends well when you mix "BLANK" and "BLANK"`
,`The best reason to go to Australia`
,`The beauty pageant no one wants to see: Miss "BLANK"`
,`The perfect meal would be a "BLANK" stuffed in a "BLANK" stuffed in a "BLANK"`
,`What's black and white and red all over?`
,`A little-known fact about the Jolly Green Giant`
,`The worst thing to find growing on your neck`
,`USA! USA! America is still number one in...`
,`A good name for an elderly nudist colony`
,`You should never "BLANK" and "BLANK" at the same time`
,`What is a tree thinking all day?`
,`What you call a baby sasquatch`
,`A good name for a sex robot`
,`A bad reason to call 911`
,`Name the next big sexually transmitted disease`
,`The worst thing about Canada`
,`A strange thing to keep as a pet`
,`What kittens would say if they could talk`
,`A sign you probably shouldn't put up in your yard`
,`What dogs think when they see people naked`
,`The sound a tree actually makes when it falls and no one is around to hear it`
,`The grossest thing you could find at the bottom of a swimming pool`
,`What happens to circumcision skin`
,`The worst name for an SUV`
,`A good use for toenail clippings`
,`The title of the most boring porno ever`
,`Something you shouldn't stuff with cheese`
,`Something Godzilla does when he's drunk`
,`Trash talk you would hear at a chess meet`
,`A kinky weird thing that does NOT happen in 50 Shades of Grey (as far as you know)`
,`The best part about being Donald Trump`
,`Tip: Never eat at a place called Kentucky Fried "BLANK"`
,`Something overheard at the Last Supper`
,`The name of a species of dinosaur you wouldn't want to meet`
,`The worst way to fly: "BLANK" Airlines`
,`So... what was that movie "Birdman" about anyway?`
,`Little-known fact: Over the course of a lifetime, an average person accidentally eats ten "BLANK"`
,`A great pet name for a parasitic worm that lives in your ear`
,`A prank the Supreme Court Justices probably play on each other`
,`A crazy thing to find during a colonoscopy`
,`A word that should be in the dictionary but isn't`
,`Advice: Never stick your tongue into "BLANK"`
,`The perfect name for a second head that sprouts on your shoulder`
,`Something a weatherman might yell if he completely snapped during the weather forecast`
,`The worst advice a doctor could give`
,`Life hack! Lower your heating bills by...`
,`The worst thing that could crawl out of your toilet`
,`No one would guess this is where the treasure is buried`
,`What your dog thinks when he sees you naked`
,`How Garfield the cartoon cat will eventually die`
,`The worst pizza is "BLANK"-style pizza`
,`What to do when your parachute fails`
,`Sleepwalking can be a problem but it's not as bad as sleep"BLANK"`
,`A good name for a dog country singer`
,`Little-known fact: the fourth Wise Man gave baby Jesus the worst gift of all: "BLANK"`
,`A theme for a desk calendar that wouldn't sell very well`
,`A good name for a restaurant that serves animals with the faces still on them`
,`This just in! A "BLANK" has won the election and will become the new governor of Texas.`
,`The worst Halloween costume for a young child`
,`A lesser-known ingredient in most microwave pizza pockets`
,`A better name for the Washington Monument`
,`A terrible food truck would be one that goes around selling only "BLANK"`
,`The worst thing to overhear during your surgery`
,`A better name for dandruff`
,`The liquid that would make for the worst salad dressing`
,`Paul Bunyan's replacement for Babe The Blue Ox when he dies`
,`Make up a word that means "to make up a word"`
,`The name of Jesus' 13th apostle`
,`Something you don't want to find in your Christmas stocking`
,`George W. Bush and Dick Cheney's rap duo name`
,`The most bitching thing you can airbrush on your van`
,`Something you probably shouldn't bring on a trip across the Sahara desert`
,`Something you'd love to smash with a wrecking ball`
,`Life would be so much better if we all lived in "BLANK"`
,`What deer would use for bait if they hunted hunters`
,`The best name for an obese rapper`
,`If animals took over, an exhibit you'd see at the human zoo`
,`A magazine that should never have a nude centerfold`
,`Make up a word for the watery substances that come out of a ketchup bottle when you first squeeze it`
,`A better name for the game Duck Duck Goose`
,`The worst children's board game would be "BLANK", "BLANK" Hippos`
,`The world's most boring video game`
,`The difference between Grade A beef and Grade B beef`
,`Jesus's REAL last words`
,`On your wedding night, it would be horrible to find out that the person you married is "BLANK"`
,`A name for a brand of designer adult diapers`
,`The name of a font nobody would ever use`
,`Something you shouldn't get your significant other for Valentine's Day`
,`The name of a toilet paper specifically designed for the Queen of England`
,`A good sign that your house is haunted`
,`The first sign that you're old`
,`A sign you probably shouldn't put up in your yard`

,`A weird thing for the letters in your alphabet soup to suddenly spell out`
,`A great prank to play on a pizza delivery guy`
,`The most surprising thing you could find in the glove box of a rental car`
,`Four-leaf clovers are lucky. But if you find a five-leaf clover...`
,`The only job you would do for free`
,`The most German-sounding word you can invent`
,`The worst name for a country music singer`
,`It would be really weird to have a bobblehead doll of BLANK`
,`If you can't say anything nice...`
,`The title of Bob Saget's biopic`
,`The perfect time to wear stilts`
,`Little-known fact: In a lifetime, the average person will BLANK over 1,000 times while sleeping`
,`A rejected name for tater tots`
,`On the seventh day, God rested. On the eighth day, he BLANK`
,`A weird reason to have your car recalled`
,`You should always wear a helmet when BLANK`
,`Few remember Michelangelo's <i>Mona Lisa 2<\/i> which was a painting of BLANK`
,`Something a kangaroo might search for on Google`
,`A bad substitute for a surfboard`
,`Where would you live if you were two inches tall?`
,`What to do when a really tall person sits in front of you at the movie theater`
,`An entry in teenage Tarzan's diary: "Today, I BLANK"`
,`The absolute best place to hide your house key`
,`A strange place to go to while wearing a ski mask`
,`What those giant Easter Island heads are thinking`
,`So, how do you like it?`
,`What ruined Hannibal "The Cannibal" Lecter's credit score?`
,`What the lamest Transformer would morph into`
,`You would gladly give money to someone on the street if they asked "Can you spare some change so I can BLANK?"`
,`SPOILER ALERT: The big plot twist in <i>The Sisterhood of the Traveling Pants 7<\/i> is that the pants BLANK`
,`You know you're a spoiled brat when your tree house has a BLANK`
,`What King Kong is most self-conscious about`
,`The only reason to ever play a banjo`
,`The big conspiracy that nobody even suspects is BLANK`
,`How Jonah passed the time stuck inside a giant fish`
,`Something that the Keebler Elves chant during a strike`
,`The title of the most popular TV show in North Korea, probably`
,`A quick way to annoy Pat Sajak while playing <i>Wheel of Fortune<\/i>`
,`The title of a National Public Radio show that would put you to sleep the quickest`
,`Where the missing sock in the dryer ends up going`
,`The worst part about being seven feet tall`
,`A really weird protest sign would be "End BLANK Now!"`
,`How you can tell your new, all-vegetable diet is working`
,`If Cap'n Crunch ever gets court-martialed, it'll probably be because he...`
,`Where in the world is Carmen Sandiego? `
,`The name of a band in which every member plays the spoons`
,`A little-known use for ear wax`
,`The type of life they'll probably find on Mars`
,`The name of a board game for players age 70 & older `
,`Bob the Builder probably wouldn't be as popular with children if he were Bob the BLANK`
,`The worst thing to do when a bear is right next to you`
,`Unlike "Maverick" or "Iceman," a really bad Air Force fighter pilot name would be BLANK`
,`It would've been a much different movie if instead of "Phone home," E.T. kept saying, "BLANK"`
,`A weird way to dry your hair`
,`A new name for the U.S. Congress `
,`What Adam thought when he first met Eve`
,`What do ceramic garden gnomes do at night?`
,`A mystery that Sherlock Holmes could never solve: The Case of the BLANK`
,`The real secret to a happy marriage is...`
,`A rejected name for the game Yahtzee`
,`The best thing to blurt out in order to ruin a beautiful sunset`
,`A mobster's pet peeve`
,`You know you're comfortable in a relationship when you ask your significant other to BLANK`
,`The best line to say when you come out of a 10-year coma `
,`The real reason Mr. Clean is grinning`
,`The best name to give an ugly baby`
,`The first thing Abraham Lincoln would do if he came back from the dead`
,`Come up with a <i>TMZ<\/i> celebrity headline from five years in the future`
,`What the roller coaster attendant is actually saying during his mumbled preamble before the ride`
,`An ad slogan for cardboard: "Now with more BLANK" `
,`The most annoying person in a movie theater would BLANK`
,`A rejected Monopoly game piece `
,`A terrible sign-off line for a newscaster`
,`A good sign that you may be a ghost`
,`The creepiest thing to whisper in somebody's ear as you're hugging them`
,`A better name for the ukulele`
,`What happens when Wile E. Coyote finally catches The Road Runner?`
,`What the Queen's Guard is secretly thinking as they just stand there`
,`The worst part about having a mustache`
,`An awkward thing to hear from the person pooping in the bathroom stall next to you`
,`A quick way to save money on grocery bills`
,`A good sign you're never going to be a professional football player`
,`The worst Viking: Eric the BLANK`
,`How they really select the next Pope`
,`The name of a new cologne inspired by celebrity chef Guy Fieri`
,`A great way to quickly get out of credit card debt`
,`The worst upstairs neighbors would be people that BLANK`
,`The weirdest message your cat could write out to you in its litter box`
,`A good nickname for your abs`
,`The lesser-known sequel to <i>Old Yeller<\/i>: <i>Old Yeller 2: BLANK<\/i>`
,`A horrible pick-up line`
,`The best way to keep a co-worker from stealing your lunch`
,`The least scary horror movie: <i>Night of the BLANK<\/i>`
,`The worst thing to find when you move into a new house`
,`The worst carnival prize you could win`
,`The most unusual environmental cause is "BLANK the Whales"`
,`The only thing worse than standing in a really long line is standing in a really long line for BLANK`
,`You wake up 100 years in the future and are shocked to find BLANK`
,`A weird thing for a preacher to say to end every sermon`
,`A rejected tourism slogan for Des Moines, Iowa: "Home of the BLANK"`
,`A forgotten book in the classic Harry Potter series: <i>Harry Potter and the BLANK<\/i>`
,`The weirdest thing a restroom attendant could offer you`
,`The worst Thanksgiving Day balloon would be a giant, inflatable BLANK`
,`The big, crazy twist at the end of the next M. Night Shamalayan movie: He was BLANK the whole time!`
,`Most people know it as The Big Apple, but a lesser-known nickname for New York is The Big BLANK`
,`The next best thing to chew when you're out of gum`
,`You know you're in a very weird fast food restaurant when the cashier asks, "Do you want BLANK with that?"`
,`It's not the heat. It's not the humidity. It's the BLANK`
,`It's incredibly rude to BLANK with your mouth open`
,`You never have a BLANK when you need one`
,`<i>The Empire Strikes Back<\/i> would've been ruined if Darth Vader said "Luke, I am BLANK"`
,`The worst 1960s teen movie was definitely <i>BLANK Beach<\/i>`
,`The most disgusting breakfast cereal: BLANK Flakes`
,`In the next big sports scandal, we'll find out that BLANK`
,`Worse than global warming, the real threat to humanity is global BLANK`
,`Forget dogs. What is really man's best friend?`
,`How you can tell it's a doctor's first day on the job`
,`The worst name for an all-girl band`
,`A bad thing to say to your date's parents`
,`Pitch the worst video game idea in five words or less`
,`How embarrassing for you. You just BLANK`
,`The worst mistake you could make while streaming on Twitch.tv`
,`The worst song to do pairs figure skating to`
,`What landed you in the emergency room this time?`
,`The worst thing to say during a job interview`
,`A magazine category that hasn't been invented yet`
,`The top 3 ingredients in garbage truck juice`
,`A really bad superhero power`
,`The worst thing to put on a pizza`
,`If evolution is true, then why hasn't BLANK evolved into BLANK?`
,`R2D2's biggest complaint`
,`Come up with a bad tourism slogan for the Old Faithful geyser`
,`The worst possible choice for the person on the new $20 bill`
,`A little-known lyric in the original draft of the "Star-Spangled Banner"`
,`The best thing to shoot out of a cannon`
,`The winners on <i>The Bachelor<\/i> get a rose. The losers should get BLANK`
,`From the creators of "Whack-a-Mole" comes the new game "BLANK-a-BLANK"`
,`The title of a never-released Jimmy Buffett song`
,`The worst thing to hear from your GPS: "In two miles, BLANK"`
,`The weirdest sentence a judge could impose`
,`A good use for toenail clippings`
,`A fitting punishment for people who double-dip their chips`
,`America's energy crisis would be over if we made cars that ran on BLANK`
,`Something it'd be fun to watch ride an escalator `
,`A high school superlative you don't want to win: Most Likely To BLANK`
,`A rejected title for <i>Moby Dick<\/i>`
,`Something you do not want to find under your hotel bed`
,`You know your doctor has gone insane when he tells you to make sure you BLANK at least once a day`
,`The worst part about being a Teenage Mutant Ninja Turtle`
,`A sign that your kid isn't good at sports`
,`The first sign that you're no longer cool`
,`A video sure to get over 150 million views on YouTube would be "Chickens BLANK"`
,`A surprising thing to find stuck to the bottom of your shoe`
,`The worst thing that could follow "Honey-Roasted"`
,`Why are geese such jerks?`
,`A sign that you're a bad teacher`
,`The worst breakfast: pancakes shaped like BLANK`
,`What bears dream about all winter`
,`A good sign that you've drunk too much Mt. Dew`
,`What's in the box? WHAT'S  IN THE BOX?!`
,`The manliest way to start a conversation`
,`What the abominable snowman does when he's bored`
,`A good alternative for ping-pong paddles`
,`You know you're a chocoholic when...`
,`The worst reason to use a time machine`
,`Something you should not do while crowdsurfing`
,`What those bolts in Frankenstein's neck are for`
,`What Waldo from "Where's Waldo?" says to himself in the mirror`
,`The worst road trip would start with someone BLANK`
,`A creepy thing to write in your email signature line`
,`The only five words in your obituary in the newspaper`
,`What's the U.S. government really hiding in Area 51?`
,`The worst advice an IT guy could give`
,`A really bad name for an apartment complex: "BLANK Place"`
,`What should we do with all of that plastic that won't disintegrate?`
,`One thing that the rich truly enjoy is diamond-encrusted BLANK`
,`The best part of turning 100 years old`
,`The lesser-known other way to find the Wizard of Oz: Follow the BLANK Road`
,`Forget coffee. Don't talk to me until I've had my BLANK`
,`Odd new shampoo instructions: "Lather, Rinse, BLANK, Repeat."`
,`The worst magic trick`
,`The lost Hemingway book: <i>The Old Man and the BLANK<\/i>`
,`The title of a podcast you would never ever listen to`
,`The name of a new, terrifying species of spider`
,`The most annoying co-worker would constantly BLANK`
,`A surefire way to ruin Christmas`
,`The name of the worst baby doll`
,`"Don't blame me, I voted for BLANK."`
,`The name of a fast food restaurant in the Stone Age`
,`Dodgeball would be an even better sport if BLANK were allowed`
,`A BLANK a day keeps the doctor away`
,`What is the Abraham Lincoln statue thinking while he's sitting there in the Lincoln Memorial?`
,`Instead of "Cheese!" the worst family photographer would tell you to say, "BLANK!"`
,`The title of a college admission essay that would definitely get rejected`
,`Something Big Bird will confess on his deathbed`
,`What you would expect Justin Bieber's line of fragrances to smell like`
,`The last thing you'd want to find in your air ducts`
,`The worst college football team: The Fighting BLANK`
,`A terrible name for a dragon`
,`In the future, moviegoers will flock to see <i>Jurassic Park 10: BLANK<\/i>`
,`The worst way to unclog a toilet`
,`Something that's been hiding in the background in every episode of <i>Friends<\/i>`
,`We should combine Minnesota and Wisconsin and call them BLANK`
,`The name of a cable network that no one watches`
,`If the groundhog "kind of" sees his shadow, it's six weeks of BLANK`
,`What's really destroying the ozone layer?`
,`You know you're famous when...`
,`The absolute worst moment for a bird to poop on you`
,`A weird thing for someone to frame and hang on the wall`
,`The best thing to yell while going over Niagara Falls in a barrel `
,`What you don't want to hear from the passenger next to you at the start of a 20-hour flight`
,`Why ducks really fly south in the winter`
,`Where Charlie Brown winds up at age 45`
,`What a frog would say to his psychiatrist`
,`What is the Loch Ness Monster, really?`
,`The Pyramids would be even more impressive if they contained BLANK`
,`What Sam Elliott probably nicknames his mustache`
,`The worst theme for your kid's first dance recital`
,`The worst combination of two actors that could possibly star in the next season of <i>True Detective<\/i> together`
,`It's disappointing to put together a 1,000 piece puzzle and realize it's just a picture of BLANK`
,`The name of a law firm you shouldn't hire`
,`The worst thing to find frozen in an ice cube`
,`Something you don't expect to see when you spy on your neighbors`
,`An experiment mice actually like having performed on them`
,`A double rainbow doesn't have gold at the end of it. Instead, it has BLANK`
,`The best shirt to wear next to somebody who's wearing an "I'm with stupid" T-shirt`
,`The worst thing a plastic surgeon could say after he botched your surgery: "I'm sorry, I accidentally BLANK"`
,`The worst advice your boxing coach could give you`
,`What an alarm clock could say that would wake you right up`
,`A weird thing to hear from your doctor: "I'm afraid you have BLANK"`
,`In a shocking poll, it was discovered that three out of four Americans BLANK`
,`The most common thing you'd hear if you could read people's thoughts`
,`The name of a hairstyle that will never catch on`
,`A bad name for an Italian restaurant`
,`A realistic, honest fast-food slogan`
,`A good sign that you've drunk too much Mt. Dew`
,`What bears dream about all winter`
,`The worst breakfast: pancakes shaped like BLANK`
,`A sign that you're a bad teacher`
,`If a genie gives you three wishes, the best things to wish for are: 1) a billion dollars, 2) eternal life, and 3) BLANK`
,`The worst charity: Save the BLANK`
,`Little-known fact: An unaired episode of <i>The Brady Bunch<\/i> had the family dealing with BLANK`
,`The futuristic invention you can't wait to see exist`
,`What's really at the center of the Earth?`
,`Invent a new word for the toilet that sounds like it's from Shakespeare`
,`Safety tip! Don't eat a half hour before you BLANK`
,`The real way you can tell an alligator from a crocodile`
,`A very unnecessary surgery`
,`Survival tip! Start a fire by rubbing BLANK`
,`Helpful advice you would give to Super Mario`
,`In the future, scientists discover that the secret to eternal youth is BLANK`
,`Something you shouldn't use a chainsaw for`
,`A surprising purchase on Willy Wonka's credit card statement`
,`The worst album: "BLANK Sings the Blues"`
,`A really stupid idea for a phone app (that would still make you millions of dollars)`
,`The name of a new game show that sounds terrible`
,`The one thing you wish a politician would just say already`
,`A secret way to get stubborn ketchup out of the bottle`
,`The most surprising person to admit to being the Zodiac Killer`
,`A lesson that probably wouldn't be taught on <i>Sesame Street<\/i>`
,`Something you promise to yell if you win this game`
,`A creepy thing to find scribbled onto a dollar bill`
,`If you don't have extra money, an odd thing to use as a tip for your waiter`
,`The name of the next hot boy band`
,`A terrible name for a king`
,`A sure sign that a drifter has been secretly living in your house`
,`The name of a new U.S. state you would never visit`
,`The one thing that isn't better dipped in chocolate`
,`Like "dinger," "grand salami," and "jack," come up with a new slang term for a home run in baseball`
,`A terrible vacation idea: going to visit The Museum of BLANK`
,`A great gag gift would be an exploding BLANK`
,`The official medical term for belly button lint (probably)`
,`A surprising thing to hear in a nature documentary`
,`The years 2011 to 2020 will be remembered as "The BLANK Age"`
,`An inventive way to get rid of head lice`
,`Little-known fact: the scariest animal in the world is the BLANK cobra`
,`A bad name for a brand of hot sauce`
,`An excuse to avoid riding the mechanical bull`
,`What Big Foot complains about to his therapist the most`
,`The worst warning to read on some medicine you just swallowed`
,`A strange poster to hang in a college dorm room`
,`Never pay more than $3 for BLANK`
,`The name of a really bizarre diet that just never caught on`
,`The most popular T-shirt slogan in Mississippi, probably`
,`The hit song from the Broadway show <i>Fart: The Musical<\/i>`
,`A ridiculous government agency that no one knows about: The Department of BLANK`
,`The best thing about being thrown into a volcano`
,`The world's most boring video game`
,`New requirement at amusement parks: "You must be this BLANK to ride\"`
,`You probably shouldn't hire a moving company called BLANK`
,`The weirdest combination of three items that you could buy at the store`
,`The worst halftime show: The BLANK Dancers`
,`What's really in a camel's hump?`
,`The most obnoxious name someone could give their kid`
,`Something that is probably on Nicolas Cage's "To Do" list`
,`The newest health food: BLANK juice`
,`HR would probably get the most complaints on "Bring your BLANK to work" day`
,`A lesser-known Knight of the Round Table: Sir BLANK`
,`A Socrates quote that nobody bothered to write down`
,`Why is the sky blue?`
,`The best way to catch a leprechaun`
,`The worst things to juggle`
,`Turns out, the meaning of life is BLANK`
,`The worst tattoo to have on your forehead`
,`A mean text you would send to break up with a Muppet`
,`What really cracked the Liberty Bell?`
,`A weird photo to keep in your wallet`
,`An odd painting to hang above your bed`
,`A poor substitute for a necktie`
,`The perfect day off is just twelve straight hours of BLANK`
,`The worst Vegas casino: BLANK Palace`
,`Something awful to hold in your mouth for an hour`
,`A great way to start a conversation with a weird loner on the subway`
,`A hip, new advertising slogan for socks`
,`Really awful cheerleaders would yell "BLANK!"`
,`Why should you never turn your back on a penguin?`
,`The reason Pluto isn't a planet anymore`
,`The biggest issue facing the town of Margaritaville `
,`The least appetizing name for a restaurant`
,`Something you should not say in front of a parrot`
,`Something you should not put in your kid's sandbox`
,`A bad name for a hospital`
,`Something you do not want to do while standing in a police lineup`
,`Where's Jimmy Hoffa? `
,`An odd casting choice would be Clint Eastwood as BLANK`
,`After the Heimlich Maneuver, the second-best way to stop someone from choking`
,`A rejected safety technique for when you catch fire was to "stop, drop, and BLANK"`
,`The difference between Grade A beef and Grade B beef`
,`The weirdest room you could see in an airport would be one specifically designated for BLANK`
,`If you really want to impress the Olympic diving judges, try a dive that involves BLANK`
,`What you think the word "pandiculation" means`
,`A body of water you definitely shouldn't swim in`
,`Something fun to ask the old wise man on top of the mountain`
,`A rejected tagline for <i>Star Trek<\/i> instead of "Space: the final frontier" was "Space: BLANK"`
,`How would YOU fix the economy?`
,`The hardest part about living in a submarine`
,`If you really, really love something, let it BLANK`
,`A name for a really scary swamp: BLANK Swamp`
,`The name of the music playlist that will definitely put an end to the party`
,`A bad name for a water park`
,`A polite way to say "booger"`
,`A fun outfit to dress up the statue of David in`
,`Kennedy's original speech said, "Ask not what your country can do for you, ask BLANK"`
,`What the hot trend in weddings will be in the year 2046`
,`Something fun to scream at a farmer's market`
,`Mother Teresa's deepest secret `
,`The most creative thing you can make entirely out of boogers`
,`An ill-advised outfit to wear to your first day at a new job`
,`Sleepwalking can be a problem but it's not as bad as sleepBLANK`
,`In the future, RoboCop actually retires from the police force and becomes Robo-BLANK`
,`What to do when your parachute fails`
,`Something people used to do for fun before electricity`
,`The most embarrassing crime to get caught committing`
,`The name that cavemen probably gave to diarrhea`
,`The worst person to share a hot tub with`
,`A peculiar thing to see in a Help Wanted ad would be "Help Wanted: BLANK"`
,`What mustaches SHOULD be called`
,`The worst pizza is BLANK-style pizza`
,`A real weirdo would fall asleep to the sounds of BLANK`
,`The name of a dog food brand you probably should not buy`
,`Come up with a name for a generic brand of hot dogs that you probably shouldn't buy`
,`Everything tastes better with BLANK`
,`Life hack! Lower your heating bills by...`
,`The worst thing that could crawl out of your toilet`
,`The worst advice a doctor could give`
,`Something a weatherman might yell if he completely snapped during the weather forecast`
,`A great birthday present for your worst enemy`
,`The name of a painting Michelangelo was ashamed he created`
,`A clever thing for James Bond to say as he throws someone out of an airplane`
,`No one would guess this is where the treasure is buried`
,`The secret to a healthy head of hair`
,`A strange thing to read on a door mat`
,`The secret to a great marriage`
,`What really happens if you stare at the sun too long`
,`A prank the Supreme Court Justices probably play on each other`
,`What the Easter Bunny does with his free time`
,`A little known-perk of being U.S. president`
,`A horrible charity: BLANK for Tots`
,`A word that should be in the dictionary but isn't`
,`A really odd thing to say on your deathbed`
,`The Four Horsemen wouldn't be as scary if they were the Four BLANKmen of the Apocalypse`
,`It's illegal to yell "Fire!" in a crowded theater, but it should also be illegal to yell, "BLANK!"`
,`A good name for a pet cemetery`
,`A new word for people that drive too slow in the fast lane`
,`The perfect name for a second head that sprouts on your shoulder`
,`The worst material from which to make a pair of pajamas`
,`Queen Elizabeth's deepest, darkest secret`
,`Come up with a slogan for the Russian Tourism Board`
,`The best part about being Donald Trump`
,`Tip: Never eat at a place called "Kentucky Fried BLANK"`
,`Sometimes John Travolta wildly mispronounces names. How might he wildly mispronounce his own name?`
,`The worst toy store: Build-A-BLANK Workshop`
,`The weirdest thing you can buy at the Vatican gift shop`
,`The worst invention that starts with "Spray-On"`
,`The name of a species of dinosaur you wouldn't want to meet`
,`Something overheard at the Last Supper`
,`A possible entry in Gary Busey's dream journal: "Tonight I dreamed BLANK"`
,`Something you can make out of body hair`
,`The worst way to fly: BLANK Airlines`
,`So... what was that movie Birdman about anyway?`
,`A great pet name for a parasitic worm that lives in your ear`
,`An idea for Lady Gaga's next crazy outfit: a BLANK dress`
,`Little-known fact: Over the course of a lifetime, an average person accidentally eats ten BLANK`
,`Something you probably shouldn't try to sell on eBay`
,`The worst air freshener scent`
,`A terrible thing to sign on the cast of your friend's broken leg`
,`It would be awesome to win <i>Jeopardy<\/i> with the phrase, "What is BLANK, Alex?"`
,`A sign you probably shouldn't put up in your yard`
,`A bad title for a self-help book`
,`An unusual "Special Skill" to include on your resume`
,`What kittens would say if they could talk`
,`A strange thing to keep as a pet`
,`The worst thing about Canada`
,`You should never share BLANK with someone else`
,`The grossest thing you could find at the bottom of a swimming pool`
,`The sound a tree actually makes when it falls and no one is around to hear it`
,`You need three things to live: food, water, and BLANK`
,`A good use for toenail clippings`
,`What you would do with two free hours and a flamethrower`
,`The worst name for an SUV`
,`New sport idea: professional BLANK`
,`Trash talk you would hear at a chess meet`
,`Something you shouldn't stuff with cheese`
,`Something pirates probably aren't very good at`
,`Everyone knows there's no such thing as BLANK`
,`A completely untrue rumor about Alvin from Alvin and the Chipmunks`
,`You should never BLANK and BLANK at the same time`
,`The worst thing about being a billionaire`
,`Briefly describe your imaginary friend`
,`New movie idea: <i>The Muppets Take BLANK<\/i>`
,`What you call a baby sasquatch`
,`What is a tree thinking all day?`
,`The best use for a leftover meatball`
,`A bad reason to call 911`
,`The best way to quickly blow a million dollars`
,`Your first decree after being named Supreme Ruler of Earth`
,`The worst thing to receive for trick-or-treat`
,`Come up with a name for a kooky ostrich who solves mysteries`
,`A phrase you would love to hear Morgan Freeman say`
,`USA! USA! America is still number one in...`
,`An Olympic sport that never made it: Synchronized BLANK`
,`The government should legalize...`
,`The first thing to do if you're attacked by a shark`
,`The worst thing to find growing on your neck`
,`A little-known fact about the Jolly Green Giant`
,`The perfect meal would be a BLANK stuffed in a BLANK stuffed in a BLANK`
,`What's black and white and red all over?`
,`New show idea: <i>America's Next Top BLANK<\/i>`
,`It never ends well when you mix BLANK and BLANK`
,`Invent a silly British term for pooping`
,`The best reason to go to Australia`
,`The beauty pageant no one wants to see: Miss BLANK`
,`The most boring graffiti you could see in the subway`
,`A slogan to get everyone excited about corn`
,`You never forget your first BLANK`
,`Little-known fact: The human body is approximately 80% BLANK`
,`Coming soon to a theater near you: Benedict Cumberbatch is BLANK`
,`Something you shouldn't buy at a yard sale`
,`If we only use 10% of our brains, what's the other 90% doing?`
,`What you want your gravestone to read`
,`The worst menu item that starts with "All You Can Eat"`
,`A sign you wouldn't want to see at a seafood restaurant`
,`Something fun to yell during an opera`
,`A group activity at a really bad summer camp`
,`A Girl Scouts cookie name that got rejected because it was just too ridiculous-sounding`
,`The least impressive Boy Scout badge`
,`The worst ringtone for a cell phone`
,`A great nickname for your armpit hair`
,`"Knock, knock!" "Who's there?" BLANK`
,`A Tweet from a caveman`
,`A message found in a bottle floating in the sea`
,`The worst car feature that ends with "holder"`
,`What Chewbacca has really been yelling all these years`
,`The most stereotypical country song title`
,`The best way to survive a bear attack is BLANK`
,`The worst name for a funeral home`
,`An angry internet comment on a pet store's website`
,`The worst name for a rap artist`
,`A rejected shape for Marshmallow Peeps`
,`Something that should never be "homemade"`
,`Three things MacGyver needs to make a bomb`
,`Another use for marshmallows`
,`Another use for gravy`
,`A great way to cure the hiccups`
,`An animal Noah shouldn't have saved`
,`The biggest secret the government keeps`
,`Something you wouldn't expect a Ouija board to say`
,`The best way to defeat terrorism is...`
,`Come up with a name for a salad dressing by Lindsay Lohan`
,`The best way to tell if a tomato is ripe`
,`A good post-music career for Justin Bieber`
,`Come up with a name for a sitcom about a bunch of wacky nuns`
,`A completely wrong way to spell "Jennifer Aniston"`
,`The 11th Commandment: Thou shalt not...`
,`The best way to scare a burglar`
,`The worst thing to yell while a professional golfer putts`
,`The second thing said on the moon`
,`Something you can only do in a Walmart if no one's looking`
,`A name for a really cheap hotel`
,`The worst name for a mountain`
,`Why so serious?`
,`The best thing about being really dumb`
,`A thought that keeps Santa Claus awake at night`
,`The real secret to living to age 100`
,`What really happens if you tear off that mattress tag`
,`A bad first line for your presidential inauguration speech`
,`A fun thing to do with a bowl of pudding`
,`Another use for cooked spaghetti`
,`A weird physical way to greet someone`
,`The worst name for a tanning salon`
,`The worst word that can come before "fart"`
,`A bad substitute for a toothbrush`
,`A trick you shouldn't teach your dog`
,`The worst material with which to make a snowman`
,`A terrible sportscaster catchphrase for when somebody dunks a basketball`
,`The first thing a pig would say if it could talk`
,`The worst shape for an animal cracker`
,`A surprising job entry on Abraham Lincoln's resume`
,`Something you'd yell to heckle the performing dolphins at Sea World`
,`The worst name for a "big and tall" store`
,`The name of a shampoo for hippies`
,`A new name for kumquats`
,`The worst thing to wear to your court trial`
,`A rejected crayon color`
,`Graffiti you might find in a kindergarten`
,`The first sign that you're old`
,`The worst question to ask during a White House tour`
,`Tomorrow's news headline: "Scientists Are Shocked to Discover That BLANK"`
,`A terrible talent to have for the Miss America Pageant`
,`Bad advice for new graduates`
,`The best way to tell if someone is dead`
,`A TMZ headline you really want to see`
,`What you hope the Mars Rover finds`
,`Where missing socks go`
,`A rejected phrase for one of those Valentine heart candies`
,`Something that will get you thrown out of a Wendy's`
,`It would be scary to read on a food package, "May contain trace elements of BLANK."`
,`A just-so-crazy-it's-brilliant business idea to pitch on <i>Shark Tank<\/i>`
,`A terrifying fortune cookie fortune`
,`Something the devil is afraid of`
,`CBS should air a TV show about lawyers who are also BLANK`
,`A great thing to yell before jumping out of an airplane`
,`A gift nobody would want: The BLANK of the Month Club`
,`A better name for the game Duck Duck Goose`
,`A bad way to remove unsightly chest hair`
,`An unusual theme for a kid's lunchbox`
,`What the government is hiding from the public in Area 497`
,`What your pancreas tests revealed`
,`A bad, one-word slogan for a presidential campaign`
,`Something you'd make a butler do the moment you hired him`
,`Why did the mortician cross the road?`
,`Something you should never try to heat in the microwave `
,`A surprising thing to find inside a piñata `
,`An alternate name for The Mona Lisa`
,`A reason to travel back in time to two weeks ago`
,`If you'd never heard the term "great white shark," what might you call it when you saw one for the first time?`
,`A place where you're not likely to spot Bigfoot`
,`Something you should never say as the captain of a bowling team`
,`The dumbest person in the history of all time `
,`Another name for the Grand Canyon`
,`Another name for Canada`
,`A bad use for clam chowder`
,`\"On the 147th day of Christmas, my true love gave to me...\"`
,`The best name for an obese rapper`
,`It would be most awesome for Chuck Norris to fight BLANK`
,`A good puck replacement if they run out of pucks in a game of hockey`
,`If animals took over, an exhibit you'd see at the human zoo`
,`A terrible wedding gift`
,`A street name you never see`
,`The first thing that pops into your mind right now`
,`A weapon that should be added to the game Clue`
,`The toy surprise in an Unhappy Meal`
,`Make up a word for the watery substances that come out of a ketchup bottle when you first squeeze it`
,`Make up a name for the space between your nostrils`
,`Italy's newest tourist attraction: The BLANKTower of Pisa`
,`The worst theme for a pinball machine`
,`The name of Jesus' 13th apostle`
,`Something you don't want to find in your Christmas stocking`
,`A title of a self-help book for rats`
,`The worst thing you could rub all over your face`
,`George W. Bush and Dick Cheney's rap duo name`
,`Something you rarely see used as a car decoration`
,`A historical event that would make a bad theme for a restaurant`
,`The worst thing to try to sell door-to-door`
,`Something you probably shouldn't bring on a trip across the Sahara desert`
,`What's that stain?`
,`Something you'd love to smash with a wrecking ball`
,`A bad name for a pet goldfish`
,`Life would be so much better if we all lived in BLANK`
,`Something it's not a good idea to put in the overhead bin on an airplane`
,`A weird thing for a bank robber to demand in a hostage situation`
,`Something they will probably never make a series of commemorative stamps for`
,`A club you wish they had in high school`
,`The best prize you could find in a Cracker Jack box`
,`The worst soup flavor: Cream of BLANK`
,`A strange place to hold a family reunion`
,`Something you'd sneak into space, if you were an astronaut`
,`What they really found in King Tut's tomb`
,`The name of that cheese shop you're going to open some day`
,`The liquid that would make for the worst salad dressing`
,`An unusual motif for a baby's nursery`
,`Another name for toe jam`
,`A better name for dandruff`
,`A terrible name to have if you're running for public office`
,`Four out of five dentists agree you should never BLANK`
,`Something that would make a creepy replacement for the horses on a merry-go-round`
,`The worst thing to vomit into when you suddenly need to vomit`
,`Make up a word that means "to make up a word"`
,`Like Plutonium or Einsteinium, what would you name the next Periodic Table element they discover?`
,`A bad name for a pirate`
,`Something fun to scream when you win in a game of bingo, other than "Bingo!"`
,`A movie that should never be made into a theme park ride`
,`A business or service that shouldn't have a drive-through window`
,`Paul Bunyan's replacement for Babe The Blue Ox when he dies`
,`The worst flavor for a sno-cone`
,`What Smokey the Bear does when he's not fighting forest fires`
,`Combine any two words to make a fun, new made-up word`
,`A lesser-known ingredient in most microwave pizza pockets`
,`A great place to hide an Easter egg`
,`A trick you'd like to see a poodle do`
,`A better name for the Washington Monument`
,`You never know when you're going to need insurance. You could wake up tomorrow and BLANK`
,`The worst thing to overhear during your surgery`
,`A bad name for a brand of bottled water`
,`How do you like it?`
,`Come up with a new dessert that contains the name of a U.S. state`
,`The first and second rules of Fight Club are "Don't talk about Fight Club," but what's the 387th rule of Fight Club?`
,`A terrible food truck would be one that goes around selling only BLANK`
,`A reason to get into a fist fight with a koala bear `
,`Little-known fact: the fourth Wise Man gave baby Jesus the worst gift of all: BLANK `
,`A theme for a desk calendar that wouldn't sell very well `
,`The worst thing you could stick in a toaster `
,`The worst Halloween costume for a young child`
,`"This just in! A BLANK has won the election and will become the new governor of Texas." `
,`A better name for the human bladder`
,`Surprising first words for your baby to speak`
,`A good name for a dog country singer`
,`A lawn decoration sure to make the neighbors mad`
,`The worst thing to say when trying to adopt a pet`
,`Fun thing to do if locked in the mall overnight`
,`The worst person to receive a sponge bath from`
,`People wouldn't respect He-Man as much if, to gain his power, he held up his sword and shouted "____________________"`
,`Pants would be a whole lot better if they BLANK`
,`A little-known way to get gum out of your hair`
,`The most awesome Guinness World Record to break`
,`It's bad to be buried alive. It's worse to be buried alive with BLANK.`
,`Something that would not work as well as skis`
,`What to say to get out of jury duty`
,`A rejected name for a ship in the U.S. Naval Fleet: the USS BLANK`
,`A rejected title for <i>The Good, The Bad and the Ugly<\/i> was <i>The Good, the Bad and the BLANK<\/i>`
,`Little-known fact: The government allows peanut butter to contain up to 10% BLANK`
,`A good sign that your house is haunted`
,`A bad occupation for a robot to have`
,`A sequel to the painting "Dogs Playing Poker"`
,`The Tooth Fairy's other job`
,`Little-known fact: A secret area in the White House is the BLANK room`
,`An invention by Thomas Edison that never caught on`
,`A birthday present you shouldn't get for your grandmother`
,`What time is it?`
,`Invent a Christmas tradition sure to catch on`
,`A short motto everyone should live by`
,`The best way to start your day`
,`A good improvement to make to Mt. Rushmore`
,`The worst name for a summer camp`
,`The first commandment in the new religion you started`
,`Three things are certain in life: Death, Taxes, and BLANK`
,`A faster way to get home from the Land of Oz is to click your heels three times and say BLANK.`
,`Something that's made worse by adding cheese`
,`Which new marshmallow should Lucky Charms cereal introduce?`
,`The perfect song to hum on the toilet`
,`A word that should never follow "Beef"`
,`Something that is currently legal that should be banned`
,`Come up with a name for a rock band made up entirely of baby ducks`
,`We can all agree that BLANK`
,`Something you shouldn't buy off of Craigslist`
,`A bad thing to say to a cop as he writes you a speeding ticket`
,`How far is too far?`
,`If at first you don't succeed...`
,`The name you would give to a really mopey pig`
,`What robots dream about`
,`What really happened to Amelia Earhart`
,`Something you'd be surprised to see come out of a pimple you pop`
,`Today's music needs more BLANK`
,`Finish this sentence: "When I'm rich, my mansion will have a room called The BLANK Room."`
,`The best question to ask God when you meet him`
,`A fun trick to play on your doctor`
,`A bad place for your rocket ship to crash would be The Planet of the BLANK`
,`A bad campaign slogan for a congressperson`
,`A unique way to escape from prison`
,`The next product for Matthew McConaughey to endorse`
,`The title of a new YouTube cat video that's sure to go viral`
,`Come up with the name of a country that doesn't exist`
,`The best way to keep warm on a cold winter night`
,`The real reason the dinosaurs died`
,`Something you should never put on an open wound`
,`Scientists say erosion, but we all know the Grand Canyon was actually made by BLANK`
,`The name of a font nobody would ever use`
,`The best thing about going to prison`
,`The best title for a new national anthem for the USA`
,`A college major you don't see at many universities`
,`What would make baseball more entertaining to watch?`
,`A little-known fact about Canada`
,`Name a TV drama that's about a vampire doctor`
,`A name for a brand of designer adult diapers`
,`What's actually causing global warming?`
,`The first thing you would do after winning the lottery`
,`A name for a really bad Broadway musical`
,`On your wedding night, it would be horrible to find out that the person you married is BLANK`
,`The Skittles flavor that just missed the cut`
,`What FDR meant to say was "We have nothing to fear, but BLANK"`
,`A terrible name for a cruise ship`
,`What's the Mona Lisa smiling about?`
,`The crime you would commit if you could get away with it`
,`Something squirrels probably do when no one is looking`
,`Something you shouldn't get your significant other for Valentine's Day`
,`A dangerous thing to do while driving`
,`The best thing about living in an igloo`
,`Using only two words, a new state motto for Texas`
,`The hardest thing about being Batman`
,`Something you shouldn't wear to a job interview`
,`The #1 reason penguins can't fly`
,`The name of the reindeer Santa didn't pick to pull his sleigh`
,`What's the first thing you would do if you could time travel?`
,`What would you do if you were left alone in the White House for an hour?`
,`Come up with the name of book that would sell a million copies, immediately`
,`A not-very-scary name for a pirate`
,`The name of a pizza place you should never order from`
,`A Starbucks coffee that should never exist`
,`There's Gryffindor, Ravenclaw, Slytherin, and Hufflepuff, but what's the Hogwarts house few have ever heard of?`
,`Something you should never use as a scarf`
,`The worst words to say for the opening of a eulogy at a funeral`
,`Come up with a really bad TV show that starts with "Baby"`
,`A great way to kill time at work`
,`What's wrong with these kids today?`
,`Why does the Tower of Pisa lean?`
,`A great new invention that starts with "Automatic"`
,`Come up with a really bad football penalty that begins with "Intentional"`
,`You know you're in for a bad taxi ride when BLANK`
,`The terrible fate of the snowman Olaf in a director's cut of <i>Frozen<\/i>`
,`Sometimes, after a long day, you just need to BLANK`
,`The worst way to spell Mississippi`
,`Give me one good reason why I shouldn't spank you right now`
,`The best pick-up line for an elderly singles mixer`
,`The best news you could get today`
,`Invent a holiday that you think everyone would enjoy`
,`Usually, it's bacon, lettuce and tomato, but come up with a BLT you wouldn't want to eat`
,`The worst thing you could stuff a bed mattress with`
,`A great opening line to start a conversation with a stranger at a party`
,`Something you would like to fill a swimming pool with`
,`Miley Cyrus' Wi-Fi password, possibly`
,`If you were allowed to name someone else's baby any weird thing you wanted, what would you name it?`
,`A terrible name for a clown`
,`Miller Lite beer would make a lot of money if they came up with a beer called Miller Lite _____`
,`Okay... fine! What do YOU want to talk about then?!!!`
,`The Katy Perry Super Bowl halftime show would have been better with BLANK`
,`Your personal catchphrase if you were on one of those <i>Real Housewives<\/i> shows`
,`A good fake name to use when checking into a hotel`
,`A vanity license plate a jerk in an expensive car would get`
,`The name of a canine comedy club with puppy stand-up comedians`
,`What's lurking under your bed when you sleep?`
,`Come up with a name for the most difficult yoga pose known to mankind`
,`One place a finger shouldn't go`
,`The worst job title that starts with "Assistant"`
,`The grossest thing you'd put in your mouth for $18`
,`The last person you'd consider inviting to your birthday party`
,`Where do you think the beef really is?`
,`A fun trick to play on the Pope`
,`Write a newspaper headline that will really catch people's attention`
,`Something it'd be fun to throw off the Eiffel Tower`
,`Name the eighth dwarf, who got cut at the last minute`
,`Come up with the name for a new TV show with the word "Spanky" in it`
,`A good place to hide boogers`
,`Come up with a catchier, more marketable name for the Bible`
,`The best thing to use when you're out of toilet paper`
,`A good way to get fired`
,`The most presidential name you can think of (that isn't already the name of a president)`
,`Something you should never say to your mother`
,`Where's the best place to hide from the shadow monsters?`
,`The three ingredients in the worst smoothie ever`
,`Something that would make an awful hat`
,`How many monkeys is too many monkeys?`
,`Something you'd be surprised to see a donkey do`
,`The title you'd come up with if you were writing the Olympics theme song`
,`Name the sequel to <i>Titanic<\/i> if there were one. <i>Titanic 2: BLANK<\/i>`
,`An alternate use for a banana`
,`What you'd guess is an unadvertised ingredient in most hot dogs`
,`Name your new haircutting establishment`
,`An inappropriate thing to do at a cemetery`
,`Like chicken fingers or chicken poppers, a new appetizer name for your fun, theme restaurant: chicken _____`
,`Thing you'd be most surprised to have a dentist find in your mouth`
,`Rename Winnie-the-Pooh to something more appropriate/descriptive`
,`The name of a clothing store for overweight leprechauns`
,`If God has a sense of humor, he welcomes people to heaven by saying, "BLANK"`
,`Something that would not work well as a dip for tortilla chips`
,`Name a new movie starring a talking goat who is president of the United States`
,`An item NOT found in Taylor Swift's purse`
,`Name a new reggae band made up entirely of chickens`
,`Who let the dogs out?`
,`What do vegans taste like?`
,`Make up a word that describes the sound of farting into a bowl of mac & cheese`
,`A new ice cream flavor that no one would ever order`
,`Name a children's book by someone who hates children`
,`The name of your new plumbing company`
,`The worst name for a robot`
,`The first names of each of your nipples`
,`What John Goodman's belches smell like`
,`The name of a new perfume by Betty White`
,`One thing never to do on a first date`
,`Ozzy Osbourne's Twitter password, probably`
,`The most embarrassing name for a dog`
,`The worst thing you could discover in your burrito`
,`Something you'd probably find a lot of in God's refrigerator`
,`Brand name of a bottled water sold in the land of Oz`
,`The worst family secret that could come out over Thanksgiving dinner`
,`A fun thing to yell as a baby is being born`
,`The name of a toilet paper specifically designed for the Queen of England`
,`A terrible name for a 1930s gangster`
,`Something upsetting you could say to the cable guy as he installs your television service`
,`Come up with a name for a new beer marketed toward babies`
,`A terrible theme for a high school prom`
,`A more environment-friendly alternative to toilet paper`
,`What tattoo should Justin Bieber get next?`
,`What do kittens dream of?`
,`What makes hot dogs taste so good?`
,`A better name for France`
,`The worst thing to find stuck in your teeth`
,`The worst excuse for showing up late to work`
,`The worst thing for an evil witch to turn you into`
,`Jesus's REAL last words`
,`The biggest downside to living in Hell`
,`Everyone knows that monkeys hate BLANK`
,`Name a candle scent designed specifically for Kim Kardashian`
,`If a winning coach gets Gatorade dumped on his head, what should get dumped on the losing coach?`
,`The secret to a happy life`
,`You would never go on a roller coaster called BLANK`
,`What two words would passengers never want to hear a pilot say?`
,`The worst name for a race horse`
,`Come up with a three-word sequel to the book "Eat, Pray, Love"`
,`You wouldn't want to share a prison cell with someone named BLANK`
,`Superman's special power that he never tells anyone about`
,`You shouldn't get a massage at a place called BLANK`
,`The least romantic place to propose marriage`
,`A rejected name for the Segway`]

window.prompts = prompts;

["url", "restart", "characters", "videos", "_", "DATA_FEEDS", "peer", "shuffle", "offset", "makeid", "client", "phase", "round", "players", "stage", "answers", "sleep", "fitText", "votes", "calculateVotes", "clientIntake", "checked", "emit", "prompts", "dir", "dirxml", "profile", "profileEnd", "clear", "table", "keys", "values", "debug", "undebug", "monitor", "unmonitor", "inspect", "copy", "queryObjects", "$_", "$0", "$1", "$2", "$3", "$4", "getEventListeners", "monitorEvents", "unmonitorEvents", "$$", "$x"]
