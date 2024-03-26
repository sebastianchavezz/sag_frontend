<template>
  <div class="about-container">
    <header-not-logged-in></header-not-logged-in>
    <div class="about-banner">
      <h1 class="about-text">Our Mission</h1>
      <div class="about-container1">
        <h2 class="about-text01">Lorem ipsum</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem,
          malesuada in metus vitae, scelerisque accumsan ipsum.
        </span>
      </div>
      <span class="about-text03">
        <span>
          Lorem ipsum dolor sit amet. Vel tempore delectus est totam voluptas ut
          eaque atque aut deserunt odit id galisum inventore. Sed maiores incidunt
          sed perspiciatis amet in aspernatur praesentium ut quia ipsam et quia
          tenetur ex minus repellendus et omnis fuga. Qui nobis animi qui nemo
          voluptatem et quis voluptates est voluptatem itaque qui dolore
          necessitatibus! Sit quaerat quas ab odio consequatur aut minus deserunt
          ut sapiente beatae aut deleniti sunt.
        </span>
        <br />
        <br />
        <span>
          Aut tenetur dignissimos qui eveniet ipsa et suscipit soluta ea minus
          eligendi hic inventore nihil. Qui laudantium impedit ut rerum quia ut
          autem maxime! Et dicta delectus sit natus ducimus et galisum sequi sed
          iure fugiat et voluptas perspiciatis ea necessitatibus necessitatibus.
          Non omnis dolorum vel deleniti doloribus sit galisum iusto qui debitis
          inventore id minima enim ut repellat asperiores ex iusto officia.
        </span>
        <br />
        <br />
        <span>
          Et maiores modi ut inventore obcaecati qui enim corporis non nobis sint
          et natus architecto est dolorum voluptatem sed consequuntur minima. Quo
          quam cupiditate et natus animi vel perspiciatis explicabo est nemo error
          est optio rerum. Hic quod laboriosam non repellendus magni aut sapiente
          explicabo id perspiciatis dolorem a rerum architecto?
        </span>
      </span>
      <div class="about-feature-card">
        <svg viewBox="0 0 1024 1024" class="about-icon">
          <path
            d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
          ></path>
        </svg>
      </div>
      <div class="about-container2">
        <h1 class="about-text11">
          <span>Products </span>
          <br />
        </h1>
      </div>
      <div class="about-gallery">
        <product-card rootClassName="rootClassName"></product-card>
        <product-card
          imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName1"
        ></product-card>
        <product-card
          imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName2"
        ></product-card>
        <product-card
          imageSrc="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName3"
        ></product-card>
        <product-card
          imageSrc="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName4"
        ></product-card>
        <product-card
          imageSrc="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName5"
        ></product-card>
      </div>
      <div class="about-stats">
        <div class="about-stat">
          <h1 class="about-text14">
            <span>50</span>
            <span>+</span>
          </h1>
          <span class="about-text17">Happy clients</span>
          <span class="about-text18">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div class="about-stat1">
          <h1 class="about-text19"><span>369</span></h1>
          <span class="about-text21">Projects completed</span>
          <span class="about-text22">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div class="about-stat2">
          <h1 class="about-text23">
            <span>500</span>
            <span>+</span>
          </h1>
          <span class="about-text26">Hours</span>
          <span class="about-text27">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div class="about-stat3">
          <h1 class="about-text28"><span>24/7</span></h1>
          <span class="about-text30">Support</span>
          <span class="about-text31">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
    </div>
    <div class="about-banner1">
      <span class="about-text32">
        <span class="about-text33">Lorem ipsum dolor sit amet</span>
      </span>
      <h1 class="about-text34">Learn to keep it simple</h1>
      <span class="about-text35">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis.
            <span v-html="rawc8xw"></span>
          </span>
          <span><span v-html="rawa596"></span></span>
        </span>
        <span>
          <span>
            Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
            <span v-html="raw0f75"></span>
          </span>
          <span><span v-html="rawkaoy"></span></span>
        </span>
      </span>
      <div class="about-container3">
        <input
          type="text"
          placeholder="Email here..."
          class="about-textinput input"
        />
        <button class="about-button button">Subscribe</button>
      </div>
    </div>
    <div class="about-container4">
      <footer class="about-footer">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          class="about-image"
        />
        <span class="about-text42">© 2021 teleportHQ, All Rights Reserved.</span>
        <div class="about-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" class="about-icon2">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="about-icon4">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg viewBox="0 0 602.2582857142856 1024" class="about-icon6">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderNotLoggedIn from '../components/header-not-logged-in'
import ProductCard from '../components/product-card'

export default {
  name: 'About',
  props: {},
  components: {
    HeaderNotLoggedIn,
    ProductCard,
  },
  data() {
    return {
      rawc8xw: ' ',
      rawa596: ' ',
      raw0f75: ' ',
      rawkaoy: ' ',
    }
  },
  metaInfo: {
    title: 'Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.about-banner {
  width: 1200px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: center;
  flex-direction: column;
  padding-bottom: 48px;
  justify-content: space-between;
}
.about-text {
  font-size: 3rem;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.about-container1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.about-text01 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.about-text03 {
  color: var(--dl-color-gray-black);
  font-family: "Fira Sans";
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-twounits);
}
.about-feature-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.about-icon {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  margin-right: var(--dl-space-space-oneandhalfunits);
}
.about-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.about-text11 {
  width: 100%;
  align-self: center;
  text-align: center;
}
.about-gallery {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  grid-template-columns: 1fr 1fr 1fr;
}
.about-stats {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.about-stat {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.about-text14 {
  color: #FF7C4C;
  font-size: 3rem;
}
.about-text17 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-text18 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-stat1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.about-text19 {
  color: #FF7C4C;
  font-size: 3rem;
}
.about-text21 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-text22 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-stat2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.about-text23 {
  color: #FF7C4C;
  font-size: 3rem;
}
.about-text26 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-text27 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-stat3 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.about-text28 {
  color: #FF7C4C;
  font-size: 3rem;
}
.about-text30 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-text31 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.about-banner1 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  background-size: cover;
  justify-content: space-between;
  background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
  background-position: center;
}
.about-text32 {
  font-size: 0.75rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-twounits);
  letter-spacing: 2px;
}
.about-text33 {
  text-transform: uppercase;
}
.about-text34 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.about-text35 {
  max-width: var(--dl-size-size-maxwidth);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.about-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.about-textinput {
  font-size: 0.75rem;
  border-color: var(--dl-color-gray-500);
}
.about-button {
  color: var(--dl-color-gray-white);
  font-size: 0.75rem;
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-black);
}
.about-button:hover {
  color: var(--dl-color-gray-black);
  background-color: transparent;
}
.about-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-footer {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.about-image {
  height: 2rem;
  object-fit: cover;
}
.about-icon-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.about-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.about-icon4 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.about-icon6 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 1600px) {
  .about-gallery {
    margin: var(--dl-space-space-oneandhalfunits);
  }
  .about-container4 {
    height: var(--dl-size-size-xlarge);
  }
}
@media(max-width: 1200px) {
  .about-text {
    font-size: 3rem;
  }
  .about-text03 {
    box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
  }
}
@media(max-width: 991px) {
  .about-gallery {
    grid-template-columns: 1fr 1fr;
  }
  .about-text14 {
    text-align: center;
  }
  .about-text19 {
    text-align: center;
  }
  .about-text23 {
    text-align: center;
  }
  .about-text28 {
    text-align: center;
  }
  .about-text35 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .about-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .about-container1 {
    flex-direction: column;
  }
  .about-feature-card {
    flex-direction: row;
  }
  .about-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .about-stats {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr;
  }
  .about-text17 {
    text-align: center;
  }
  .about-text21 {
    text-align: center;
  }
  .about-text26 {
    text-align: center;
  }
  .about-text30 {
    text-align: center;
  }
  .about-banner1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .about-text35 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .about-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .about-text42 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .about-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .about-container1 {
    flex-direction: column;
  }
  .about-gallery {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .about-stats {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
    grid-template-columns: 1fr;
  }
  .about-banner1 {
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .about-container3 {
    align-items: center;
    flex-direction: column;
  }
  .about-button {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .about-footer {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .about-image {
    margin-bottom: var(--dl-space-space-unit);
  }
  .about-text42 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
