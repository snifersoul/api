<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="header-title">JUEGOS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="content-container">
      <ion-list class="platform-list">
        <ion-item v-for="platform in platforms" :key="platform" class="platform-item">
          <router-link :to="'/games/' + platform" class="platform-link">
            <ion-label class="platform-label">
              {{ platform }}
            </ion-label>
          </router-link>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton, IonModal, IonInput } from '@ionic/vue';

export default {
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton, IonModal, IonInput
  },
  data() {
    return {
      platforms: ['PC', 'Nintendo Switch', 'Multi-platform', 'Game Boy', 'NES', 'PlayStation 4']
    };
  },
};
</script>

<style scoped>

.header-title {
  font-size: 24px;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.platform-list {
  width: 100%;
  max-width: 400px; 
}

.platform-item {
  border-bottom: 1px solid #eee;
}

.platform-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.platform-label {
  font-size: 18px;
  margin: 10px;
}
</style>

