import React from 'react';
import { Slider } from "@material-ui/core";
import './DonateSlider.scss';
import beer from '../../assets/images/beer.png';
import beers from '../../assets/images/beers.png';
import bottles from '../../assets/images/bottles.png';

const marks = [
  {
    value: 0,
    label: "2.50"
  },
  {
    value: 50,
    label: "5"
  },
  {
    value: 100,
    label: "10"
  },
];

const DonateSlider = () => {
  return (
    <div className="slider__wrapper">
      <div className="slider__img-wrapper">
        <img src={beer} alt="beer" className="slider__image"/>
        <img src={beers} alt="beers" className="slider__image"/>
        <img src={bottles} alt="bottles" className="slider__image"/>
      </div>
      <Slider
        defaultValue={50}
        aria-labelledby="discrete-slider-custom"
        step={50}
        root={styles.root}
        marks={marks}
      />
    </div>
  );
};

const styles = {
  root: {
    color: "#1A73E8",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
}

export default DonateSlider;