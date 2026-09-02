// Espera o DOM (Document Object Model) ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsappForm');
    
    if (!form) {
        console.error("ERRO JS: Formulário com ID 'whatsappForm' não encontrado! Verifique o HTML.");
        return; 
    } else {
        console.log("SUCESSO JS: Formulário 'whatsappForm' encontrado!");
    }

    const phoneNumber = '5521992834401'; // <-- SUBSTITUA PELO NÚMERO REAL DELA!

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        console.log("SUCESSO JS: Evento de submit interceptado! Preparando mensagem...");

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;

        // *** MUDANÇA AQUI: Trocando %0A por %0D%0A (que é \r\n antes do encode) ***
        // A sequência \r\n é interpretada como quebra de linha em alguns sistemas/clientes
        let whatsappMessage = `Olá, Raphaella! Gostaria de agendar uma consultoria.\r\n`; 
        whatsappMessage += `Meu nome é: ${nome}\r\n`;
        whatsappMessage += `Meu e-mail é: ${email}\r\n`;
        if (telefone) { 
            whatsappMessage += `Meu telefone é: ${telefone}\r\n`;
        }
        whatsappMessage += `Minha mensagem é:\r\n${mensagem}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        form.reset();ve
    });
});