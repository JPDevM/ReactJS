const carousel = () => {
  <div id="carousel-Landing" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

    {/* Slide 1 */}
    <div class="carousel-item active">
      <img class="d-block w-100" src="<%= slideData_1.imgUrl %>" alt="First slide" />
      <div class="carousel-caption">
        <h4>
          <%= slideData_1.title %>
        </h4>
        <p>
          <%= slideData_1.subtitle %>
        </p>
      </div>
    </div>

    {/* Slide 2 */}
    <div class="carousel-item">
      <img class="d-block w-100" src="<%= slideData_2.imgUrl %>" alt="Second slide" />
      <div class="carousel-caption">
        <h4>
          <%= slideData_2.title %>
        </h4>
        <p>
          <%= slideData_2.subtitle %>
        </p>

      </div>
    </div>

    {/* Slide 3 */}
    <div class="carousel-item">
      <img class="d-block w-100" src="<%= slideData_3.imgUrl %>" alt="Third slide" />
      <div class="carousel-caption">
        <h4>
          <%= slideData_3.title %>
        </h4>
        <p>
          <%= slideData_3.subtitle %>
        </p>
      </div>
    </div>
  </div>
  <ol class="carousel-indicators">
    <li data-target="#carousel-Landing slide-one" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-Landing slide-two" data-slide-to="1"></li>
    <li data-target="#carousel-Landing slide-three" data-slide-to="2"></li>
  </ol>
  <a class="carousel-control-prev" href="#carousel-Landing" role="button" data-slide="prev">
    <p class="carousel-control-prev-text"> Back </p>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carousel-Landing" role="button" data-slide="next">
    <p class="carousel-control-next-text"> Next </p> <span class="sr-only"></span>
  </a>
</div>

}

export default carousel

{/* Boostrap JavaScript */}
{/* <script src="/js/jquery-3.5.1.min.js"></script>
<script src="/js/bootstrap.min.js"></script>

<script>
  window.addEventListener('load', function () {
    const carousel = document.querySelector('#carousel-Landing');
    // Activate carousel
    carousel.carousel();
  });
</script> */}