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
          <li><label for="jobSelection"><strong> Escribe o Elije la profesion</strong></label></li>
          <li>
            <input list="items" name="jobSelection" class="jobSelect" v-model="job" required>
            <datalist id="items">
              <option v-for="(jobs, i) in jobsProfile" :key="i">{{ jobs.job }}</option>
            </datalist>
          </li>
          <li><label for="jobPrice"><strong> Valor del trabajo que buscas (precio) </strong></label></li>
          <li>
          <input type="number" name="jobPrice" class="jobSelect" placeholder="0" v-model="price" required>
          </li>
          <li><label for="jobUbication"><strong> Ubicación o ciudad </strong></label></li>
          <li>
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

.profiles .asideSearch {
  padding-left:15px;
  padding-right: 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: #444444;
  margin: 0 auto;
  width: 25vw;
}

.profiles .asideSearch .profileSectionTitle{
  margin-top: 10px;
  font-weight: 700;
  font-size: 1.5rem;
  color: #444444;
}

.profiles .divSearch{
  border:1px solid rgba(123, 153, 52, 0.267);
  background-color: rgba(135, 158, 82, 0.082);
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
}

.profiles .divSearch .jobSelect{
    text-align: center;
    height: 45px;
    font-weight: 400;
    border: 1px solid rgba(109, 109, 109, 0.507);
    border-radius: 5px;
    padding: 0 10px;
    width: 270px;
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

.profiles .divSearch ul li{
  margin: 5px;
}

.chooseProfileCard{
  width: 75vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.chooseProfileCard .chooseProfile{
  border:5px solid #ffffff;
  box-shadow: 0px 1px 2px #c7c7c7;
  color: #444444;
  padding: 10px 10px;
  width: 250px;
  display: flex;
  margin: 10px;
}

 .chooseProfileCard .chooseProfile .titleJob{
  font-weight: 600;
  font-size: 1.5rem;
  color: #dd610e;
}

.chooseProfileCard .chooseProfile .pricejob{
  font-size: 0.8rem;
}

.chooseProfileCard .chooseProfile img{
  width: 250px;
  box-shadow: inset 3px 3px 10px 2px rgb(202, 202, 202);
}

.chooseProfileCard .chooseProfile a{
  text-decoration: none;
  color: #444444;
}

@media screen and (max-width: 1024px) {
    .profiles .divSearch .jobSelect{
        width: 280px;
    }
    .profiles .asideSearch {
      width: 350px;
    }
}

@media screen and (max-width: 768px) {
    .profiles .divSearch .jobSelect{
        width: 220px;
    }

    .chooseProfileCard .chooseProfile{
      width: 300px;
    }
}

@media screen and (max-width: 425px) {
  .profiles{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* background-image: url('../../assets/img/background.jpeg'); */
  }

}

</style>
