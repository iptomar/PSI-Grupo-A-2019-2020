exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("Interesse")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Interesse").insert([
        {
          id: 1,
          titulo: "Palácio da Justiça",
          descricao:
            "O edifício foi inaugurado em 1959. O piso térreo do edifício é elevado através de uma escadaria, e apresenta arcada com galeria; no piso nobre, abriram-se janelas de sacada no intercolúnio. Na construção sobressai o calcário dourado da região, profusamente aplicado em paredes, pavimentos e escadas. Os pavimentos beneficiaram da aplicação de revestimentos de madeira e mármore. No topo central, entre duas colunas, colocou-se um tríptico a fresco, da autoria de Guilherme Camarinha. A utilização de revestimentos cerâmicos policromados nas zonas públicas do edifício expressa uma prática comum na arquitetura judicial deste período. O edifício inclui, nas paredes laterais do pátio interior, painéis cerâmicos decorativos, com motivos alusivos à função simbólica do edifício, desenhados por Jorge Barradas.",
          coordenadas:
            "39.60092678,-8.41364175,39.60100945,-8.41395021,39.60114998,-8.4134835,39.60091989,-8.41336763,39.60090529,-8.4134084,39.60086423,-8.41339123,39.60084935,-8.4134295,39.60081959,-8.41341555,39.60073775,-8.41367126,39.60077247,-8.41369307,39.60074299,-8.4137814,39.60078019,-8.41380394,39.60077109,-8.41383398",
          data: "1951",
          tipoEdif: "Edifício Público",
          user_id: 1,
          prop_id: 1,
          isvalid: true,
        },
        {
          id: 2,
          titulo: "Colégio Nuno Álvares (CNA)",
          descricao:
            "A localização das novas instalações do CNA, outrora num edifício localizado na Rua dos Arcos, foi fixada no limite Poente da área de expansão do Plano Geral de Urbanização de Tomar. A instituição de ensino funcionou nestas instalações entre 1951 e 1981, ano do seu encerramento enquanto colégio privado. O alçado principal sustém uma plataforma, que se destaca do volume, em laje de betão armado assente sobre pilotis. No primeiro piso, rasga-se um vão de tira que enfatiza o recorte horizontal do volume. Este corpo é rematado por uma “cobertura borboleta”, visível no topo da extensão Sul do edifício. O corpo central do edifício CNA desenvolve-se em ligeira curvatura sobre a Praceta Raúl António Lopes, destacando-se pela presença de uma torre sineira no extremo Norte. O piso térreo, que inclui uma arcada a todo o comprimento, acolhia o acesso principal e concentrava as funções administrativas do estabelecimento de ensino. Era também no corpo central que se localizavam os acessos verticais às alas Norte e Sul. No pátio interior previu-se a instalação de um ginásio/salão de festas e de uma capela (não foi construída), que assumiram uma posição centralizada, axial em relação ao átrio de entrada. Estes equipamentos, projetados na década de sessenta, destinavam-se a servir a comunidade escolar em edifícios autónomos e volumetricamente destacados.",
          coordenadas:
            "39.60513022,-8.40528399,39.60538647,-8.40573263,39.60482052,-8.40562248,39.60465492,-8.40476918,39.60526551,-8.40456855,39.60580225,-8.40481675",
          data: "1952-1969",
          tipoEdif: "Edifício Público",
          user_id: 1,
          prop_id: 2,
          isvalid: true,
        },
        {
          id: 3,
          titulo: "Piscina Municipal Vasco Jacob",
          descricao:
            "A piscina municipal Vasco Jacob foi inaugurada a 9 de setembro de 1961. O projeto compreendeu a construção de dois tanques, em betão armado, um de maior dimensão (33,3 m × 15,0 m) para adultos, e outro, adjacente e destinado ao público infantil (7 m × 15 m). Na construção, que acolhia as instalações de apoio e onde se estabeleceu a entrada no recinto, funcionava o bar e os balneários. Este edifício térreo, com cobertura de uma água, foi implantado sobre uma plataforma elevada em relação aos tanques. O projeto procurou sublinhar a horizontalidade do volume edificado, através da extensão do piso em terraço/esplanada. No projeto foram também incluídos o edifício de apoio a banhistas e a estação de tratamento e bombagem da piscina. A solução compositiva do alçado Poente, que se elevava sobre a piscina, resultou do prolongamento em pérgula dos pórticos da estrutura, impondo o ritmo marcado da fachada. Os materiais definidos no projeto contemplaram, para além de betão e betão armado, pedra calcária, materiais cerâmicos e “mosaicos hidráulicos” nos revestimentos, madeiras nacionais nas caixilharias e portas, e placas de fibrocimento nos revestimentos de cobertura do edifício de apoio.",
          coordenadas:
            "39.60738269, -8.41146648 , 39.60709973, -8.41117966 , 39.60713913, -8.41153121 , 39.60703305, -8.4115566 , 39.60706887, -8.41186094 , 39.60777174, -8.41171753 , 39.60768963, -8.41108918 , 39.60757391, -8.41111958 , 39.60756675, -8.41107237",
          data: "1951-1957",
          tipoEdif: "Edifício Público",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },
        {
          id: 4,
          titulo: "Quartel do Corpo de Salvação Pública",
          descricao:
            "O edifício foi inaugurado em 1971. A construção é constituída por um corpo principal ao qual acrescem instalações destinadas às zonas de serviços da corporação. O edifício é constituído por uma estrutura de betão armado formada por sapatas, vigas e pilares que suportam lajes aligeiradas pré-esforçadas. O edifício, perspetivado a partir da Rua de Santa Iria, apresenta um volume paralelepipédico, dominante na dimensão horizontal, e que se contrapõe à torre elevada, correspondente ao núcleo dos acessos. A aplicação de materiais cerâmicos de revestimento foi usada para marcar compartimentos e zonas funcionais distintas. O painel cerâmico que exibe a insígnia da corporação, aposto na fachada do corpo principal do edifício, foi produzido na fábrica de materiais cerâmicos Tijomel, fundada na década de 1940 por Júlio Redol e localizada em Caxarias, concelho de Ourém.",
          coordenadas:
            "39.60309673, -8.40856701, 39.60334196, -8.40886581, 39.60339569, -8.4083612, 39.60288731, -8.40828037, 39.60284185, -8.40878356",
          data: "1963-1965",
          tipoEdif: "Edifício Público",
          user_id: 1,
          prop_id: 4,
          isvalid: true,
        },
        {
          id: 5,
          titulo: "Pastelaria e Café Estrelas de Tomar",
          descricao:
            "O edifício teve duas intervenções distintas em 1960 e 1963, com vista à remodelação do interior do café/pastelaria. Na intervenção de 1963, o projetista ampliou o espaço que passou a ocupar a totalidade do piso térreo e, em simultâneo, abriu um vão sobre a Avenida Marquês de Tomar, destinado a vitrina. Em ambos os projetos destaca-se uma criteriosa seleção de materiais de construção, tais como elementos cerâmicos de revestimento, elegendo-os como recurso compositivo, através do contraste de texturas, de formas e de cores: os revestimentos parietais, no projeto de 1960 integraram painéis cerâmicos com desenhos alusivos ao nome da pastelaria (estrelas); ou o recurso a madeiras exóticas, plátano e kambala (no projeto de 1963). Esta planificação integrou, ainda, a iluminação diferenciada entre os locais, de forma a garantir conforto e simultaneamente destacar o ambiente lúdico da zona de convívio.",
          coordenadas:
            "39.60447306, -8.41222823, 39.60458989, -8.4123373, 39.6044433, -8.41230977, 39.60447058, -8.41213703, 39.60459816, -8.41210127",
          data: "1960-1963",
          tipoEdif: "Edifício Público",
          user_id: 1,
          prop_id: 5,
          isvalid: true,
        },
        {
          id: 6,
          titulo: "Prédio de Rendimento",
          descricao:
            "O edifício teve duas intervenções distintas em 1960 e 1963, com vista à remodelação do interior do café/pastelaria. Na intervenção de 1963, o projetista ampliou o espaço que passou a ocupar a totalidade do piso térreo e, em simultâneo, abriu um vão sobre a Avenida Marquês de Tomar, destinado a vitrina. Em ambos os projetos destaca-se uma criteriosa seleção de materiais de construção, tais como elementos cerâmicos de revestimento, elegendo-os como recurso compositivo, através do contraste de texturas, de formas e de cores: os revestimentos parietais, no projeto de 1960 integraram painéis cerâmicos com desenhos alusivos ao nome da pastelaria (estrelas); ou o recurso a madeiras exóticas, plátano e kambala (no projeto de 1963). Esta planificação integrou, ainda, a iluminação diferenciada entre os locais, de forma a garantir conforto e simultaneamente destacar o ambiente lúdico da zona de convívio.",
          coordenadas:
            "39.60339018, -8.41469586, 39.60341416, -8.41471517, 39.60342325, -8.4146769, 39.60335932, -8.41465723, 39.60335023, -8.41470122",
          data: "1933",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 6,
          isvalid: true,
        },
        {
          id: 7,
          titulo: "Prédio de Rendimento na antiga Corredoura",
          descricao:
            "Na fachada principal identifica-se uma solução plástica simples, com um corpo central ligeiramente saliente, coroado por elementos decorativos verticais e dois panos laterais em simetria. A fachada posterior abandona as características compositivas da fachada principal, e apresenta um pano verticalizado com uma única abertura oval em cada piso, em contraste com a superfície envidraçada da marquise, em prolongamento horizontal. O edifício incorporou materiais e técnicas inovadoras para a época, tais como elementos de betão armado na estrutura, placas de fibrocimento na cobertura, e tijolos cerâmicos vazados, assentes a cutelo nas paredes de compartimentação.",
          coordenadas:
            "39.6043904, -8.41255009, 39.60441575, -8.41261089, 39.60443724, -8.41252899, 39.60439839, -8.41249716, 39.60437662, -8.41259372",
          data: "1939",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },
        {
          id: 8,
          titulo: "Edifício Plurifamiliar",
          descricao:
            "O desenho do alçado principal pretende tirar partido do contraste entre elementos verticais e horizontais, apresentando-se com uma composição bipartida assimétrica, em que uma das alas corresponde ao núcleo de entrada marcado por uma faixa que acompanha o desenvolvimento vertical das escadas. Na ala de maior dimensão recortam-se três vãos de janelas de peito, enquadrados em moldura destacada do pano de parede em ligeiro ressalto, sublinhando a horizontalidade dos vãos. A estrutura do edifício é constituída por elementos resistentes de betão armado, com uma armação de madeira na cobertura, sobre a qual assentam telhas cerâmicas do tipo marselha.",
          coordenadas:
            "39.60604775, -8.40640783, 39.60610038, -8.40639496, 39.60607503, -8.40648866, 39.60599733, -8.40644538, 39.6060224, -8.40635097",
          data: "1939",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 7,
          isvalid: true,
        },
        {
          id: 9,
          titulo: "Edifício plurifamiliar",
          descricao:
            "Na fachada principal, o primeiro e segundo andares são projetados em relação ao muro parietal do piso térreo. A composição assenta num equilíbrio entre cheio e vazio, com as varandas, inclusas no volume, a contrastarem com o pano de parede dotado de janelas de peito, em caixilhos de madeira de casquinha e de tola. A estrutura reticulada de betão armado é preenchida com paredes de alvenaria de pano duplo de tijolo que, no seu conjunto, definem um volume paralelepipédico em composição simétrica, relativamente à entrada. A cobertura é constituída por uma estrutura de madeira, revestida com telha cerâmica do tipo lusa.",
          coordenadas:
            "39.60615107, -8.40664387, 39.60627562, -8.40670717, 39.60628609, -8.40660524, 39.60604858, -8.4065702, 39.60603397, -8.40667498",
          data: "1953",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 4,
          isvalid: true,
        },
        {
          id: 10,
          titulo: "Moradia José Redol",
          descricao:
            "Esta moradia bifamiliar foi encomendada por José Torres Pereira Redol, no ano de 1953. O edifício apresenta-se num volume compacto com pouca fenestração, no entanto os projetistas recorreram à projeção das varandas através de uma caixa que se destaca do muro, alicerce compositivo que confere leveza ao edifício. A sua estrutura conjuga vigas e pilares de betão armado com lajes aligeiradas de vigotas betão pré-esforçado e blocos cerâmicos. O revestimento da cobertura foi projetado com chapas de fibrocimento. O painel da fachada principal assim como os restantes elementos cerâmicos, que integram o edifício, foram produzidos na fábrica Tijomel, propriedade de Júlio Redol, irmão do dono da obra. Na fachada principal, o painel cerâmico e o vão preenchido de tijolos de vidro demarcam uma escada interior de dois lanços que liga o piso térreo ao piso superior.",
          coordenadas:
            "39.60597336, -8.40471268, 39.60592514, -8.40477061, 39.60596344, -8.40480316, 39.60600918, -8.4047066, 39.60597088, -8.40466726",
          data: "1953",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 4,
          isvalid: true,
        },
      ]);
    });
};
