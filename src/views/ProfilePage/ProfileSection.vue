<template>
  <div class="profiles">
    <div class="asideSearch">
      <div class="titleSectionAside">
        <h1 class="profileSectionTitle">Vamos al grano...</h1>
        <h3 class="">Filtra tú búsqueda.</h3>
      </div>
      <div class="divSearch">
        <form action="#" class="formSearch">
        <ul>
          <li>
            <label for="jobSelection"><strong> Escribe o Elije la profesion</strong></label>
            <input list="items" name="jobSelection" class="jobSelect" v-model="job" required>
            <datalist id="items">
              <option v-for="(jobs, i) in jobsProfile" :key="i">{{ jobs.job }}</option>
            </datalist>
          </li>
          <li>
          <label for="jobPrice"><strong> Valor del trabajo que buscas (precio) </strong></label>
          <input type="number" name="jobPrice" class="jobSelect" placeholder="0" v-model="price" required>
          </li>
          <li>
          <label for="jobUbication"><strong> Ubicación o ciudad </strong></label>
          <input list="ubicationCity" name="jobUbication" class="jobSelect" v-model="city" required>
            <datalist id="ubicationCity">
              <option  v-for="(city, j) in ubicationCity" :key="j" >{{ city.city }}</option>
            </datalist>
          </li>
          <li>
          <button class="btnSearch" @click.prevent="searchPersonProfile"> Buscar </button>
          </li>
        </ul>
        </form>
      </div>
    </div>
    <div class="chooseProfileCard" >     
        <div class="chooseProfile" v-for="(p, index) in perfiles" :key="index">
          <a href="#">
            <img :src="p.src" alt="Foto de perfil " />
            <p> {{ p.name }} {{ p.lastname }} </p> 
            <p class="titleJob"> {{ p.profesion }} </p> 
            <p class="pricejob">Servicio promedio ${{ p.tarifa }} </p>
          </a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
  el: 'ubicationCity',
  data() {
    return {
      perfiles: [
        { name: 'Juan', lastname: 'Valencia', profesion: 'Carpintero', Edad: '28', country: 'Medellín', tarifa: 50000, src: 'https://www.quicoto.com/wp-content/uploads/2016/07/fotografia-perfil-oficina-2.jpg' },
        { name: 'Carolina', lastname: 'Mina', profesion: 'Enfermera', Edad: '41', country: 'Cali', tarifa: 80000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Marcela', lastname: 'Álvarez', profesion: 'Profesora', Edad: '31', country: 'Barranquilla', tarifa: 70000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Erick', lastname: 'Martinez', profesion: 'Cantante', Edad: '37', country: 'Bogota', tarifa: 4000 , src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Ramon', lastname: 'Valencia', profesion: 'Mesera', Edad: '28', country: 'Pereria', tarifa: 50000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Carlos', lastname: 'Mina', profesion: 'Jardinero', Edad: '41', country: 'Pasto', tarifa: 80000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Lina', lastname: 'Álvarez', profesion: 'Editor', Edad: '31', country: 'Cali', tarifa: 70000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Andrea', lastname: 'Martinez', profesion: 'Plomero', Edad: '37', country: 'Bucaramanga', tarifa: 4000 , src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Juliana', lastname: 'Valencia', profesion: 'Pintor', Edad: '28', country: 'Chocó', tarifa: 50000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Marllory', lastname: 'Mina', profesion: 'Abogada', Edad: '41', country: 'Cartagena', tarifa: 80000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Ana Maria', lastname: 'Álvarez', profesion: 'Estilista', Edad: '31', country: 'Medellín', tarifa: 70000, src: require('@/assets/img/mujertrabajo.jpg') },
        { name: 'Karla', lastname: 'Martinez', profesion: 'Oficios Varios', Edad: '37', country: 'Manizales', tarifa: 4000 , src: require('@/assets/img/mujertrabajo.jpg') },
      ],
    jobsProfile: [
      {job: 'Carpintero'},
      {job: 'Albañil'},
      {job: 'Fontanero'},
      {job: 'Soldador'},
      {job: 'Pintor'},
      {job: 'Sastre'},
      {job: 'Pastor'},
      {job: 'Agricultor'},
      {job: 'Carnicero'},
      {job: 'Lechero'},
      {job: 'Cocinero'},
      {job: 'Lavandero'},
    ],
    ubicationCity: [
      {city: 'Medellín'},
      {city: 'Cali'},
      {city: 'Bogotá'},
      {city: 'Manizales'},
      {city: 'Quibdó'},
      {city: 'Santa Marta'},
      {city: 'Cartagena'},
      {city: 'Montería'},
      {city: 'Pereira'},
      {city: 'Pasto'},
    ],
    job: '',
    price: 0,
    city: '',
    }
  },
  methods: {
    searchPersonProfile() {

      if (this.city === '' || this.price <= 0 || this.city === '') {
        // alert('Llena todos los campos para realizar la búsqueda')
        // this.job = '';
        // this.price = 0;
        // this.city = '';
      }else {
        console.log(this.city + " " + this.price + " " + this.job);
        this.job = '';
        this.price = 0;
        this.city = '';
      }
    }
  },
})

</script>

<style scoped>
/* ocultar el arrow de input number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.profiles{
  display: flex;
  justify-content: center;
  /* background-image: url('../../assets/img/background.jpeg'); */
}

.asideSearch .jobSelect {
  height: 40px;
  width: 300px;
  padding-left:15px;
  padding-right: 15px;
  border:none;
  /* border-top-left-radius: 5px;
  border-bottom-left-radius: 5px; */
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #ffffff; 
  border:1px solid rgba(123, 153, 52, 0.267);
  margin: 10px 0;
}

.profiles .divSearch{
  margin: 20px 0px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profiles .divSearch ul li{
  margin: 5px;
}

.divSearch .formSearch{
  border:1px solid rgba(123, 153, 52, 0.267);
  background-color: rgba(135, 158, 82, 0.082);
  width: 400px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}

.profiles .asideSearch{
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 25vw;
  border: 1px solid red;
  color: #444444;
  margin: 5px auto;
}

.chooseProfile{
  /* background-color:#2f4f42; */
  border:5px solid #ffffff;
  box-shadow: 0px 1px 2px #c7c7c7;
}

.chooseProfile a{
  text-decoration: none;
  color: #444444;
}

.asideSearch .profileSectionTitle{
  margin-top: 10px;
  font-weight: 700;
  font-size: 1.5rem;
  color: #444444;
}

.profiles .chooseProfileCard{
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  color: #444444;
  flex-wrap: wrap;
  width: 80vw;
  padding: 10px 10px;
  /* height: 800px;
  overflow-x: hidden;
  overflow-y: auto; */
}

.chooseProfile .titleJob{
  font-weight: 600;
  font-size: 1.5rem;
  color: #dd610e;
}

.chooseProfile .pricejob{
  font-size: 0.8rem;
}

.chooseProfileCard .chooseProfile{
    margin: 10px;
    padding-bottom: 10px;
    /* border:1px solid #5c5c5c; */
    /* box-shadow: 0px 1px 6px #b8b8b8; */
    /* border-radius: 4px; */
}
.chooseProfileCard .chooseProfile img{
  width: 250px;
  box-shadow: inset 3px 3px 10px 2px rgb(202, 202, 202);
  
}

.profiles .divSearch .btnSearch{
  padding:10px;
  height: 50px;
  width: 100px;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 10px;
  border:none;
  border-radius: 6px;
  color:white;
  background-color: #2d4f5c;

}

@media screen and (max-width: 1024) {
  
}

</style>
