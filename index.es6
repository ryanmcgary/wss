
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

window.DATA_FEEDS = [];

var url = new URL(window.location.href);
if (url.pathname === "/host"){ // HOST
  var code = makeid(4)
  var peerID = `wordsaladsandwich-${code}`
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
      $("gamecode").text(code)
  });
  peer.on('error', function(err) {
      console.log("Error: ", err);
  });
  peer.on('connection', function(conn) {
    conn.on('open', function(){
      // here you have conn.id

      var conn2 = peer.connect(conn.peer);
      DATA_FEEDS.push(conn2);
      setTimeout(function () {
        hostIntake(undefined, "join")
      }, 500);

      console.log("host open", conn, conn.peer,conn2);

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


function client(peer){
  var host = $("#roomcode")[0].value
  var name = $("#name")[0].value
  window.name = name;
  var hostID = `wordsaladsandwich-${host}`
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

function initHost(){
  window.n;
  window.phase = "lobby"
  window.round = 0
  window.prompt = 0;
  window.players=[];
  window.stage={};
  window.answers = {all:[], 0:[],1:[],2:[]}
}
initHost()

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
  // }
}

stage.lobby = function() {
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

  var style=`<style>player{display:block;}</style>`
  var playersView = players.map(player => `<player>${player}</player>`).join("")
  var innerHTML = `
    <gameview>
      ${style}
      ${playersView}
    </gameview>
  `
  $("gameview").replaceWith(innerHTML);

  emit(`lobby,${escape(players.toString())}`)
}
stage.lockInit = function() {
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
    emit(`promptList,${escape(JSON.stringify(gp))}`);
    stage.roundprompts();
}

stage.roundprompts = function(triggerRender) {
  console.log("roundprompts", triggerRender, window.round), window.phase;
  if (window.phase === "lobby" || window.phase === "voting"){
    window.phase = "prompts";
    if (triggerRender) emit(`prompts`);
    console.log("triggerRender", triggerRender);
    var timer = 75000
    var temp_answers = []
    var gameInterval = setInterval(function () {
      if (timer > 0){
        timer -= 1000
        $("timer").html(timer / 1000);
        if (window.answers[window.round].length === players.length * 2) timer = 0;
        if (window.answers[window.round].length === players.length && window.round == 2) timer = 0;
        // console.log("fuckery", timer,window.answers[window.round].length === players.length * 2);
      }else{
        emit(`answers,${escape(JSON.stringify(answers[window.round]))}`)
        $("timer").html("");
        emit("blank");
        window.clearInterval(gameInterval);
        setTimeout(function () {
          stage.roundvote();
        }, 5000);
      }
    }, 1000);
  }

}

//
// sds vote,2,1,0,1
// index.es6:152 Uncaught TypeError: stage[phase] is not a function
//     at hostIntake (index.es6:152)
//     at s.<anonymous> (index.es6:53)
//     at s.i.emit (peerjs.min.js:46)
//     at s._handleDataMessage (peerjs.min.js:62)
//     at RTCDataChannel.dataC
  // answers =
  // [
  //   {round: 1, prompt_id: 1, user_id: 0, points:0, answer: "answer"},
  //   {round: 1, prompt_id: 1, user_id: 1, points:0, answer: "answer"}
  // ]
  // start timer
  // emit("vote,"+answers.toString())
  // client
    // start timer



stage.roundvote = function() {
  console.log("roundprompts", window.round, window.prompt, players.length);
  // if (window.prompt !== players.length){// + one is a zero index thing
  if (window.prompt % players.length || !(window.prompt % players.length) && window.phase !== "voting" ){
    var prom = window.prompt;
    window.phase = "voting";
    var timer = 10000
    emit(`vote,,${window.round},${window.prompt}`);
    if (window.prompt > players.length + players.length) {
      $("gamecode").html("DONE BRO");
      var tt = calculateVotes();
      for (let [key, score] of Object.entries(tt)) {
        $("gamecode").append(`${players[key]}, ${score}<br>`)
      }
      return true;
    } // END OF GAME
    window.prompt += 1;
    console.log("vote cycle", `round: ${window.round},prompt: ${window.prompt}`);

    var gameInterval = setInterval(function () {
      if (timer > 0){
        timer -= 1000
        $("timer").html(timer / 1000);
      }else{
        $("timer").html("");
        emit("blank")
        calculateVotes(prom)
        window.clearInterval(gameInterval);
        stage.roundvote()
      }
    }, 1000);
  }else { // once no more answers to vote on
    if (window.round == 2){
      $("gamecode").html("DONE BRO")
      var tt = calculateVotes();
      for (let [key, score] of Object.entries(tt)) {
        $("gamecode").append(`${players[key]}, ${score}<br>`)
      }
    }else{
      var tt = calculateVotes();
      for (let [key, score] of Object.entries(tt)) {
        $("gamecode").append(`${players[key]}, ${score}<br>`)
      }
      window.round += 1;
      emit(`round,,${window.round}`);
      console.log("end of voting", "round:", round, "prompt:", prompt);
      stage.roundprompts(true);
    }
  }
}
window.votes = [] // {voter:, votee:, round:, prompt:}
stage.vote = function(phase, player_id, votee, round_id, prompt_id) {
  votes.push({voter: player_id, votee: votee, round: round_id, prompt: prompt_id})
}

function calculateVotes(prompt) {
  var finalscore = {} // var finalscore = {0:0, 1:0, 2:0}
  players.forEach((e,i)=>{
    finalscore[i] = 0
  })

  $("gamecode").html(``);

  var c = votes.reduce(function(obj, vote){
    obj[vote.prompt] = obj[vote.prompt] || {};
    if (obj[vote.prompt][vote.votee]){
        obj[vote.prompt][vote.votee] += 1;
    }else {
        obj[vote.prompt][vote.votee] = 1;
    }
    return obj
  }, {})

  for (let [prompt_key, prompt_value] of Object.entries(c)) {
    if (prompt !== undefined && prompt != prompt_key) continue;
    for (let [key, value] of Object.entries(c[prompt_key])) {
      console.log(`${key}: ${value}`);
      console.log("fuckkksdfsd", players[key], 1000, window.round)
      if (Object.keys(c[prompt_key]).length < 2){

        if (prompt !== undefined) $("gamecode").append(`${players[key]}, 1000<br>`);
        finalscore[key] += 1000
      }else if(value === (players.length - 2)){
        if (prompt !== undefined) $("gamecode").append(`${players[key]}, 1500<br>`);
        finalscore[key] += 1500
      }else{
        if (prompt !== undefined) $("gamecode").append(`${players[key]}, ${1000 / (players.length - 2) * value}<br>`);
        finalscore[key] += (1000 / (players.length - 2) * value)
        // console.log(players[key], )
      }
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
//   vote for more than 1 item on last round
//   new game same people
//   new game new people
// publish to server or electron app

function clientIntake(data){
  window.datum = data;
  var [stage, content, round, prompt_id, answers] = data.split(",")
  if (round) window.round = round;
  window.dater = {stage: stage, content: content, round: round, promptId: prompt_id, answers: answers};

  // stages[stage](content)

  if (stage === "blank"){
    $("gameview").html("");
  }
  if (stage === "lobby"){
    window.playerList = unescape(content).split(",");
    console.log("playerList");
    var style = ``;
    var start = `<button type="button" onclick="emit('start')" name="button">Start Game</button>`
    var innerHTML = `
        ${style}
        ${start}
    `
    $("gameview").html(innerHTML);

  }
  if (stage === "playerList"){
      console.log("playerList",stage, content);
      window.playerList = unescape(content).split(",")
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
              <button onclick="emit('answer,${n},${prompt.round},${prompt.id},' + this.previousElementSibling.value);this.parentElement.remove();">submit</button>
            </prompt>
          `)
        }
        return arr;
    },[])
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
              <button onclick="emit('answer,${n},${prompt.round},${prompt.id},' + this.previousElementSibling.value);this.parentElement.remove();">submit</button>
            </prompt>
          `)
        }
        return arr;
    },[])
    $("gameview").html(z)
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
      var prompt_text = gp[round][prompt_id % playerList.length].p
      var prompt_answer = window.answers.filter((b)=>{ return (b.prompt_id == prompt_id)} )
      var prompt_ui = prompt_answer.map(pa => `<button onclick="emit('vote,${n},${pa.player_id},${pa.round_id},${pa.prompt_id}');this.parentElement.remove()">${pa.answer}</button>`)
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
function emit(payload) {
  DATA_FEEDS.forEach((conn, i) => {
    if (conn?.peerConnection?.localDescription?.type  === "offer") // offer or answer
      conn.send(payload)
  });
}
window.emit = emit;
// for (let [key, conn] of Object.entries(DATA_FEEDS)) {
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
,`A sign you probably shouldn't put up in your yard`]
window.prompts = prompts;
