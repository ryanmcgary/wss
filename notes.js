todo:
x make add a prompt section hide or go away on game start
x make enter submit on text area for joining a game
x make 1 2 3 positions larger or gold silver bronze color or give a medal
x make votes clear as gold silver bronze
show points being added after each vote
play with distorted audio
play with recording question files
send stuff to collin




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




// const remote = require('electron').remote
// window.remote = remote;
// if (window.location.hostname === "localhost"){
//  var socket = io.connect('http://localhost:3002');
// }else{
//  var socket = io.connect(window.location.origin);
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


recive: start
lockInit, generate & send playerList & prompts
round1prompts, send state, start timer, while state receive answers
  when timer out or answers === player.length * 2
end
round1vote,
  if round1 answers.unshift, emit question 1, start timer
    if (phaseVote && round1 && prompt_ID) store answer
    if votes.length === player.length stop timer
    play results set gap timer
  if round1 answers.unshift, emit question N, start timer
    if (phaseVote && round1 && prompt_ID) store answer
    if votes.length === player.length stop timer
    play results set gap timer
  if round1 answers.unshift === false
round1prompts, send state, start timer, while state receive answers
  when timer out or answers === player.length * 2
end

tomorrow,
  game timers on host only
  game triggers each stage and also to wipe stages on mobile clients
function tickGameState(){
  round = 0
  host recieves start
  host send playerList & prompts
    host send start prompt answer timer
      on each recieve of answer check that all answers recieved
      if yes, clear timer and execute next step
      else timer ends, execute next step
    host sends answers, start vote unshift question 1
      on each recieve of vote check that all votes recieved
      if yes, clear timer and execute next step
      else timer ends, execute next step
    play results
    start vote next question N
  if question list length 0
  host send end round
  round = 1
  host send start prompt answer timer (start cycle again)
  if question list length 0
  round = 2 // final
  host send start prompt answer timer (start cycle again)

}

function badwrap() {
  var players;
  // client
  var name="mike"
  metadata = name
  var round = 0;
  // host
  var clientArray = _.reduce(peer.connections, (arr, conns)=>{
    var meta = _.reduce(conns, (arr, conn)=>{
         if (conn.open) arr.push(conn.metadata);
        return arr;
    }, []);
    arr.push(meta)
    return arr;
  }, [])
  var clientArrayFlat = a.flat().filter(Boolean)
  players = [...new Set(amyFlatArray)]
  emit("lobby", players)
  //client
  emit("start")
  //host
  var n = players.length
  var ranNums = shuffle(prompts);
  var game_prompts = [ranNums.splice(0, n), ranNums.splice(0, n), ranNums.splice(0, 1)]
  var prompts = ["a","b","c"]["d","e","f"]["g"]
  emit("playerList", players)
  emit("promptList", prompts)
  emit("startQuestions")
  // client
  on: players = unescape(players)
    player_id = players.indexOf(`${name}`)
  on: prompts = unescape(prompts)

  j = ranNums.splice(0,(n * 2 + 1))
  z = j.map((p,i) => { return {id: i, p: p} })
  var gp = [z.splice(0, n), z.splice(0, n), z.splice(0, 1)]

  p.forEach(function (e,i){
    gp[0][i]["round"] = 0;
    (gp[0][i]["pl"] = gp[0][i]["pl"] || []).push(i);
    (gp[0][i]["pl"] = gp[0][i]["pl"] || []).push(offset(i+2));

    gp[1][i]["round"] = 1;
    (gp[1][i]["pl"] = gp[1][i]["pl"] || []).push(i);
    (gp[1][i]["pl"] = gp[1][i]["pl"] || []).push(offset(i+1));

    gp[2][0]["round"] = 2;
    (gp[2][0]["pl"] = gp[2][0]["pl"] || []).push(i);
  })
  a = gp.flat(); // a =[{id: 0, p: "George W. Bush and Dick Cheney's rap duo name", round: 0, pl: Array(2)}]
  z =_.reduce(a, (arr, prompt) => {
      if (prompt.pl.includes(player_id) && prompt.round === round){
        arr.append(`<prompt>${prompt.p}</prompt>
        <input></input>
        <button onclick="emit('answer,${player_id},${prompt.round},${prompt.id},'+this.previousElementSibling.textContent)"></button>
        `)
      }
      return arr;
  },[])
  // host
    answers =
    [
      {round: 1, promptId: 1, userId: 0, points:0, text: "answer"},
      {round: 1, promptId: 1, userId: 1, points:0, text: "answer"}
    ]
    start timer
    emit("vote,"+answers.toString())
  // client
      start timer
      prompt_answer = answers.filter((b)=>{ return (b.promptId === prompt)} )
      if (!prompt_answer.some((a)=> a.userId === player_id))
        var prompt_ui=prompt_answer.map(pa => `<button onclick="emit('vote,${player_id},${pa.round},${pa.id})">${pa.text}</button>`)
      var innerHTML = `
        <prompt>${prompts[id]}</prompt>
        ${prompt_ui}
      `
      $(".vote").append(innerHTML)
}







// P jim, sam, mike
// PR [1,2,3][1,2,3][1]
// R 0
//   P1, PR[0][1]: ANSWER
//   P2, PR[0][1]: ANSWER
//
//
// collect PLAYERS
// distribute players
// distribute PROMPTS
// c_display PROMPTS
// collect ANSWERS
// c_distribute ANSWERS
// c_display ANSWERS
// collect VOTES
// broadcast VOTES


window.round = 0;
window.PLAYERS = [];
window.GAME_STAGE = undefined;
function hostStages(data){
  var [stage, user, round, question, promptId, answers] = data.split(",")
  if (!GAME_STAGE && stage === "name"){
    PLAYERS.push(user)
  }
  if (!GAME_STAGE && stage === "start"){
    GAME_STAGE = "prompt";
    emit(`playerList,${escape(PLAYERS)}`)
    // emit(`questionList,${escape(QUESTIONS)}`)
    emit(`prompt,${window.round}`)
  }

  if (GAME_STAGE === "prompt" && stage === "prompt"){
    // setTimer
    GAME_STAGE = "vote";
    emit(`vote,${window.round}`)
    // ANSWERS.push(content)
    // if (answers.length){
    //   stopTimer && emit("vote", escape(answers))
    // }
    // GAME_STAGE = "vote"
  }else
  if (GAME_STAGE === "vote" && stage === "vote"){
    GAME_STAGE = "prompt";
    window.round++
    if (window.round < 3){
      emit(`prompt,${window.round}`)
    }else{
      GAME_STAGE = undefined
      window.round = 0
      emit(`welcome`)
    }
  }

}

// playerList
// emit(`playerList,${escape(["joe","john","bob","sam","yun"])}`)
// promptList
  // var PLAYERS = ["joe","john","bob","sam","yun"]
  // var n = PLAYERS.length
  // var ranNums = shuffle(prompts);
  //var game_prompts = [ranNums.splice(0, n), ranNums.splice(0, n), ranNums.splice(0, 1)]
  //emit(`promptList,${escape(game_prompts)}`)

function clientStages(data){
  var [stage, content, round, promptId, answers] = data.split(",")
  if (stage === "welcome"){
    console.log("playerList");
    $("playergame phase, join").addClass("hide")
    $("playergame phase.one").removeClass("hide")
    // window.playerList = unescape(content).split(",")
  }
  if (stage === "playerList"){
      console.log("playerList",stage, content);
    // window.playerList = unescape(content).split(",")
  }
  if (stage === "promptList"){
        console.log("promptList");
    // var n = playerList.length;

    // window.questions = unescape(content).split(",");
    // window.game_prompts = [questions.splice(0, n), questions.splice(0, n), questions.splice(0, 1)]
  }
  if (stage === "prompt"){
    console.log("prompt", stage, content, round);
    $("playergame phase").addClass("hide")
    $("playergame phase.submitAnswers").removeClass("hide")
    // setTimer
    // questions.map(answer => `<input></input><button onclick="sendResponse()"><button>`)
  }
  if (stage === "vote"){
      console.log("vote", stage, content, round);
      $("playergame phase").addClass("hide")
      $("playergame phase.vote").removeClass("hide")
    // setTimer
    // var response = unescape(content).split(",");
    // response.map(answer => `<div onclick="vote(id);showNext()">${answers.text}</div>`)
  }
  if (stage === "finalVote"){
      console.log("finalVote");
    // setTimer
    // var response = unescape(content).split(",");
    // response.map(answer => `<div onclick="vote(id)">${answers.text}</div>`)
  }
}
window.clientStages = clientStages;


// function emit(values){
//   conn.send(values)
// }
function peerRules(peer){


  // if HOST
  // if(window.host_peer){
    peer.on('connection', function(conn) {
      conn.on('open', function(){
        // here you have conn.id
        // DATA_FEEDS[peerId] = conn;
        // conn.send(`name,${name}`)
      });
    	conn.on('data', function(data){
        // console.log("sds",data);
        // conn.send(`name,${name}`)
        // var [action, name, round, prompt, response] = data.split(",")
        // if (action == "name")
        //   PLAYERS.push(name)
        //   emit("players", PLAYERS)
        //
        // if (action == "start")
        //   var n = PLAYERS.length
        //   var ranNums = shuffle(QUESTIONS);
        //   var game_prompts = [ranNums.splice(0, n), ranNums.splice(0, n), ranNums.splice(0, 1)]
        //   emit("players", PLAYERS)
        //   emit("prompts", game_prompts)
        //   emit("start", game_prompts)
        //
        // if (action == "submitAnswer")
        //   round[round][game_prompts][prompt]["votes"].push(prompt)
        //   emit("answer", game_prompts)
        // if (action == "vote")
        //   round[round][game_prompts][prompt]["votes"].push(prompt)
        //   // render vote talley
        //   emit("next")

      });
    })
  // }else{
  //   // if CLIENT
  //   peer.on('connection', function(conn) {
  //     conn.on('open', function(){
  //       // here you have conn.id
  //       // DATA_FEEDS[peerId] = conn;
  //       conn.send(`name,${name}`)
  //     });
  //   	conn.on('data', function(data){
  //
  //       console.log("sds",data);
  //       // var [action, data] = data.split(",")
  //       // if (action == "players"){
  //       //   PLAYERS.push(data)
  //       //   render("lobby")
  //       // }
  //       // if (action == "prompts"){
  //       //   var PROMPTS = data.split(",")
  //       // }
  //       // if (action == "start"){
  //       //   render("prompts") // has submitAnswer onclick
  //       // }
  //       //
  //       // if (action == "vote"){
  //       //   render("vote") // has submitAnswer onclick
  //       //   // render vote talley
  //       //   emit("next")
  //       // }
  //     });
  //   })
  // }
}




<script type="text/javascript">


  var offset;

  data:
    (Enter Name & Code)
    (ON CONNECT CODE)
    >> "name"
      players.push(name)
    << "name"
      conn.send("names", players)
    >> "start"
    << "players": [bob, tom, larry, june, sam]
      (shuffle, set_player_count, splice out rounds)
    << "questions": [hi?, juice?, mango?, butter?, boo?],[hi?, juice?, mango?, butter?, boo?],[snake?]
    << "start_round"
      >> "resp", player, round#, question, response
      << "resp", player, round#, question, response
      >> "resp", player, round#, question, response
      << "resp", player, round#, question, response
      questions[0].length > 0
      questions[0].pop
        << VOTE!
        >> "vote", selfID, player, round#, question
          timer_out or votes_count = players.length
          (play results)
      questions[0].length === 0
    << "start_round"
      >> "resp", player, round#, question, response
      << "resp", player, round#, question, response
      >> "resp", player, round#, question, response
      << "resp", player, round#, question, response
      questions[0].length > 0
      questions[0].pop
        << VOTE!
        >> "vote", selfID, player, round#, question
          timer_out or votes_count = players.length
          (play results)
      questions[0].length === 0
    << "start_round"
      >> "resp", player, round#, question, response
      << "resp", player, round#, question, response
      << VOTE!
      >> "vote", selfID, player, round#
        timer_out or votes_count = players.length
        (play results)
      << start game? stop?
      >> start || stop
      if stop get new code





  var n = player_count;
  // c = 5
  // p = ["a","b","c","d","e"]
  // a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  var game_questions = [ranNums.splice(0, n), ranNums.splice(0, n), ranNums.splice(0, 1)]

  pqs = {}
  p.forEach(function (e,i){
    (pqs[p[i]] = pqs[p[i]] || []).push(game_questions[0][i]);
    (pqs[p[offset(i+2)]] = pqs[p[offset(i+2)]] || []).push(game_questions[0][i]);
  })
  players {
    1: {name:"bob" round1:{1:"I love butts", 5: "I love juice"}, points1: 0 },
    2: {name:"sam" round1:{1:"I love butts", 5: "I love juice"}, points1: 0 },

  }
  questions[
    {1:"text", 2:"text",3:"text", 4:"text",5:"text"},
    {1:"text", 2:"text",3:"text", 4:"text",5:"text"},
    {1:"text"}
  ]
  self:1,players[1][round1][1][user_vote_id].push(self)
  players{
    1: {
        name: "bob",
        round1:{
          1:{ response: "but", user_vote_id:[3,4] },
          2:{ response: "all the sam", user_vote_id:[3,4] }
        },
        round2:{
          1:{ response: "but", user_vote_id:[3,4] },
          2:{ response: "all the sam", user_vote_id:[3,4] }
        },
        round3:{
          1:{ response: "but", user_vote_id:[3,4] }
        }
      }
    },
    2:

  var round1 = {a:[1,2],b:[2,3],c:[3,4],d:[4,5],e:[5,1]}
  var round2 = {a:[1,2],b:[2,3],c:[3,4],d:[4,5],e:[5,1]}
  players[1]["round1"][1]
  server gets:
    "a","answer1","answer2"
    "b","answer1","answer2"
    "c","answer1","answer2"
    "d","answer1","answer2"
    "e","answer1","answer2"

  responses  = {q_id: 1, q_text:"", answers: [{name: "slimo", answer: "hi"},{name: "june", answer: "bye"}]}

  send 1, 1, resp, 2, resp

  var [q_id, u_id, u_id_resp, u_id2, u_id_resp2] = data.split(",")
  `<h1>${questions[0][q_id]}<h1><h2 u="${u_id}">${u_id_resp}</h2><h2 u="${u_id2}">${u_id_resp2}</h2>`

  client.SEND(SELF_ID: 0, PLAYER: 0, ROUND: 0, Q: 1, POINT: 1)
  var [PLAYER,ROUND,QUESTION,POINT] 0,0,0,1,1.split(",")
  players[PLAYER][ROUND][QUESTION][POINT] += 1;

  var questions = escape()
  var unescape()
</script>


4 People
4 questions
5 people
5 questions
1,5
2,1
3,2
4,3
5,4
var player_count = 5;
generate 5 random numbers between 0..QUESTIONS.length
round_questions [["3","5","7","<9></9>","2"],["10","15","17","19","12"],["9"]]
player.length


c = 5
p = ["a","b","c","d","e"]
a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var game_questions = [a.splice(0, c), a.splice(0, c), a.splice(0, 1)]


round1
  var round1Question1 = round_questions[0][offset_first]
  var round1Question2 = round_questions[0][offset_second]
  var round2Question1 = round_questions[1][offset_third]
  var round2Question2 = round_questions[1][offset_fourth]

  var round3Question1 = round_questions[0][player_number]

</head>
<body>
  host
  client >
    connect to host

  Client >
    Start Game Request

  HOST_STATE = [
    GAME INIT
    GAME PROPOGATE LOBBY
    Game Start
    Send GAME INFO / PROMPTS [QUESTION], round1, round2, round3
    x2
      Send START Round N
      RECEIVE ROUND N Answers
      xN // N is number of questions / players
        SEND START ROUND N-QUESTION1 VOTING
        RECEIVE ROUND N-QUESTION1 VOTES
        PLAY ROUND N-QUESTION1 RESULTS
      SEND END ROUND
    SEND START ROUND 3
    RECEIVE ROUND 3 Answers
    SEND ROUND 3 Voting
    RECEIVE ROUND 3 Votes
    PLAY GAME/ROUND 3 results
    SEND AGAIN? PROMPT
  ]

  CLIENT_STATE =
    ENTER GAME ROOM
    CONNECTED TO HOST / WAITING TO START
    RECIEVE GAME INFO
    WRITE/SUBMIT ANSWERS FOR ROUND 1
    xN
      VOTE QUESTION
    WRITE/SUBMIT ANSWERS FOR ROUND 2
    xN
      VOTE QUESTION
    WRITE/SUBMIT ANSWERS FOR ROUND 3
    VOTE QUESTION
    SAME ROOM? YES, NO
  <div>
  <!--
    Host
      Game Start
      Send PROMPTS [QUESTION], round1, round2, round3
      x2
        Send START Round N
        RECEIVE ROUND N Answers
        xN
          SEND START ROUND N-QUESTION1 VOTING
          RECEIVE ROUND N-QUESTION1 VOTES
          PLAY ROUND N-QUESTION1 RESULTS
        SEND END ROUND
      SEND START ROUND 3
      RECEIVE ROUND 3 Answers
      SEND ROUND 3 Voting
      RECEIVE ROUND 3 Votes
      PLAY ROUND 3 and GAME results
  -->
  </div>
