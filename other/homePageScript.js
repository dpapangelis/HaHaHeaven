//<!-- Irida ad appearance and closing buttons script-->
//        <script>
            var adsEl = document.getElementById("ad-container");
            var close1Button = document.getElementById("close1");
            var close2Button = document.getElementById("close2");
            var close3Button = document.getElementById("close3");
            var ad1El = document.getElementById("ad1");
            var ad2El = document.getElementById("ad2");
            var ad3El = document.getElementById("ad3");

            var adsAppearance = function(){
                adsEl.style.display = "block";
            }

            setTimeout(adsAppearance,500);

            var close1ButtonAction = function() {
                close1Button.style.display = "none";
                ad1El.style.display = "none";
            }

            var close2ButtonAction = function() {
                close2Button.style.display = "none";
                ad2El.style.display = "none";
            }

            var close3ButtonAction = function() {
                close3Button.style.display = "none";
                ad3El.style.display = "none";
            }

            close1Button.addEventListener("click",close1ButtonAction);
            close2Button.addEventListener("click",close2ButtonAction);
            close3Button.addEventListener("click",close3ButtonAction);
//        </script>
//        
//        <!-- Irida inactive message -->
//        <script>
            var timer;
            var timeout = function () {
                alert("God is always watching!");
            }
            timer = setTimeout(timeout, 120000);
            window.onmousemove = function() {
                clearTimeout(timer);
                timer = setTimeout(timeout, 120000);
                document.body.style.cursor  = "auto";
            };
//        </script>
//  Dimitris comment input and append script
//       <script>
            var nameInput = document.getElementById("nameInput");
            var commentInput = document.getElementById("commentInput");
            var submitBtn = document.getElementById("commentSubmit");
            var commentSection = document.getElementById("appendedComments");

            function logComment() { 
                var userName = nameInput.value;
                var userComment = commentInput.value;
                var newComment = document.createElement("p");

                newComment.innerHTML = "<strong>"+userName+"</strong>: <br><br>"+userComment+"<br><br>";
           
                if(userName === ""){
                    nameInput.value = "";
                    commentInput.value = "";    
                    window.alert("Please enter a username before posting your comment!");
                } 
                else if(userComment === ""){
                    if(userName !== ""){
                        nameInput.value = "";
                        commentInput.value = "";    
                        window.alert("Hi, "+userName+"! Don't forget to write a comment to post!");
                    }
                    else{
                        nameInput.value = "";
                        commentInput.value = "";    
                        window.alert("Hi, there! Please enter your username and a comment to post!");    
                    }
                }
                else{
                    commentSection.appendChild(newComment);
                    nameInput.value = "";
                    commentInput.value = "";
                }    
            }

            submitBtn.addEventListener("click", logComment);
//        </script>
//        <script>
            var movieLinks = [
            "COMEDY/BigFatGreekFuneral/BigFatGreekFuneral.html",
            "COMEDY/PurplePanther/PurplePanther.html",
            "COMEDY/RomeAlone/RomeAlone.html"
            ];

            function getRandomMovie() {

                var randomIndex = Math.floor(Math.random() * movieLinks.length);
                var randomMovie = movieLinks[randomIndex];

                return randomMovie;
            }

            var recommendedMovie = getRandomMovie();
            console.log("Recommended Movie:", recommendedMovie);

       