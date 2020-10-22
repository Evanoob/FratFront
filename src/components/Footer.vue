<template>
   <footer id="footer" class="footer-bottom">
      <ul class="links">
        <li class="copy co">&copy;GS</li>
        <li>
          <router-link to="/cgu" class="copy">C.G.U</router-link>
        </li>
        <li>
          <router-link to="/plan" class="copy">Plan</router-link>
        </li>
        <li>
          <router-link to="/contact" class="copy">Contact</router-link>
        </li>
      </ul>

      <div id="sociaux">
        <a href="https://www.facebook.com/lachainefraternelles/" class="reseaux" target="__new">
          <figure id="rs1">
            <img alt="Facebook" src="./../assets/img/reseaux/fb2_30.png" />
          </figure>
        </a>

        <a href="https://www.paypal.me/lachainefraternelles" class="reseaux" target="__new">
          <figure id="rs1">
            <img alt="Paypal" src="./../assets/img/reseaux/paypal2_30.png" />
          </figure>
        </a>

        <a href="https://api.whatsapp.com/send?phone=+33623277075" class="reseaux" target="__new">
          <figure >
            <img alt="WhatsApp" src="./../assets/img/reseaux/whatsapp_30.png" />
          </figure>
        </a>
      </div>
    </footer>
</template>

<script>
</script>

<style>
/* ****************************************FOOTER**************************************** */

#footer {
  height: 50px;
  width: 100%;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
    /* background: #ebc3df; */
}

footer > ul.links {
  /* float: left; */
  margin-top: 10px;
  list-style: none;
}

footer > ul > li {
  display: inline;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 30px;
}

footer > ul > li > a,
footer > ul > li.copy {
  color: white;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.copy.co {
  cursor: default;
}

.copy:hover {
  color: #ec008c;
  /* cursor: default; */
  font-size: 500;
}

#sociaux {
  display: flex;
  float: right;
  margin-top: 10px;
}

#sociaux > #rs1 {
  width: 30px;
  
}

#rs1 {
  margin-right: 10px;
}


@media screen and (max-width: 767px) {
  #footer {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    height: 75px;
    bottom: 0;  
  }

  #footer > ul.links {
    display: flex;
    flex-wrap: nowrap;
     order: 1;
    margin-bottom: 10px;
  }

  /* #footer > ul > li > a,
  #footer > ul > li.copy {
    font-size: 12px;
  } */
}

/* @media screen and (max-width: 451px) {
 footer {
    padding: 0 10px;
 }
} */
/* ****************************************END FOOTER**************************************** */
</style>