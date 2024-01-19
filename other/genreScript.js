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
//<!-- anna genre carousel script       -->
//        <script>
            var slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
              showSlides(slideIndex += n);
            }

            function currentSlide(n) {
              showSlides(slideIndex = n);
            }

            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("keySlides");
              var dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
            }
            window.onload= function () {
             setInterval(function(){ 
                 plusSlides(1);
             }, 14000);
             }
            
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
        
//<!-- dimitris feeling lucky button script       -->
//        <script>
            var luckyBtn = document.getElementById("lucky-btn");
            
            var movieLinks = [
            "../comedy/bigFatGreekFuneral/bigFatGreekFuneral.html",
            "../comedy/purplePanther/purplePanther.html",
            "../comedy/romeAlone/romeAlone.html",
            "../horror/theDining/theDining.html",
            "../horror/inLaws/inLaws.html",
            "../horror/silenceOfTheLamps/silenceOfTheLamps.html",
            "../horror/aaaa/aaaa.html", 
            "../scifi/starBoars/starBoars.html",   
            "../scifi/dude/dude.html",
            "../scifi/planetOfTheGrapes/planetOfTheGrapes.html", 
            "../fantasy/lordOfTheWings/lordOfTheWings.html",
            "../fantasy/punsLabyrinth/punsLabyrinth.html",   
            "../fantasy/wizardOfBooze/wizardOfBooze.html",
            "../drama/barbaraOpenHammer/barbaraOpenHammer.html", 
            "../drama/signInception/signInception.html",
            "../drama/codfather/codfather.html",   
            "../drama/fandomOfTheOperaBrowser/fandomOfTheOperaBrowser.html",
            "../romance/liveLaughLove/liveLaughLove.html", 
            "../romance/loveLiterally/loveLiterally.html",
            "../romance/theTextbook/theTextbook.html",  
            "../action/averagers/averagers.html",
            "../action/johnWeak/johnWeak.html", 
            "../action/pulpAddiction/pulpAddiction.html",
            "../action/suicidePreventionSquad/suicidePreventionSquad.html"
            ];

            function getRandomMovie() {

                var randomIndex = Math.floor(Math.random() * movieLinks.length);
                var randomMovie = movieLinks[randomIndex];

                window.open(randomMovie, "_blank");
            }

            luckyBtn.addEventListener("click", getRandomMovie);
           
        