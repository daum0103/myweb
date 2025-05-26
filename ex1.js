<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>인사 예제</title>
</head>
<body>
  <h1>자바스크립트 인사 예제</h1>
  <p>이름을 입력하세요:</p>
  <input type="text" id="nameInput" placeholder="이름을 입력하세요">
  <button onclick="sayHello()">인사하기</button>

  <p id="greeting"></p>

  <script>
    function sayHello() {
      const name = document.getElementById("최다움").value;
      const greetingText = "안녕하세요, " + name + "님! 😊";
      document.getElementById("greeting").textContent = greetingText;
    }
  </script>
</body>
</html>
