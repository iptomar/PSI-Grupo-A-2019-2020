var express = require('express');
var router = express.Router();
const {file } = require('../helpers')
/* GET home page. */
router.get('/',async function(req, res, next) {
    var d = new Date();
await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //res.render('index', { title: 'Express' });
  res.send(
    [
      {
          "id": "1",
          "NomeEdificio": "Palácio da Justiça",
          "Localizacao": "Várzea Grande",
          "Autores": [
              "Januário Godinho de Almeida - Arquiteto"
          ],
          "Data": "1951",
          "TipoEdificio": "Edifício Público",
          "Descricao": "O edifício foi inaugurado em 1959. O piso térreo do edifício é elevado através de uma escadaria, e apresenta arcada com galeria; no piso nobre, abriram-se janelas de sacada no intercolúnio. Na construção sobressai o calcário dourado da região, profusamente aplicado em paredes, pavimentos e escadas. Os pavimentos beneficiaram da aplicação de revestimentos de madeira e mármore. No topo central, entre duas colunas, colocou-se um tríptico a fresco, da autoria de Guilherme Camarinha. A utilização de revestimentos cerâmicos policromados nas zonas públicas do edifício expressa uma prática comum na arquitetura judicial deste período. O edifício inclui, nas paredes laterais do pátio interior, painéis cerâmicos decorativos, com motivos alusivos à função simbólica do edifício, desenhados por Jorge Barradas.",
          "Imagens": [
              {
                  "Legenda": "Tribunal da Comarca de Tomar: Vista exterior, 2017",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/A_PalacJustica/_MG_5300.jpg"
              },
              {
                  "Legenda": "Tribunal da Comarca de Tomar: Fonte e estrutura da sala de audiências, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/A_PalacJustica/_MG_6587.jpg"
              },
              {
                  "Legenda": "Tribunal da Comarca de Tomar: Pátio interno, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/A_PalacJustica/_MG_6591.jpg"
              },
              {
                  "Legenda": "Tribunal da Comarca de Tomar: Fonte e Sala de audiências, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/A_PalacJustica/_MG_6592.jpg"
              },
              {
                  "Legenda": "Tribunal da Comarca de Tomar: Vista exterior, 2017",
                  "AutorFonte": "António Passaporte, Arquivo Fotográfico Silva Magalhães, C.M.T.",
                  "Path": "../www/img/2_Edif_Publicos/A_PalacJustica/27.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60092678,
              -8.41364175
          ],
          "Coordernadas": [
              [
                  39.60100945,
                  -8.41395021
              ],
              [
                  39.60114998,
                  -8.4134835
              ],
              [
                  39.60091989,
                  -8.41336763
              ],
              [
                  39.60090529,
                  -8.4134084
              ],
              [
                  39.60086423,
                  -8.41339123
              ],
              [
                  39.60084935,
                  -8.4134295
              ],
              [
                  39.60081959,
                  -8.41341555
              ],
              [
                  39.60073775,
                  -8.41367126
              ],
              [
                  39.60077247,
                  -8.41369307
              ],
              [
                  39.60074299,
                  -8.4137814
              ],
              [
                  39.60078019,
                  -8.41380394
              ],
              [
                  39.60077109,
                  -8.41383398
              ]
          ]
      },
      {
          "id": "2",
          "NomeEdificio": "Colégio Nuno Álvares (CNA)",
          "Localizacao": "Praceta Dr. Raúl António Lopes, Rua Coronel Garcês Teixeira, Rua D. Lopo Dias de Sousa",
          "Autores": [
              "Amândio Pinto Marcelino - Arquiteto",
              "João Pedro de Figueiredo Mota Lima - Arquiteto",
              "Raúl dos Santos Coito - Agente Técnico de Construção Civil"
          ],
          "Data": "1952-1969",
          "TipoEdificio": "Edifício Público",
          "Descricao": "A localização das novas instalações do CNA, outrora num edifício localizado na Rua dos Arcos, foi fixada no limite Poente da área de expansão do Plano Geral de Urbanização de Tomar. A instituição de ensino funcionou nestas instalações entre 1951 e 1981, ano do seu encerramento enquanto colégio privado. O alçado principal sustém uma plataforma, que se destaca do volume, em laje de betão armado assente sobre pilotis. No primeiro piso, rasga-se um vão de tira que enfatiza o recorte horizontal do volume. Este corpo é rematado por uma “cobertura borboleta”, visível no topo da extensão Sul do edifício. O corpo central do edifício CNA desenvolve-se em ligeira curvatura sobre a Praceta Raúl António Lopes, destacando-se pela presença de uma torre sineira no extremo Norte. O piso térreo, que inclui uma arcada a todo o comprimento, acolhia o acesso principal e concentrava as funções administrativas do estabelecimento de ensino. Era também no corpo central que se localizavam os acessos verticais às alas Norte e Sul. No pátio interior previu-se a instalação de um ginásio/salão de festas e de uma capela (não foi construída), que assumiram uma posição centralizada, axial em relação ao átrio de entrada. Estes equipamentos, projetados na década de sessenta, destinavam-se a servir a comunidade escolar em edifícios autónomos e volumetricamente destacados.",
          "Imagens": [
              {
                  "Legenda": "Colégio Nun’Alvares: acessos, c. 1960",
                  "AutorFonte": "António Passaporte, Arquivo Fotográfico Silva Magalhães, C.M.T.",
                  "Path": "../www/img/2_Edif_Publicos/B_CNA/_MG_9152.jpg"
              },
              {
                  "Legenda": "Colégio Nun’Alvares: Aula de ginástica no pátio, c. 1960",
                  "AutorFonte": "António Passaporte, Arquivo Fotográfico Silva Magalhães, C.M.T.",
                  "Path": "../www/img/2_Edif_Publicos/B_CNA/_MG_9153.jpg"
              },
              {
                  "Legenda": "Colégio Nuno’Alvares: Vista exterior, c. 1960",
                  "AutorFonte": "António Passaporte, Arquivo Fotográfico Silva Magalhães, C.M.T.",
                  "Path": "../www/img/2_Edif_Publicos/B_CNA/_MG_9213.jpg"
              },
              {
                  "Legenda": "Colégio Nun’Alvares: Alçado principal, 1952",
                  "AutorFonte": "Arquivo Municipal de Tomar",
                  "Path": "../www/img/2_Edif_Publicos/B_CNA/PLANTAS_263.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60513022,
              -8.40528399
          ],
          "Coordernadas": [
              [
                  39.60538647,
                  -8.40573263
              ],
              [
                  39.60482052,
                  -8.40562248
              ],
              [
                  39.60465492,
                  -8.40476918
              ],
              [
                  39.60526551,
                  -8.40456855
              ],
              [
                  39.60580225,
                  -8.40481675
              ]
          ]
      },
      {
          "id": "3",
          "NomeEdificio": "Piscina Municipal Vasco Jacob",
          "Localizacao": "Zona desportiva junto ao Estádio Municipal de Tomar",
          "Autores": [
              "Jorge Ribeiro de Oliveira - Arquitecto (Autor do Anteprojecto, 1951)",
              "José Nunes da Costa Redondo - Engenheiro Civil (Autor do Projecto Técnico, 1955-1957)"
          ],
          "Data": "1951-1957",
          "TipoEdificio": "Edifício Público",
          "Descricao": "A piscina municipal Vasco Jacob foi inaugurada a 9 de setembro de 1961. O projeto compreendeu a construção de dois tanques, em betão armado, um de maior dimensão (33,3 m × 15,0 m) para adultos, e outro, adjacente e destinado ao público infantil (7 m × 15 m). Na construção, que acolhia as instalações de apoio e onde se estabeleceu a entrada no recinto, funcionava o bar e os balneários. Este edifício térreo, com cobertura de uma água, foi implantado sobre uma plataforma elevada em relação aos tanques. O projeto procurou sublinhar a horizontalidade do volume edificado, através da extensão do piso em terraço/esplanada. No projeto foram também incluídos o edifício de apoio a banhistas e a estação de tratamento e bombagem da piscina. A solução compositiva do alçado Poente, que se elevava sobre a piscina, resultou do prolongamento em pérgula dos pórticos da estrutura, impondo o ritmo marcado da fachada. Os materiais definidos no projeto contemplaram, para além de betão e betão armado, pedra calcária, materiais cerâmicos e “mosaicos hidráulicos” nos revestimentos, madeiras nacionais nas caixilharias e portas, e placas de fibrocimento nos revestimentos de cobertura do edifício de apoio.",
          "Imagens": [
              {
                  "Legenda": "Piscina Municipal Vasco Jacob: tanque das crianças e dos adultos, c. 1962",
                  "AutorFonte": "António Passaporte, Arquivo Fotográfico Silva Magalhães, C.M.T.",
                  "Path": "../www/img/2_Edif_Publicos/C_PiscinasVJacob/_MG_9123.jpg"
              },
              {
                  "Legenda": "Piscina Municipal Vasco Jacob: torre de saltos, c. 1962",
                  "AutorFonte": "António Passaporte, Arquivo Fotográfico Silva Magalhães, C.M.T.",
                  "Path": "../www/img/2_Edif_Publicos/C_PiscinasVJacob/_MG_9126.jpg"
              },
              {
                  "Legenda": "Piscina Municipal Vasco Jacob: Tanque das crianças e dos adultos, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/C_PiscinasVJacob/023_MG_6643.jpg"
              },
              {
                  "Legenda": "Piscina Municipal Vasco Jacob: Estrutura de apoio, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/C_PiscinasVJacob/023_MG_6714.jpg"
              },
              {
                  "Legenda": "Anteprojeto da Piscina Municipal Vasco Jacob: Planta, 1951",
                  "AutorFonte": "Arquivo Municipal de Tomar, processo 5.06 (DOM), vol. 1",
                  "Path": "../www/img/2_Edif_Publicos/C_PiscinasVJacob/PLANTAS_239.jpg"
              },
              {
                  "Legenda": "Anteprojeto da piscina Municipal Vasco Jacob: Secção longitudinal, 1951",
                  "AutorFonte": "Arquivo Municipal de Tomar, processo 5.06 (DOM), vol. 1",
                  "Path": "../www/img/2_Edif_Publicos/C_PiscinasVJacob/PLANTAS_250.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60738269,
              -8.41146648
          ],
          "Coordernadas": [
              [
                  39.60709973,
                  -8.41117966
              ],
              [
                  39.60713913,
                  -8.41153121
              ],
              [
                  39.60703305,
                  -8.4115566
              ],
              [
                  39.60706887,
                  -8.41186094
              ],
              [
                  39.60777174,
                  -8.41171753
              ],
              [
                  39.60768963,
                  -8.41108918
              ],
              [
                  39.60757391,
                  -8.41111958
              ],
              [
                  39.60756675,
                  -8.41107237
              ]
          ]
      },
      {
          "id": "4",
          "NomeEdificio": "Quartel do Corpo de Salvação Pública",
          "Localizacao": "Rua de Santa Iria, Rua Carlos Campeão",
          "Autores": [
              "João Pedro Figueiredo Mota Lima - Arquiteto"
          ],
          "Data": "1963-1965",
          "TipoEdificio": "Edifício Público",
          "Descricao": "O edifício foi inaugurado em 1971. A construção é constituída por um corpo principal ao qual acrescem instalações destinadas às zonas de serviços da corporação. O edifício é constituído por uma estrutura de betão armado formada por sapatas, vigas e pilares que suportam lajes aligeiradas pré-esforçadas. O edifício, perspetivado a partir da Rua de Santa Iria, apresenta um volume paralelepipédico, dominante na dimensão horizontal, e que se contrapõe à torre elevada, correspondente ao núcleo dos acessos. A aplicação de materiais cerâmicos de revestimento foi usada para marcar compartimentos e zonas funcionais distintas. O painel cerâmico que exibe a insígnia da corporação, aposto na fachada do corpo principal do edifício, foi produzido na fábrica de materiais cerâmicos Tijomel, fundada na década de 1940 por Júlio Redol e localizada em Caxarias, concelho de Ourém.",
          "Imagens": [
              {
                  "Legenda": "Quartel dos Bombeiros de Tomar: Alçado lateral pela Rua Carlos Campeão, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/D_Quartel_CorpoSalvacao/_MG_5173.jpg"
              },
              {
                  "Legenda": "Quartel dos Bombeiros de Tomar: Alçado principal pela Rua de St. Iria, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/D_Quartel_CorpoSalvacao/_MG_5180.jpg"
              },
              {
                  "Legenda": "Anteprojeto do Quartel da Bombeiros de Tomar: Planta do R/C, 1976",
                  "AutorFonte": "Arquivo Municipal de Tomar, R8200/1976",
                  "Path": "../www/img/2_Edif_Publicos/D_Quartel_CorpoSalvacao/PLANTAS_049.jpg"
              },
              {
                  "Legenda": "Anteprojeto do Quartel da Bombeiros de Tomar: Alçado principal, 1976",
                  "AutorFonte": "Arquivo Municipal de Tomar, R8200/1976",
                  "Path": "../www/img/2_Edif_Publicos/D_Quartel_CorpoSalvacao/PLANTAS_053.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60309673,
              -8.40856701
          ],
          "Coordernadas": [
              [
                  39.60334196,
                  -8.40886581
              ],
              [
                  39.60339569,
                  -8.4083612
              ],
              [
                  39.60288731,
                  -8.40828037
              ],
              [
                  39.60284185,
                  -8.40878356
              ]
          ]
      },
      {
          "id": "5",
          "NomeEdificio": "Pastelaria e Café Estrelas de Tomar",
          "Localizacao": "Rua Serpa Pinto 14-18, Avenida Marquês de Tomar",
          "Autores": [
              "José Inácio da Costa Rosa - Arquiteto"
          ],
          "Data": "1960-1963",
          "TipoEdificio": "Edifício Público",
          "Descricao": "O edifício teve duas intervenções distintas em 1960 e 1963, com vista à remodelação do interior do café/pastelaria. Na intervenção de 1963, o projetista ampliou o espaço que passou a ocupar a totalidade do piso térreo e, em simultâneo, abriu um vão sobre a Avenida Marquês de Tomar, destinado a vitrina. Em ambos os projetos destaca-se uma criteriosa seleção de materiais de construção, tais como elementos cerâmicos de revestimento, elegendo-os como recurso compositivo, através do contraste de texturas, de formas e de cores: os revestimentos parietais, no projeto de 1960 integraram painéis cerâmicos com desenhos alusivos ao nome da pastelaria (estrelas); ou o recurso a madeiras exóticas, plátano e kambala (no projeto de 1963). Esta planificação integrou, ainda, a iluminação diferenciada entre os locais, de forma a garantir conforto e simultaneamente destacar o ambiente lúdico da zona de convívio.",
          "Imagens": [
              {
                  "Legenda": "Pastelaria Estrelas de Tomar: Interior com montra para a Av. Marquês de Tomar, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/e_PastelariaEstrelas/022_MG_6718.jpg"
              },
              {
                  "Legenda": "Pastelaria Estrelas de Tomar: Montra interior, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/2_Edif_Publicos/e_PastelariaEstrelas/022_MG_6742.jpg"
              },
              {
                  "Legenda": "Projeto da Pastelaria Estrelas de Tomar: Alçado, planta e corte, 1960",
                  "AutorFonte": "Arquivo Municipal de Tomar, R1005/1960",
                  "Path": "../www/img/2_Edif_Publicos/e_PastelariaEstrelas/PLANTAS_202.jpg"
              },
              {
                  "Legenda": "Projeto da Pastelaria Estrelas de Tomar: Secção longitudinal, 1960",
                  "AutorFonte": "Arquivo Municipal de Tomar, R1005/1960",
                  "Path": "../www/img/2_Edif_Publicos/e_PastelariaEstrelas/PLANTAS_204.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60447306,
              -8.41222823
          ],
          "Coordernadas": [
              [
                  39.60458989,
                  -8.4123373
              ],
              [
                  39.6044433,
                  -8.41230977
              ],
              [
                  39.60447058,
                  -8.41213703
              ],
              [
                  39.60459816,
                  -8.41210127
              ]
          ]
      },
      {
          "id": "6",
          "NomeEdificio": "Prédio de Rendimento",
          "Localizacao": "Rua da Infantaria 15, 104",
          "Autores": [
              "João Manuel Santos Faria - Construtor Civil"
          ],
          "Data": "1933",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O desenho da fachada principal apresenta uma composição dividida em dois panos verticais de dimensões diferenciadas. O pano de maior dimensão é ladeado por pilastras com decoração geométrica, apresentando vãos de janela em sacada com balcão, nos dois pisos superiores. Denota-se influência de elementos decorativos Art Deco, quer através dos painéis que surgem no intervalo entre os vãos do pano lateral com motivos vegetalistas de contorno geométrico realizados em mosaico, quer pelo desenho das referidas pilastras. A análise das peças do projeto revela a coexistência de técnicas e de materiais tradicionais e de elementos de betão armado. As paredes exteriores são de alvenaria de pedra argamassada, alguns pavimentos em estrutura de madeira e as paredes interiores em tabique de madeira. A estrutura do edifício conjuga paredes resistentes de alvenaria de pedra calcária, com elementos de betão armado, designadamente lajes e vigas, nos pavimentos de cozinhas e de casas de banho (os restantes pavimentos apresentam uma estrutura de madeira de pinho). Os vãos exteriores são retos conformados superiormente por pequenas de vigas de betão armado em detrimento dos, até então, tradicionais vãos em arco com elementos de alvenaria cerâmica. As paredes interiores são de tabique de madeira rebocado com argamassa.",
          "Imagens": [
              {
                  "Legenda": "Prédio de Rendimento da Rua da Infantaria 15: Fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_1/_MG_5432.jpg"
              },
              {
                  "Legenda": "Prédio de Rendimento da Rua da Infantaria 15: painel cerâmico da fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_1/018_MG_6558.jpg"
              },
              {
                  "Legenda": "Prédio de Rendimento da Rua da Infantaria 15: Detalhe do remate da fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_1/018_MG_6580.jpg"
              },
              {
                  "Legenda": "Projeto do prédio de Rendimento da Rua da Infantaria 15: Detalhes construtivos, 1933",
                  "AutorFonte": "Arquivo Municipal de Tomar, R67/1933",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_1/PLANTAS_132.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60339018,
              -8.41469586
          ],
          "Coordernadas": [
              [
                  39.60341416,
                  -8.41471517
              ],
              [
                  39.60342325,
                  -8.4146769
              ],
              [
                  39.60335932,
                  -8.41465723
              ],
              [
                  39.60335023,
                  -8.41470122
              ]
          ]
      },
      {
          "id": "7",
          "NomeEdificio": "Prédio de Rendimento na antiga Corredoura",
          "Localizacao": "Rua Serpa Pinto, 32-36",
          "Autores": [
              "Jorge Ribeiro de Oliveira - Arquiteto"
          ],
          "Data": "1939",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "Na fachada principal identifica-se uma solução plástica simples, com um corpo central ligeiramente saliente, coroado por elementos decorativos verticais e dois panos laterais em simetria. A fachada posterior abandona as características compositivas da fachada principal, e apresenta um pano verticalizado com uma única abertura oval em cada piso, em contraste com a superfície envidraçada da marquise, em prolongamento horizontal. O edifício incorporou materiais e técnicas inovadoras para a época, tais como elementos de betão armado na estrutura, placas de fibrocimento na cobertura, e tijolos cerâmicos vazados, assentes a cutelo nas paredes de compartimentação.",
          "Imagens": [
              {
                  "Legenda": "Prédio de rendimento da antiga Corredoura: Fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_2/_MG_6325.jpg"
              },
              {
                  "Legenda": "Projeto do prédio de rendimento na antiga Corredoura: Alçado posterior, 1939",
                  "AutorFonte": "Arquivo Municipal de Tomar, R467/1939",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_2/PLANTAS_136.jpg"
              },
              {
                  "Legenda": "Projeto do prédio de rendimento na antiga Corredoura: Alçado principal, 1939",
                  "AutorFonte": "Arquivo Municipal de Tomar, R467/1939",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_2/PLANTAS_143.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.6043904,
              -8.41255009
          ],
          "Coordernadas": [
              [
                  39.60441575,
                  -8.41261089
              ],
              [
                  39.60443724,
                  -8.41252899
              ],
              [
                  39.60439839,
                  -8.41249716
              ],
              [
                  39.60437662,
                  -8.41259372
              ]
          ]
      },
      {
          "id": "8",
          "NomeEdificio": "Edifício Plurifamiliar",
          "Localizacao": "Rua Miguel Maria Ferreira, 13",
          "Autores": [
              "João Pedro de Figueiredo da Mota Lima e Pinto da Cunha - Arquitetos",
              "João Baptista Bento Lúcio - Agente Técnico de Engenharia Civil"
          ],
          "Data": "1952",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O desenho do alçado principal pretende tirar partido do contraste entre elementos verticais e horizontais, apresentando-se com uma composição bipartida assimétrica, em que uma das alas corresponde ao núcleo de entrada marcado por uma faixa que acompanha o desenvolvimento vertical das escadas. Na ala de maior dimensão recortam-se três vãos de janelas de peito, enquadrados em moldura destacada do pano de parede em ligeiro ressalto, sublinhando a horizontalidade dos vãos. A estrutura do edifício é constituída por elementos resistentes de betão armado, com uma armação de madeira na cobertura, sobre a qual assentam telhas cerâmicas do tipo marselha.",
          "Imagens": [
              {
                  "Legenda": "Edifício plurifamiliar da Rua Miguel Maria Ferreira: Vestíbulo, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_3/_MG_9747.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar da Rua Miguel Maria Ferreira: Caixa de escadas, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_3/_MG_9750.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar da Rua Miguel Maria Ferreira: Fachada principal com detalhe da grelha de iluminação da caixa de escadas",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_3/DSC_9740.jpg"
              },
              {
                  "Legenda": "Projeto do edifício plurifamiliar da Rua Miguel Maria Ferreira: Alçado principal e posterior, 1952",
                  "AutorFonte": "Arquivo Municipal de Tomar, R2646/1952",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_3/PLANTAS_166.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60604775,
              -8.40640783
          ],
          "Coordernadas": [
              [
                  39.60610038,
                  -8.40639496
              ],
              [
                  39.60607503,
                  -8.40648866
              ],
              [
                  39.60599733,
                  -8.40644538
              ],
              [
                  39.6060224,
                  -8.40635097
              ]
          ]
      },
      {
          "id": "9",
          "NomeEdificio": "Edifício plurifamiliar",
          "Localizacao": "Avenida D. Ângela Tagmanini, 32",
          "Autores": [
              "João Pedro de Figueiredo da Mota Lima e Pinto da Cunha - Arquitetos"
          ],
          "Data": "1953",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "Na fachada principal, o primeiro e segundo andares são projetados em relação ao muro parietal do piso térreo. A composição assenta num equilíbrio entre cheio e vazio, com as varandas, inclusas no volume, a contrastarem com o pano de parede dotado de janelas de peito, em caixilhos de madeira de casquinha e de tola. A estrutura reticulada de betão armado é preenchida com paredes de alvenaria de pano duplo de tijolo que, no seu conjunto, definem um volume paralelepipédico em composição simétrica, relativamente à entrada. A cobertura é constituída por uma estrutura de madeira, revestida com telha cerâmica do tipo lusa.",
          "Imagens": [
              {
                  "Legenda": "Edifício Plurifamiliar na Av. D. Angela Tamagnini: Fachada principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_4/_MG_9725.jpg"
              },
              {
                  "Legenda": "Projeto do Edifício Plurifamiliar na Av. D. Angela Tamagnini: Perspetiva, 1953",
                  "AutorFonte": "Arquivo Municipal de Tomar, R3758/1953",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_4/PLANTAS_161a.jpg"
              },
              {
                  "Legenda": "Projeto do Edifício Plurifamiliar na Av. D. Angela Tamagnini: Alçado principal e posterior, 1953",
                  "AutorFonte": "Arquivo Municipal de Tomar, R3758/1953",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_4/PLANTAS_163.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60615107,
              -8.40664387
          ],
          "Coordernadas": [
              [
                  39.60627562,
                  -8.40670717
              ],
              [
                  39.60628609,
                  -8.40660524
              ],
              [
                  39.60604858,
                  -8.4065702
              ],
              [
                  39.60603397,
                  -8.40667498
              ]
          ]
      },
      {
          "id": "10",
          "NomeEdificio": "Moradia José Redol",
          "Localizacao": "Rua Dom Lopo Dias de Sousa, 18",
          "Autores": [
              "João Pedro de Figueiredo da Mota Lima e Pinto da Cunha - Arquitetos",
              "Vasco Ramirez - Engenheiro Civil"
          ],
          "Data": "1953",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "Esta moradia bifamiliar foi encomendada por José Torres Pereira Redol, no ano de 1953. O edifício apresenta-se num volume compacto com pouca fenestração, no entanto os projetistas recorreram à projeção das varandas através de uma caixa que se destaca do muro, alicerce compositivo que confere leveza ao edifício. A sua estrutura conjuga vigas e pilares de betão armado com lajes aligeiradas de vigotas betão pré-esforçado e blocos cerâmicos. O revestimento da cobertura foi projetado com chapas de fibrocimento. O painel da fachada principal assim como os restantes elementos cerâmicos, que integram o edifício, foram produzidos na fábrica Tijomel, propriedade de Júlio Redol, irmão do dono da obra. Na fachada principal, o painel cerâmico e o vão preenchido de tijolos de vidro demarcam uma escada interior de dois lanços que liga o piso térreo ao piso superior.",
          "Imagens": [
              {
                  "Legenda": "Moradia José Redol: Painel cerâmico da fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_5/_MG_5148.jpg"
              },
              {
                  "Legenda": "Moradia José Redol: Fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_5/_MG_5151.jpg"
              },
              {
                  "Legenda": "Moradia José Redol: Vista da fachada principal e lateral, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_5/014_MG_5153.jpg"
              },
              {
                  "Legenda": "Projeto da Moradia José Redol: Alçado principal e posterior, 1953",
                  "AutorFonte": "Arquivo Municipal de Tomar, R3768/1953",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_5/PLANTAS_148.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60597336,
              -8.40471268
          ],
          "Coordernadas": [
              [
                  39.60592514,
                  -8.40477061
              ],
              [
                  39.60596344,
                  -8.40480316
              ],
              [
                  39.60600918,
                  -8.4047066
              ],
              [
                  39.60597088,
                  -8.40466726
              ]
          ]
      },
      {
          "id": "11",
          "NomeEdificio": "Edifício Plurifamiliar na Praceta Dr. Raúl António Lopes/Sul",
          "Localizacao": "Praceta Dr. Raúl António Lopes, 1",
          "Autores": [
              "João Pedro de Figueiredo da Mota Lima - Arquiteto"
          ],
          "Data": "1953",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O sistema construtivo agrega vigas, pilares e lajes maciças numa estrutura de betão armado, com paredes exteriores em alvenaria dupla de tijolo cerâmico, e telha cerâmica lusa no revestimento da cobertura. O alçado principal resulta “do emprego do partido horizontal”, como é referido na memória descritiva do projeto. No seu desenho, observa-se uma hierarquia vertical, onde os dois pisos superiores destacam um pano de parede rasgado por duas tiras de janelas, acentuadas na sua dimensão horizontal através de uma moldura, que se apresenta ressaltada em relação ao pano parietal. A entrada, encostada à empena Poente, é marcada pelo volume subtraído do vestíbulo, onde a separação entre a bandeira e a porta se formaliza numa pala que se prolonga para o exterior.",
          "Imagens": [
              {
                  "Legenda": "Edifício plurifamiliar na praceta Dr. Raul Lopes -sul-: Alçado principal, 1953",
                  "AutorFonte": "Arquivo Municipal de Tomar, R4484/1953",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_6/_MG_0687.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar na praceta Dr. Raul Lopes -sul-: Fachada principal, 2017",
                  "AutorFonte": "Fábio Correia, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_6/_MG_8409.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60476651,
              -8.40616107
          ],
          "Coordernadas": [
              [
                  39.60477781,
                  -8.40616179
              ],
              [
                  39.60476568,
                  -8.40612388
              ],
              [
                  39.60474888,
                  -8.4061321
              ],
              [
                  39.60474777,
                  -8.40616572
              ]
          ]
      },
      {
          "id": "12",
          "NomeEdificio": "Edifício comercial e residencial",
          "Localizacao": "Rua Torres Pinheiro, 44-46",
          "Autores": [
              "José Inácio da Costa Rosa - Arquiteto"
          ],
          "Data": "1955",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O alçado principal divide o corpo de acesso da área correspondente aos fogos. A agregação da zona de fogos foi estabelecida através de uma moldura saliente ao pano da parede, que envolve as varandas inclusas no volume e em que as zonas superiores aos vãos integram placas onduladas de fibrocimento e pintado. O edifício combina uma estrutura de vigas e pilares de betão armado e lajes aligeiradas, com uma cobertura de duas águas em estrutura de madeira, revestida com telha cerâmica. No acesso à zona habitacional do edifício impôs-se uma porta de “chapa e perfis de ferro a levar vidros” cuja forma foi replicada na porta e nas montras da zona comercial.",
          "Imagens": [
              {
                  "Legenda": "Edifício Plurifamiliar na Rua Torres Pinheiro: Perspetiva e planta de localização, 1955",
                  "AutorFonte": "Arquivo Municipal de Tomar, R8492/1955",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_7/_MG_0697.jpg"
              },
              {
                  "Legenda": "Edifício Plurifamiliar na Rua Torres Pinheiro: Fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_7/012_DSC_0288.jpg"
              },
              {
                  "Legenda": "Edifício Plurifamiliar na Rua Torres Pinheiro: Fachada principal, 2017",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_7/012_MG_5264.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60073665,
              -8.41144502
          ],
          "Coordernadas": [
              [
                  39.60073252,
                  -8.41145843
              ],
              [
                  39.60073252,
                  -8.41142356
              ],
              [
                  39.60076971,
                  -8.41142893
              ],
              [
                  39.60076558,
                  -8.41147184
              ]
          ]
      },
      {
          "id": "13",
          "NomeEdificio": "Edifícios plurifamiliares geminados",
          "Localizacao": "Rua Manuel de Matos, 9-11",
          "Autores": [
              "João Pedro de Figueiredo da Mota Lima - Arquiteto"
          ],
          "Data": "1955",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O acesso aos dois edifícios faz-se através de um vão reentrante, em cota superior à do passeio e que é vencida por uma escada com seis degraus. A entrada principal, comum no pano de fachada das duas construções, é marcada por um muro recortado que autonomiza o acesso aos edifícios. A composição da fachada ensaia a adição e subtração de volumes ao elemento parietal de alinhamento com a rua. Na fachada principal, orientada a Este, destaca-se o volume das varandas projetadas nos dois pisos superiores, enquanto no rés do chão, as varandas estão inclusas no pano de parede.",
          "Imagens": [
              {
                  "Legenda": "Edifício plurifamiliar da Rua Manuel de Matos: Fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_8/_MG_5364.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar da Rua Manuel de Matos: Entrada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_8/_MG_5379.jpg"
              },
              {
                  "Legenda": "Projeto do edifício plurifamiliar da Rua Manuel de Matos: Alçado principal",
                  "AutorFonte": "Arquivo Municipal de Tomar, R9612/1955",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_8/PLANTAS_181.jpg"
              },
              {
                  "Legenda": "Projeto do edifício plurifamiliar da Rua Manuel de Matos: Planta do R/C.",
                  "AutorFonte": "Arquivo Municipal de Tomar, R9612/1955",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_8/PLANTAS_183.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60445653,
              -8.40587676
          ],
          "Coordernadas": [
              [
                  39.60444,
                  -8.40585798
              ],
              [
                  39.6044524,
                  -8.40589821
              ],
              [
                  39.60448546,
                  -8.40588748
              ],
              [
                  39.60447719,
                  -8.40584993
              ]
          ]
      },
      {
          "id": "14",
          "NomeEdificio": "Edifício comercial e residencial",
          "Localizacao": "Avenida Cândido Madureira, 56",
          "Autores": [
              "António Rodrigues - Arquiteto"
          ],
          "Data": "1956",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O alçado principal desenvolve-se a partir de um eixo longitudinal, conjugando a simetria de um corpo central de vãos, de janelas de peito, com duas alas laterais que evidenciam a alternância entre cheios e vazios. Este efeito volumétrico foi perpetrado através das varandas que, ora se projetam em balanço com guardas de betão armado, ora recuam quase à face da construção, com guardas metálicas simples. A estrutura do edifício incluiu lajes aligeiradas, exceto nos pavimentos dos quartos orientados a Sul, tendo nestes últimos a solução construtiva preconizado lajes maciças de betão armado para, assim, dar continuidade à definição dos pavimentos nas guardas das varandas.",
          "Imagens": [
              {
                  "Legenda": "Edifício comercial e residencial da Rua Cândido Madureira: Fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_9/_MG_6302.jpg"
              },
              {
                  "Legenda": "Edifício comercial e residencial da Rua Cândido Madureira: Detalhe das varandas na fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_9/DSC_0292.jpg"
              },
              {
                  "Legenda": "Edifício comercial e residencial da Rua Cândido Madureira: Alçado principal e posterior, 1956",
                  "AutorFonte": "Arquivo Municipal de Tomar, R14889/1956",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_9/PLANTAS_158.jpg"
              },
              {
                  "Legenda": "Edifício comercial e residencial da Rua Cândido Madureira: Planta de localização, 1956",
                  "AutorFonte": "Arquivo Municipal de Tomar, R14889/1956",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_9/PLANTAS_160.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60236515,
              -8.41296315
          ],
          "Coordernadas": [
              [
                  39.60236714,
                  -8.41292732
              ],
              [
                  39.60239425,
                  -8.41294277
              ],
              [
                  39.60237028,
                  -8.41299319
              ],
              [
                  39.60234283,
                  -8.41299534
              ]
          ]
      },
      {
          "id": "15",
          "NomeEdificio": "Moradia Armando Redol",
          "Localizacao": "Rua Doutor Egas Moniz, 14",
          "Autores": [
              "José Inácio da Costa Rosa - Arquiteto"
          ],
          "Data": "1957",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O edifício corresponde a uma moradia com dois fogos, de dois pisos com cave, e cujas habitações se desenvolvem verticalmente. Uma das singularidades desta construção recai no desalinhamento vertical dos dois fogos e que se traduz na partilha das lajes de piso entre as duas habitações. A volumetria paralelepipédica baseia-se na subtração e adição de volumes, e no tratamento distinto do elemento parietal. Apesar de organizar dois fogos com dimensões similares, o tratamento da fachada é diferenciador. Uma das habitações apresenta um muro cego para a fachada principal, enquanto a outra beneficia de um painel cerâmico policromado, produzido na fábrica Tijomel, na parede recuada do primeiro piso, e de uma varanda projetada sobre a parede, no segundo piso. É particularmente relevante na solução plástica apresentada, o jogo de volumes, designadamente a chaminé adossada à fachada lateral (orientada a Poente), revestida com elementos de pedra calcária. A estrutura combina vigas e pilares de betão armado, com lajes aligeiradas de vigotas pré-esforçadas e blocos cerâmicos que compartimentam horizontalmente as habitações e também definem a cobertura.",
          "Imagens": [
              {
                  "Legenda": "Moradia Armando Redol: Alçado principal e posterior, 1957",
                  "AutorFonte": "Arquivo Municipal de Tomar, R18988/1957",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_10/_MG_0673.jpg"
              },
              {
                  "Legenda": "Moradia Armando Redol: Perspetiva e corte transversal, 1957",
                  "AutorFonte": "Arquivo Municipal de Tomar, R18988/1957",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_10/_MG_0675.jpg"
              },
              {
                  "Legenda": "Moradia Armando Redol: Fachada principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_10/_MG_9730.jpg"
              },
              {
                  "Legenda": "Moradia Armando Redol: Painel cerâmico da fachada principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_10/_MG_9740.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60925901,
              -8.40477169
          ],
          "Coordernadas": [
              [
                  39.60925405,
                  -8.40464787
              ],
              [
                  39.6091714,
                  -8.4048131
              ],
              [
                  39.60927918,
                  -8.4048985
              ],
              [
                  39.60934431,
                  -8.40473714
              ]
          ]
      },
      {
          "id": "16",
          "NomeEdificio": "Edifício plurifamiliar na Praceta Dr. Raúl António Lopes/Norte",
          "Localizacao": "Praceta Dr. Raúl António Lopes, 11-12",
          "Autores": [
              "José Inácio da Costa Rosa - Arquiteto"
          ],
          "Data": "1958",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "A composição do alçado seguiu um esquema assente na alternância equilibrada através do ressalto dos elementos horizontais e verticais. A construção inclui uma habitação por piso, em simetria axial a partir da posição nuclear das escadas, em estrutura de betão armado, revestida com mármore. A porta principal de acesso ao edifício associa perfis e chapa de ferro com elementos de vidro. A estrutura do edifício incorpora elementos de betão armado: vigas, pilares e lajes maciças. A cobertura, inclinada de duas águas, foi projetada através de uma estrutura de madeira revestida com telhas cerâmicas.",
          "Imagens": [
              {
                  "Legenda": "Projeto do edifício plurifamiliar na praceta Dr. Raul Lopes -norte-: Alçado principal e posterior, 1958",
                  "AutorFonte": "Arquivo Municipal de Tomar, R822/1958",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_11/_MG_0643.jpg"
              },
              {
                  "Legenda": "Projeto do edifício plurifamiliar na praceta Dr. Raul Lopes -norte-: Planta do R/C e andares, 1958",
                  "AutorFonte": "Arquivo Municipal de Tomar, R822/1958",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_11/_MG_0646.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar na praceta Dr. Raul Lopes -norte-: Fachada Principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_11/_MG_9773.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar na praceta Dr. Raul Lopes -norte-: Fachada Principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_11/_MG_9782.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60527901,
              -8.40626836
          ],
          "Coordernadas": [
              [
                  39.60524049,
                  -8.40628145
              ],
              [
                  39.60527736,
                  -8.40632072
              ],
              [
                  39.60531604,
                  -8.40626364
              ],
              [
                  39.60527653,
                  -8.40620806
              ]
          ]
      },
      {
          "id": "17",
          "NomeEdificio": "Edifício em Banda",
          "Localizacao": "Rua Dom Lopo Dias de Sousa, 12-14",
          "Autores": [
              "João Pedro de Figueiredo da Mota Lima - Arquiteto"
          ],
          "Data": "1958",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "A fachada principal caracteriza-se pela extensão do bloco que lhe confere uma horizontalidade apenas quebrada por painéis de grelha cerâmica colocados no rés-do-chão, em frente aos quartos. No primeiro piso, o prolongamento das paredes divisórias interiores secciona o bloco em seis vãos correspondentes às varandas, apresentando-se rematado nas alas pelos referidos painéis de grelha cerâmica. A expressão de horizontalidade do edifício vê-se reforçada através do recuo do limite da cobertura até ao alinhamento parietal do piso térreo. O edifício compõe-se de uma estrutura constituída por vigas, lintéis e pilares de betão armado e lajes de vigotas pré-esforçadas com blocos cerâmicos.",
          "Imagens": [
              {
                  "Legenda": "Projeto de edifício residencial em banda: Alçado principal, 1958",
                  "AutorFonte": "Arquivo Municipal de Tomar, R808/1958",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_12/_MG_0620.jpg"
              },
              {
                  "Legenda": "Projeto de edifício residencial em banda: Alçado poente e nascente, 1958",
                  "AutorFonte": "Arquivo Municipal de Tomar, R808/1958",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_12/_MG_0624.jpg"
              },
              {
                  "Legenda": "Edifício residencial em banda: Fachada principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_12/_MG_5055.jpg"
              },
              {
                  "Legenda": "Edifício residencial em banda: Fachada lateral- poente-, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_12/_MG_5159.jpg"
              },
              {
                  "Legenda": "Edifício residencial em banda: Detalhe da varanda e grelha cerâmica da fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_12/DSC_9708_a.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60630813,
              -8.40395093
          ],
          "Coordernadas": [
              [
                  39.60630317,
                  -8.40392625
              ],
              [
                  39.60627754,
                  -8.40397904
              ],
              [
                  39.606303,
                  -8.40399492
              ],
              [
                  39.60633045,
                  -8.40394578
              ]
          ]
      },
      {
          "id": "18",
          "NomeEdificio": "Moradia Carlos Vieira",
          "Localizacao": "Avenida D. Maria II, 7-9",
          "Autores": [
              "António Dias Pires Teixeira - Agente Técnico de Engenharia Civil"
          ],
          "Data": "1958",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O edifício refere-se a uma moradia de dois pisos que comporta dois fogos autónomos com acesso exterior diferenciado e que apresenta uma formulação modernista de feição popular. O edifício integra uma estrutura de pilares, lintéis e lajes de betão armado, e cobertura uma armação de madeira sob telha cerâmica do tipo lusa.",
          "Imagens": [
              {
                  "Legenda": "Moradia Carlos Vieira: fachada lateral -nascente- e principal, 1958",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_13/_MG_5414.jpg"
              },
              {
                  "Legenda": "Projeto de edifício residencial em banda: Alçado poente e nascente, 1958",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_13/005_MG_6542.jpg"
              },
              {
                  "Legenda": "Edifício residencial em banda: Fachada principal, 2017",
                  "AutorFonte": "Arquivo Municipal de Tomar, R3457/1958",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_13/PLANTAS_170.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.6019105,
              -8.40532959
          ],
          "Coordernadas": [
              [
                  39.60188719,
                  -8.40542872
              ],
              [
                  39.60198357,
                  -8.40538151
              ],
              [
                  39.60194522,
                  -8.40524247
              ],
              [
                  39.60184569,
                  -8.40528839
              ]
          ]
      },
      {
          "id": "19",
          "NomeEdificio": "Bloco residencial para professores do Colégio Nuno Álvares",
          "Localizacao": "Rua Coronel Garcês Teixeira, 5B",
          "Autores": [
              "Amândio Pinto Marcelino - Arquiteto"
          ],
          "Data": "1959",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O edifício constituiu-se como obra complementar ao Colégio Nuno Álvares, por ter sido destinado a habitação para os professores daquela instituição de ensino. A construção assume alguns dos carateres formais modernos, sobretudo no tratamento da fachada, embora adote também soluções mais próximas de uma tradição arquitetónica nacional, no uso da cobertura inclinada, ou na introdução de elementos cerâmicos nos revestimentos das paredes exteriores. A fachada principal apresenta uma grelha reticulada formada por seis varandas contidas no volume, e onde a cobertura surge aparentemente desagregada do corpo do edifício. A entrada principal, em posição central, é encimada por uma extensa pala de betão armado apoiada em pilotis, existindo, ainda, um acesso secundário, através de uma escada exterior, em betão armado, sobre o alçado posterior.",
          "Imagens": [
              {
                  "Legenda": "Bloco residencial para professores do CNA: Fachada lateral -poente- e principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_14/_MG_5048.jpg"
              },
              {
                  "Legenda": "Bloco residencial para professores do CNA: detalhe de painel cerâmico da fachada lateral -poente-, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_14/_MG_5126.jpg"
              },
              {
                  "Legenda": "Bloco residencial para professores do CNA: pala sobre a entrada na fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_14/_MG_5133.jpg"
              },
              {
                  "Legenda": "Bloco residencial para professores do CNA: Fachada lateral -poente- e principal, c. 1960",
                  "AutorFonte": "António Passaporte, Arquivo Fotográfico Silva Magalhães, C.M.T.",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_14/2.jpg"
              },
              {
                  "Legenda": "Projeto para o Bloco residencial para professores do CNA: plantas do R/C, pisos superiores, e corte AB, 1975",
                  "AutorFonte": "Arquivo Municipal de Tomar, R2184/1975",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_14/PLANTAS_151.jpg"
              },
              {
                  "Legenda": "Projeto para o Bloco residencial para professores do CNA: Alçado sul, 1975",
                  "AutorFonte": "Arquivo Municipal de Tomar, R2184/1975",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_14/PLANTAS_152.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.6044028,
              -8.40280831
          ],
          "Coordernadas": [
              [
                  39.60431204,
                  -8.40265017
              ],
              [
                  39.60435684,
                  -8.40292053
              ],
              [
                  39.60470914,
                  -8.40282826
              ],
              [
                  39.60469278,
                  -8.40269587
              ],
              [
                  39.60444347,
                  -8.40273685
              ],
              [
                  39.60439916,
                  -8.40262871
              ]
          ]
      },
      {
          "id": "20",
          "NomeEdificio": "Moradia Dora Teixeira",
          "Localizacao": "Caminho Águas das Maias, 22",
          "Autores": [
              "José Pedro de Figueiredo da Mota Lima - Arquiteto",
              "António Dias Pires Teixeira - Agente Técnico de Engenharia Civil"
          ],
          "Data": "1959",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "A construção apresenta implantação em banda, alinhada com o arruamento. O sistema construtivo do edifício conjuga uma estrutura de elementos de betão armado com alvenaria não resistente de tijolo cerâmico. No rés-do-chão, destacam-se os vãos de grandes dimensões que, desmaterializando a parede do piso térreo, fazem ressaltar os elementos estruturais verticais. No primeiro piso evidencia-se o prolongamento sobre o volume da moldura que enquadra a varanda.",
          "Imagens": [
              {
                  "Legenda": "Projeto da moradia Dora Teixeira: Alçado principal -sul-, 1959",
                  "AutorFonte": "Arquivo Municipal de Tomar, R3449/1959",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_15/_MG_0682.jpg"
              },
              {
                  "Legenda": "Moradia Dora Teixeira: Detalhe da entrada na fachada principal, 2017",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_15/_MG_5240.jpg"
              },
              {
                  "Legenda": "Moradia Dora Teixeira: Fachada principal,",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_15/_MG_5359.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.5977978,
              -8.41367125
          ],
          "Coordernadas": [
              [
                  39.59779664,
                  -8.41363435
              ],
              [
                  39.59781632,
                  -8.41365087
              ],
              [
                  39.59779317,
                  -8.4137219
              ],
              [
                  39.59776457,
                  -8.4137058
              ]
          ]
      },
      {
          "id": "21",
          "NomeEdificio": "Edifício comercial e residencial Godinho Mendes",
          "Localizacao": "Rua Torres Pinheiro, 68",
          "Autores": [
              "José Inácio da Costa Rosa - Arquiteto"
          ],
          "Data": "1960",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "O edifício tem cinco pisos, sendo os quatro superiores destinados a habitação. No alçado principal marca-se a porta de acesso às residências, separada da frente do estabelecimento por um nembo revestido a granito polido. A composição deste alçado reflete a preferência do arquiteto pelo jogo de contrastes entre superfícies, obtido através das cores e das texturas dos materiais de guarnecimento. Os paramentos exteriores incluem acabamentos constituídos por marmorite branco lavado, tintas plásticas e elementos cerâmicos, e as varandas combinam guardas de betão armado e tubos de ferro pintado a óleo. Na estrutura, o edifício conjuga pilares e vigas de betão armado com lajes de vigotas de betão pré-esforçado que também constituem a cobertura em terraço.",
          "Imagens": [
              {
                  "Legenda": "Edifício comercial e residencial Godinho Mendes; Detalhe da fachada principal, 2016",
                  "AutorFonte": "Inês Serrano, IPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_16/SAM_1377_c.jpg"
              },
              {
                  "Legenda": "Edifício comercial e residencial Godinho Mendes: Fachada principal, 2016",
                  "AutorFonte": "Inês Serrano, IPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_16/SAM_1381_b.jpg"
              },
              {
                  "Legenda": "Edifício comercial e residencial Godinho Mendes: perspetiva, desenho a grafite sobre papel vegetal, 1960",
                  "AutorFonte": "Arquiteto I. Costa Rosa, Acervo particular do autor",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_16/_MG_8922.jpg"
              },
              {
                  "Legenda": "Edifício comercial e residencial Godinho Mendes: Alçado principal, desenho a grafite sobre papel vegetal, 1960",
                  "AutorFonte": "Arquiteto I. Costa Rosa, Acervo particular do autor",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_16/_MG_8925.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60112105,
              -8.41153622
          ],
          "Coordernadas": [
              [
                  39.60116354,
                  -8.4115669
              ],
              [
                  39.60116767,
                  -8.41149287
              ],
              [
                  39.60110038,
                  -8.41147957
              ],
              [
                  39.60109244,
                  -8.41154931
              ]
          ]
      },
      {
          "id": "22",
          "NomeEdificio": "Edifício plurifamiliar na Rua da antiga Fábrica de Fiação",
          "Localizacao": "Rua da Fábrica de Fiação, 70-A",
          "Autores": [
              "José Inácio da Costa Rosa - Arquiteto",
              "João Gomes Neves - Engenheiro Civil"
          ],
          "Data": "1961",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "A entrada para o edifício, descentrada, é marcada pela pala que divide a porta da bandeira envidraçada. A porta principal constitui-se por chapa e perfis metálicos que emolduram elementos de vidro. Nos revestimentos das paredes exteriores aplicaram-se elementos cerâmicos de barro vermelho, elementos cerâmicos vidrados e tintas plásticas. A estrutura do edifício inclui lajes pré-fabricadas de betão armado, e as lajes das varandas são suportadas por vigas encastradas nos elementos estruturais de apoio.",
          "Imagens": [
              {
                  "Legenda": "Edifício plurifamiliar da Rua da antiga fábrica de fiação: Detalhe das varandas na fachada principal, 2017",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_17/_MG_5327.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar da Rua da antiga fábrica de fiação: Fachada principal, 2017",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_17/_MG_5332.jpg"
              },
              {
                  "Legenda": "Edifício plurifamiliar da Rua da antiga fábrica de fiação: Entrada na Fachada principal, 2017",
                  "AutorFonte": "Gonçalo Figueiredo, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_17/006_MG_6503.jpg"
              },
              {
                  "Legenda": "Projeto do edifício plurifamiliar da Rua da antiga fábrica de fiação: Alçado principal e posterior com cobertura plana, 1961",
                  "AutorFonte": "Arquivo Municipal de Tomar, R 1080/1961",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_17/_MG_0654.jpg"
              },
              {
                  "Legenda": "Projeto do edifício plurifamiliar da Rua da antiga fábrica de fiação: Alçado principal e posterior com cobertura inclinada, 1961",
                  "AutorFonte": "Arquivo Municipal de Tomar, R 1080/1961",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_17/_MG_0662.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60639905,
              -8.40969622
          ],
          "Coordernadas": [
              [
                  39.60640947,
                  -8.40967326
              ],
              [
                  39.60642203,
                  -8.40970566
              ],
              [
                  39.6063974,
                  -8.40972412
              ],
              [
                  39.60637988,
                  -8.40969086
              ]
          ]
      },
      {
          "id": "23",
          "NomeEdificio": "Moradia Francisco Cordeiro",
          "Localizacao": "Rua Miguel Maria Ferreira, 8-10",
          "Autores": [
              "João Pedro de Figueiredo da Mota Lima - Arquiteto",
              "António Honório Paulino - Engenheiro Civil"
          ],
          "Data": "1962",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "Na moradia que surge isolada no lote, o piso térreo destaca-se do solo através de base elevada com muro revestido a pedra calcária com acabamento rústico. Sobre essa plataforma em terraço desenvolve-se a planta do rés-do-chão. O sistema construtivo consiste numa estrutura resistente de betão armado constituída por vigas, pilares e lajes aligeiradas com elementos cerâmicos pré-fabricados. A cobertura, estruturada com vigotas pré-fabricadas de betão armado, foi revestida com telha cerâmica do tipo romana e rematada “com um beirado levando aba de betão armado nos topos”. Os revestimentos parietais exteriores incluíram materiais cerâmicos, rebocos de argamassa à base de cimento e areia, tintas plásticas e pedra calcária com acabamento a pico rústico.",
          "Imagens": [
              {
                  "Legenda": "Moradia Francisco Cordeiro: Entrada principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_18/_MG_9760.jpg"
              },
              {
                  "Legenda": "Moradia Francisco Cordeiro: Fachada principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_18/_MG_9765.jpg"
              },
              {
                  "Legenda": "Moradia Francisco Cordeiro: Fachadas lateral e principal, 2017",
                  "AutorFonte": "Miguel Duarte, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_18/002_geral.jpg"
              },
              {
                  "Legenda": "Projeto da moradia Francisco Cordeiro: Alçados principal, lateral direito e tardoz, 1962",
                  "AutorFonte": "Arquivo Municipal de Tomar, R437/1962",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_18/_MG_0664.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.60634119,
              -8.40631664
          ],
          "Coordernadas": [
              [
                  39.60626564,
                  -8.40633037
              ],
              [
                  39.60639244,
                  -8.40642264
              ],
              [
                  39.60643575,
                  -8.40633123
              ],
              [
                  39.60632516,
                  -8.40621257
              ]
          ]
      },
      {
          "id": "24",
          "NomeEdificio": "Moradia Lopes das Neves",
          "Localizacao": "Rua Doutor Egas Moniz, 29",
          "Autores": [
              "José Inácio da Costa Rosa - Arquitecto",
              "José Teixeira da Graça - Agente Técnico de Engenharia Civil"
          ],
          "Data": "1963",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "A fachada principal da moradia encontra-se dividida em dois volumes: no lado esquerdo, o elemento parietal apresenta duas janelas de peito em cada piso, enquanto no lado direito, existe uma varanda integrada no volume da construção. A fachada Sudeste diferencia-se pelo pano de parede revestido com elementos cerâmicos, componente destacado da construção e que acomoda os acessos aos dois pisos autónomos. À semelhança de outros projetos do mesmo autor, recorreu-se tanto quanto possível, à utilização de materiais da região. Nos revestimentos parietais exteriores estão indicados materiais cerâmicos de barro vermelho, pedra calcária “em aparelho rústico e com as juntas marcadas em alheta”.",
          "Imagens": [
              {
                  "Legenda": "Moradia Lopes das Neves: Vista da fachada lateral e principal, 2017",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_19/_MG_5392.jpg"
              },
              {
                  "Legenda": "Moradia Lopes das Neves: Detalhe da fachada lateral com acesso exterior para o piso superior, 2017",
                  "AutorFonte": "Filipe Marques, LabIPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_19/_MG_5410.jpg"
              },
              {
                  "Legenda": "Projeto da Moradia Lopes das Neves: Alçado principal e lateral sudoeste, 1963",
                  "AutorFonte": "Arquivo Municipal de Tomar, R 3478/1963",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_19/_MG_0641.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.6079365,
              -8.40681553
          ],
          "Coordernadas": [
              [
                  39.60795948,
                  -8.40690522
              ],
              [
                  39.6078793,
                  -8.40685866
              ],
              [
                  39.60791832,
                  -8.40674171
              ],
              [
                  39.60799932,
                  -8.40680909
              ]
          ]
      },
      {
          "id": "25",
          "NomeEdificio": "Moradia Gouveia Pereira",
          "Localizacao": "Rua Miguel Maria Ferreira, 15",
          "Autores": [
              "José Inácio da Costa Rosa - Arquitecto"
          ],
          "Data": "1963",
          "TipoEdificio": "Edifício de Arquitectura Doméstica",
          "Descricao": "Edifício de habitação unifamiliar com dois pisos. O edifício comporta uma estrutura de betão armado constituída por vigas, pilares e lajes de betão maciço e aligeirado. A cobertura, de duas vertentes, é conformada por uma estrutura que integra lajes de vigotas de betão pré-esforçado com elementos cerâmicos, sendo revestida com telhas cerâmicas do tipo romana. A fachada lateral, orientada a Norte, apresenta paramento composto de grelha de material cerâmico e blocos vazados de betão.",
          "Imagens": [
              {
                  "Legenda": "Moradia Gouveia Pereira: vista da fachada lateral, 2016",
                  "AutorFonte": "Inês Serrano, IPT",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_20/IMG_20161110_134258.jpg"
              },
              {
                  "Legenda": "Projeto da moradia Gouveia Pereira: Corte AB, 1963",
                  "AutorFonte": "Arquiteto I. Costa Rosa, Acervo particular do autor",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_20/PLANTAS_196.jpg"
              },
              {
                  "Legenda": "Projeto da moradia Gouveia Pereira: Cortes EF e CD, 1963",
                  "AutorFonte": "Arquiteto I. Costa Rosa, Acervo particular do autor",
                  "Path": "../www/img/3_Edif_Residenciais/Edif_20/PLANTAS_198.jpg"
              }
          ],
          "IconCoordenadas": 
          [
              39.6066181,
              -8.40659022
          ],
          "Coordernadas": [
              [
                  39.60664356,
                  -8.40662584
              ],
              [
                  39.60660851,
                  -8.40659344
              ],
              [
                  39.60662306,
                  -8.40656126
              ],
              [
                  39.60665133,
                  -8.406584
              ]
          ]
      }
  ]
  );
});

module.exports = router;
