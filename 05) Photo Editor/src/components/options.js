import React from 'react';
import {
  MdBrightnessLow,
  MdBrightness2,
  MdBlurCircular,
  MdColorLens,
} from 'react-icons/md';
import {
  RiContrastFill,
  RiContrastDrop2Fill,
  RiTempColdLine,
  RiGalleryFill,
} from 'react-icons/ri';

export const DEFAULT_OPTIONS = [
  {
    name: <MdBrightnessLow />,
    property: 'brightness',
    value: 100,
    range: { min: 0, max: 200 },
    unit: '%',
  },

  {
    name: <MdBrightness2 />,
    property: 'contrast',
    value: 100,
    range: { min: 0, max: 200 },
    unit: '%',
  },

  {
    name: <RiTempColdLine />,
    property: 'saturate',
    value: 100,
    range: { min: 0, max: 200 },
    unit: '%',
  },

  {
    name: <RiContrastFill />,
    property: 'grayscale',
    value: 0,
    range: { min: 0, max: 100 },
    unit: '%',
  },

  {
    name: <RiContrastDrop2Fill />,
    property: 'invert',
    value: 0,
    range: { min: 0, max: 100 },
    unit: '%',
  },

  {
    name: <RiGalleryFill />,
    property: 'sepia',
    value: 0,
    range: { min: 0, max: 100 },
    unit: '%',
  },

  {
    name: <MdColorLens />,
    property: 'hue-rotate',
    value: 0,
    range: { min: 0, max: 360 },
    unit: 'deg',
  },

  {
    name: <MdBlurCircular />,
    property: 'blur',
    value: 0,
    range: { min: 0, max: 10 },
    unit: 'px',
  },
];
