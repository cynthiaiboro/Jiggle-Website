<template>
  <div class="container mt-md-5 mb-3">
    <h3 class="text-center get-started" style="font-weight: 500; color:#2D3448;">
        Frequently Asked Questions
    </h3>
    <hr class="blue-hr" />
      <p class="text-center pb-4"> Need some help with some questions you need answered? Check below <br>
       If you still can't find an answer to your question, please give us a call on +234-000-0000-000
       or send an email to support@jiggle.ng.</p>
    <div role="tablist">
      <div class="row my-4">
        <div class="col-md-6 mb-5">
        <h5>General </h5>
          <b-card v-for="(gen, key) in general" :key="key" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="gen.accordion" variant="link" class="question">Q. {{ gen.question }}
                <i class="fa fa-chevron-down" aria-hidden="true" style="float: right; font-size:12px;"></i>
              </b-button>
            </b-card-header>
            <b-collapse :id="gen.accordion" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer" v-html="gen.answer"></b-card-text>
                </b-card-body>
            </b-collapse>
          </b-card>  
        </div>

        <div class="col-md-6 mb-5">
        <h5>Sign Up / Login </h5>
          <b-card v-for="(log, key) in login" :key="key" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="log.accordion" variant="link" class="question">Q. {{ log.question }}
                <i class="fa fa-chevron-down" aria-hidden="true" style="float: right; font-size:12px;"></i>
              </b-button>
            </b-card-header>
            <b-collapse :id="log.accordion" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer" v-html="log.answer"></b-card-text>
                </b-card-body>
            </b-collapse>
          </b-card>  
        </div>

        <div class="col-md-6 mb-5">
        <h5>Security </h5>
          <b-card v-for="(sec, key) in security" :key="key" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="sec.accordion" variant="link" class="question">Q. {{ sec.question }}
                <i class="fa fa-chevron-down" aria-hidden="true" style="float: right; font-size:12px;"></i>
              </b-button>
            </b-card-header>
            <b-collapse :id="sec.accordion" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer" v-html="sec.answer"></b-card-text>
                </b-card-body>
            </b-collapse>
          </b-card>  
        </div>

        <div class="col-md-6 mb-5">
        <h5>Funding / Payments </h5>
          <b-card v-for="(fund, key) in funding" :key="key" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="fund.accordion" variant="link" class="question">Q. {{ fund.question }}
                <i class="fa fa-chevron-down" aria-hidden="true" style="float: right; font-size:12px;"></i>
              </b-button>
            </b-card-header>
            <b-collapse :id="fund.accordion" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer" v-html="fund.answer"></b-card-text>
                </b-card-body>
            </b-collapse>
          </b-card>  
        </div>

        <div class="col-md-6 mb-5">
        <h5>Meal Plan </h5>
          <b-card v-for="(plan, key) in plans" :key="key" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="plan.accordion" variant="link" class="question">Q. {{ plan.question }}
                <i class="fa fa-chevron-down" aria-hidden="true" style="float: right; font-size:12px;"></i>
              </b-button>
            </b-card-header>
            <b-collapse :id="plan.accordion" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer" v-html="plan.answer"></b-card-text>
                </b-card-body>
            </b-collapse>
          </b-card>  
        </div>

        <div class="col-md-6 mb-5">
        <h5>Vendors </h5>
          <b-card v-for="(ven, key) in vendors" :key="key" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="ven.accordion" variant="link" class="question">Q. {{ ven.question }}
                <i class="fa fa-chevron-down" aria-hidden="true" style="float: right; font-size:12px;"></i>
              </b-button>
            </b-card-header>
            <b-collapse :id="ven.accordion" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="answer" v-html="ven.answer"></b-card-text>
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
    data(){
        return {
            general: [
                {
                    question: 'What services does Jiggle offer its users?',
                    answer: 'Jiggle helps you budget for your meals. Make payment easily just from your jiggle wallet.',
                    accordion: 'accordion-1'
                },
                {
                    question: 'Where can I use Jiggle app?',
                    answer: 'You can order your meals and pay with Jiggle App at any Jiggle enabled outlet.',
                    accordion: 'accordion-2'
                }
            ],
             login: [
                {
                    question: 'How can I register?',
                    answer: 'You can download the Jiggle App from google play-store and  sign up with just your email and password. '+
                    'Next, you create a meal plan and fund your plan wallet. Now you can order and pay seamlessly for your meals at any jiggle enabled restaurant.',
                    accordion: 'accordion-3'
                },
                {
                    question: 'I am unable to login into my jiggle wallet. What should I do?',
                    answer: 'Please ensure you have internet connection and have inputed your login details correctly. ' +
                    'If you have forgotten your password, try resetting your password by clicking on Forgot Password.',
                    accordion: 'accordion-4'
                }
            ],
             security: [
                {
                    question: 'What happens if I lose my smartphone?',
                    answer: 'We safeguard your wallet with a 4-digit PIN so only you can make transaction. If your mobile device is ever lost or stolen, you can change your access pin in your new device.',
                    accordion: 'accordion-5'
                },
                {
                    question: 'Is my banking information safe with Jiggle?',
                    answer: 'Users’ privacy and security is of utmost importance, and we are committed to protecting your personal and financial information. We use the latest innovative '+
                    'technology in IT security and your bank details are protected and stored securely.',
                    accordion: 'accordion-6'
                },
                {
                    question: 'Can I use multiple devices for my jiggle account?',
                    answer: 'Yes, you can. However, ensure to never give out your pin or password.',
                    accordion: 'accordion-7'
                }

            ],
            funding: [
                {
                    question: 'How can I fund my Jiggle wallet?',
                    answer: 'Just click on ‘FUND WALLET’ button whenever you are ready to top up your wallet. Select a funding option (the plan you intend  to fund) and you can start making payment for your meals immediately.',
                    accordion: 'accordion-8'
                },
                {
                    question: 'How do I make payment with Jiggle?',
                    answer: 'Click  on  the ‘Scan & Pay’ button on your wallet page to scan vendor’s QR code and click on ‘Pay’ to make payment.',
                    accordion: 'accordion-9'
                },
                {
                    question: 'Can I fund another Jiggle wallet?',
                    answer: 'Yes, you can just by inputing the users\' account details. ' +
                    'If that user’s wallet would be funded frequently you can add such user as a beneficiary.',
                    accordion: 'accordion-10'
                }
            ],
            plans: [
                {
                    question: 'What are the different types of meal plan that Jiggle provides?',
                    answer: 'Jiggle provides three types of plan: <br/>' +
                    '<b>Base plan - </b> For ‎₦12,600 you get to eat twice a day for ‎₦200 a meal. This plan limits your daily use and prevents you from exceeding it.<br/>' +
                    '<b>Lite plan - </b> For ‎₦20,000 you get to eat thrice a day for ‎₦300 a meal. This plan you avoid overspending so you can effortlessly stick to your budget.<br/>'+
                    '<b>Flex plan - </b> A flexible plan allows for more adjustability which means there’s no limiting you.',
                    accordion: 'accordion-11'
                },
                {
                    question: 'Can I have a fixed plan and a flexible plan at the same time?',
                    answer: 'Yes, you can.',
                    accordion: 'accordion-12'
                },
                {
                    question: 'Can I transfer my funds in a plan to another plan?',
                    answer: 'Yes, funds can be transferred from a flex plan to a base or lite plan but not vice-versa.',
                    accordion: 'accordion-13'
                }
            ],
             vendors: [
                {
                    question: 'What services does Jiggle offer vendors?',
                    answer: 'As a Jiggle vendor, you gain more customers. <br/> Also, you can track and monitor all Jiggle transactions from your convenience with the Jiggle Vendor App.',
                    accordion: 'accordion-14'
                },
                {
                    question: 'How can I become a Jiggle vendor?',
                    answer: 'Follow these simple steps: <br/> - Visit www.jiggle.ng. <br/>' +
                    '- Click on ‘Become a vendor’. <br/>- Fill in your business and personal details on the form. <br/>' +
                    '- Download Jiggle vendor app from playstore. <br/>' +
                    '- Sign in and start receiving payment.' ,
                    accordion: 'accordion-15'
                },
                {
                    question: 'How do I track my payments and bank transfers?',
                    answer: 'For tracking your payments or bank transfers on the Jiggle vendor app, follow the steps below: <br/>' +
                    '<b>For payments received:</b> <br/> - Tap on the Menu icon >> My wallet >> Transactions. <br/>' +
                    '- All paid payments will appear with the date and receiver’s number. '+
                    '<b>For Bank transfers:</b> <br/> Tap on the Menu icon >> My wallet >> Payout. <br/>'+
                    '- All received payments will appear with date and time of each transaction.',
                    accordion: 'accordion-16'
                },
            ]
        }
    }

}
</script>

<style scoped>
.rotate{
    -moz-transition: all 2s linear;
    -webkit-transition: all 2s linear;
    transition: all 2s linear;
}

.rotate.down{
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
.btn-info {
    color: #2f6deb;
    background-color: #f5f3f3;
    border-color: #f5f3f3;
    font-family: 'Circularbook';
}
p {
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
  font-family: 'Circularbook';
}
.card-body {
    background: #f5f3f3;
}
h5 {
    color: #2d3448;
    font-family: 'Circularmedium';
}
.question {
  font-family: 'Circularbook';
}
.question:hover, :active {
    text-decoration: none;
}
@media only screen and (max-width: 700px) {
  h3 {
    padding-top: 28px !important;
  }
}
</style>
