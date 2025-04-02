<template>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Itens</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
            <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
        <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-container style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
        <v-card-text class="text-white">
            The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
    </v-container>

    <v-footer class="text-center d-flex justify-center align-center" color="indigo-lighten-1"
        style="height: 25px; width: 100%; font-size: 8px; padding: 0; position: absolute; bottom: 0;">
        <div class="text-caption opacity-80">
            {{ new Date().getFullYear() }} — <strong>Gabriel Dias</strong>
        </div>
    </v-footer>
</template>



<script>
import { useAppStore } from '../../store/app';

export default {
    name: 'homePage',
    data() {
        return {
            store: useAppStore(),
            drawer: false,
            group: null,
            items: [
                { title: 'Lista de Usuários', value: 'Lista de Usuários' },
                { title: 'Cadastrar Itens', value: 'Cadastrar' },
                { title: 'Lista de itens', value: 'Lista de itens' },
            ]
        };
    },
    watch: {
        group() {
            this.drawer = false;
        }
    }
};
</script>
