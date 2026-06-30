document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cepInput').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') buscarCEP();
    });
    document.getElementById('cnpjInput').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') buscarCNPJ();
    });
    document.getElementById('bancoInput').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') buscarBanco();
    });
});

async function buscarCEP() {
    const input = document.getElementById('cepInput');
    const result = document.getElementById('cepResult');
    const cep = input.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        result.innerHTML = "⚠️ Digite um CEP válido com 8 dígitos (somente números).";
        return;
    }

    result.innerHTML = "Carregando...";

    try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);

        if (!response.ok) {
            throw new Error(response.status === 404 ? 'CEP não encontrado.' : `Erro na API (status ${response.status}).`);
        }

        const data = await response.json();

        result.innerHTML = `
            <strong>CEP:</strong> ${data.cep}<br>
            <strong>Rua:</strong> ${data.street || 'Não informado'}<br>
            <strong>Bairro:</strong> ${data.neighborhood || 'Não informado'}<br>
            <strong>Cidade/UF:</strong> ${data.city} - ${data.state}
        `;
    } catch (e) {
        result.innerHTML = `❌ ${e.message || 'Erro ao consultar o CEP. Tente novamente.'}`;
    }
}

async function buscarCNPJ() {
    const input = document.getElementById('cnpjInput');
    const result = document.getElementById('cnpjResult');
    const cnpj = input.value.replace(/\D/g, '');

    if (cnpj.length !== 14) {
        result.innerHTML = "⚠️ Digite um CNPJ válido com 14 dígitos (somente números).";
        return;
    }

    result.innerHTML = "Carregando...";

    try {
        const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);

        if (!response.ok) {
            throw new Error(response.status === 404 ? 'CNPJ não encontrado.' : `Erro na API (status ${response.status}).`);
        }

        const data = await response.json();

        result.innerHTML = `
            <strong>Razão Social:</strong> ${data.razao_social || 'Não encontrado'}<br>
            <strong>Nome Fantasia:</strong> ${data.nome_fantasia || 'Não informado'}<br>
            <strong>Situação:</strong> ${data.descricao_situacao_cadastral || 'N/A'}<br>
            <strong>UF:</strong> ${data.uf || 'N/A'}
        `;
    } catch (e) {
        result.innerHTML = `❌ ${e.message || 'Erro ao consultar o CNPJ. Tente novamente.'}`;
    }
}

async function buscarBanco() {
    const input = document.getElementById('bancoInput');
    const result = document.getElementById('bancoResult');
    const code = input.value.replace(/\D/g, '');

    if (!code) {
        result.innerHTML = "⚠️ Digite o código do banco (ex: 001).";
        return;
    }

    result.innerHTML = "Carregando...";

    try {
        const response = await fetch(`https://brasilapi.com.br/api/banks/v1/${code}`);

        if (!response.ok) {
            throw new Error(response.status === 404 ? 'Banco não encontrado. Tente outro código.' : `Erro na API (status ${response.status}).`);
        }

        const data = await response.json();

        result.innerHTML = `
            <strong>Código:</strong> ${data.code}<br>
            <strong>Nome:</strong> ${data.name}<br>
            <strong>Nome Completo:</strong> ${data.fullName}<br>
            <strong>ISPB:</strong> ${data.ispb}
        `;
    } catch (e) {
        result.innerHTML = `❌ ${e.message || 'Erro ao consultar o banco. Tente novamente.'}`;
    }
}
