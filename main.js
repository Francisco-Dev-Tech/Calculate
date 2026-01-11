const form = document.getElementById('form');


const card = document.getElementById("card");

const dicaHello = document.getElementById("dicaHello");

const setDica = document.getElementById('setDica');

const cad = document.getElementById("cad");

const newDica = document.getElementById("newDica");

const ver = document.querySelectorAll(".ver");

const inputs = document.querySelectorAll(".subjects");

const exit = document.querySelector(".exit");

const alertas = document.querySelectorAll(".alerta");

const dicas = document.getElementById("dicas")

const spaceDicas = document.querySelectorAll(".spaceDicas");

const spaceClassificado = document.querySelector(".classific");

const titleClassific = document.getElementById("titleClassific");


const processB = document.querySelectorAll(".processB");

const nome = document.getElementById('nome');

const exit1 = document.getElementById("exit");

const idAlert = {
  alerta1: "el10",
  alerta2: "el11",
  alerta3: "info10",
  alerta4: "info11"
}

const date = [
  {
    el: "Electrónica e Telecomunicações ",
    info: "Informática"
  },
  {
    10: "10ª Classe",
    11: "11ª Classe"
  }
]

const subjects = 
  {
    mat: "Matemática",
    fisica: "Física",
    quim: "Química",
    pol: "Práticas Oficiais Laboratoriais (POL)",
    fai: "Formação de Atitudes Integradoras (FAI)",
    edf: "Educação Física",
    ingl: "Inglês",
    port: "Língua Portuguesa",
    ttl: "Tecnologias de Telecomunicações",
    infor: "Informática",
    el: "Electricidade e Electrónica (EEL)",
    emp: "Empreendedorismo"
  };
  
  const subjects1 = 
  {
    mat1: "Matemática",
    fisica1: "Física",
    quim1: "Química",
    pol1: "Práticas Oficiais Laboratoriais (POL)",
    fai1: "Formação de Atitudes Integradoras (FAI)",
    edf1: "Educação Física",
    ingl1: "Inglês",
    port1: "Língua Portuguesa",
    ttl1: "Tecnologias de Telecomunicações",
    sd1: "Sistemas Digitais",
    el1: "Electricidade e Electrónica (EEL)",
    emp1: "Empreendedorismo",
    dt1: "Desenho Técnico"
  };
  
  const subjects2 = {
    
    mat2: "Matemática",
    fisica2: "Física",
    quim2: "Química",
    tic2: "Tecnologias de Informação e Comunicação (TIC)",
    fai2: "Formação de Atitudes Integradoras (FAI)",
    edf2: "Educação Física",
    ingl2: "Inglês",
    port2: "Língua Portuguesa",
    tlp2: "Tecnologia de Linguagens de Programação (TLP)",
    seac2: "Sistemas de Exploração Arquitetuera do Computador (SEAC)",
    elctr2: "Electrotecnia",
    emp2: "Empreendedorismo"
  };
  
  const subjects3 = {
    mat3: "Matemática",
    fisica3: "Física",
    quim3: "Química",
    tic3: "Tecnologias de Informação e Comunicação (TIC)",
    fai3: "Formação de Atitudes Integradoras (FAI)",
    edf3: "Educação Física",
    ingl3: "Inglês",
    port3: "Língua Portuguesa",
    tlp3: "Tecnologia de Linguagens de Programação (TLP)",
    seac3: "Sistemas de Exploração Arquitetuera do Computador (SEAC)",
    elctr3: "Electrotecnia",
    emp3: "Empreendedorismo",
    dt3: "Desenho Técnico"
  
  };
  const classific = {
    mat: 0,
    fisica: 0,
    quim: 0,
    pol: 0,
    fai: 0,
    edf: 0,
    ingl: 0,
    port: 0,
    ttl: 0,
    infor: 0,
    el: 0,
    emp: 0
  };
  
  const classific1 = {
    mat1: 0,
    fisica1: 0,
    quim1: 0,
    pol1: 0,
    fai1: 0,
    edf1: 0,
    ingl1: 0,
    port1: 0,
    ttl1: 0,
    sd1: 0,
    el1: 0,
    emp1: 0,
    dt1: 0
  
  };
  
  const classific2 = {
    mat2: 0,
    fisica2: 0,
    quim2: 0,
    tic2: 0,
    fai2: 0,
    edf2: 0,
    ingl2: 0,
    port2: 0,
    tlp2: 0,
    seac2: 0,
    elctr2: 0,
    emp2: 0
  };
  
  const classific3 = {
    
    mat3: 0,
    fisica3: 0,
    quim3: 0,
    tic3: 0,
    fai3: 0,
    edf3: 0,
    ingl3: 0,
    port3: 0,
    tlp3: 0,
    seac3: 0,
    elctr3: 0,
    emp3: 0,
    dt3: 0
  }
  
  const creater = {

    mat: "Matemática",
    fisica: "Física",
    quim: "Química",
    pol: "POL",
    fai: "FAI",
    edf: "Ed. Fís.",
    ingl: "Inglês",
    port: "Português",
    ttl: "TTL",
    infor: "Informática",
    el: "EEL",
    emp: "Empreend."
  }
  
  const seletor = [
    mat, 
    fisica, 
    quim, 
    pol, 
    fai, 
    edf, 
    ingl, 
    port, 
    ttl, 
    infor, 
    el, 
    emp
  ];
  
  const creater1 = {
    
    mat1: "Matemática",
    fisica1: "Física",
    quim1: "Química",
    pol1: "POL",
    fai1: "FAI",
    edf1: "Ed. Fís.",
    ingl1: "Inglês",
    port1: "Português",
    ttl1: "TTL",
    sd1: "S. Digit.",
    el1: "EEL",
    emp1: "Empreend.",
    dt1: "Des. Técn."
  
  }
  const seletor1 = [
    mat1, 
    fisica1, 
    quim1, 
    pol1, 
    fai1, 
    edf1, 
    ingl1, 
    port1, 
    ttl1, 
    sd1, 
    el1, 
    emp1,
    dt1
  ];
  
  
  const creater2 = {
    
    mat2: "Matemática",
    fisica2: "Física",
    quim2: "Química",
    tic2: "TIC",
    fai2: "FAI",
    edf2: "Ed. Fís.",
    ingl2: "Inglês",
    port2: "Português",
    tlp2: "TLP",
    seac2: "SEAC",
    elctr2: "Electrotec.",
    emp2: "Empreend."
  }
  
  const seletor2 = [
    mat2,
    fisica2,
    quim2,
    tic2,
    fai2,
    edf2,
    ingl2,
    port2,
    tlp2,
    seac2,
    elctr2,
    emp2
  ];
  
  const creater3 = {
    
    mat3: "Matemática",
    fisica3: "Física",
    quim3: "Química",
    tic3: "TIC",
    fai3: "FAI",
    edf3: "E. Fís",
    ingl3: "Inglês",
    port3: "Português",
    tlp3: "TLP",
    seac3: "SEAC",
    elctr3: "Electrotec.",
    emp3: "Empreend.",
    dt3: "Des. Técn."
  };
  
  const seletor3 = [
    mat3,
    fisica3,
    quim3,
    tic3,
    fai3,
    edf3,
    ingl3,
    port3,
    tlp3,
    seac3,
    elctr3,
    emp3,
    dt3
  ]
  
  
  const dicaMate = [
    
  ]
let initialClasse = "10";
let initialCurso = "el";
let categoria = "el10";

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const user = nome.value;
  
  const process = document.getElementById("process");
  
  const calc = document.getElementById("calc");
  
  const welcome = document.getElementById("welcome");
  
  
  
  calc.addEventListener("submit", (event) => {
    event.preventDefault();
  })
  
  if(nome.value.trim()) {
    setTimeout(() => {
      
      process.style.opacity = "1";
      
      setTimeout(() => {
        form.style.transform = "translateX(-100%)";
        setTimeout(() => {
          form.style.opacity = "0";
          calc.style.display = "flex";
          welcome.style.display = "flex";
          setTimeout(() => {
            form.style.display = "none";
            process.style.opacity = "0";
            calc.style.transform = "translateX(0%)";
            welcome.style.transform = "translateX(0%)";
            const user = nome.value;
            
            welcome.textContent = `${user}, Seje muito bem vindo(a)! `
            setTimeout(() => {
              welcome.style.transform = "translateY(-120%)";
              setTimeout(() => {
                welcome.style.opacity = "0";
                setTimeout((
                  
                ) => {
                  welcome.style.display = 'none'
                }, 300)
              }, 400)
            }, 2000)
            Select(user);
          }, 100)
        }, 50)
      }, 800)
    }, 400);
  }
  else{
    alert("Insira um nome válido! ");
  }
})

function Select(nome) {
  
  
  
  const curso = document.getElementById("curso");
  
  const classe = document.getElementById("classe");
  
  const top = document.getElementById("top");
  
  
  
  
  
  const mais = document.querySelectorAll(".mais");
  
  const forms = [
    document.getElementById('el10'), 
    document.getElementById('el11'), 
    document.getElementById('info10'), 
    document.getElementById('info11')
  ];
  
  
  
  forms.forEach(form => {
    form.style.display = (form.id === categoria)? 'flex':'none';
    
  })
  
  
  curso.oninput = () => {
    
    

    spaceDicas.forEach(dica => {
      dica.style.background = (initialCurso === "el")?"#F6FCFF":"#F8FFF6";
    })
    
    initialCurso = curso.value;
    
    card.style.background = (initialCurso === "el") ? "linear-gradient(to bottom, #ffffff, #eaf2ff)" : "linear-gradient(to bottom, #ffffff, #EAFFEE)";
    
    dicaHello.style.background = (initialCurso === "el")? "linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)":"linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))";
    
    titleClassific.style.background = (initialCurso === "el")? "linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)":"linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))";
    alertas.forEach(alerta => {
      
      alerta.style.transform = "translateY(-120%)";
      alerta.style.pointerEvents = "none";
      setTimeout(() => {
        alerta.style.opacity = "0";
        calc.style.marginTop = "50px";
      }, 300)
      
    })
    
    categoria = initialCurso.trim() + initialClasse.trim();
    
    
    
    forms.forEach(form => {
      form.style.display = (form.id === categoria)? 'flex':'none';
      
    })
    
    top.style.background = (initialCurso === "info")? 'linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))':'linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)';
      
      mais.forEach(m => {
        m.classList.remove((initialCurso === "info")? "maisEl":"maisInfo");
      
      m.classList.add((initialCurso == "info")?"maisInfo":"maisEl");
      
      m.style.background = (initialCurso === "info")? 'linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))':'linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)';
      
      })
      
    inputs.forEach(input => {
      input.style.outlineColor = (initialCurso === "info") ? '#8EBB9F' : '#8E97BB';
      })

  }
  
  classe.oninput = () => {
    initialClasse = classe.value;
    
    spaceDicas.forEach(dica => {
      dica.style.background = (initialCurso === "el")?"#F6FCFF":"#F8FFF6";
    })
    
  
    
  titleClassific.style.background = (initialCurso === "el")? "linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)":"linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))";
  
    alertas.forEach(alerta => {
      alerta.style.transform = "translateY(-120%)";
      alerta.style.pointerEvents = "none";
      setTimeout(() => {
        alerta.style.opacity = "0";
        
        calc.style.marginTop = "50px";
      }, 300)
    })
    
    categoria = initialCurso.trim() + initialClasse.trim();
    
  
    forms.forEach(form => {
       form.style.display = (form.id === categoria)? 'flex':'none';
   })
   
       top.style.background = (initialCurso === "info") ? 'linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))' : 'linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)';
       
       mais.forEach(m => {
         m.classList.remove((initialCurso === "info") ? "maisEl" : "maisInfo");
         
         m.classList.add((initialCurso == "info") ? "maisInfo" : "maisEl");
         
         m.style.background = (initialCurso === "info") ? 'linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))' : 'linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)';
         
       })
       
       
       
      
  }
  
  
}



function El10() { 
  //alert("Execut");
  

  let count = 0;
  
  for(subject in subjects) {
    const input = document.getElementById(subject);
    
    const nota = parseFloat(+input.value);
    
    if(nota != null && nota != "" && !isNaN(nota) && nota > -1 && nota <= 20) {
      count += nota;
      classific[subject] = nota;
    }else{
      
      const cad = subjects[subject]
      if(cad !== undefined && cad !== null && cad) 
      {
        Error(cad, nome.value);
      }
      return;
    }
  }
  

  Classicado(classific);
  
  
  processB.forEach(pel10 => {
    if(pel10.id === "pel10") {
      pel10.style.opacity = "1";
      setTimeout(() => {
        
        pel10.style.opacity = "0";
        
        
        setTimeout(() => {
          
          
          calc.style.marginTop = "100px";
      alertas.forEach(item => {
      const idItem = idAlert[item.id];
      
      if(idItem === categoria) {
        
        item.style.opacity = "1";
        item.pointerEvents = "all"
        setTimeout(() => {
        item.style.transform = "translateY(0%)"
        }, 300);
        
        
        for(subject in subjects) {
    const input = document.getElementById(subject);
    
    input.oninput = () => {
      
      setTimeout(() => {
        
        item.style.transform = "translateY(-120%)";
        
        item.style.pointerEvents = "none";
        setTimeout(() => {
          
        calc.style.marginTop = "50px";
        item.style.opacity = "0";
        
        
        },300);
      }, 300)
    }
        }
      }
    })
        }, 200)
      }, 900)
      
      
      return;
      
    }
    
  })
  
    
}
function El11() {
   
  //alert("Execut");

  let count = 0;
  
  for(subject in subjects1) {
    const input = document.getElementById(subject);
    
    const nota = parseFloat(+input.value);
    
    if(nota != null && nota != "" && !isNaN(nota) && nota > -1 && nota <= 20) {
      count += nota;
      classific1[subject] = nota;
    }else{
      const cad = subjects1[subject]
      if(cad !== undefined && cad !== null && cad) 
      {
        Error(cad, nome.value);
      }
      return;
    }
  }
  

  Classicado(classific1);
  
  
  processB.forEach(pel10 => {
    if(pel10.id === "pel11") {
      pel10.style.opacity = "1";
      setTimeout(() => {
        
        pel10.style.opacity = "0";
        
        
        setTimeout(() => {
          
          
          calc.style.marginTop = "100px";
      alertas.forEach(item => {
      const idItem = idAlert[item.id];
      
      if(idItem === categoria) {
        
        item.style.opacity = "1";
        item.pointerEvents = "all"
        setTimeout(() => {
        item.style.transform = "translateY(0%)"
        }, 300);
        
        
        for(subject in subjects) {
    const input = document.getElementById(subject);
    
    input.oninput = () => {
      
      setTimeout(() => {
        
        item.style.transform = "translateY(-120%)";
        
        item.style.pointerEvents = "none";
        setTimeout(() => {
          
        calc.style.marginTop = "50px";
        item.style.opacity = "0";
        
        
        },300);
      }, 300)
    }
        }
      }
    })
        }, 200)
      }, 900)
      
      
      return;
      
    }
    
  })
  
    

  
}

function Info10() {
  
  //alert("Execut");

  let count = 0;
  
  for(subject in subjects2) {
    const input = document.getElementById(subject);
    
    const nota = parseFloat(+input.value);
    
    if(nota != null && nota != "" && !isNaN(nota) && nota > -1 && nota <= 20) {
      count += nota;
      classific2[subject] = nota;
    }else{

      const cad = subjects2[subject]
      if(cad !== undefined && cad !== null && cad) 
      {
        Error(cad, nome.value);
      }
      return;
    }
  }
  

  Classicado(classific2);
  
  
  processB.forEach(pel10 => {
    if(pel10.id === "pinfo10") {
      pel10.style.opacity = "1";
      setTimeout(() => {
        
        pel10.style.opacity = "0";
        
        
        setTimeout(() => {
          
          
          calc.style.marginTop = "100px";
      alertas.forEach(item => {
      const idItem = idAlert[item.id];
      
      if(idItem === categoria) {
        
        item.style.opacity = "1";
        item.pointerEvents = "all"
        setTimeout(() => {
        item.style.transform = "translateY(0%)"
        }, 300);
        
        
        for(subject in subjects) {
    const input = document.getElementById(subject);
    
    input.oninput = () => {
      
      setTimeout(() => {
        
        item.style.transform = "translateY(-120%)";
        
        item.style.pointerEvents = "none";
        setTimeout(() => {
          
        calc.style.marginTop = "50px";
        item.style.opacity = "0";
        
        
        },300);
      }, 300)
    }
        }
      }
    })
        }, 200)
      }, 900)
      
      
      return;
      
    }
  })
  
    

}

function Info11() {
  
  //alert("Execut");

  let count = 0;
  
  for(subject in subjects3) {
    const input = document.getElementById(subject);
    
    const nota = parseFloat(+input.value);
    
    if(nota != null && nota != "" && !isNaN(nota) && nota > -1 && nota <= 20) {
      count += nota;
      classific3[subject] = nota;
    }else{

      const cad = subjects3[subject]
      if(cad !== undefined && cad !== null && cad) 
      {
        Error(cad, nome.value);
      }
      return;
    }
  }
  

  Classicado(classific3);
  
  
  processB.forEach(pel10 => {
    if(pel10.id === "pinfo11") {
      pel10.style.opacity = "1";
      setTimeout(() => {
        
        pel10.style.opacity = "0";
        
        
        setTimeout(() => {
          
          
          calc.style.marginTop = "100px";
      alertas.forEach(item => {
      const idItem = idAlert[item.id];
      
      if(idItem === categoria) {
        
        item.style.opacity = "1";
        item.pointerEvents = "all"
        setTimeout(() => {
        item.style.transform = "translateY(0%)"
        }, 300);
        
        
        for(subject in subjects) {
    const input = document.getElementById(subject);
    
    input.oninput = () => {
      
      setTimeout(() => {
        
        item.style.transform = "translateY(-120%)";
        
        item.style.pointerEvents = "none";
        setTimeout(() => {
          
        calc.style.marginTop = "50px";
        item.style.opacity = "0";
        
        
        },300);
      }, 300)
    }
        }
      }
      

    })
        }, 200)
      }, 900)
      
      
      
      
      return;
      
    }
    
    
    
  })
  
    


}



function Error(cadeira) {
  
  if(cadeira != undefined && cadeira != null && cadeira != "") {
  const r = document.getElementById("error");
  const aviso = document.getElementById("aviso");
  
  const complemento = ` ${cadeira} no intervalo de (0 - 20)`;
  
  aviso.textContent = ` ${nome.value}, preencha corretamente o campo da cadeira de ${complemento} `;
  r.style.display = "flex";
  setTimeout(() => {
    r.style.opacity = "1";
    
  }, 300)
  }
}

function ErroNo() {
  const r = document.getElementById("error");
  const aviso = document.getElementById("aviso");
  
  
  r.style.opacity = "0"
  setTimeout(() => {
    r.style.display = "none";
    aviso.textContent = "";
  }, 300)
}

function Classicado(sub) {
  const mediaCalculada = document.getElementById("mediaCalculada");
  const spaceIntervalo = document.getElementById("intervalo");
  const spaceCurso = document.getElementById("spaceCurso");
  const spaceClasse = document.getElementById("spaceClasse");
  
  const user = nome.value;

  
  let intervalo = 0;
  let media = 0;
  let n = 0;
  let i = 0;
  for(s in sub) {
    n += sub[s];
    i++;
  }
  media = n / i;
  media = media.toFixed(1);
  intervalo = ` ${parseInt(media) - 2} Valores e ${parseInt(media) + 2} Valores `;
  
  media = ` ${media} valores `;
  
  
  
  
  mediaCalculada.textContent = media;
  
  spaceCurso.textContent = date[0][initialCurso];
  spaceCurso.style.color = "black";
  spaceClasse.textContent = date[1][initialClasse];
  spaceClasse.style.color = "black";
  
  
  B();
  
  spaceIntervalo.textContent = intervalo;
  
  
  
  switch (categoria) {
    case 'el10': CreateElement(creater);
      break;
    
    case 'el11': CreateElement(creater1);
      break;
      
    case 'info10': CreateElement(creater2);
      break;
    
    case 'info11': CreateElement(creater3);
      break;
      
  }
  
}


function ExibirClass() {
  
  alertas.forEach(alerta => {
    alerta.style.transform = "translateY(-120%)";
  
    alerta.style.opacity = "0";
  })
  
  calc.style.opacity = "0";
  
  
  setTimeout(() => {
    spaceClassificado.style.display = "flex";
    exit.style.display = "flex";
  
    
    setTimeout(() => {
      exit.style.opacity = "1";
      spaceClassificado.style.opacity = "1";
      calc.style.display = "none"
  
    }, 300)
    calc.style.pointerEvents = "none"
  }, 30)
  
  
}

function CreateElement(creator) {
  dicas.innerHTML = '';
  
  for(let create in creator) {
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.textContent = "ver";
    
    button.style.background = (initialCurso === "el")?"linear-gradient(120deg, rgba(2, 21, 96, 1), #0014C5)":"linear-gradient(120deg, rgba(1, 89, 7, 1), rgba(54, 197, 0, 1))";
    
    span.textContent = creator[create];
    
    
    span.classList.add("dica");
    
    
    
    span.appendChild(button);
    
    dicas.appendChild(span);
    
    switch (categoria) {
      case 'el10': seletor.forEach(sel => {
          if(toString(sel) === toString(create)) {
            button.onclick = () => {
              
              setDicas(classific, create, subjects);
            }
          }
      })
        break;
        
      case "el11": seletor1.forEach(sel => {
          if(toString(sel) === toString(create)) {
            button.onclick = () => {
              setDicas(classific1, create, subjects1);
            }
          }
      })
        break;
      
      case "info10": seletor2.forEach(sel => {
          if(toString(sel) === toString(create)) {
            button.onclick = () => {
              setDicas(classific2, create, subjects2);
            }
          }
      })
        break;
      
      case "info11": seletor3.forEach(sel => {
          if(toString(sel) === toString(create)) {
            button.onclick = () => {
              setDicas(classific3, create, subjects3);
            }
          }
      })
        break;
      default: alert("No such")
    }
    
  }
}

function Exit() {

  exit.style.display = "none";

  spaceClassificado.style.opacity = "0";
  setTimeout(() => {
      
  calc.style.display = "flex";
    calc.style.opacity = "1"
    
    spaceClassificado.style.display = "none";
    
     calc.style.pointerEvents = "all";
     
     for(let al in idAlert) {
       let chave;
       
       if(idAlert[al] == categoria) {
         chave = al;
         alertas.forEach(alerta => {
           alerta.style.transform = (al === alerta.id)?"translateY(0%)":"translateY(-120%)";
           alerta.style.opacity = "1";
           
           alerta.style.pointerEvents = "all";
          })
      }
     }
  }, 300)
}


function setDicas(c, a, s) {
  
  exit1.style.display = "flex";
  
  setTimeout(() => {
    exit1.style.opacity = "1";
  }, 300)
  
  cad.style.color = 'white'
  cad.textContent = s[a]
  let level = ((c[a] >= 0 && c[a] <= 11)? "baixa" : ( c[a] >= 12 && c[a] <= 15) ? "media" : (c[a] >= 16 && c[a] <= 20 ) ? "acima" : "media");
  
  fetch('Dicas.json').then(res => res.json()).then(file => {
    
    file.forEach(item => {
      
      if(item.cat === categoria && item.subject === a) {
  
        setNewDica(level, item)
      }
    })
    B();
  });

  setDica.style.display = "flex";
  spaceClassificado.style.opacity = "1";
  
  setTimeout(() => {
    setDica.style.opacity = "1";
    spaceClassificado.style.display = "none";
    
  }, 300)
  
  
}

function Exit1() {
  setDica.style.opacity = "0";
  
  
  
  spaceClassificado.style.display = "flex";
  exit1.style.opacity = "0";
  
  setTimeout(() => {
    setDica.style.display = "none";
    newDica.innerHTML = "";
    exit1.style.display = "none"
    spaceClassificado.style.opacity = "1";
  }, 300)
}

function B() {
  
  const spaceUser = document.querySelectorAll(".user");
  
  
  const user = nome.value;
  
  spaceUser.forEach(space => {
    space.textContent = user;
    
    if(space.id == "t") {
      space.style.color = "white";
    }
  })
}
 
function setNewDica(l, f) {
  switch (l) {
    case 'baixa': 
      console.log(l);
      newDica.innerHTML = '';
      newDica.innerHTML = f.dicas.baixa;
      break;
            
  case 'media': 
    console.log(l);
    newDica.innerHTML = '';
    newDica.innerHTML = f.dicas.media;
      break;
            
  case 'acima':
    console.log(l);
    newDica.innerHTML = '';
    newDica.innerHTML = f.dicas.acima;
    break;
          
  default: console.log("Erro");
  }
}