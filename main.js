//Creare uno slider di immagini come visto insieme durante la lezione.
//Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
//Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
//Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider



//eseguire doc dopo caricamento
$(document).ready(
  function () {
    $('.next').click(
      function () {
        //richiamo funzione per successivo
        clickNext();
      }
    );

    $('.prev').click(
      function () {
        //richiamo funzione per precedente
        clickPrev();
      }
    );
  }
);



//FUNZIONI

//funz imgnext
function clickNext() {
  //img corrente
  var imageActive = $('img.active');
  //successiva
  var imageNext = imageActive.next();
  //cerchio corrente
  var circleActive = $('i.active');
  //c succ
  var circleNext = circleActive.next();

//ciclo if per capire se l'immagine corrente è l'ultima
  if (imageActive.hasClass('last') == true) {
     //se si gli assegno la prima e ovviamente anche al cerchio
    imageActive.removeClass('active');
    $('img.first').addClass('active');
    circleActive.removeClass('active');
    $('i.first').addClass('active');
  }else {
  //altrimenti vado di successiva in successiva
    imageActive.removeClass('active');
    imageNext.addClass('active');
    circleActive.removeClass('active');
    circleNext.addClass('active');
  }
}


//funz imgprecedente
function clickPrev() {
  var imageActive = $('img.active');
  //img prec
  var imagePrev = imageActive.prev();
  var circleActive = $('i.active');
  //cerchio prec
  var circlePrev = circleActive.prev();

//ciclo if per capire se l'immagine corrente è la prima
  if (imageActive.hasClass('first') == true) {
    //se si gli assegno l'ultima a seguire il cerchio
    imageActive.removeClass('active');
    $('img.last').addClass('active');
    circleActive.removeClass('active');
    $('i.last').addClass('active');
  } else {
    //altrimenti vado di precedente in precedente
    imageActive.removeClass('active');
    imagePrev.addClass('active');
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
