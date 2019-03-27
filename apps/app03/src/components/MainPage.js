import React from 'react';
import PropTypes from 'prop-types';
import './MainPage.css';

const MainPage = ({name, isCat, isGoodWeather}) => (
  <article>
    <h1>Hi, {name}!</h1>
    <img src={
      isCat ?
        'https://pp.userapi.com/3SleTb1X6q6ychPl1VQ53HBpUZiZxfOeWtmh-A/csmrBwfytjo.jpg?ava=1' :
        'http://www.ilovepugs.co.uk/wp-content/uploads/2018/09/BLACK-PUP-LYING-DOWN-BLANK-CARD--200x200.jpg'
    } width='200' height='200'/>
    {isGoodWeather && <h3>Weather is fine today.</h3>}
  </article>
);

export default MainPage;

MainPage.propTypes = {
  name: PropTypes.string,
  isCat: PropTypes.bool,
  isGoodWeather: PropTypes.bool
};

MainPage.defaultProps = {
  name: 'Good Man'
};