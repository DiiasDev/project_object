import { defineStore } from 'pinia';

export const useAppStore = defineStore('useAppStore', {
    state: () => ({
        cadastros: [],
        modalCadastro: false,
        logado: false  // 🔹 Novo estado para verificar se o usuário está logado
    }),
    actions: {
        cadastrarUsuario(dados) {
            this.cadastros.push({ ...dados });
            console.log('Cadastro realizado!')
            setTimeout(() => {
                console.log('Dados armazenados:', this.cadastros);
            }, 100);
        }
    },
    setLogado(status) {
        this.logado = status;  // 🔹 Atualiza o estado do login
    }
});
