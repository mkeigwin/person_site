$(document).ready(function() {
console.log('linked')


  const changeColor = (e) => {
    let color = $(e.target).data('color')
    console.log(color)
    $(e.target).css('color', color)
  }

  const randomColor = (e) => {
    const colorsILike = [
      'deepskyblue',
      'cyan',
      'turquoise',
      'mediumturquoise',
      'aqua',
      'darkturquoise',
      'skyblue',
      'lightskyblue',
      'steelblue',
      'dodgerblue',
      'cornflowerblue',
      'royalblue',
      'midnightblue',
      'navy',
    ]
    let colorChoice = Math.floor(Math.random() * colorsILike.length)
    $(e.target).css('color', colorsILike[colorChoice])
  }

  const originalColor = () => {
    setTimeout(function() {
      $('.letter').css('color', 'white')
    },100)
    $('.letter').css('color', 'crimson')
  }

  $('.letter').on('mouseover', changeColor)
  $('.letter').on('mouseout', randomColor)
  $('.letter').on('click', originalColor)

});
