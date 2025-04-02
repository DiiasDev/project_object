<template>
    <v-container fill-height>
        <v-row justify="center" align="center" style="min-height: 100vh;">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12 pa-6" rounded="lg">
                    <v-card-title class="text-center text-h5 font-weight-bold">Login</v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field label="Email" variant="outlined" prepend-inner-icon="mdi-email" dense
                                v-model="email" :rules="[rules.required, rules.email]"></v-text-field>

                            <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'" label="Senha" prepend-inner-icon="mdi-lock"
                                variant="outlined" dense v-model="password" :rules="[rules.required, rules.minLength]"
                                @click:append="show1 = !show1"></v-text-field>

                            <v-row>
                                <v-col>
                                    <v-btn color="primary" block class="mt-4" @click="login">Entrar</v-btn>
                                </v-col>
                            </v-row>
                            <v-card-text>
                                Ainda não tem cadastro? <strong style="cursor: pointer;"
                                    @click="openModalCadastrar">Clique aqui</strong>
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
import { useAppStore } from '../../store/app';
import modalCadastroLogin from '../modals/cadastrarLogin.vue';

export default {
    components: {
        modalCadastroLogin,
    },
    name: 'loginApp',
    data() {
        return {
            store: useAppStore(),
            show1: false,
            email: '',
            password: '',
            logado: false,
            rules: {
                required: v => !!v || 'Campo obrigatório',
                email: v => /.+@.+\..+/.test(v) || 'E-mail inválido',
            }
        };
    },
    methods: {
        login() {
            if (!this.email || !this.password) {
                alert('Preencha os campos');
                return;
            }

            const usuario = this.store.cadastros.find(user =>
                user.email === this.email && user.senha === this.password
            );

            if (usuario) {
                alert('Logado');
                this.store.logado = true; 
            } else {
                alert('Email ou Senha Inválidos!');
            }
        },
        openModalCadastrar() {
            this.store.modalCadastro = true;
        },


    }
};
</script>
