let detailsElements = document.querySelectorAll('section .list details.item');

for(const ele of detailsElements){
  {
    const marker = ele.querySelector('summary > svg');
    if(ele.open){
      marker.style.rotate = '0deg';
    }else{
      marker.style.rotate = '-90deg';
    }
  }
  ele.addEventListener('toggle', function () {
    const marker = this.querySelector('summary > svg');
    if(ele.open){
      marker.style.rotate = '0deg';
    }else{
      marker.style.rotate = '-90deg';
    }
  })
}