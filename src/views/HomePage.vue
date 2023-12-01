<template>
   <ion-page>
    
    <ion-header :translucent="true">
      <h1>Noticia</h1>
      
    </ion-header>
  
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="noticia in noticias" :key="noticia.author" @click="selectNew(noticia.url)">
          <ion-label>
            <p>{{ noticia.author }}</p>
          </ion-label>
        </ion-item>
      </ion-list>     
      <ion-modal :isOpen="open">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="open=false">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Welcome</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <new-app :newUrl="currentUrl"/>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons,   IonButton,
  IonModal,  IonInput } from '@ionic/vue';
import FootServices from '@/services/FootServices';
import NewApp from '@/componentes/NewApp.vue';

export default {
  components:{
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton,
    IonModal,  IonInput, NewApp
  },
  data() {
    return {
      noticias: [],
      currentUrl:"",
      open: false
    };
  },
  async created() {
    try {
      const response = await FootServices.getTitulares();
      this.noticias = response.articles;
      console.log(this.noticias)
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    selectNew(url){
      this.currentUrl = url;
      this.open=true
      console.log(this.currentUrl)
    }
  }
};
</script>

<style scoped>

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
#imagen{
  background-image: url('assets/imagen-local.jpg'); background-size: cover; width: 100%; height: 200px;
}
</style>
