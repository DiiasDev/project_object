<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-dialog v-model="store.modalCadastro" persistent max-width="500px">
                <v-card class="pa-5 rounded-lg">
                    <v-card-title class="text-h5 font-weight-bold text-center">
                        Cadastro
                    </v-card-title>

                    <v-card-text>
                        <v-form @submit.prevent="enviarCadastro" ref="form">
                            <v-text-field v-model="formData.nome" label="Nome" variant="outlined" density="comfortable"
                                prepend-inner-icon="mdi-account"></v-text-field>

                            <v-text-field v-model="formData.email" label="Email" variant="outlined"
                                density="comfortable" prepend-inner-icon="mdi-email"></v-text-field>

                            <v-text-field v-model="formData.senha" label="Senha" variant="outlined"
                                density="comfortable" type="password" prepend-inner-icon="mdi-lock"></v-text-field>

                            <v-text-field v-model="formData.telefone" label="Telefone" variant="outlined"
                                density="comfortable" prepend-inner-icon="mdi-phone"></v-text-field>

                            <v-text-field v-model="formData.endereco" label="Endereço" variant="outlined"
                                density="comfortable" prepend-inner-icon="mdi-map-marker"></v-text-field>

                            <v-card-actions class="d-flex justify-space-between">
                                <v-btn variant="outlined" color="grey darken-1" @click="store.modalCadastro = false">
                                    Cancelar
                                </v-btn>
                                <v-btn color="primary" elevation="2" type="submit">
                                    Cadastrar
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>

                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
import { useAppStore } from '../../store/app';

export default {
    name: 'modalCadastroLogin',
    data() {
        return {
            store: useAppStore(),
            formData: {
                nome: '',
                email: '',
                senha: '',
                telefone: '',
                endereco: ''
            }
        };
    },
    methods: {
        enviarCadastro() {
            this.store.cadastrarUsuario(this.formData); // Chama a action da store
            console.log("Dados cadastrados:", this.store.cadastro);

            this.store.modalCadastro = false;

            this.formData = {
                nome: '',
                email: '',
                senha: '',
                telefone: '',
                endereco: ''
            };
        }
    }
};
</script>
