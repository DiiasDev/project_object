import { defineStore } from 'pinia';

export const useAppStore = defineStore('useAppStore', {
    state: () => ({
        cadastros: [], 
        modalCadastro: false
    }),
    actions: {
        cadastrarUsuario(dados) {
            this.cadastros.push({ ...dados }); 
            console.log('Cadastro realizado: ', this.cadastros[0])
            setTimeout(() => {
                console.log('Dados armazenados:', this.cadastros);
            }, 100); 
        }
    }
});
