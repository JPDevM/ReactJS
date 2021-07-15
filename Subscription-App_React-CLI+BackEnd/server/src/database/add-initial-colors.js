const mainColors = [
'#ee3f43', '#e33c6c', '#e33b99', '#f045c3', '#f048ef', '#c247ee', '#9646ee', '#6a46ee', '#3f46ed', '#3f6eee', '#4299ef', '#45c5ef', '#38e0e0', '#38deb2', '#38de87', '#52d471', '#55d656', '#75d757', '#94d757', '#aaca4d', '#cdcb2b', '#fbbc2d', '#e97721', '#e24923', '#000000', '#666666', '#999999', '#cccbcc', ];

const lightColors = [ ];
const darkColors = [ ];


// colorshexa
initialColors.forEach(function (oneColor, indice, array) {
  var oneColorArray = initialColors[indice];
  // initialColors.shift();
  
  initialColors.push({
    colorshexa: oneColorArray,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});
console.log(initialColors);