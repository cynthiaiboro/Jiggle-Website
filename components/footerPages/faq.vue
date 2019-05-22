<template>
  <div class="container mb-3">
    <h3 class="text-center get-started" style="font-weight: 500; color:#2D3448;">
        Frequently Asked Questions
    </h3>
    <hr class="blue-hr" />
      <p class="text-center"> Need some help with some questions you need answered? Check below <br>
       If you still can't find an answer to your question, please give us a call on +234-000-0000-000
       or send an email to support@jiggle.ng.</p>
    <div role="tablist">
      <div class="row my-4">
        <div class="col-md-6">
        <h5>General </h5>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer">I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-2 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-3 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>
        
        <div class="col-md-6">
        <h5>Payments </h5>
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-4 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>I start opened because</b-card-text>
            </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-5 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-6 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>
      </div>

        

        <div class="row mb-5">
        <div class="col-md-6">
        <h5>Plans </h5>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-7 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer">I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-8 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-9 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>
        
        <div class="col-md-6">
        <h5>Vendors </h5>
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-10 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>I start opened because</b-card-text>
            </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-11 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-12 variant="link" class="question">Q. What is Jiggle about?</b-button>
            </b-card-header>
            <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>
      </div>

        

        
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
  font-family: 'Circularbook';
  src: url('../../assets/fonts/Regular.ttf');
}
@font-face {
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/Medium.ttf');
}
.btn-info {
    color: #2f6deb;
    background-color: #f5f3f3;
    border-color: #f5f3f3;
    font-family: 'Circularbook';
}
.btn {
    text-align: left !important;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;
}
.answer {
  color:#2d3448; 
}
.card-body {
    background: #f5f3f3;
}
h4 {
    color: #2d3448;
}
.question:hover, :active {
    text-decoration: none;
}
</style>
