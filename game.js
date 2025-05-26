<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>사다리타기 게임</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>🌪 사다리타기 게임</h1>
  <div>
    <label>참가자 이름 (콤마로 구분):</label><br>
    <input type="text" id="playersInput" placeholder="예: 철수, 영희, 민수"><br>
    
    <label>결과 항목 (콤마로 구분):</label><br>
    <input type="text" id="resultsInput" placeholder="예: 치킨, 피자, 라면"><br>

    <button onclick="createLadder()">사다리 생성</button>
    <button onclick="startGame()">게임 시작</button>
  </div>

  <div class="ladder-container" id="ladderContainer"></div>

  <h2 id="resultsTitle"></h2>
  <div id="results"></div>

  <script>
    let ladderHeight = 10;
    let players = [];
    let resultsList = [];

    function createLadder() {
      const playerInput = document.getElementById("playersInput").value;
      const resultInput = document.getElementById("resultsInput").value;

      players = playerInput.split(',').map(name => name.trim()).filter(name => name !== "");
      resultsList = resultInput.split(',').map(r => r.trim()).filter(r => r !== "");

      if (players.length < 2 || resultsList.length < 2) {
        alert("참가자와 결과는 각각 최소 2개 이상 입력해 주세요.");
        return;
      }

      if (players.length !== resultsList.length) {
        alert("참가자 수와 결과 수는 같아야 합니다.");
        return;
      }

      const container = document.getElementById("ladderContainer");
      container.innerHTML = "";

      for (let i = 0; i < players.length; i++) {
        const col = document.createElement("div");
        col.className = "column";
        col.dataset.player = players[i];

        const label = document.createElement("div");
        label.textContent = players[i];
        label.style.marginBottom = "5px";
        col.appendChild(label);

        for (let j = 0; j < ladderHeight; j++) {
          const step = document.createElement("div");
          step.className = "step";
          col.appendChild(step);
        }

        container.appendChild(col);
      }

      for (let j = 0; j < ladderHeight; j++) {
        const rand = Math.floor(Math.random() * (players.length - 1));
        const col = container.children[rand];
        const step = col.children[j + 1];
        const horizontal = document.createElement("div");
        horizontal.className = "step horizontal";
        step.appendChild(horizontal);
      }

      document.getElementById("results").innerHTML = "";
      document.getElementById("resultsTitle").textContent = "";
    }

    function startGame() {
      if (players.length === 0 || resultsList.length === 0) {
        alert("먼저 사다리를 생성해 주세요!");
        return;
      }

      const shuffledResults = [...resultsList].sort(() => Math.random() - 0.5);

      const resultBox = document.getElementById("results");
      resultBox.innerHTML = "";

      players.forEach((player, index) => {
        const div = document.createElement("div");
        div.textContent = `${player} → ${shuffledResults[index]}`;
        resultBox.appendChild(div);
      });

      document.getElementById("resultsTitle").textContent = "🔻 결과:";
    }
  </script>
</body>
</html>
