import React, { Fragment } from 'react'

export const slide = (props) => {
  { data } = props;
  { imgUrl, title, subtitle } = data;
  return (
    <Fragment>

    <div class="carousel-item active">
      <img class="d-block w-100" src={ imgUrl } alt="Slide" />
      <div class="carousel-caption">
        <h4>
          { title }
        </h4>
        <p>
          { subtitle }
        </p>
      </div>
    </div>
</Fragment>
      )
}
