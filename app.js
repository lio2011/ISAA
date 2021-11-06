function myFunction() {
    
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    var hashpass = stringToHash(pass);
    if(user == "student" && hashpass =="756772831"){
      location.replace("index.html")
    }
    else if(user == "faculty" && hashpass =="756772831"){
      location.replace("index.html")
    }
  }
  function stringToHash(string) {
                  
                var hash = 0;
                  
                if (string.length == 0) return hash;
                  
                for (i = 0; i < string.length; i++) {
                    char = string.charCodeAt(i);
                    hash = ((hash << 5) - hash) + char;
                    hash = hash & hash;
                }
                
                return hash;
            }