<template>
    <v-container fill-height>
        <v-row justify="center" align="center" style="min-height: 100vh;">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12 pa-6" rounded="lg">
                    <v-card-title class="text-center text-h5 font-weight-bold">Login</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Email" variant="outlined" prepend-inner-icon="mdi-email"
                                dense></v-text-field>

                            <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'" label="Senha" prepend-inner-icon="mdi-lock"
                                variant="outlined" dense counter hint="Mínimo de 8 caracteres"
                                @click:append="show1 = !show1"></v-text-field>

                            <v-btn color="primary" block class="mt-4" @click="login">Entrar</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '../store/app';

export default {
    name: 'loginApp',
    setup() {
        const store = useUserStore(); // Usa a store do Pinia

        const rules = {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`),
        };

        const show1 = ref(false);
        const email = ref('');
        const password = ref('');

        const login = () => {
            // Simulação de login, poderia ser uma requisição HTTP
            store.cadastrarUsuario("Usuário Teste", email.value, password.value, "Endereço Teste");
            console.log("Usuário cadastrado:", store.user);
        };

        return {
            rules,
            show1,
            email,
            password,
            login
        };
    }
};

</script>