<script setup>

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="left">
        <button class="menu-btn" aria-label="Open menu">
          <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="18" height="2" rx="1" fill="#0B5AA5"></rect>
            <rect y="5" width="18" height="2" rx="1" fill="#0B5AA5"></rect>
            <rect y="10" width="12" height="2" rx="1" fill="#0B5AA5"></rect>
          </svg>
        </button>

        <a class="brand" href="#" aria-label="Houzeo home">
  <svg
    class="brand-logo"
    width="110"
    height="28"
    viewBox="0 0 110 28"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
 
    <path
      d="M6 12 L14 6 L22 12"
      stroke="#0b66ff"
      stroke-width="2.2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="9"
      y="12"
      width="10"
      height="9"
      rx="1.5"
      stroke="#0b66ff"
      stroke-width="2"
      fill="none"
    />

  
    <text
      x="28"
      y="20"
      fill="#0b66ff"
      font-size="18"
      font-weight="700"
      font-family="Inter, system-ui, -apple-system, sans-serif"
      letter-spacing="-0.4"
    >
      Houzeo
    </text>
  </svg>
</a>

        <button class="profile-btn" aria-label="Profile">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="8" r="3" stroke="#0B5AA5" stroke-width="1.5" fill="none" />
            <path d="M4 20c1.5-3 5-4 8-4s6.5 1 8 4" stroke="#0B5AA5" stroke-width="1.5" fill="none" stroke-linecap="round" />
          </svg>
        </button>

      </div>

   
      <nav class="center" aria-label="Main navigation">
        <ul class="nav-list">
          <li class="has-tooltip"><a href="#">Product <span class="caret">▾</span></a>
            <div class="tooltip">Product: Listings, Tools, Integrations</div>
          </li>
          <li><a href="#">How Houzeo Works</a></li>
          <li><a href="#">Reviews</a></li>
          <li class="has-tooltip"><a href="#">Buy <span class="caret">▾</span></a>
            <div class="tooltip">Buy: Search listings, Agents</div>
          </li>
          <li class="has-tooltip"><a href="#">Sell <span class="caret">▾</span></a>
            <div class="tooltip">Sell: Packages, Pricing</div>
          </li>
          <li><a href="#">Pricing</a></li>
          <li class="has-tooltip"><a href="#">Resources <span class="caret">▾</span></a>
            <div class="tooltip">Resources: Blog, Guides, Help Center</div>
          </li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </nav>


      <div class="contact-box">
        <div class="phone">(844) 448-0110</div>
        <div class="hours">(9am to 6pm CST, Mon-Sat)</div>
      </div>


      <button class="cta">
      <div class="cta-des">Start Free Listing</div>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid rgba(0,0,0,0.2); 
  height: 74px; 
}


.container {
  max-width: 1440px; 
  width: 100%;
  height: 74px;
  margin: 0 auto;
  position: relative;
}

.left { position: absolute; left: 24px; top: 18px }
.brand-mark { height: 38px }

  .menu-btn, .profile-btn { display: none }
.center {
  position: absolute;
  left: 376.85px; 
  top: 28px; 
  width: 654.6412963867188px; 
  height: 21px;
}
.nav-list { display: flex; gap: 18px; list-style: none; margin: 0; padding: 0; align-items: center; height: 21px }
.nav-list a {  font-family: 'Poppins', system-ui, sans-serif ;
font-style: Regular;
font-size: 14px;
leading-trim: NONE;
letter-spacing: 0%;
color: var(--text-dark); text-decoration: none; font-weight: 400; line-height: 100% }


.has-tooltip { position: relative }
.has-tooltip .tooltip {
  position: absolute;
  top: 32px;
  left: 0;
  background: white;
  border-radius: 8px;
  padding: 8px 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  white-space: nowrap;
  font-size: 13px;
  display: none;
}
.has-tooltip:hover .tooltip { display: block }

.contact-box {
  position: absolute;
  left: 1051.52px;
  top: 19px;
  width: 178.1551971435547px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--text-dark);
}


.contact-box .phone {
  width: 109.63396453857422px;
  height: 21px;
  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1; /* 100% */
  letter-spacing: 0%;
}


.contact-box .hours {
  width: 166.155197px;
  height: 18px;
  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  margin-top: 4px;
  color: var(--text-muted);
}

.cta {
  position: absolute;
  left: 1262.82px;
  top: 18px; 
  width: 154.356163px;
  height: 38px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cta:hover { filter: brightness(0.95) }

.cta-des{
  width: 122.35616302490234;
height: 21;
top: 28px;
left: 1277.82px;
font-weight: 500; 
font-family: 'Poppins', system-ui, sans-serif;
font-size: 14px;
 line-height: 1; 

}


@media (max-width: 1000px) {
  .container { width: 100%; padding: 0 16px }
  .center { display: none }
  .contact-box { position: static; margin-left: auto; display: none }
  .cta { position: static; margin-left: 12px; }
}


@media (max-width: 480px) {
  .header { height: 56px }
  .container { height: 56px; padding: 0 12px }
  .left { position: static; display: flex; align-items: center; gap: 108px; padding-top:10px }
  .brand-logo { height: 22px }
  .menu-btn, .profile-btn { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: transparent; border: none; cursor: pointer; padding: 0 }
  .menu-btn svg, .profile-btn svg { display: block }
  .cta { display: none }
}


.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  height: 28px;
  width: auto;
}

</style>

