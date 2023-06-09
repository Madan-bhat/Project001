import {BorderRadiusType, BorderRadius} from './constants';

function BorderTopRadius(value: BorderRadiusType) {
  return {
    borderTopLeftRadius: BorderRadius[value],
    borderTopRightRadius: BorderRadius[value],
  };
}

function BorderBottomRadius(value: BorderRadiusType) {
  return {
    borderBottomRightRadius: BorderRadius[value],
    borderBottomLeftRadius: BorderRadius[value],
  };
}

export {BorderTopRadius, BorderBottomRadius};
