let opcaoEscolhida;
let saldo = 109.30;
while (true) {
    let opcao = prompt(`
    Saldo: ${saldo}
    Escolha a opcao: 
    1. Comprar Megas 
    2. Comprar Jackpot 
    3. Consultar Saldo 
    4. Fazer Txuna Credito
    5. Sair
    `);

    //converter a opcao para number
    opcaoEscolhida = Number(opcao);

    if (opcaoEscolhida == 5) {
        break;
    }

    //encontrar a opcao escolhida
    switch (opcaoEscolhida) {
        case 1:
            let opcaoMegas = Number(
                prompt(`
                Saldo: ${saldo}
                Escolha a opcao: 
                1. 5MT- 40 MB
                2. 10MT-80 MB
                3. 15MT-120 MB
                4. 20MT-160 MB
                0. voltar
                `)
            );
            if (opcaoMegas == 0) {
                break;
            }

            comprarMegas(opcaoMegas);
            break;
        case 2:
            let opcaoJackpot = Number(
                prompt(`
                Saldo: ${saldo}
                Escolha a opcao: 
                1. 2MT - 8MT Jackpot
                2. 4MT - 12MT Jackpot
                3. 10MT - 30MT Jackpot
                4. 20MT - 80MT Jackpot
                0. voltar
                `)
            );

            if (opcaoJackpot == 0) {
                break;
            }

            comprarJackpot(opcaoJackpot);

            break;
        case 3:
           
        prompt(`
            Saldo: ${saldo}
            `)
            break;
    
        case 4:

        let opcaoTxuna = Number(
            prompt(`
            Saldo: ${saldo}
            Escolha a opcao: 
            1.Txuna credito de 50MT
            2. Txuna credito de 40MT
            3. Txuna credito de 30MT
            0. voltar
            `)
        );

        if (opcaoTxuna == 0) {
            break;
        }

        comprarTxuna(opcaoTxuna);

        break;
            
        default:
            console.log("Opcao invalida.");
            break;
    }
}
function comprarMegas(opcaoMegas) {

    switch (opcaoMegas) {
        case 1:
            if (saldo < 5) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 5;
                alert(`Parabens! Acaba de comprar 40MB. Saldo ${saldo}`);
            }
            break;
        case 2:
            if (saldo < 10) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 10;
                alert(`Parabens! Acaba de comprar 80MB. Saldo ${saldo}`);
            }
            break;
        case 3:
            if (saldo < 15) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 15;
                alert(`Parabens! Acaba de comprar 120MB. Saldo ${saldo}`);
            }
            break;
        case 4:
            if (saldo < 20) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 20;
                alert(`Parabens! Acaba de comprar 160MB de megas. Saldo ${saldo}`);
            }
            break;
        default:
            alert("Opcao invalida. Tente de novo");
            break;
    }
}

 function comprarJackpot(opcaoJackpot) {

        switch (opcaoJackpot) {
            case 1:
                if (saldo < 2) {
                    alert("Saldo Insuficiente");
                } else {
                    saldo = saldo - 2;
                    alert(`Parabens! Acaba de comprar 8MT de Jackpot. Saldo ${saldo}`);
                }
                break;
            case 2:
                if (saldo < 4) {
                    alert("Saldo Insuficiente");
                } else {
                    saldo = saldo - 4;
                    alert(`Parabens! Acaba de comprar 12MT de Jackpot. Saldo ${saldo}`);
                }
                break;
            case 3:
                if (saldo < 10) {
                    alert("Saldo Insuficiente");
                } else {
                    saldo = saldo - 10;
                    alert(`Parabens! Acaba de comprar 30MT de Jackpot. Saldo ${saldo}`);
                }
                break;
            case 4:
                if (saldo < 20) {
                    alert("Saldo Insuficiente");
                } else {
                    saldo = saldo - 20;
                    alert(`Parabens! Acaba de comprar 80MT de Jackpot. Saldo ${saldo}`);
                }
                break;
            default:
                alert("Opcao invalida. Tente de novo");
                break;
        }
 }
 let consultarSaldo=() =>saldo ;
 alert(saldo);
 function comprarTxuna(opcaoTxuna){
    if(opcaoTxuna==1){
        saldo =  saldo +50;
    }else if(opcaoTxuna==2){
        saldo = saldo + 40;
    }else{
        saldo =  saldo + 30;
    }
    alert(saldo);    
    
 }
