let data1= {
    photo: 'images/zChineseplaza0235-copy-copy-copy.jpg',
    title:'My title',
    description:'My description'
};

let data2= {
    photo: 'images/zpygmalion-karatzas-actelion-p120613.jpg',
    title:'My title2',
    description:'My description2'
};

let data3= {
    photo: 'images/z5.jpg',
    title:'My title3',
    description:'My description3'
};

let data4= {
    photo: 'images/z5726214098_55c6649936_c.jpg',
    title:'My title4',
    description:'My description4'
};

let data5= {
    photo: 'images/zar-1.jpg',
    title:'My title5',
    description:'My description5'
};

let data6= {
    photo: 'images/zmome_kat_4_mome_up_sorozat_01.jpg',
    title:'My title6',
    description:'My description6'
};

let data7= {
    photo: 'images/ztumblr_lzv0hsBmiy1qesf6mo1_540.jpg',
    title:'My title7',
    description:'My description7'
};

let data8= {
    photo: 'images/zstock-photo-8389847.jpg',
    title:'My title8',
    description:'My description8'
};

let currentPhoto= 0;

let datas = [data1, data2, data3, data4, data5, data6, data7, data8]; 

$('.pic').attr('src', datas[currentPhoto].photo);
$('.photoTitle').text(datas[currentPhoto].title);
$('.photoDescription').text(datas[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('.pic').attr('src', datas[photoNumber].photo);
    $('.photoTitle').text(datas[photoNumber].title);
    $('.photoDescription').text(datas[photoNumber].description);
};

loadPhoto(currentPhoto);

$('.arrowRigth').click(() => {
    console.log(currentPhoto)
    if (currentPhoto>=datas.length-1) { 
        console.log("setcurrent to 0");
        currentPhoto=0;
    }
    else {
        currentPhoto++;
    } 
    
    loadPhoto(currentPhoto);
    
  });

  $('.arrowLeft').click(() => {
    
    if (currentPhoto<=0) { 
        currentPhoto=datas.length-1;
    }
    else {
        currentPhoto--;
    } 
    loadPhoto(currentPhoto);
  });


  
 