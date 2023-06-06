function myScope() {
  const formulario = document.querySelector('.form');
  const r = document.querySelector('.resultado');

  function eventForm(e) {
    e.preventDefault();

    const res = formulario.querySelector('#nome').value.replaceAll(' ', '').replace(/[0-9]/g, '').replace(/[^a-z0-9]/gi,'');

    const notDuplicated =  [...new Set(res.split(''))];

    const state = {
      'a': 254.45,
      'b': 359.37,
      'c': 278.87,
      'd': 500.99,
      'e': 874.20,
      'f': 945.33,
      'g': 965.00,
      'h': 658.41,
      'i': 684.45,
      'j': 455.55,
      'k': 801.20,
      'l': 622.22,
      'm': 265.45,
      'n': 678.88,
      'o': 355.46,
      'p': 1456.75,
      'q': 165.78,
      'r': 1469.45,
      's': 477.12,
      't': 989.66,
      'u': 263.66,
      'v': 202.22,
      'w': 865.66,
      'x': 1101.33,
      'y': 148.55,
      'z': 364.55
    }

    var soma = 0;
    
    for (const value of res.split('')) {
      soma += state[value]
    }
    
    r.innerHTML = `Roteiro: ${res} <br> Custo: R$${soma.toFixed()}<br> Quantidade de visitas: ${notDuplicated.length}`
  }
  formulario.addEventListener('submit', eventForm);
}


myScope()