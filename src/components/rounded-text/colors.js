import { getRandomNumber } from '../../services/math'

const colors = [
  {color: '#FABF44'},
  {color: '#62B18C'},
  {color: '#75C3E9'},
  {color: '#AB4CC1'},
  {color: '#694C9E'},
]

export const getRandomColor = () => {
  const imageIndex = getRandomNumber(0, colors.length - 1);
  return colors[imageIndex].color;
};
