const erro = 0.000000000000001
const funcao = 'a'

// definindo funcoes (a), (b) e (c)
function fx(x){

     if(funcao == 'a'){
          return ((x*x) - 2)
     }

     if(funcao == 'b'){
          return (math.pow(math.e, -x) - x)
     }

     if(funcao == 'c'){
          return (math.cos(x) - x)
     }
}

// definindo as derivadas das funcoes (a), (b) e (c)
function fxd(x){

     if(funcao == 'a'){
          return (2*x)
     }

     if(funcao == 'b'){
          return ((math.pow(math.e, -x)*-1) - 1)
     }

     if(funcao == 'c'){
          return ((math.sin(x)*-1) - 1)
     }
}

// definindo as derivadas de segunda ordem das funcoes (a), (b) e (c)
function fxdd(x){

     if(funcao == 'a'){
          return (2)
     }

     if(funcao == 'b'){
          return (math.pow(math.e, -x))
     }

     if(funcao == 'c'){
          return (math.cos(x)*-1)
     }
}

// definindo as funcoes phi de (a), (b) e (c)
function phi(x){

     if(funcao == 'a'){
          return (math.sqrt(2))
     }

     if(funcao == 'b'){
          return (math.pow(math.e, -x))
     }

     if(funcao == 'c'){
          return (math.cos(x))
     }
}



cordas(0, 4)
bisseccao(0, 4)
newton(11)
ponto_fixo(1)
secantes(0, 4)
