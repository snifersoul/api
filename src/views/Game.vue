<template>
    <ion-page>
      <ion-content :fullscreen="true" class="custom-centering">
  
        <ion-list>
          <ion-item>
            <ion-label>
              <h1 class="game-title">{{ gameSelected.title }}</h1>
            </ion-label>
          </ion-item>
          <ion-item>
            <img class="game-image" :src="gameSelected.portrait" :alt="gameSelected.title">
          </ion-item>
          <ion-item>
            <ion-label>
              <p class="section-title">Empresa:</p>
              <p>{{ gameSelected.company }}</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <p class="section-title">Año:</p>
              <p>{{ gameSelected.year }}</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <p class="section-title">Género:</p>
              <p>{{ gameSelected.genre }}</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <p class="section-title">Categoría:</p>
              <p>{{ gameSelected.category }}</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <p class="section-title">Plataforma:</p>
              <p>{{ gameSelected.platform }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-item>
          <input type="button" value="Volver" @click="volverPaginaAnterior()" class="back-button">
        </ion-item>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonPage, IonItem, IonLabel } from '@ionic/vue';
  import gameService from "../services/FootServices"
  import { useRoute } from 'vue-router';
  import { onMounted } from 'vue';
  
  export default {
    components: {
      IonContent, IonPage, IonItem, IonLabel
    },
    setup() {
      const route = useRoute()
      const gameSelected: any = gameService.getJuegoById(route.params.id)
  
      // Función ejecutada después de que el componente se monta
      onMounted(() => {
        console.log('Component mounted!');
      });
  
      return {
        gameSelected
      };
    },
    methods: {
      volverPaginaAnterior() {
        window.history.back();
      }
    },
  };
  </script>
  
  <style scoped>
  .custom-centering {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .game-title {
    font-size: 24px;
    margin: 10px 0;
  }
  
  .game-image {
    max-width: 100%; /* La imagen se ajustará al ancho del contenedor */
    height: auto; /* Mantendrá la relación de aspecto */
    max-height: 300px; /* Ajusta este valor según tus preferencias */
  }
  
  .section-title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .back-button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }
  </style>
  