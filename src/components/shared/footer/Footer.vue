<template>
  <div id="site-footer">
    <!-- Site footer -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <footer class="site-footer">
      <div class="container-footer">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/"
                  >Contribute</a
                >
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/"
                  >Privacy Policy</a
                >
              </li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container-bt-footer">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by
              <a href="#">Eduardo Migueis</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a
                  class="facebook"
                  target="_blank"
                  href="https://github.com/edumigueis"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
              <li>
                <a
                  class="twitter"
                  target="_blank"
                  href="https://github.com/edumigueis"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li>
                <a
                  class="dribbble"
                  target="_blank"
                  href="https://github.com/edumigueis"
                  ><i class="fa fa-github"></i
                ></a>
              </li>
              <li>
                <a
                  class="linkedin"
                  target="_blank"
                  href="https://github.com/edumigueis"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <main class="device-wrapper">
      <div class="iphonex">
        <div class="front">
          <div class="screen">
            <div class="screen__view">
              <div class="icon-slider">
                <div class="content-slider">
                  <div class="slider">
                    <div class="mask">
                      <ul>
                        <li class="anim1">
                          <img src="/src/assets/images/supperindresden.png">
                        </li>
                        <li class="anim2" style="border-radius: 21px; overflow: hidden; display: flex; align-items: center; justify-content: center; max-height: 260px">
                          <img src="/src/assets/logo.png" style="border-radius: 21px; height: 200px; width: 200px;">
                        </li>
                        <li class="anim3">
                          <img src="https://img.icons8.com/material/4ac144/256/user-male.png">
                        </li>
                        <li class="anim4">
                          <img src="https://img.icons8.com/material/4ac144/256/user-male.png">
                        </li>
                        <li class="anim5">
                          <img src="https://img.icons8.com/material/4ac144/256/user-male.png">
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hello">
                <p>Hello</p>
                <div class="dribbbleLogo white"><span></span></div>
              </div>
            </div>
            <div class="screen__front">
              <div class="screen__front-speaker"></div>
              <div class="screen__front-camera"></div>
            </div>
          </div>
          <div class="front__line"></div>
          <div class="front__line front__line-second"></div>
        </div>
        <div class="phoneButtons phoneButtons-right"></div>
        <div class="phoneButtons phoneButtons-left"></div>
        <div class="phoneButtons phoneButtons-left2"></div>
        <div class="phoneButtons phoneButtons-left3"></div>
        <div class="back"></div>
      </div>
    </main>
  </div>
</template>
<style>
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.row {
  display: inline-flex;
  flex-wrap: nowrap;
}
.col-md-6 {
  width: 50%;
  min-width: 500px;
  padding: 15px;
  margin-left: 20px;
}
.col-md-3 {
  width: 20%;
  padding-left: 35px;
}
.col-xs-12 {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-left: 35px;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
#site-footer {
  padding: 0;
  margin: 0;
  background-color: #2a2a2a;
  position: relative;
  z-index: 1;
  box-shadow: inset 0 12px 14px -12px #000;
}

#site-footer {
  min-height: 20vw;
}
.device-wrapper {
  display: flex;
  flex: 1;
  float: left;
  background: #000;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  position: absolute;
  right: 210px;
  bottom: 330px;
}
.iphonex {
  width: 19em;
  height: 36.5em;
  display: flex;
  position: absolute;
  transform: rotate(0deg);
  transition: all cubic-bezier(0.36, 0.41, 0.38, 1) 0.4s;
  z-index: 10;
}
.iphonex:hover {
  transform: rotate(0deg) scale(0.95);
  margin-right: 0%;
}
.iphonex:hover ~ .title {
  opacity: 0;
}
.iphonex .back {
  display: flex;
  flex: 1;
  margin: 0.2em;
  border-radius: 3em;
  position: absolute;
  z-index: 1;
  width: calc(100% - 0.6em);
  height: calc(100% - 0.6em);
  top: 0;
  right: 0;
  box-shadow: 0 0 10em rgba(70, 70, 70, 0.1);
  transition: all 0.4s;
}
.iphonex:hover .back {
  box-shadow: 0 0 15em rgba(70, 70, 70, 0.4);
}
.iphonex .front {
  display: flex;
  flex: 1;
  background-color: #292c2d;
  border-radius: 3em;
  margin: 0.2em;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0.1em 0.4em rgba(255, 255, 255, 0.1) inset;
  z-index: 10;
}
.iphonex .screen {
  display: flex;
  flex: 1;
  background-color: #191b1c;
  margin: 0.4em;
  border-radius: 2.6em;
  border: solid 0.2em #121415;
  position: relative;
  z-index: 10;
}
.iphonex .front__line {
  background: linear-gradient(to right, #515455, #454748, #515455);
  position: absolute;
  z-index: 8;
  width: 100%;
  height: 0.5em;
  top: 10%;
}
.iphonex .front__line-second {
  top: 90%;
}
.iphonex .screen .screen__view {
  display: flex;
  flex: 1;
  margin: 0.6em;
  border-radius: 2em;
  overflow: hidden;
  position: relative;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
}
.iphonex .screen .screen__view:after,
.iphonex .screen .screen__view:before {
  content: "";
  position: absolute;
  z-index: 1;
  width: 50em;
  height: 50em;
  border-radius: 50%;
  background: linear-gradient(110deg, #f3ac28, #ee3d96, #2296e4);
  bottom: 0;
}
.iphonex .screen .screen__view:after {
  transform: translateY(100%) scaleX(1.4);
  opacity: 0.3;
  transition: all ease 0.5s 0.1s;
}
.iphonex .screen:hover .screen__view:after {
  transform: translateY(10%) scaleX(1.4);
  transition: all ease 0.9s;
}
.iphonex .screen .screen__view:before {
  transform: translateY(100%) scaleX(1.4);
  opacity: 1;
  z-index: 40;
  transition: all ease 0.6s;
}
.iphonex .screen:hover .screen__view:before {
  transform: translateY(10%) scaleX(1.4);
  transition: all ease 0.9s 0.2s;
}
.iphonex .screen .screen__view .dribbbleLogo {
  width: 8em;
  height: 8em;
  border: solid 0.7em #d33572;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background: #ea4c89;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.7s;
}
.iphonex .screen .screen__view .dribbbleLogo.white {
  width: 0.9em;
  height: 0.9em;
  border: solid 0.07em #fff;
  position: relative;
  margin-left: 0.3em;
  background: transparent;
  box-sizing: border-box;
}
.iphonex .screen:hover .screen__view .dribbbleLogo:not(.white) {
  transform: translateY(100%) translateZ(1px);
  transition: all ease 1s 0.1s;
}
.iphonex .screen .screen__view .dribbbleLogo:after,
.iphonex .screen .screen__view .dribbbleLogo:before,
.iphonex .screen .screen__view .dribbbleLogo span {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: solid 0.45em #d33572;
  position: absolute;
}
.iphonex .screen .screen__view .dribbbleLogo.white:after,
.iphonex .screen .screen__view .dribbbleLogo.white:before,
.iphonex .screen .screen__view .dribbbleLogo.white span {
  border: solid 0.04em #fff;
}
.iphonex .screen .screen__view .dribbbleLogo:after {
  bottom: 0;
  transform: translateY(63%) scaleY(1.65) scaleX(1.5) rotate(-30deg);
  transform-origin: top center;
}
.iphonex .screen .screen__view .dribbbleLogo:before {
  top: 0;
  transform: translateY(-62%) scaleY(1.65) scaleX(1.5) rotate(-30deg);
  transform-origin: bottom center;
}
.iphonex .screen .screen__view .dribbbleLogo span {
  top: 0;
  transform: translateY(-50%) scaleY(1.85) scaleX(1.5) rotate(-63deg);
  transform-origin: bottom right;
}
.iphonex .screen .screen__view .hello {
  font-size: 2.5em;
  color: #fff;
  position: absolute;
  z-index: 60;
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  transform: translateY(40%);
  font-weight: 600;
}
.iphonex .screen:hover .screen__view .hello {
  opacity: 1;
  transform: translateY(0%);
  transition: all ease 0.6s 0.7s;
}
.iphonex .screen .screen__front {
  position: absolute;
  width: 50%;
  background-color: #191b1c;
  height: 1.8em;
  border-radius: 0 0 0.9em 0.9em;
  right: 25%;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.3em;
  box-sizing: border-box;
  margin-top: 0.5em;
  z-index: 999;
}
.iphonex .screen .screen__front::after,
.iphonex .screen .screen__front::before {
  content: "";
  width: 10%;
  height: 50%;
  position: absolute;
  background: transparent;
  top: -0.3em;
  border: solid 0.4em #191b1c;
  border-bottom: 0;
}
.iphonex .screen .screen__front::after {
  left: 0.4em;
  transform: translateX(-100%);
  border-left: 0;
  border-radius: 0 0.7em 0 0;
}
.iphonex .screen .screen__front::before {
  right: 0.4em;
  transform: translateX(100%);
  border-right: 0;
  border-radius: 0.7em 0 0 0;
}
.iphonex .screen .screen__front-speaker {
  background: #070808;
  border-radius: 0.2em;
  height: 0.35em;
  width: 28%;
}
.iphonex .screen .screen__front-camera {
  height: 0.35em;
  width: 0.35em;
  background: #272727;
  margin-left: 0.5em;
  border-radius: 50%;
  margin-right: -0.8em;
}
.iphonex .phoneButtons {
  width: 1em;
  height: 6em;
  position: absolute;
  z-index: 2;
  background: linear-gradient(to bottom, #212324, #2b2e31, #212324);
  box-shadow: 0 0 0.4em rgba(255, 255, 255, 0.1) inset;
  border-radius: 2px;
}
.iphonex .phoneButtons-right {
  right: 0;
  top: 30%;
}
.iphonex .phoneButtons-left {
  left: 0;
  top: 15%;
  height: 3em;
}
.iphonex .phoneButtons-left2 {
  left: 0;
  top: 25%;
  height: 5em;
}
.iphonex .phoneButtons-left3 {
  left: 0;
  top: calc(25% + 6em);
  height: 5em;
}

.content-slider {
  width: 100%;
  height: 360px;
}
.icon-slider{
  width: 250px;
  margin: 0;
}
.slider {
  height: 320px;
  width: 100%;
  margin: 40px auto 0;
  overflow: visible;
  position: relative;
}

.mask {
  overflow: hidden;
  height: 320px;
}

.slider ul {
  margin: 0;
  padding: 0;
  position: relative;
}

.slider li {
  width: 100%;
  height: 320px;
  position: absolute;
  top: -325px;
  list-style: none;
}
.slider li img{
  width: 100%;
}

.slider .quote {
  font-size: 40px;
  font-style: italic;
}

.slider .source {
  font-size: 20px;
  text-align: right;
}

.slider li.anim1 {
  animation: cycle 15s linear infinite;
}

.slider li.anim2 {
  animation: cycle2 15s linear infinite;
}

.slider li.anim3 {
  animation: cycle3 15s linear infinite;
}

.slider li.anim4 {
  animation: cycle4 15s linear infinite;
}

.slider li.anim5 {
  animation: cycle5 15s linear infinite;
}

.slider:hover li {
  animation-play-state: paused;
}

@keyframes cycle {
  0% {
    top: 0px;
  }
  4% {
    top: 0px;
  }
  16% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  20% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  21% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  50% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  92% {
    top: -325px;
    opacity: 0;
    z-index: 0;
  }
  96% {
    top: -325px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

@keyframes cycle2 {
  0% {
    top: -325px;
    opacity: 0;
  }
  16% {
    top: -325px;
    opacity: 0;
  }
  20% {
    top: 0px;
    opacity: 1;
  }
  24% {
    top: 0px;
    opacity: 1;
  }
  36% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  40% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  41% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  100% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes cycle3 {
  0% {
    top: -325px;
    opacity: 0;
  }
  36% {
    top: -325px;
    opacity: 0;
  }
  40% {
    top: 0px;
    opacity: 1;
  }
  44% {
    top: 0px;
    opacity: 1;
  }
  56% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  60% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  61% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  100% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes cycle4 {
  0% {
    top: -325px;
    opacity: 0;
  }
  56% {
    top: -325px;
    opacity: 0;
  }
  60% {
    top: 0px;
    opacity: 1;
  }
  64% {
    top: 0px;
    opacity: 1;
  }
  76% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  80% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  81% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  100% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes cycle5 {
  0% {
    top: -325px;
    opacity: 0;
  }
  76% {
    top: -325px;
    opacity: 0;
  }
  80% {
    top: 0px;
    opacity: 1;
  }
  84% {
    top: 0px;
    opacity: 1;
  }
  96% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  100% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
}
@media (max-height: 40em) {
  .iphonex {
    width: 48vh;
    height: 94vh;
  }
  .title .title__svg svg text {
    font-size: 4em;
  }
}
</style>
