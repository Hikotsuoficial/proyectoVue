<template>
    <div class="contactContainer">
        <div>
            <h1 class="contactTitle">¿Quiénes Somos?</h1>
        </div>
        <div>
            <div class="registerContainer">
                <div class="descriptionContainer">
                    <p class="description">
                        Somos una empresa que te impulsa a trabajar o expande tu trabjao,<br> <strong>si lo haces bien</strong> eres bienvenido.
                    </p>
                    <img src="@/assets/img/ponitin2.png" alt="Persona señalando">
                </div>
                <!-- <form action="#" class="registerForm">
                    <ul>
                        <li><label class="tooltip" for="email">E-mail</label> </li>
                        <li><input class="inputRegister" type="email" placeholder="E-mail" name="email" required></li>
                        <li><label class="tooltip" for="passwordOne">Contraseña</label></li>
                        <li><input class="inputRegister" type="password" placeholder="Contraseña" name="passwordOne" required> </li>
                        <li><label class="tooltip" for="passwordTwo">Re-escribe tú contraseña</label> </li>
                        <li><input class="inputRegister" type="password" placeholder="Contraseña" name="passwordTwo" required></li>
                        <li> <small> Al registrarte aceptas los términos y condiciones de nuestro sitio web</small></li>
                        <li><button class="btnRegister" @click.prevent="">Registrar</button></li>      
                    </ul>
                </form> -->
            </div>
            <div class="registerContainer">
                <div>
                    <p class="description">
                        Tambien hacemos que tú vida sea mas facil, porque tienes a la mano una experiencia
                        y es una persona sabe de su arte. Sal al paso rapido asi como un app de transporte pero 
                        pero tus susceso cotidianos.
                        <strong>si lo haces bien</strong>  eres bienvenido.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.contactContainer{
    color:#353535;
}

.contactContainer .contactTitle {
    font-size: 2.9rem;
    font-weight: 800;
}

.contactContainer .registerContainer{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px 0;
    background-color: #3f3f3f15;
}

.contactContainer .registerContainer .descriptionContainer{
    display: flex;
    align-items: center;
}

.contactContainer .registerContainer .descriptionContainer .description{
    font-weight: 400;
    font-size: 1.5rem;
}

.contactContainer .registerContainer .descriptionContainer img{
    width: 300px;
}
</style>
