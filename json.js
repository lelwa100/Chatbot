function talk() {
    var know = {
      "hello": "Hi there!",
      "who are you": "Hello, Xolelwa here.",
      "how are you": "Good 🙂",
      "what can i do for you": "Please give us a follow & like ❤️",
      "your followers": "I have my family of 5000 members. I don't have followers, I have a supportive family 💪",
      "ok": "Thank you so much 🙏",
      "bye": "Okay! We'll meet soon 👋",
      "where do you live": "Berea📍",
      "goodnight" : "goodnight sweeet dreams😴",
      "what is oop": "OOP means Object-Oriented Programming. It uses classes & objects 🖥️",
      "i love you": "Aww ❤️ Love you too!",
    };
  
    var user = document.getElementById("userBox").value.trim().toLowerCase();
    var chatLog = document.getElementById("chatLog");
  
    if (user === "") return; // ignore empty input
  
    // Show user message
    chatLog.innerHTML += "<div><b>You:</b> " + user + "</div>";
  
    // Bot reply
    if (user in know) {
      chatLog.innerHTML += "<div><b>Bot:</b> " + know[user] + "</div>";
    } else {
      chatLog.innerHTML += "<div><b>Bot:</b> Sorry, I didn't understand.</div>";
    }
  
    // Auto scroll to bottom
    chatLog.scrollTop = chatLog.scrollHeight;
  
    // Clear input
    document.getElementById("userBox").value = "";
  }