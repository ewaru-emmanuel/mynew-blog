# mynew-blog
this is a simple school blog i created for kamapala school of health sciences
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>kampala school of health sciences</title>

  <!--
    - favicon
  -->
  <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/x-icon">
  <link rel="icon"href="kshs.png" type="image/x-icon">
  <link rel="stylesheets"href="newstyle.css">
  <!--
    - custom css link 
  -->
  <link rel="stylesheet" href="newstyle.css">
  

  <!--
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
</head>

<body class="light-theme">

  <!--
    - #HEADER
  -->

  <header>

    <div class="container">

      <nav class="navbar">

        <a href="#">
          <strong class="tg-logo"><a href="https://kshs.ac.ug/"><img src="kshs.png" alt="Kampala School of Health Sciences"style="border-radius:218px;width:145;height:165;"></a></strong>
						
        </a>
        <div class="btn-group">
          
        
          <style>
           
            
            .dark-mode {
              background-color: black;
              color: rgb(127, 50, 50);
            }
            </style>
          <script>
            function myfucntion(){
              var changer=document.body;
              changer.ClassList.toggle('dark-mode')
              
            }
          </script>

          <button class="nav-menu-btn">
            <ion-icon name="menu-outline"></ion-icon>
          </button>

        </div>

        <div class="flex-wrapper">

          <ul class="desktop-nav"> <!--
            - #HEADER desktop navigation
          -->
          <style>
            .active{
              background-color: rgb(212, 212, 48);
              padding: 55 25 0;
              margin-left: 25;
            }
          </style>
            <li>
              <a href="kshs.html" class="active">Home</a>
            </li>
            <li>
              <a href="#" class="nav-link">Upcoming Events</a>
            </li>
            <li>
              <a href="aboutkshs.html" class="nav-link">About Us</a>
            </li>
          
            <li>
              <a href="#" class="nav-link">Courses</a>
              
            </li>
            <li>
              <a href="contacts.html" class="nav-link">Contacts Us</a>
            </li>

          </ul>
 
          <button class="theme-btn theme-btn-desktop light">
            <ion-icon name="moon" class="moon"></ion-icon>
            <ion-icon name="sunny" class="sun"></ion-icon>
          </button>
        </div>

         <!--
    - #HEADER mobile phone navigation bar
  -->
        
        <div class="mobile-nav">

          <button class="nav-close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="wrapper">

            <p class="h3 nav-title">Main Menu</p>

            <ul>
              <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
              </li>
  
              <li>
                <a href="#" class="nav-link">About Us</a>
              </li>
              <li>
                <a href="#" class="nav-link">Courses<button type="button" class="collapsible">+</button></a>
                <ul>
                  <li>
                    Diploma Courses
                  </li>
                  <li>
                    Certificate Courses
                  </li>
                  <li>
                    Short Courses
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="nav-link">Contacts Us</a>
              </li>
  
            </ul>

          </div>

          <div>

            
             <!--
    - #HEADER topics part
  -->
  
  
          
           

          </div>

        </div>

      </nav>

    </div>

  </header>





  <main>

    <!--
      - #HERO SECTION
    -->

    <div class="hero">

      <div class="container">

        <div class="left">

          <h1 class="h1">
            Welcome To Kampala School Of Health Sciences
            <br>
          </h1>

          <p class="h3">
            Health Is Life.
          </p>

          <div class="btn-group">
            <a href="kshs.html" class="btn btn-primary">HOME</a>
            <a href="onlineapplication.html" class="btn btn-secondary">APPLY ONLINE</a>
          </div>

        </div>

        <div class="right">

          <div class="pattern-bg"></div>
          <div class="img-box">
            <img src="herbert.jpg" alt="Apollo Emmanuel" class="hero-img">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
          </div>

        </div>

      </div>

    </div>





    <div class="main">

      <div class="container">

        <!--
          - BLOG SECTION
        -->
    
        <div class="blog">

          <h2 class="h2">Latest Blog Posts</h2>

          <div class="blog-card-group">

         
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="herbert.jpg" alt="Accessibility Tips for Web Developers" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Accademics</button>

                <h3>
                  <a href="#" class="h3">Kshs Scoops Gold at the Second National Skills Competitions</a></h3>

                <p class="blog-text">
                  <img src="skills competitions.jpg"style="height:125;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>
         
          
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="graduation.jpg" alt="graduations" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Graduations</button>

                <h3><a href="" class="h3">Graduations at kampala school of health sciences </a></h3>

                <p class="blog-text">
                  <img src="graduation2.jpg"style="height:125;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>
            
          
         
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="sports3.jpg" alt="sports" width="auto"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Sports</button>

                <h3><a href="" class="h3">Kshs at the National Medical Schools Sports Competitions</a></h3>

                <p class="blog-text">
                  <img src="sports2.jpg"style="height:100%;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>

            
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="./assets/images/blog-3.png" alt="Accessibility Tips for Web Developers" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">internships</button>

                <h3><a href="" class="h3">internships and Pacements.</a></h3>

                <p class="blog-text">
                  <img src="biomed.jpg"style="height:100%;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the 
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>

            
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="./assets/images/blog-3.png" alt="outreaches" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Accademics</button>

                <h3><a href="" class="h3">Kshs takes part in #mama-wange health camp  </a></h3>

                <p class="blog-text">
                  <img src="dembe.jpg"style="height:125;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>

            
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="./assets/images/blog-3.png" alt="Accessibility Tips for Web Developers" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">outreaches</button>

                <h3><a href="" class="h3">Kshs Scoops Gold at the Second National Skills Competitions</a></h3>

                <p class="blog-text">
                  <img src="skills competitions.jpg"style="height:125;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>

            
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="./assets/images/blog-3.png" alt="Accessibility Tips for Web Developers" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Accademics</button>

                <h3><a href="" class="h3">Kshs Scoops Gold at the Second National Skills Competitions</a></h3>

                <p class="blog-text">
                  <img src="skills competitions.jpg"style="height:125;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>
            
            
            
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="./assets/images/blog-3.png" alt="Accessibility" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Accademics</button>

                <h3><a href="" class="h3">Kshs Scoops Gold at the Second National Skills Competitions</a></h3>

                <p class="blog-text">
                  <img src="skills competitions.jpg"style="height:125;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>
            
            
            
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="./assets/images/blog-3.png" alt="internships" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Accademics</button>

                <h3><a href="" class="h3">Placements and internships</a></h3>

                <p class="blog-text">
                  <img src="skills competitions.jpg"style="height:125;width:100%">
                </p>
                <p>
                  World Skills Uganda 2022 was a aserries of capacity building workshops focusing on the collavoratice mentorship between world skills interrnational edp0erts and the National experts
                  the competition took place between.....and......... with the joint efforts of the african union and world skills uganda
                  disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                  and resources can
                  help here, even if you're totally new to web accessibility.
                </p>
              

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class ="text-sm">
                      <time datetime="2021-11-28"><span id="currenttime2"></span></time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4M</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>
            
            
            <div class="blog-card">

              <div class="blog-card-banner">
                <img src="./assets/images/blog-10.png"
                  alt="How to connect a React frontend with a NodeJS/Express backend" width="250"
                  class="blog-banner-img">
              </div>

              <div class="blog-content-wrapper">

                <button class="blog-topic text-tiny">Accademics</button>

                <h3><a href="" class="h3">Kshs takes part in #mama-wange health camp</a></h3>

                <p class="blog-text">
                  <img src="dembe2.jpg"style="height:125;width:100%"> </p>
                  <p>
                  Javascript for both the backend and frontend as well as a document-oriented or non relational database
                  (MongoDB),
                  meaning that it's structured like JSON rather than a large excel sheet like SQL databases are.
                </p>
                

                <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src="./assets/images/author.png" alt="Apollo Emmanuel" width="50">
                  </div>

                  <div class="wrapper">
                    <a href="#" class="h4">Apollo Emmanuel</a>

                    <p class="text-sm">
                      <time datetime="2021-09-21">jan 21, 2022</time>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT4M">4 min</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <button class="btn load-more">Load More</button>

        </div>





        <!--
          - ASIDE
        -->

        <div class="aside">

          <div class="topics">

            <h2 class="h2">Topics</h2>

            <a href="onlineapplication.html" class="topic-btn">
              <div class="icon-box">
                <ion-icon name="server-outline"></ion-icon>
              </div>

              <p>APPLY ONLINE</p>
            </a>

            <a href="#" class="topic-btn">
              <div class="icon-box">
                <ion-icon name="accessibility-outline"></ion-icon>
              </div>

              <p>COURSES</p>
            </a>

            <a href="#" class="topic-btn">
              <div class="icon-box">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>

              <p>LOCATION</p>
            </a>

          </div>

          <div class="tags">

            <h2 class="h2">Tags</h2>

            <div class="wrapper">

              <button class="hashtag">#Graduations</button>
              <button class="hashtag">#Sports</button>
              <button class="hashtag">#Placement</button>
              <button class="hashtag">#MDD</button>
              <button class="hashtag">#Guild councel</button>
              <button class="hashtag">#Galary</button>
              <button class="hashtag">#Christian Community</button>
              <button class="hashtag">#Islamic Community</button>

            </div>

          </div>

          <div class="contact">

            <h2 class="h2">Let's Talk</h2>

            <div class="wrapper">

              <p>
                Do you want to learn more about how we can join hands with you to help you develop and overcome problems? Let us have a
                conversation.
              </p>

              <ul class="social-link">

                <li>
                  <a href="#" class="icon-box discord">
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="icon-box twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="icon-box facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

              </ul>

            </div>

          </div>

          <div class="newsletter">

            <h2 class="h2">

            <div class="wrapper">

              <p>
                submit your email to get intouch with the School Administration
              </p>

              <form action action="mailto:emmanueleewaru@gamil.com" method="post" enctype="text/plain">
                Name:<input type="text"name="first name">
                
              Question:<input type="text"Question="your question...">
               email: <input type="email" name="email" placeholder="Email Address" required>

                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

            </div>
           </h2>
          </div>

        </div>

      </div>

    </div>

  </main>





  <!--
    - #FOOTER
  -->

  <footer>

    <div class="container">

      <div class="wrapper">

        <a href="#" class="footer-logo">
          <img src="kshs.png" alt="kshs's Logo" width="150" height="40" class="logo-light">
          <img src="./assets/images/logo-dark.svg" alt="ecosystem's Logo" width="150" height="40" class="logo-dark">
        </a>

        <p class="footer-text">
          Learn more about kampala school of health sciences
        </p>

      </div>

      <div class="wrapper">

        <p class="footer-title">Quick Links</p>

        <ul>

          <li>
            <a href="#" class="footer-link">visit us</a>
          </li>

          <li>
            <a href="onlineapplication.html" class="footer-link">Appy online</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact Us</a>
          </li>

        </ul>

      </div>

     

    </div>

    <p class="copyright">
      &copy; Copyright 2022 <a href="#">Apolloproject01</a>
    </p>

  </footer>





 <!--
    - custom js link
  -->
 <!-- <script src="script.min.js"></script>-->
 <script src="script.min.js"></script>
 <!--
   - ionicon link
 -->
 <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
 <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

</html>
