<template>
    <v-container fill-height>
        <v-row justify="center" align="center" style="min-height: 100vh;">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12 pa-6" rounded="lg">
                    <v-card-title class="text-center text-h5 font-weight-bold">Login</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Email" variant="outlined" prepend-inner-icon="mdi-email" dense
                                v-model="email"></v-text-field>

                            <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'" label="Senha" prepend-inner-icon="mdi-lock"
                                variant="outlined" dense counter hint="Mínimo de 8 caracteres" v-model="password"
                                @click:append="show1 = !show1"></v-text-field>

                            <v-row>
                                <v-col>
                                    <v-btn color="primary" block class="mt-4" @click="login">Entrar</v-btn>
                                </v-col>
                            </v-row>
                            <v-card-text>
                                Ainda não tem cadastro? <strong @click="openModalCadastrar">Clique aqui</strong>
                            </v-card-text>
                        </v-form>
                    </v-card-text>
                    <modalCadastroLogin />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useAppStore } from '../store/app';
import modalCadastroLogin from '../components/modals/cadastrarLogin.vue';

export default {
    components: {
        modalCadastroLogin
    },
    name: 'loginApp',
    data() {
        return {
            store: useAppStore(),  
            show1: false,
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            this.store.cadastrarUsuario("Usuário Teste", this.email, this.password, "Endereço Teste");
            console.log("Usuário cadastrado:", this.store.user);
        },
        openModalCadastrar() {
            this.store.modalCadastro = true;
            console.log('Clicou no modal de cadastro');
        }
    }
};
</script>
