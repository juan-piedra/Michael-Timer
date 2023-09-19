class Timer {
  constructor(date, elementID) {
    this.date = date;
    this.elementID = elementID;
  }

  stopWatch() {
    var targetDate = new Date(this.date);
    var now = new Date();
    var timeDiff = now.getTime() - targetDate.getTime();

    var days = Math.floor(timeDiff / (1000 * 3600 * 24));
    var hours = Math.floor((timeDiff / (1000 * 3600)) % 24);
    var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var seconds = Math.floor((timeDiff / 1000) % 60);

    var timerDisplay =
      days +
      " days, " +
      hours +
      " hours, " +
      minutes +
      " minutes, " +
      seconds +
      " seconds";
    document.getElementById(this.elementID).innerHTML = timerDisplay;
  }

  countDown() {
    var targetDate = new Date(this.date);
    var now = new Date();
    var timeDiff = targetDate.getTime() - now.getTime();

    var days = Math.floor(timeDiff / (1000 * 3600 * 24));
    var hours = Math.floor((timeDiff / (1000 * 3600)) % 24);
    var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var seconds = Math.floor((timeDiff / 1000) % 60);

    var timerDisplay =
      days +
      " days, " +
      hours +
      " hours, " +
      minutes +
      " minutes, " +
      seconds +
      " seconds";
    document.getElementById(this.elementID).innerHTML = timerDisplay;
  }
}

const michaelTimer = new Timer("2023-08-01T20:45:00", "michael-timer");
const ldocTImer = new Timer("2023-09-19T18:30:00", "ldoc-timer");

setInterval(() => {
  michaelTimer.stopWatch();
  ldocTImer.countDown();
}, 1000);



const notesArr = [
  "May the force be with you! -Elias Rivera",
  "Michael! Thank you for being the coolest person with a bun that I know. I’m going to miss your bing references, your well timed jokes, and most of all listening to how your brain works. You made class fun and exciting and I thank you for always being patient with me. Nirav and Julius !thank you for saving challenges and group project errors and sharing your knowledge. I appreciate you all! -Benethea Hardin",
  "Michael, Julius, and Nirav! Thank you so much for an incredible class.  This was definitely one of the hardest things I have ever done but with all your help it felt like a possible goal to achieve. Thank you for always exhibiting such patience, kindness and enthusiasm. This was an experience I will never forget.  I hope to cross paths again 😀 -Mallorie Pinto",
  "Michael, Julius, and Nirav… thanks for making this class fun and for patiently herding us cats towards our new careers! -Kevin Lewis",
  "Thank you for being a great teacher, we will miss your jokes and stories for sure! -Joan Brambila",
  "Hey Michael! Thanks for being a fantastic teacher and answering all one billion of my questions 🤣. I appreciate you drawing the line at Bing, for everyone's sake, and really ensuring that we didn't have to worry. Hope we can keep in touch ! -Vincent Jacobs",
  "Thanks for all the help and giving me the confidence to not only start, but to continue coding! I'll miss coming to class and learning about all the wonderful perks of Bing points lol. -Jorge Jimenez",
  "Thank you lord Michael for being a great coding teacher! -Jed Smith",
  "Michael, Julius, and Nirav -- thank you for being our fearless leaders on this crazy journey! -Gene Suhir",
  "Thank you Michael, Nirav and Julius for all of the help this year! Without your support and encouragement a lot of us wouldn’t be here today! 🤎 -Tristan Melillo",
  "Best coding boot camp teacher and TAs we've ever had! -Michael Salisbury",
  "Michael, Nirav, and Julius this course was really challenging but you made it feel less overwhelming! Thank you for your hard work and constant support! I really appreciate it! -Dana Belleli",
  "Dear Michael, I wanted to say thank you for being the Yoda of our software engineering bootcamp! We Padawans are so grateful for all your wisdom and your role in turning us into Jedi one day! Your patience is on par with Obi-Wan's, and you've guided us through the Dark Side of code with humor and light-heartedness. Thank you for sharing your Jedi knowledge with us and for making the bootcamp a memorable adventure in a galaxy not so far away. We'll be sure to use the Force responsibly in our coding endeavors! May your coffee always be strong, your bugs few, and your code as elegant as a Jedi Master's lightsaber form. With gratitude and laughter. -Eszter Barbuscia",
  "Thank you for the help and guidance into this new scary yet fun world, I will miss the 9 hours a week with you in it ! -Len Zuro",
  "Thank you Michael for equipping us with these skills to start our new careers. I enjoyed you being our mentor, and appreciate you! -Shane Browning",
  "Michael, I can’t thank you enough for all your support during this bootcamp! I learned an immense amount and I know this will take me far. Because of your teachings, advice, and suggestions, you have prepared me for the real world and I am ready to take on my future as a software engineer. Thank you for your knowledge, your humor, and especially your PATIENCE! As a teacher, I know that is not an easy task and I probably woulda lost my shit teaching this class haha! I will miss being the first and only one in office hours taking advantage of learning everything I can from you!! I hope this is not the last time we see each other. I will miss you and this class! Nirav and Julius, thank you so much for all your support and help with everything from in class activities, challenges, and projects!  You both are role models for all of us in this program and I hope to continue with my coding education to get to the level where you both are. FYI I always gave you shout outs on my README for the challenges because you both played a big part in helping me complete ALL of them! Take care and I hope to see you in the future! -Love, Kristine Kim",
  "No words necessary, but I will happily drink a beer or [do other Christian activities] with y'all! -Nathan Weeklely",
  "Hey Michael, Nirav and Julius: You guys have been wonderful the entire class. You guys work very well together and have helped me in many ways throughout this wonderful (sometimes painful) course. Best of luck to your future and thank you so much. -Tod Winchester",
  "Thank you for always willing to help us, always have a great attitude and being understanding of each individual’s needs. I will forever tell people not to worry when they indeed should worry, and will keep striving to always improve. -Francisco Verdugo Del Real",
  "Thank you for everything! -Raymond Rodriguez",
];
const carouselInner = document.querySelector(".carousel-inner");

notesArr.map((item) => {
  let div = document.createElement('div');
  div.className += 'carousel-item'
  let p = document.createElement('p');
  p.append(item);
  div.append(p);
  carouselInner.append(div);
});
