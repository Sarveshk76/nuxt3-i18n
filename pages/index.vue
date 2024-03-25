<template>
    <div class="mt-5">
        <form>
            <v-row justify="center">

                <v-col cols="3">
                    <v-select label="Select Language" :items="['en', 'fr', 'es']" variant="outlined" v-model="locale"></v-select>
                </v-col>
            
            </v-row>

            <v-card class="mx-5" variant="outlined" elevation="3">
                <v-card-title class="text-center">
                    {{ $t("heading1") }}
                </v-card-title>
                <v-card-text class="text-center">
                    {{ $t("desc1") }}
                </v-card-text>
            </v-card>

        </form>
    </div>
</template>
<script setup>
const { locale } = useI18n()
</script>