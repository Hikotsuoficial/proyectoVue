<template>
    <div class="footer">
        <div class="feedbackLinks">
            <ul class="footerNav">
                <li><strong> Contacto</strong></li>
                <li><a href="#">Terminos y condiciones</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
            <ul class="footerNav">
                <li><strong>Preguntas frecuentes(FAQ)</strong></li>
                <li><a href="#">¿Quienes somos?</a></li>
                <li><a href="#">¿Cómo puedo hacer parte?</a></li>
                <li><a href="#">¿Cómo buscar?</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
            <ul class="footerNav">
                <li><strong>Redes </strong> </li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">instagram</a></li>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </div>
        <div>
            <img src="../../assets/img/logoImg.png" class="logo" />
            <p class="copyrights">Copyrights 2022 - Erisc Valencia - Proyecto prospercity
                <br> Las imagenes usadas en este proyecto no me pertencen, es un proyecto educativo.     
            </p>
        </div>
    </div>
</template>

<style scoped>

strong{
    color:white;
    font-size: 1rem;
}
.footer{
    justify-content: center;
    align-items: center;
    background-color: #2f4f42;
    padding:70px 10px;
}

.footer .feedbackLinks{
    display: flex;
    justify-content: center;
}

.footer .feedbackLinks ul{
    padding: 0 90px;
}

.footer .copyrights{
    margin-top: 10px;
    padding: 10px 0;
    font-size: 0.7rem;
}

.footer .footerNav{
    padding: 20px 0;
    list-style: none;
    text-align: left;

}

.footer .footerNav li{
    padding: 1px;
    font-size: 0.8rem;
}

.footer .footerNav li a{
    color: white;
    text-decoration: none;
}

.footer .footerNav li a:hover{
   color:#e66f0f;
}

.logo{
    width: 180px;
    padding: 20px;
}

@media screen and (max-width: 768px) {
    .footer .feedbackLinks ul{
        padding: 0 30px;
    }
}

@media screen and (max-width: 425px) {
    .footer .feedbackLinks ul{
        padding: 0 5px;
    }
    .footer .footerNav li{
        font-size: 0.7rem;
    }
}

@media screen and (max-width: 320px) {
    .footer .feedbackLinks ul{
        display: flex;
        flex-wrap: wrap;
        padding: 0 2px;
    }
}

</style>
