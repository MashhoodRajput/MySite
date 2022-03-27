

let soonFilterValue = localStorage.getItem('soonFilterValue');
if(soonFilterValue != null){
  let filteredValue = document.querySelectorAll('[data-filter]');
  $('.filters ul li').removeClass('active');
  $('.soonLi').addClass('active');
  var data = soonFilterValue;

var $grid = $(".grid").isotope({
itemSelector: ".all",
percentPosition: true,
masonry: {
columnWidth: ".all"
}
});

$grid.isotope({
filter: data
})
localStorage.removeItem('soonFilterValue');
}
function soonFunction(){
	let soonValue = document.querySelector('[data-soon]').getAttribute('data-filter');
	localStorage.setItem("soonFilterValue", soonValue);
	location.href = 'meetings.html';
  }
