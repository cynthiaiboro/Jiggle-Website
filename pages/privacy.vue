<template>
  <div>
    <Nav />
    <stickyNav v-if="enableStickyNav" />
    <section id="about-us-nav">
      <div class="container about-us py-md-5 mt-md-5">
        <h4 class="text-center best-solution pt-md-5">
          Privacy Policy
        </h4>
        <hr class="blue-hr">
      </div>
      <div class="privacy-text">
            <h5>Jiggle Privacy Statement</h5>

<p>By using our Site, Service, or providing us with your personal information, you agree to this Privacy Statement and agree to be bound and abide by our Terms of Service found here If you do not agree with any term in this Privacy Statement, please do not provide us with your personal information or use the Site.
“Personal information” is information that identifies you and is associated with a specific person. Personal information does not include information that is anonymous, aggregated, or is no longer identifiable to a specific person.</p>
<!-- Information we collect part  -->
<h5>Information we collect </h5>
<p>We may collect the following categories of personal information about you through the Site and Service, including but not limited to:
<ul>
    <li>Registration information: When you register for our Service, you will be asked for basic registration information, such as your name, phone number, email address and password.</li>
    <li>Payment account information: For our Payment Services, you will be required to provide your debit card number, expiration date, bank account number, bank verification number, and card verification value.</li> 
    <li>Other information: We may request or receive other personal information such as feedback, questions, comments, suggestions, or ideas to provide you with other benefits or to improve upon the Service.
         In such instances, you will be given the opportunity to provide or decline that information.</li>
</ul>
</p>
<h5>How we use the information we collect</h5>
<p>We use your personal information to:
<ul>
    <li>Fulfill your requests for certain products and Services;</li>
    <li>Respond to your inquiries about our Services;</li>
    <li>Analyze Site usage and improve the Services provided through the Sites;</li>
    <li>Alert you to software compatibility issues and to improve our web design and functionality;</li>
    <li>Deliver to you any administrative notices or alerts and communications relevant to your use of the Services;</li>
    <li>Offer you other products, programs, or services that we believe may be of interest to you;</li>
    <li>Perform market research, project planning, product development, troubleshooting problems, analysis of user behavior, marketing and promotions;</li>
    <li>Detect and protect against errors, fraud, or other criminal activity;</li>
    <li>Enforce our Terms of Service and as otherwise set forth in this Privacy Statement; and in connection with a
         merger or sale of substantially all of our assets, or a corporate reorganization.</li>
</ul>
We may use your Device ID for security purposes. For example, we may use Device IDs to monitor suspicious
activity. For example, if we detect that a single account on a Site is being accessed from multiple devices,
 as determined by tracking the Device IDs that access an account, we may contact the user to ensure that such
  access has been authorized by the user.</p>

<h5>How we disclose personal information</h5>
<p>
We will not, without your permission, sell, publish, or share your personal information to third parties for their marketing purposes.
Jiggle may share your personal information with its affiliates and subsidiaries, to provide joint content, products, services, and for everyday business purposes. Our affiliates and subsidiaries will send you marketing communications only if you have requested their services.
In connection with our  Payment Service, we may share some of your personal information with third parties you are attempting to pay in order to process the transaction you have requested.
We may share your personal information with third-party service providers to enable them to assist in fulfilling the requests you make or the transactions you conduct via the Sites, including the operation of certain Site functions and Services. Third parties acting on our behalf that are given access to your personal information are contractually obligated to abide by our privacy practices and are not allowed to use the information for any other purposes.
<br><br>We reserve the right, in our sole discretion, to share or disclose your personal information with law enforcement, government officials, and other third parties:
<ul>
    <li>to respond to subpoenas, court orders, or legal process;in order to</li>
    <li>investigate, prevent, defend against, or take other action regarding violations of our Terms of Service, illegal activities, suspected fraud, or situations involving potential threats to the legal rights or physical safety of any person or the security of our network, Sites or Services;</li>
    <li>respond to claims that any posting or other content violates the rights of third parties;</li>
    <li>in an emergency, to protect the health and safety of our Sites' users or the general public; or</li>
    <li>as otherwise required by any applicable law.</li>
</ul>
We may share your personal information with other third parties with your consent or instructions to do so.<br>
We may share or make available anonymous or aggregate information that cannot be used to identify you with:
<ul>
    <li>third parties for their research, marketing, and promotional purposes and those third parties may publicly report the findings of their research or analysis;</li>
    <li>organizations that conduct research into consumer spending; and</li>
    <li>users of the Service for purposes of comparison of their personal financial situation relative to the broader community.</li>
</ul>
If our company or our assets are acquired by another company, or in the event of a merger, consolidation, change in control, transfer of substantial assets, reorganization, or liquidation, we may transfer, sell, or assign to third parties, information concerning your relationship with us, including, without limitation, personal information that you provide and other information concerning your relationship with us. Such third parties will assume responsibility for the personal information collected by us in connection with our business operations or through our Sites and Services and such third parties will assume the rights and obligations regarding such information as described in this Privacy Statement.
</p>
<h5>How we protect the information we collect</h5>
<p>
We take the security of your information seriously. We use technical and administrative security measures such as but not limited to firewalls, encryption techniques, and authentication procedures, among others, to maintain the security of your online session.
<h5>Changes to your personal information</h5>
<p>
You may access, review, and update much of the information you have submitted to us at any time via the Site or Service.
You may choose to close or request that we delete your account for the Service at any time. We will use commercially reasonable efforts to remove your information, although some information may be retained. For example, some information may be retained on a backup server or media, which is necessary to help ensure the continued availability of our Service.
We retain your personal information as long as necessary to provide the services you have requested. Additionally, we may retain personal information to comply with the law, prevent fraud, resolve disputes, troubleshoot problems, enforce our Terms of Use, and as permitted by applicable law.</p>
<h5>Changes to this Privacy Statement</h5>
<p class="mb-5">We may update this Privacy Statement periodically. Changes are effective immediately upon posting.
        </p>
    </div>
    </section>
<Footer />
  </div>
</template>

<script>
import Nav from '../layouts/Nav'
import stickyNav from '../components/index/stickyNav'
import Footer from '../layouts/footer'
export default {
     components: {
    Nav,
    stickyNav,
    Footer
  },
data() {
    return {
      enableStickyNav: null
    }
  },
  mounted() {
    // console.log('Index page created')
    // console.log('Sticky Nav mounted')
    window.addEventListener('scroll', this.handleNavDisplay)
  },
  // created() {},
  destroyed() {
    window.addEventListener('scroll', this.handleNavDisplay)
  },
  methods: {
    handleNavDisplay() {
      var y = window.scrollY
      if (y > 100 && !this.enableStickyNav) {
        // console.log ('Display New Menu')
        this.enableStickyNav = true
      } else if (y < 100 && this.enableStickyNav) {
        // console.log('Hide sticky Nav')
        this.enableStickyNav = false
      }
    }
  }
}
</script>

<style scoped>
.blue-hr {
  width: 100px;
  height: 2px;
  background-color: #2f6deb;
}
#about-us-nav {
  background-color:  #ffffff;
}
.about-us {
  padding-top: 100px;
}
p {
  color: #00255E;
  font-family: 'Circularbook';
  padding: 5px 40px;
  font-size: 20px !
}
.best-solution {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Circularheavy';
  color: #00255E;
  font-size: 45px;
}
h5 {
    font-family: 'Circularbold';
   color: #00255E;
   padding: 5px 40px;
}
@media only screen and (max-width: 700px) {
  .get-started {
    font-size: 1.3rem !important;
  }
  .hidden-text {
    display: none !important;
  }
  .about-us {
  padding-top: 50px;
  padding-bottom: 20px;
}
  .best-solution {
    font-size: 25px !important;
  }
  #about-us-nav {
 padding: 0px 13px !important;
}

}
</style>
