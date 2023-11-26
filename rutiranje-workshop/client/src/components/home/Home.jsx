import Header from "../header/Header";
export default function Home() {
  return (
    <>
      <title>Telephasic by HTML5 UP</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <link rel="stylesheet" href="assets/css/main.css" />
      <div id="page-wrapper">
        {/* Header */}

        <Header />

        {/* Features 1 */}
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <section className="col-6 col-12-narrower feature">
                <div className="image-wrapper first">
                  <a href="#" className="image featured first">
                    <img src="images/pic01.jpg" alt="" />
                  </a>
                </div>
                <header>
                  <h2>
                    Semper magna neque vel
                    <br />
                    adipiscing curabitur
                  </h2>
                </header>
                <p>
                  Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                  Curabitur vel sem sit dolor neque semper magna. Lorem ipsum
                  dolor sit amet consectetur et sed adipiscing elit. Curabitur
                  vel sem sit.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      Elevate my awareness
                    </a>
                  </li>
                </ul>
              </section>
              <section className="col-6 col-12-narrower feature">
                <div className="image-wrapper">
                  <a href="#" className="image featured">
                    <img src="images/pic02.jpg" alt="" />
                  </a>
                </div>
                <header>
                  <h2>
                    Amet lorem ipsum dolor
                    <br />
                    sit consequat magna
                  </h2>
                </header>
                <p>
                  Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                  Curabitur vel sem sit dolor neque semper magna. Lorem ipsum
                  dolor sit amet consectetur et sed adipiscing elit. Curabitur
                  vel sem sit.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      Elevate my awareness
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        {/* Promo */}
        <div id="promo-wrapper">
          <section id="promo">
            <h2>Neque semper magna et lorem ipsum adipiscing</h2>
            <a href="#" className="button">
              Breach the thresholds
            </a>
          </section>
        </div>
        {/* Features 2 */}
        <div className="wrapper">
          <section className="container">
            <header className="major">
              <h2>Sed magna consequat lorem curabitur tempus</h2>
              <p>
                Elit aliquam vulputate egestas euismod nunc semper vehicula
                lorem blandit
              </p>
            </header>
            <div className="row features">
              <section className="col-4 col-12-narrower feature">
                <div className="image-wrapper first">
                  <a href="#" className="image featured">
                    <img src="images/pic03.jpg" alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                  Curabitur vel sem sit dolor neque semper magna lorem ipsum.
                </p>
              </section>
              <section className="col-4 col-12-narrower feature">
                <div className="image-wrapper">
                  <a href="#" className="image featured">
                    <img src="images/pic04.jpg" alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                  Curabitur vel sem sit dolor neque semper magna lorem ipsum.
                </p>
              </section>
              <section className="col-4 col-12-narrower feature">
                <div className="image-wrapper">
                  <a href="#" className="image featured">
                    <img src="images/pic05.jpg" alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                  Curabitur vel sem sit dolor neque semper magna lorem ipsum.
                </p>
              </section>
            </div>
            <ul className="actions major">
              <li>
                <a href="#" className="button">
                  Elevate my awareness
                </a>
              </li>
            </ul>
          </section>
        </div>
        {/* Footer */}
        <div id="footer-wrapper">
          <div id="footer" className="container">
            <header className="major">
              <h2>Euismod aliquam vehicula lorem</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                Curabitur vel sem sit
                <br />
                dolor neque semper magna lorem ipsum feugiat veroeros lorem
                ipsum dolore.
              </p>
            </header>
            <div className="row">
              <section className="col-6 col-12-narrower">
                <form method="post" action="#">
                  <div className="row gtr-50">
                    <div className="col-6 col-12-mobile">
                      <input name="name" placeholder="Name" type="text" />
                    </div>
                    <div className="col-6 col-12-mobile">
                      <input name="email" placeholder="Email" type="text" />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <ul className="actions">
                        <li>
                          <input type="submit" defaultValue="Send Message" />
                        </li>
                        <li>
                          <input type="reset" defaultValue="Clear form" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </section>
              <section className="col-6 col-12-narrower">
                <div className="row gtr-0">
                  <ul className="divided icons col-6 col-12-mobile">
                    <li className="icon brands fa-twitter">
                      <a href="#">
                        <span className="extra">twitter.com/</span>untitled
                      </a>
                    </li>
                    <li className="icon brands fa-facebook-f">
                      <a href="#">
                        <span className="extra">facebook.com/</span>untitled
                      </a>
                    </li>
                    <li className="icon brands fa-dribbble">
                      <a href="#">
                        <span className="extra">dribbble.com/</span>untitled
                      </a>
                    </li>
                  </ul>
                  <ul className="divided icons col-6 col-12-mobile">
                    <li className="icon brands fa-instagram">
                      <a href="#">
                        <span className="extra">instagram.com/</span>untitled
                      </a>
                    </li>
                    <li className="icon brands fa-youtube">
                      <a href="#">
                        <span className="extra">youtube.com/</span>untitled
                      </a>
                    </li>
                    <li className="icon brands fa-pinterest">
                      <a href="#">
                        <span className="extra">pinterest.com/</span>untitled
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div id="copyright" className="container">
            <ul className="menu">
              <li>© Untitled. All rights reserved.</li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Scripts */}
    </>
  );
}
