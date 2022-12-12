function Header1(){
    return(<header header class="div-margin">
            <div>
                <img src="/public/Ubicacion.png" width="100" height="100" alt="Logo de empresa" />
                <h1>Restaurantes</h1>
            </div>
            <div>
                <nav>
                    <div class="nav-main">
                        <ul class="menu">
                                <li><a href="busqueda.html">Buscar</a></li>
                                <li><a href="restaurantes.html">Restaurantes</a></li>
                                <li><a href="nuevoResturante.html" >Registrar restaura</a></li>
                                <li><a href="index.html" >Inicion</a></li>
                         </ul>
                    </div>
                </nav>
            </div>
    </header>)
}

function Section1 (){
    return(<section id="section" class="div-margin">"
    <picture id="the-picture">
        <img class="the-img" src="/pubblic/En-todo-mundo.png" width="500" height="300" alt="Logo de Presentacion" />
        <img class="the-img" src="/public/Trato.png" width="500" height="300" alt="Logo de Presentacion" />
        <p>Somos un puente que conecta personas con las mejores experiencias gastronomicas<br>
        <strong>estamos felices de brindarle  los mejores restaurantes,</strong></br>
        cada dia nos procuramos de ofrecer las mejores experiencias
        </p>
    </picture>
</section>)
}

function Section2 (){
    return(<section>
        <div class="div-class">
            <form action="Controlador" method="POST">
                <label class="label" for="nombre">Nombre</label><br></br>
                <input class="campo" type="text" name="nombre" placeholder="nombre" /><br></br>
                <button class="button" type="submit" action="buscar" value="averiguar" >Buscar</button><br></br>
            </form>
        </div>
    </section>)
}

function Section3 (){
    const restaurantes = [["img/La_cuchara.png","La cuchara","El mejor restaurante en comida tradicional"]
                     ,["img/La_montaña.png","La montaña","Ofrecemos platos de muy buen sador"]
                     ,["img/La_sopa.png","La sopa","Las mejores platos de colombia, estamos especializados en la elaboracion de sopas tradicionales de colombia"]]
    
    let max= restaurantes.length -1
    let min=0
    let maxfor= restaurantes.length
    let valor= true
    if(valor){
        document.write("<div id=\"\" class=\"div-class\" >"+"<section>")
        for(let i=0; i<maxfor;i++){
            const arreglo= restaurantes[i]
            document.write("<div class=\"div-section\">"+"<img src=\""+arreglo[0]+"\" width=\"100\" heigth=\"100\" alt=\"\" ><br>"+"<h3>"+arreglo[1]+"</h3><br>"+"<p>"+arreglo[2]+"</p>"+"</div>")
            if(i==max){
                valor=false
            }
        }
        document.write("</div>"+"</section>")
    }
}