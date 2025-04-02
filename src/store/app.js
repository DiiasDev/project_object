import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null
    }),
    actions: {
        cadastrarUsuario(nome, email, senha, endereco) {
            this.user = { nome, email, senha, endereco }; // Usa um objeto simples
        }
    }
});
