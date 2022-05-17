<template>
    <div class="registro">
        <h1 class="centralTitle">Nos alegra que nos elijas</h1>
        <div>
            <h1 class="registerTitle">REGÍSTRATE</h1>
        </div>
        <div>
        <div class="registerContainer">
            <form action="#" class="registerForm">
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
            </form>
        </div>
        </div>
    </div>
</template>

<style scoped>
.registro{
    margin: 0 auto;
    padding: 30px 10px;
    color:#353535;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    /* background-color: rgba(135, 158, 82, 0.082); */
}

.registro .registerContainer{
    margin:10px 0;
    padding: 10px;
}
.registro .registerContainer .registerForm{
    padding: 10px;
}

.registerTitle{
    font-size: 2.9rem;
    font-weight: 800;
}

.registro .registerContainer .tooltip{
    font-weight: 700;
}

.registro .registerContainer .inputRegister{
    text-align: center;
    height: 45px;
    width: 320px;
    font-weight: 400;
    border: 2px solid rgba(109, 109, 109, 0.507);
    border-radius: 5px;
}

.registro .registerContainer .registerForm ul{
    list-style: none;
}

.registro .registerContainer .registerForm ul li{
    list-style: none;
    margin-top: 3px;
    padding-top: 5px;
}

.registro .registerContainer .btnRegister{
    height: 50px;
    width: 120px;
    border: none;
    color:white;
    border-radius: 7px;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 20px;
    background-color: #2d4f5c;
}

@media screen and (max-width: 320) {
.registro .registerContainer .inputRegister{
    text-align: center;
    height: 45px;
    width: 290px;
    font-weight: 400;
    border: 2px solid rgba(109, 109, 109, 0.507);
    border-radius: 5px;
}
}

</style>
