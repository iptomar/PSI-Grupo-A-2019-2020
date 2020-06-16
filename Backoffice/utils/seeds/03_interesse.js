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
          titulo:
            "Edifício Plurifamiliar na Praceta Dr. Raúl António Lopes/Sul",
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
        {
          id: 11,
          titulo: "Moradia José Redol",
          descricao:
            "O sistema construtivo agrega vigas, pilares e lajes maciças numa estrutura de betão armado, com paredes exteriores em alvenaria dupla de tijolo cerâmico, e telha cerâmica lusa no revestimento da cobertura. O alçado principal resulta “do emprego do partido horizontal”, como é referido na memória descritiva do projeto. No seu desenho, observa-se uma hierarquia vertical, onde os dois pisos superiores destacam um pano de parede rasgado por duas tiras de janelas, acentuadas na sua dimensão horizontal através de uma moldura, que se apresenta ressaltada em relação ao pano parietal. A entrada, encostada à empena Poente, é marcada pelo volume subtraído do vestíbulo, onde a separação entre a bandeira e a porta se formaliza numa pala que se prolonga para o exterior.",
          coordenadas:
            "39.60476651, -8.40616107, 39.60477781, -8.40616179, 39.60476568, -8.40612388, 39.60474888, -8.4061321, 39.60474777, -8.40616572",
          data: "1953",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 4,
          isvalid: true,
        },
        {
          id: 12,
          titulo: "Edifício comercial e residencial",
          descricao:
            "O alçado principal divide o corpo de acesso da área correspondente aos fogos. A agregação da zona de fogos foi estabelecida através de uma moldura saliente ao pano da parede, que envolve as varandas inclusas no volume e em que as zonas superiores aos vãos integram placas onduladas de fibrocimento e pintado. O edifício combina uma estrutura de vigas e pilares de betão armado e lajes aligeiradas, com uma cobertura de duas águas em estrutura de madeira, revestida com telha cerâmica. No acesso à zona habitacional do edifício impôs-se uma porta de “chapa e perfis de ferro a levar vidros” cuja forma foi replicada na porta e nas montras da zona comercial.",
          coordenadas:
            "39.60073665, -8.41144502, 39.60073252, -8.41145843, 39.60073252, -8.41142356, 39.60076971, -8.41142893, 39.60076558, -8.41147184",
          data: "1955",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 5,
          isvalid: true,
        },
        {
          id: 13,
          titulo: "Edifícios plurifamiliares geminados",
          descricao:
            "O alçado principal divide o corpo de acesso da área correspondente aos fogos. A agregação da zona de fogos foi estabelecida através de uma moldura saliente ao pano da parede, que envolve as varandas inclusas no volume e em que as zonas superiores aos vãos integram placas onduladas de fibrocimento e pintado. O edifício combina uma estrutura de vigas e pilares de betão armado e lajes aligeiradas, com uma cobertura de duas águas em estrutura de madeira, revestida com telha cerâmica. No acesso à zona habitacional do edifício impôs-se uma porta de “chapa e perfis de ferro a levar vidros” cuja forma foi replicada na porta e nas montras da zona comercial.",
          coordenadas:
            "39.60445653, -8.40587676, 39.60444, -8.40585798, 39.6044524, -8.40589821, 39.60448546, -8.40588748, 39.60447719, -8.40584993",
          data: "1955",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 4,
          isvalid: true,
        },
        {
          id: 14,
          titulo: "Edifícios plurifamiliares geminados",
          descricao:
            "O alçado principal desenvolve-se a partir de um eixo longitudinal, conjugando a simetria de um corpo central de vãos, de janelas de peito, com duas alas laterais que evidenciam a alternância entre cheios e vazios. Este efeito volumétrico foi perpetrado através das varandas que, ora se projetam em balanço com guardas de betão armado, ora recuam quase à face da construção, com guardas metálicas simples. A estrutura do edifício incluiu lajes aligeiradas, exceto nos pavimentos dos quartos orientados a Sul, tendo nestes últimos a solução construtiva preconizado lajes maciças de betão armado para, assim, dar continuidade à definição dos pavimentos nas guardas das varandas.",
          coordenadas:
            "39.60236515, -8.41296315, 39.60236714, -8.41292732, 39.60239425, -8.41294277, 39.60237028, -8.41299319, 39.60234283, -8.41299534",
          data: "1956",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 8,
          isvalid: true,
        },
        {
          id: 15,
          titulo: "Moradia Armando Redol",
          descricao:
            "O edifício corresponde a uma moradia com dois fogos, de dois pisos com cave, e cujas habitações se desenvolvem verticalmente. Uma das singularidades desta construção recai no desalinhamento vertical dos dois fogos e que se traduz na partilha das lajes de piso entre as duas habitações. A volumetria paralelepipédica baseia-se na subtração e adição de volumes, e no tratamento distinto do elemento parietal. Apesar de organizar dois fogos com dimensões similares, o tratamento da fachada é diferenciador. Uma das habitações apresenta um muro cego para a fachada principal, enquanto a outra beneficia de um painel cerâmico policromado, produzido na fábrica Tijomel, na parede recuada do primeiro piso, e de uma varanda projetada sobre a parede, no segundo piso. É particularmente relevante na solução plástica apresentada, o jogo de volumes, designadamente a chaminé adossada à fachada lateral (orientada a Poente), revestida com elementos de pedra calcária. A estrutura combina vigas e pilares de betão armado, com lajes aligeiradas de vigotas pré-esforçadas e blocos cerâmicos que compartimentam horizontalmente as habitações e também definem a cobertura.",
          coordenadas:
            "39.60925405, -8.40464787, 39.6091714, -8.4048131, 39.60927918, -8.4048985, 39.60934431,-8.40473714",
          data: "1957",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 1,
          isvalid: true,
        },

        {
          id: 16,
          titulo:
            "Edifício plurifamiliar na Praceta Dr. Raúl António Lopes/Norte",
          descricao:
            "A composição do alçado seguiu um esquema assente na alternância equilibrada através do ressalto dos elementos horizontais e verticais. A construção inclui uma habitação por piso, em simetria axial a partir da posição nuclear das escadas, em estrutura de betão armado, revestida com mármore. A porta principal de acesso ao edifício associa perfis e chapa de ferro com elementos de vidro. A estrutura do edifício incorpora elementos de betão armado: vigas, pilares e lajes maciças. A cobertura, inclinada de duas águas, foi projetada através de uma estrutura de madeira revestida com telhas cerâmicas.",
          coordenadas:
            "39.60527901, -8.40626836, 39.60524049, -8.40628145, 39.60527736, -8.40632072, 39.60531604, -8.40626364, 39.60527653, -8.40620806",
          data: "1958",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 1,
          isvalid: true,
        },

        {
          id: 17,
          titulo: "Edifício em Banda",
          descricao:
            "A fachada principal caracteriza-se pela extensão do bloco que lhe confere uma horizontalidade apenas quebrada por painéis de grelha cerâmica colocados no rés-do-chão, em frente aos quartos. No primeiro piso, o prolongamento das paredes divisórias interiores secciona o bloco em seis vãos correspondentes às varandas, apresentando-se rematado nas alas pelos referidos painéis de grelha cerâmica. A expressão de horizontalidade do edifício vê-se reforçada através do recuo do limite da cobertura até ao alinhamento parietal do piso térreo. O edifício compõe-se de uma estrutura constituída por vigas, lintéis e pilares de betão armado e lajes de vigotas pré-esforçadas com blocos cerâmicos.",
          coordenadas:
            "39.60630813, -8.40395093, 39.60630317, -8.40392625, 39.60627754,-8.40397904, 39.606303, -8.40399492, 39.60633045, -8.40394578",
          data: "1958",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 1,
          isvalid: true,
        },
        {
          id: 18,
          titulo: "Moradia Carlos Vieira",
          descricao:
            "O edifício refere-se a uma moradia de dois pisos que comporta dois fogos autónomos com acesso exterior diferenciado e que apresenta uma formulação modernista de feição popular. O edifício integra uma estrutura de pilares, lintéis e lajes de betão armado, e cobertura uma armação de madeira sob telha cerâmica do tipo lusa.",
          coordenadas:
            "39.6019105, -8.40532959, 39.60188719, -8.40542872, 39.60198357, -8.40538151, 39.60194522, -8.40524247, 39.60184569, -8.40528839",
          data: "1958",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 1,
          isvalid: true,
        },

        {
          id: 19,
          titulo: "Bloco residencial para professores do Colégio Nuno Álvares",
          descricao:
            "O edifício constituiu-se como obra complementar ao Colégio Nuno Álvares, por ter sido destinado a habitação para os professores daquela instituição de ensino. A construção assume alguns dos carateres formais modernos, sobretudo no tratamento da fachada, embora adote também soluções mais próximas de uma tradição arquitetónica nacional, no uso da cobertura inclinada, ou na introdução de elementos cerâmicos nos revestimentos das paredes exteriores. A fachada principal apresenta uma grelha reticulada formada por seis varandas contidas no volume, e onde a cobertura surge aparentemente desagregada do corpo do edifício. A entrada principal, em posição central, é encimada por uma extensa pala de betão armado apoiada em pilotis, existindo, ainda, um acesso secundário, através de uma escada exterior, em betão armado, sobre o alçado posterior.",
          coordenadas:
            "39.6044028,-8.40280831, 39.60431204, -8.40265017, 39.60435684, -8.40292053, 39.60470914, -8.40282826, 39.60469278, -8.40269587,  39.60444347, -8.40273685, 39.60439916, -8.40262871",
          data: "1959",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },

        {
          id: 20,
          titulo: "Moradia Dora Teixeira",
          descricao:
            "A construção apresenta implantação em banda, alinhada com o arruamento. O sistema construtivo do edifício conjuga uma estrutura de elementos de betão armado com alvenaria não resistente de tijolo cerâmico. No rés-do-chão, destacam-se os vãos de grandes dimensões que, desmaterializando a parede do piso térreo, fazem ressaltar os elementos estruturais verticais. No primeiro piso evidencia-se o prolongamento sobre o volume da moldura que enquadra a varanda.",
          coordenadas:
            "39.5977978, -8.41367125, 39.59779664, -8.41363435, 39.59781632, -8.41365087, 39.59779317, -8.4137219, 39.59776457, -8.4137058",
          data: "1959",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },

        {
          id: 21,
          titulo: "Edifício comercial e residencial Godinho Mendes",
          descricao:
            "O edifício tem cinco pisos, sendo os quatro superiores destinados a habitação. No alçado principal marca-se a porta de acesso às residências, separada da frente do estabelecimento por um nembo revestido a granito polido. A composição deste alçado reflete a preferência do arquiteto pelo jogo de contrastes entre superfícies, obtido através das cores e das texturas dos materiais de guarnecimento. Os paramentos exteriores incluem acabamentos constituídos por marmorite branco lavado, tintas plásticas e elementos cerâmicos, e as varandas combinam guardas de betão armado e tubos de ferro pintado a óleo. Na estrutura, o edifício conjuga pilares e vigas de betão armado com lajes de vigotas de betão pré-esforçado que também constituem a cobertura em terraço.",
          coordenadas:
            "39.60112105, -8.41153622, 39.60116354, -8.4115669, 39.60116767, -8.41149287, 39.60110038, -8.41147957, 39.60109244,-8.41154931",
          data: "1960",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },

        {
          id: 22,
          titulo: "Edifício plurifamiliar na Rua da antiga Fábrica de Fiação",
          descricao:
            "A entrada para o edifício, descentrada, é marcada pela pala que divide a porta da bandeira envidraçada. A porta principal constitui-se por chapa e perfis metálicos que emolduram elementos de vidro. Nos revestimentos das paredes exteriores aplicaram-se elementos cerâmicos de barro vermelho, elementos cerâmicos vidrados e tintas plásticas. A estrutura do edifício inclui lajes pré-fabricadas de betão armado, e as lajes das varandas são suportadas por vigas encastradas nos elementos estruturais de apoio.",
          coordenadas:
            "39.60639905,-8.40969622, 39.60640947,-8.40967326, 39.60642203,-8.40970566, 39.6063974,-8.40972412, 39.60637988,-8.40969086",
          data: "1961",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },

        {
          id: 23,
          titulo: "Moradia Francisco Cordeiro",
          descricao:
            "A construção apresenta implantação em banda, alinhada com o arruamento. O sistema construtivo do edifício conjuga uma estrutura de elementos de betão armado com alvenaria não resistente de tijolo cerâmico. No rés-do-chão, destacam-se os vãos de grandes dimensões que, desmaterializando a parede do piso térreo, fazem ressaltar os elementos estruturais verticais. No primeiro piso evidencia-se o prolongamento sobre o volume da moldura que enquadra a varanda.",
          coordenadas:
            "39.60634119, -8.40631664, 39.60626564, -8.40633037, 39.60639244, -8.40642264, 39.60643575, -8.40633123, 39.60632516, -8.40621257",
          data: "1962",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },

        {
          id: 24,
          titulo: "Moradia Lopes das Neves",
          descricao:
            "A fachada principal da moradia encontra-se dividida em dois volumes: no lado esquerdo, o elemento parietal apresenta duas janelas de peito em cada piso, enquanto no lado direito, existe uma varanda integrada no volume da construção. A fachada Sudeste diferencia-se pelo pano de parede revestido com elementos cerâmicos, componente destacado da construção e que acomoda os acessos aos dois pisos autónomos. À semelhança de outros projetos do mesmo autor, recorreu-se tanto quanto possível, à utilização de materiais da região. Nos revestimentos parietais exteriores estão indicados materiais cerâmicos de barro vermelho, pedra calcária “em aparelho rústico e com as juntas marcadas em alheta”.",
          coordenadas:
            "39.6079365, -8.40681553, 39.60795948, -8.40690522, 39.6078793, -8.40685866, 39.60791832, -8.40674171, 39.60799932, -8.40680909",
          data: "1963",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },

        {
          id: 25,
          titulo: "Moradia Gouveia Pereira",
          descricao:
            "Edifício de habitação unifamiliar com dois pisos. O edifício comporta uma estrutura de betão armado constituída por vigas, pilares e lajes de betão maciço e aligeirado. A cobertura, de duas vertentes, é conformada por uma estrutura que integra lajes de vigotas de betão pré-esforçado com elementos cerâmicos, sendo revestida com telhas cerâmicas do tipo romana. A fachada lateral, orientada a Norte, apresenta paramento composto de grelha de material cerâmico e blocos vazados de betão.",
          coordenadas:
            "39.6066181, -8.40659022, 39.60664356, -8.40662584, 39.60660851, -8.40659344, 39.60662306, -8.40656126, 39.60665133, -8.406584",
          data: "1963",
          tipoEdif: "Edifício de Arquitectura Doméstica",
          user_id: 1,
          prop_id: 3,
          isvalid: true,
        },
      ]);
    });
};
