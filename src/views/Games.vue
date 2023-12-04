<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="game in games" :key="game.id" class="game-item">
          <router-link :to="'/game/' + game.id" class="game-link">
            <ion-label class="game-label">
              {{ game.title }}
            </ion-label>
          </router-link>
        </ion-item>
        <ion-item class="back-button-item">
          <input type="button" value="Volver" @click="volverPaginaAnterior()" class="back-button">
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonItem, IonLabel } from '@ionic/vue';
import gameService from "../services/FootServices"

export default {
  components: {
    IonContent, IonPage, IonItem, IonLabel
  },
  data() {
    return {
      games: [],
      currentUrl: "",
      gameSelected: null
    };
  },
  created() {
    this.games = gameService.getJuegoByPlatform(this.$route.params.platform)
  },
  methods: {
    volverPaginaAnterior() {
      window.history.back();
    }
  },
};
</script>

<style scoped>
.game-item {
  border-bottom: 1px solid #eee;
}

.game-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.game-label {
  font-size: 18px;
  margin: 10px;
}

.back-button-item {
  margin-top: 20px; 
}

.back-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
