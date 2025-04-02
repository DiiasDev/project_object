import { defineStore } from 'pinia';

export const useAppStore = defineStore('useAppStore', {
    state: () => ({
        cadastros: [],
        modalCadastro: false,
        logado: false 
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
});
