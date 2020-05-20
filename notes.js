
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
