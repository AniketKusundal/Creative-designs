<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final</title>

    <style>
        @import url("https://fonts.googleapis.com/css2?family=Wallpoet&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap");
        /* Nav Bar */
        /* Section - 1 */
        .section-1 {
            width: 100%;
            height: 100vh;
            background-color: #fff;
            position: relative;
            }

            .floating-bg {
            width: 110vw;
            height: 110vw;
            background-color: rgba(49, 189, 213, 0.8);
            position: absolute;
            top: -66vw;
            left: calc(50% -75vw);
            border-radius: 45%;
            animation: rotate 30s infinite;
            }

            .floating-bg::before {
            content: "";
            width: 100%;
            height: 100%;
            background-color: rgba(21, 40, 40, 0.264, 0.1);
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 35%;
            animation: rotate 20s infinite;
            }

            @keyframes rotate {
            0% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(350deg);
            }
            }

            .navbar {
            position: relative;
            z-index: 30;
            top: 4rem;
            display: flex;
            justify-content: space-evenly;
            }

            .navbar-link {
            font-family: Wallpoet, cursive;
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: 0.3rem;
            color: white;
            width: 2.5rem;
            word-wrap: break-word;
            text-align: center;
            transition: all 1s;
            }

            .navbar-link:hover {
            width: 15rem;
            background-color: rgba(255, 255, 255, 0.3);
            transition: 1.5s;
            }

            .section-1-heading {
            font-size: 7rem;
            font-family: "Bungee Inline", cursive;
            position: absolute;
            top: 25vw;
            left: 55%;
            transform: translateX(-50%);
            text-shadow: 0.3rem 0.3rem 0.3rem #0c0c0c;
            color: rgb(105, 105, 105);
            background-color: #fff;
            width: 80rem;
            text-align: center;
            padding: 0.8rem 1.6rem;
            border-radius: 1rem;
            opacity: 0.9;
            letter-spacing: 8px;
            }

/* End Of Secction - 1 */



/* login Log out */


/* From Uiverse.io by andrew-demchenk0 */ 
.wrapper {
  --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --bg-color-alt: #666;
  --main-color: #323232;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
}
/* switch card */
.switch {
  transform: translateY(-200px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 50px;
  height: 20px;
}

.card-side::before {
  position: absolute;
  content: 'Log in';
  left: -70px;
  top: 0;
  width: 100px;
  text-decoration: underline;
  color: var(--font-color);
  font-weight: 600;
}

.card-side::after {
  position: absolute;
  content: 'Sign up';
  left: 70px;
  top: 0;
  width: 100px;
  text-decoration: none;
  color: var(--font-color);
  font-weight: 600;
}

.toggle {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  box-sizing: border-box;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-colorcolor);
  transition: 0.3s;
}

.slider:before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  border: 2px solid var(--main-color);
  border-radius: 5px;
  left: -2px;
  bottom: 2px;
  background-color: var(--bg-color);
  box-shadow: 0 3px 0 var(--main-color);
  transition: 0.3s;
}

.toggle:checked + .slider {
  background-color: var(--input-focus);
}

.toggle:checked + .slider:before {
  transform: translateX(30px);
}

.toggle:checked ~ .card-side:before {
  text-decoration: none;
}

.toggle:checked ~ .card-side:after {
  text-decoration: underline;
}

/* card */ 

.flip-card__inner {
  width: 300px;
  height: 350px;
  position: relative;
  background-color: transparent;
  perspective: 1000px;
    /* width: 100%;
    height: 100%; */
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.toggle:checked ~ .flip-card__inner {
  transform: rotateY(180deg);
}

.toggle:checked ~ .flip-card__front {
  box-shadow: none;
}

.flip-card__front, .flip-card__back {
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: lightgrey;
  gap: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
}

.flip-card__back {
  width: 100%;
  transform: rotateY(180deg);
}

.flip-card__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  margin: 20px 0 20px 0;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  color: var(--main-color);
}

.flip-card__input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

.flip-card__input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.flip-card__input:focus {
  border: 2px solid var(--input-focus);
}

.flip-card__btn:active, .button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

.flip-card__btn {
  margin: 20px 0 20px 0;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
  
} 

/* login Log out */


</style>
</head>
<body style="background-color: #636363;">
    <!--  nav  -->
    <section class="section-1"  id="Home">
        <nav class="navbar">
            <a href="#Home" class="navbar-link">Design</a>
            <a href="#Coustmer" class="navbar-link">Coustmer</a>
            <a href="#Team" class="navbar-link">Team</a>
            <a href="#Contact" class="navbar-link">Contact</a>
        </nav>
        
        <div class="floating-bg"></div>
        <h1 class="section-1-heading">Crative Design</h1>
    </section>
    <!--  Nav Bar  -->
    <section class="Section2">
<div class="wrapper">
    <div class="card-switch">
        <label class="switch">
           <input type="checkbox" class="toggle">
           <span class="slider"></span>
           <span class="card-side"></span>
           <div class="flip-card__inner">
              <div class="flip-card__front">
                 <div class="title">Log in</div>
                 <form class="flip-card__form" action="">
                    <input class="flip-card__input" name="email" placeholder="Email" type="email">
                    <input class="flip-card__input" name="password" placeholder="Password" type="password">
                    <button class="flip-card__btn">Lets go!</button>
                 </form>
              </div>
              <div class="flip-card__back">
                 <div class="title">Sign up</div>
                 <form class="flip-card__form" action="">
                    <input class="flip-card__input" placeholder="Name" type="name">
                    <input class="flip-card__input" name="email" placeholder="Email" type="email">
                    <input class="flip-card__input" name="password" placeholder="Password" type="password">
                    <button class="flip-card__btn">Confirm!</button>
                 </form>
              </div>
           </div>
        </label>
    </div>   
</div>
</section>

</body>
</html>
