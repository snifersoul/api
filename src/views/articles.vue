<template>
    <ion-page>
      <ion-content :fullscreen="true">
        
        <h1>{{ $route.params.id }}</h1>
       
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      return {};
    },
  });
  </script>