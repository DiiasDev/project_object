<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card height="200">
                    <v-toolbar class="text-white" image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
                        <v-btn icon="mdi-menu"></v-btn>

                        <v-toolbar-title text="Toolbar"></v-toolbar-title>

                        <v-btn icon="mdi-export"></v-btn>
                    </v-toolbar>
                </v-card>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { useAppStore } from '@/store/app';
export default{
    name: 'homePage',
    components:{

    },
    data(){
        return{
            store: useAppStore()
        }
    }
}
</script>