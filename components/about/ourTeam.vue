<template>
  <div>
    <section id="our-team">
      <div class="container py-5">
        <h3 class="text-center">
          Our Team
        </h3>
        <hr class="blue-hr">
        <p class="text-center">
          We are a team of experienced business professionals and engineers
        </p>
        <div class="row py-lg-3 py-md-3 py-sm-0 py-0 cards">
          <div class="col-lg-3 col-md-3 col-sm-4 col-12 image-card pl-3">
            <b-card
              no-body
              style="border-radius:8px"
              img-src="/mr-david.jpg"
              class="team-member m-0"
              img-alt="Image"
              img-top></b-card>
            <b-card class="my-3 footer">
              <b-card-footer class="card-footer text-center">
                David Inyangetoh <br>
                <span style="color: #8994A5;"> CEO </span>
              </b-card-footer>
            </b-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-4 col-12 image-card pl-3">
            <b-card
              no-body
              style="border-radius:8px"
              img-src="/mr-david.jpg"
              class="team-member"
              img-alt="Image"
              img-top
            />
            <b-card class="my-3 footer">
              <b-card-footer class="card-footer text-center">
                Hanson Johnson <br>
                <span style="color: #8994A5;"> Director </span>
              </b-card-footer>
            </b-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-4 col-12 image-card pl-3">
            <b-card
              no-body
              style="border-radius:8px"
              img-src="/mr-david.jpg"
              class="team-member"
              img-alt="Image"
              img-top
            />
            <b-card class="my-3 footer">
              <b-card-footer class="card-footer text-center">
                Nsikak Thompson <br>
                <span style="color: #8994A5;"> Member </span>
              </b-card-footer>
            </b-card>
          </div>
        </div>

        <div class="row py-lg-3 py-md-3 py-sm-0 py-0 cards">
          <div class="col-lg-3 col-md-3 col-sm-4 col-12 image-card pl-3">
            <b-card
              no-body
              style=" border-radius:8px"
              img-src="/mr-david.jpg"
              class="team-member"
              img-alt="Image"
              img-top
            />
            <b-card class="my-3 footer">
              <b-card-footer class="card-footer text-center">
                Sam Esidem<br>
                <span style="color: #8994A5;"> Member </span>
              </b-card-footer>
            </b-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-4 col-12 image-card pl-3">
            <b-card
              no-body
              style="border-radius:8px"
              img-src="/mr-david.jpg"
              class="team-member"
              img-alt="Image"
              img-top></b-card>
            <b-card class="my-3 footer">
              <b-card-footer class="card-footer text-center">
                Edidiong Asikpo<br>
                <span style="color: #8994A5;"> Member </span>
              </b-card-footer>
            </b-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-4 col-12 image-card pl-3">
            <b-card
              no-body
              style="border-radius:8px"
              img-src="/mr-david.jpg"
              class="team-member"
              img-alt="Image"
              img-top></b-card>
            <b-card class="my-3 footer">
              <b-card-footer class="card-footer text-center">
                Aniefon Umanah <br>
                <span style="color: #8994A5;"> Member </span>
              </b-card-footer>
            </b-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#our-team {
  background-color: #f4f5f8;
}
.card-body {
  padding: 0;
}
.card-footer {
  border-top: none !important;
}
h3 {
  font-family: 'Circularbold';
  color: #00255e;
}
p {
  color: #00255e;
}
.card-footer {
  font-size: 13px;
  padding: 0.4rem 1.25rem;
  color: #00255e;
  font-family: 'Circularmedium';
}
.footer {
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 20px rgba(20, 52, 101, 0.25);
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 700px) {
  .image-card {
    padding-left: 45px;
  }
}
</style>
