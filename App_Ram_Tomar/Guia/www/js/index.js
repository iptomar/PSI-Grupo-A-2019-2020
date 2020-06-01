var container = document.getElementById('container');

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
      onDeviceReady: function () {
        this.receivedEvent('deviceready');


        var onSuccess = function (position) {
            var topo = document.getElementById('topo');
            var body = document.body;
            body.classList.add('overflow');

            let testeRoteiro; 

            //buscar o div criado no html
            var mapa = document.getElementById('mapid');
            //criar o mapa atraves da biblioteca da leaflet com a posiçao definida e zoom
            var mymap = L.map('mapid').setView([39.60360511, -8.40795278], 16);
            //.locate({setView: true, maxZoom: 16});
            var estado = 0;

            //criação dos eventos e suas funcoes para distinguir o estado online e offline
            document.addEventListener("offline", onOffline, false);


            function onOffline() {
                L.tileLayer('maps/{z}/{x}/{y}.png', {
                    maxZoom: 17,
                    minZoom: 15,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(mymap);
                alert('Entrou no modo Offline, vai encontrar funcionabilidades limitadas.', "Alert Title");

            }

            document.addEventListener("online", onOnline, false);

            function onOnline() {
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    minZoom: 15,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(mymap);
            }

            //verificação inicial para saber se o dispositivo encontra-se com conexão ou nao 
            if (navigator.onLine) {
                console.log("online");
                onOnline();
            } else {
                console.log("offline");
                onOffline();
            }

//TO-DO 
//-Se estiver longe, definir zona central dos pontos!
            //vai buscar a posição inicial quando inicia a app
            navigator.geolocation.getCurrentPosition(function (location) {
                var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
            });


            var jsonData;
            var control;
            //buscas do elementos criados no html
            var btPos = document.getElementById('btPosicao');
            var icon = document.getElementById('idIcon');
            var divInfo = document.getElementById('infoAdicional');
            var divFullImg = document.getElementById('fullImg');
//TESTES ROTEIROS
            var btRot = document.getElementById('btRoteiro');
            var divRot = document.getElementById('infoRoteiro');



            var br = document.createElement('br');

    

            //metodo de jQuery para ir buscar à API do BackOffice

            $.getJSON("http://188.251.50.68:3000/points/list", result => {
                // Iterar todos os pontos de interesse
                result.mesage.forEach(row => {
                    // Converter string de coordenadas para um array de coordenadas
                    let coordenadas = JSON.parse(`[${row.coordenadas}]`);

                    // Obter um array com as duas primeiras coordenadas
                    let coordCentral = [coordenadas[0], coordenadas[1]];

                    // Obter um array sem as duas primeiras coordenadas
                    let arryCoords = coordenadas.slice(2);

                    // Agrupar as coordenadas em pares
                    let poligCoords = [];
                    for (let i = 0; i < arryCoords.length; i += 2) {
                        poligCoords.push([arryCoords[i], arryCoords[i + 1]]);
                    }

                    // Desenhar o poligono do edificio
                    let polygon = L.polygon([poligCoords], {
                        color: 'red',
                        weight: '0.5',
                        fillOpacity: '0.2',
                    }).addTo(mymap);

                    // Criação de elementos para mostrar no popup quando se clica num icon ou poligno de um edificio
                    let divPopup = document.createElement('div');
                    divPopup.setAttribute('id', 'iDdivPopup');

                    let popUpTipo = document.createElement('p');
                    popUpTipo.setAttribute('id', 'idPopUpTipo');
                    popUpTipo.classList.add('item1');

                    let popUpNome = document.createElement('p');
                    popUpNome.setAttribute('id', 'idPopUpNome');
                    popUpNome.classList.add('item2');

                    let btWaypoint = document.createElement('button');
                    btWaypoint.setAttribute('id', 'idBtWaypoint');
                    btWaypoint.classList.add('btn', 'btn-warning', 'item4');
                    btWaypoint.textContent = "Traçar caminho  ";

                    let iShoes = document.createElement('i');
                    iShoes.classList.add('fas', 'fa-shoe-prints');
                    btWaypoint.appendChild(iShoes);

                    let greenIcon = new L.Icon({
                        iconUrl: './img/green.png',
                        shadowUrl: '../img/shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    });

                    // Onclick do traçar trajeto e criação da rota com metodos do leaflet routing map
                    // em que vai buscar as coordenadas do user e faz rota ate as coordernadas do icon clicado
                    btWaypoint.onclick = waypoint => {

                        removeRoutingControl();

                        control = L.Routing.control({
                            waypoints: [
                                L.latLng(current_position._latlng),
                                L.latLng(coordCentral)
                            ],
                            createMarker: function (i, wp, nWps) {
                                if (i === nWps - 1) {
                                    // here change the starting and ending icons
                                    return L.marker(wp.latLng, {
                                        icon: greenIcon // here pass the custom marker icon instance
                                    });
                                }
                            },
                            lineOptions: {
                                styles: [{ color: 'red', opacity: 1, weight: 5 }],
                            },
                            draggableWaypoints: false,

                        }).addTo(mymap);
                    }

                    //Pop, up done! 
                    popUpTipo.textContent = row.tipoEdif;
                    popUpNome.textContent = row.titulo;

                    divPopup.appendChild(popUpTipo);
                    divPopup.appendChild(popUpNome);

                    // Criação do icon dos edificios
                    let myIcon = L.icon({
                        iconUrl: 'icon.png',
                        iconSize: [30, 48],
                        iconAnchor: [15, 48],
                        popupAnchor: [-7, -45]
                    });

                    L.marker(coordCentral, { icon: myIcon }).addTo(mymap).bindPopup(divPopup);

                    // Atraves de jquery clicar nos detalhes de um edificio e ler as suas informações
                    let link = $('<a href="#"  class="item3" style="background-color: #17283B; color: white; text-align: center; margin-bottom: .5em; margin-left: .5em; padding: .75em; text-decoration: none; border-radius: .25rem; ">Detalhes  <i class="fas fa-info"></i></a>').click(function () {
                        body.classList.remove('overflow');
                        btPos.classList.add('hidden');
                        btRot.classList.add('hidden');

                        divInfo.classList.remove("hidden");
                        mapa.classList.add('hidden');
                        mymap.closePopup();

                        // Criação de elementos e adicionados ao html
                        let hr = document.createElement('hr');
                        hr.setAttribute('id', 'idHr');

                        let spanLinha = document.createElement('span');
                        spanLinha.setAttribute('id', 'idSpanLinha');
                        spanLinha.textContent = "";

                        let autoresTab = document.createElement('div');
                        autoresTab.setAttribute('id', 'idAutoresTab');
                        autoresTab.textContent = "Autores do projeto: ";

                        let pNomeEdificio = document.createElement('h2');
                        pNomeEdificio.setAttribute('id', 'idNomeEdificio');
                        let pLocalizacao = document.createElement('p');
                        pLocalizacao.setAttribute('id', 'idLocalizacao');
                        let pAutores = document.createElement('p');
                        pAutores.setAttribute('id', 'idAutores');
                        let pDescricao = document.createElement('p');
                        pDescricao.setAttribute('id', 'idDescricao');
                        let pTipoEdificio = document.createElement('h3');
                        pTipoEdificio.setAttribute('id', 'idTipoEdificio');
                        let pData = document.createElement('p');
                        pData.setAttribute('id', 'idData');

                        //atribuição dos valores existentes no json
                        //Done
                        pNomeEdificio.textContent = row.titulo;
                        pLocalizacao.textContent = coordCentral;


 //TO-do 
                        //autores! 
//NÃO FUNCIONAL! 
                      teste= $.getJSON(`http://188.251.50.68:3000/props/list`, function(json) {
                             console.log(teste);
                      pAutores.textContent =   teste.name; 
       });
                        //pAutores.textContent = "Teste"; 


                        pDescricao.textContent = row.descricao;
                        spanLinha.textContent = row.tipoEdif;
                        pTipoEdificio.appendChild(spanLinha);
                        pData.textContent = row.data;

                        divInfo.appendChild(pTipoEdificio);
                        divInfo.appendChild(pNomeEdificio);
                        divInfo.appendChild(pData);
                        divInfo.appendChild(pLocalizacao);
                        divInfo.appendChild(autoresTab);

                        // Dividir a string dos autores por virgulas e let autor a autor
                        pAutores.textContent.split(",").forEach(autor => {

                            let singleAutor = document.createElement('p');
                            singleAutor.setAttribute('id', 'idSingleAutors');
                            singleAutor.textContent = autor;

                            divInfo.appendChild(singleAutor);
                        });

                        divInfo.appendChild(hr);
                        divInfo.appendChild(pDescricao);

                        let divRow = document.createElement('div');
                        divRow.setAttribute('id', 'idDivRow');
                        divRow.setAttribute('class', 'row');

                        $.getJSON(`http://188.251.50.68:3000/images/searchgetimage?id=${row.id}`, images => {
                            images.mesage.forEach(imagem => {
                                let divColMd = document.createElement('div');
                                divColMd.setAttribute('id', 'idDivColMd');
                                divColMd.setAttribute('class', 'col-md-4');
                                divColMd.setAttribute('class', 'content');

                                let divThumb = document.createElement('div');
                                divThumb.setAttribute('class', 'thumbnail');
                                divThumb.setAttribute('id', 'idDivThumb');

                                let divCaption = document.createElement('div')
                                divCaption.setAttribute('id', 'idDivCaption');
                                divCaption.setAttribute('class', 'caption');
                                divCaption.setAttribute('class', 'rounded-bottom');

                                let img = document.createElement('img');
                                let imgLegenda = document.createElement('p');
                                let imgAutor = document.createElement('p');

                                //lida a path da imagem para a pasta das imagens
                                img.src = `data:image/png;base64,${imagem.img}`;
                                img.setAttribute('id', 'idImagens');
                                img.setAttribute('class', 'rounded');

                                //atribuição dos valores existentes no json
                                imgLegenda.textContent = imagem.Legenda;
                                imgAutor.textContent = imagem.AutorFonte;

                                divCaption.appendChild(imgLegenda);
                                divCaption.appendChild(imgAutor);

                                divThumb.appendChild(img);
                                divThumb.appendChild(divCaption);

                                divColMd.appendChild(divThumb);

                                divRow.appendChild(divColMd);

                                divInfo.appendChild(divRow);
                            });
                        });
                    })[0];

                    divPopup.appendChild(link);
                    divPopup.appendChild(br);
                    divPopup.appendChild(btWaypoint);

                    polygon.bindPopup(divPopup);
                });
            });
       

            //funcap para remover painel de direções gerado automaticamente para o trajeto
            function removeRoutingControl() {
                if (control != null) {
                    mymap.removeControl(control);
                    control = null;
                }
            };

            //função para abrir a imagem no ecra inteiro com opção de zoom
            function ecraImagem(imgP) {

                var topo = document.getElementById('topo');
                topo.classList.add('hidden');
                divInfo.classList.add("hidden");

                divFullImg.classList.remove('hidden');
                //é criado um canvas com a ajuda do ficheiro img-touch-canvas.js usar touch gestures no dispositivo
                var gesturableImg = new ImgTouchCanvas({
                    canvas: document.getElementById('mycanvas'),
                    path: "" + imgP + "",
                });
                document.body.style.background = "#000000";
            }



            /* Busca o div do Acerca e o Buttão do sobre e faz o onclick*/
            var divAcerca = document.getElementById('idAcerca');
            var btSobre = document.getElementById('idSobreBt');
            var btRot = document.getElementById('btRoteiro');
            var btHome = document.getElementById('btHome');

            btSobre.onclick = mostraSobre => {
                divAcerca.classList.remove('hidden');
                mapa.classList.add('hidden');
                divInfo.classList.add('hidden');
                btPos.classList.remove('overflow');
                btPos.classList.add('hidden');

                 btRot.classList.add('hidden');

                body.classList.remove('overflow');
            }
            btRot.onclick = mostraRoteiros => {
              //  divAcerca.classList.remove('hidden');
                mapa.classList.add('hidden');
                //divInfo.classList.add('hidden');
                btPos.classList.add('hidden');

            btRot.classList.add('hidden');

                body.classList.remove('overflow');

            }
            btHome.onclick = mostraInicio => {
                location.reload();

        }
       
            /****************************************************************/

            var idP = document.createElement('p');
            divInfo.appendChild(idP);

        
            //trabalha o evento do botao dos dispositivos para voltar atras
            document.addEventListener("backbutton", onBackKeyDown, false);
            function onBackKeyDown(e) {

                //sair da aplicação quando esta está no mapa
                if (mapa.classList.contains('hidden') === false) {

                    navigator.app.exitApp();

                    /* *************** para sair da imagem ***************  */
                } else if (topo.classList.contains('hidden') === true) {

                    window.scrollTo(0, 0);
                    document.body.style.background = "#F2F2F2";
                    topo.classList.remove('hidden');
                    divInfo.classList.remove('hidden');
                    divFullImg.classList.add('hidden');

                    /******************************************************* */
                    /* *********** sair do Sobre para o mapa  *************  */
                } else if (divAcerca.classList.contains('hidden') === false) {
                    // imgFull.innerHTML = "";

                    divInfo.innerHTML = "";
                    e.preventDefault();
                    window.scrollTo(0, 0);
                    btPos.classList.remove('hidden');
                    icon.classList.remove('hidden');
                    mapa.classList.remove('hidden');
                    divInfo.classList.add('hidden');
                    divAcerca.classList.add('hidden');
                    body.classList.add('overflow');
                    mymap.closePopup();
                    /******************************************************* */
                } else {
                    /* ***** sair da informação do edificio para o mapa **** */
                    //imgFull.innerHTML = "";

                    divInfo.innerHTML = "";
                    e.preventDefault();
                    window.scrollTo(0, 0);
                    btPos.classList.remove('hidden');
                    icon.classList.remove('hidden');
                    mapa.classList.remove('hidden');
                    divInfo.classList.add('hidden');
                    body.classList.add('overflow');
                    mymap.closePopup();
                    /******************************************************* */
                }
            }

            setInterval(5000);
            mymap.locate({ setView: true, maxZoom: 16 });

            /* =========  Função para o butão de ir para a posição do marker ===========*/
            $('.refreshButton').on('click', function () {
                mymap.locate({ setView: true, maxZoom: 17 });
            });
            mymap.on('locationfound', onLocationFound);
            function onLocationFound(e) {
                console.log(e);
                // e.heading will contain the user's heading (in degrees) if it's available,
                // and if not it will be NaN. This would allow you to point a marker in the same direction the user is pointed. 
                L.marker(e.latlng).addTo(mymap);
            }
            /* ======================================================================== */


            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // placeholders for the L.marker and L.circle representing user's current position and accuracy    
            var current_position;

            //funcoes que vao ler a posição do utilizador e marcar no mapa e remover a posição anterior
            function onLocationFound(e) {
                // if position defined, then remove the existing position marker and accuracy circle from the map
                if (current_position) {
                    mymap.removeLayer(current_position);

                }
                current_position = L.marker(e.latlng).addTo(mymap);
            }

            function onLocationError(e) {
                alert(e.message);
            }

            mymap.on('locationfound', onLocationFound);

            // wrap map.locate in a function    
            function locate() {
                mymap.locate({ setView: false, maxZoom: 16 });
                //var marker = L.marker(latlng).addTo(mymap);
            }


            // call locate every 3 seconds... forever
            setInterval(locate, 3000);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////



        }

        var onError = function (error) {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 10000, enableHighAccuracy: true });



    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
    }
};


app.initialize();