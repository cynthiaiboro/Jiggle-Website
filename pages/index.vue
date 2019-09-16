<template>
  <div>
    <indexHeader />
    <stickyNav v-if="enableStickyNav" />
    <ourServices />
    <getStarted />
    <becomeAVendor />
    <whyUseJiggle />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import indexHeader from '../components/index/header'
import stickyNav from '../components/index/stickyNav'
import getStarted from '../components/index/getStarted'
import becomeAVendor from '../components/index/becomeAVendor'
import ourServices from '../components/index/ourServices'
import whyUseJiggle from '../components/index/whyUseJiggle'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'
export default {
  components: {
    indexHeader,
    stickyNav,
    getStarted,
    becomeAVendor,
    ourServices,
    whyUseJiggle,
    trustedBrands,
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
  var preChatTemplate = {
    //Form header color and Submit button color.
    mainbgColor: '#2f6deb',
    //Form Header Text and Submit button text color.
    maintxColor: '#fff',
    //Chat Form Title
    heading: 'Jiggle',
    //Chat form Welcome Message
    textBanner: 'We can\'t wait to talk to you. But first, please take a couple of moments to tell us a bit about yourself.',
    //Submit Button Label.
    SubmitLabel: 'Start Chat',
    //Fields List - Maximum is 5
    //All the values are mandatory and the script will not work if not available.
    fields : {
      // field1 : {
      //   //Type can be either text or title
      //   type: "title",
      //   //Label for Field Title, can be in any language
      //   label: "Title",
      //   //Field ID for Title
      //   fieldId: "title",
      //   //Required "yes" or "no"
      //   required: "yes",
      //   //Error text to be displayed
      //   error: "Please Enter a valid Title"
      // },
      field1 : {
        //Type for Name - Do not Change
        type: "name",
        //Label for Field Name, can be in any language
        label: "Fullname",
        //Default - Field ID for Name - Do Not Change
        fieldId: "name",
        //Required "yes" or "no"
        required: "yes",
        //Error text to be displayed
        error: "Please Enter a valid name"
      },
      field2 : {
        //Type for Email - Do Not Change
        type: "email",
        //Label for Field Email, can be in any language
        label: "Email",
        //Default - Field ID for Email - Do Not Change
        fieldId: "email",
        //Required "yes" or "no"
        required: "yes",
        //Error text to be displayed
        error: "Please Enter a valid Email"
      },
      field3 : {
        //Type for Phone - Do Not Change
        type: "phone",
        //Label for Field Phone, can be in any language
        label: "Phone",
        //Default - Field ID for Phone - Do Not Change
        fieldId: "phone",
        //Required "yes" or "no"
        required: "yes",
        //Error text to be displayed
        error: "Please Enter a valid Phone Number"
      },
      // field5 : {
      //   //Type for Dropdown
      //   type: "dropdown",
      //   //Label for Field Dropdown, can be in any language
      //   label: "Plan",
      //   //Field ID for Plan Dropdown
      //   fieldId: "plan",
      //   //Required "yes" or "no"
      //   required: "yes",
      //   //Error text to be displayed
      //   error: "Please select an option",
      //   //Options for the Dropdown field
      //   options: ['Sprout','Blossom','Garden','Estate','Forest']
      // }
    }
  };
  window.fcSettings = {
    token: "3f6ad468-e86f-4df6-902c-8c75a5a7e280",
    host: "https://wchat.freshchat.com",
    config: {
      cssNames: {
        //The below element is mandatory. Please add any custom class or leave the default.
        widget: 'custom_fc_frame',
        //The below element is mandatory. Please add any custom class or leave the default.
        expanded: 'custom_fc_expanded'
      }
    },
    onInit: function() {
      console.log('widget init');
      fcPreChatform.fcWidgetInit(preChatTemplate);
    }
  };
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
</style>
