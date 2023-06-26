var MostrarMenu = document.querySelector('#show-or-hide');
var blockRihanna = document.querySelector('.Squar1')
var MostrarMenu2 = document.querySelector('#show-or-hidee');
var blockSummer = document.querySelector('.Squar3')
var MostrarMenu3 = document.querySelector('#show-or-hideee');
var blockSZA = document.querySelector('.Squar5')
var MostrarMenu4 = document.querySelector('#show-or-hideeee');
var blockCiara = document.querySelector('.Squar7')
var MostrarMenu5 = document.querySelector('#show-or-hideeeee');
var blockCrisBrown = document.querySelector('.Squar9')
var MostrarMenu6 = document.querySelector('#show-or-hideeeeee');
var blockMuniLong = document.querySelector('.Squar11')

MostrarMenu.addEventListener('click', function () {
    if(blockRihanna.style.display === 'block'){
        blockRihanna.style.display = 'none';
    } else {
        blockRihanna.style.display ='block';
        blockSummer.style.display = 'none';
        blockSZA.style.display = 'none';
        blockCiara.style.display = 'none';
        blockCrisBrown.style.display = 'none';
        blockMuniLong.style.display = 'none';
    }

  });



MostrarMenu2.addEventListener('click', function () {
    if(blockSummer.style.display === 'block'){
        blockSummer.style.display = 'none';
    } else {
        blockSummer.style.display ='block';
        blockSZA.style.display = 'none';
        blockCiara.style.display = 'none';
        blockCrisBrown.style.display = 'none';
        blockMuniLong.style.display = 'none';
        blockRihanna.style.display = 'none';
    }

  });


  
  MostrarMenu3.addEventListener('click', function () {
      if(blockSZA.style.display === 'block'){
          blockSZA.style.display = 'none';
      } else {
          blockSZA.style.display ='block';
          blockSummer.style.display = 'none';
          blockCiara.style.display = 'none';
          blockCrisBrown.style.display = 'none';
          blockMuniLong.style.display = 'none';
          blockRihanna.style.display = 'none';
      }
  
    });

    
    MostrarMenu4.addEventListener('click', function () {
        if(blockCiara.style.display === 'block'){
            blockCiara.style.display = 'none';
        } else {
            blockCiara.style.display ='block';
            blockSummer.style.display = 'none';
            blockSZA.style.display = 'none';
            blockCrisBrown.style.display = 'none';
            blockMuniLong.style.display = 'none';
            blockRihanna.style.display = 'none';
        }
    
      });
  

    
    MostrarMenu5.addEventListener('click', function () {
        if(blockCrisBrown.style.display === 'block'){
            blockCrisBrown.style.display = 'none';
        } else {
            blockCrisBrown.style.display ='block';
            blockSummer.style.display = 'none';
            blockSZA.style.display = 'none';
            blockCiara.style.display = 'none';
            blockMuniLong.style.display = 'none';
            blockRihanna.style.display = 'none';
        }
    
      });


      
      MostrarMenu6.addEventListener('click', function () {
          if(blockMuniLong.style.display === 'block'){
              blockMuniLong.style.display = 'none';
          } else {
              blockMuniLong.style.display ='block';
              blockSummer.style.display = 'none';
              blockSZA.style.display = 'none';
              blockCiara.style.display = 'none';
              blockCrisBrown.style.display = 'none';
              blockRihanna.style.display = 'none';
          }
      
        });  