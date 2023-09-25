var soz = "";
var wins = 0;
var game = {
    wins: 0,
 guesses: 12,
 word: [],
 letters: [],
 comp_choise: "",
 randomNumber: 0,
 words: [
    {
      word: "diego maradona",
      about: "Famous footballer ",
      image: `<img src="assets/images/diego-maradona-7.webp" alt="maradona" width="200" height = "250">`,
    },
    {word: "madonna",
        about:  "Material Girl",
        image: `<img src="assets/images/madonna.png" alt="madonna" width = "200" height = "250" >`,
    },
     {
      word: "michael jackson",
      about: "Billie Jean",
      image: `<img src="assets/images/michael.jpg" alt="michael Jackson" width = "200" height = "250">`,
    },
    {
      word: "queen",
      about: "Princes of the Universe",
      image: `<img src="assets/images/queen.jpg" alt="queen" width = "200" height = "150">`
    },
    {
      word: "metallica",
      about: "Master of Puppets",
      image: `<img src="assets/images/metallica.jpg" alt="metallica" width = "200" height = "150">`
    },
    {
      word: "journey",
      about: "Don't Stop Believin'",
      image: `<img src="assets/images/jouney.jpg" alt="journey" width = "200" height = "150">`
    },
    {
      word: "poison",
      about: "Fallen Angel",
      image: `<img src="assets/images/poison.jpg" alt="poison" width = "200" height = "250">`,
    },
    {
      word: "blondie",
      about: "Call me",
      image: `<img src="assets/images/blondie.jpg" alt="blondie" width = "200" height = "250">`,
    },
    {
      word: "genesis",
      about: "Illegal Alien",
      image: `<img src="assets/images/Genesis.jpg" alt="blondie" width = "200" height = "150"`,
    },

 ],
 oyunuYenile: function() {
    document.querySelector("#wins").innerHTML = this.wins;
    document.querySelector("#guesses").innerHTML = this.guesses;
    document.querySelector("#word").innerHTML = this.word.join(" ");
    document.querySelector("#letters").innerHTML = this.letters;
   
 },
 secilenSoz: function() {
   this.randomNumber =  Math.floor(Math.random()*this.words.length);
   this.comp_choise  = this.words[this.randomNumber].word;
   soz = this.comp_choise;
 },

 tirelerQoy: function(soz) {
    for (let i = 0; i<soz.length; i++) {
    if (soz[i]==" ") {
       this.word.push("&nbsp");
       this.oyunuYenile();
    } 
        else {
         this.word.push("-");
            this.oyunuYenile();
        }
    }
   },
   muqayise_et: function(herf){
         if(soz.includes(herf)) {
            for (let i = 0; i<soz.length; i++) {
      if(herf==soz[i]) {
         this.word.splice(i, 1, herf);
          this.oyunuYenile();
         }
      }
      if (!this.word.includes("-")) {
         this.wins ++;
         this.oyunuYenile();
       }
   }
         else  {
            if (!this.letters.includes(herf)) {
               this.letters.push(herf);
               this.guesses --;
               this.oyunuYenile();
            }
      }
      },
      win: function(){
         document.querySelector("#sentence").innerHTML=this.words[this.randomNumber].about;
         document.querySelector("#left_section").innerHTML = this.words[this.randomNumber].image;
         
      },
      restart: function() {
      this.guesses = 12;
      this.word = [];
      this.letters = [];
      this.secilenSoz();
      this.tirelerQoy(soz);
      this.oyunuYenile();
      }
      }
  
   game.secilenSoz();
   game.tirelerQoy(soz);
   game.oyunuYenile();
window.addEventListener("keyup", function(e) {
   if((game.wins - wins)==1) {
      wins++;
      game.win();
      document.querySelector("#win").classList.add("win");
      game.restart();
   } else if(game.guesses==0) {
      document.querySelector("#win").classList.add("lose");
      game.restart();
   } else {
       game.muqayise_et(e.key);
      }
});
