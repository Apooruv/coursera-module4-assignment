(function () {

    var names = ["Apooruv", "Jatan", "Aditya", "Amit", "Rishabh", "Yasho", "Shankh", "Tony", "Steve", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })(window);
