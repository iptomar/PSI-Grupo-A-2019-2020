exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Interesse').del()
  .then(function () {
    // Inserts seed entries
    return knex('Interesse').insert([
      {
        id: 1,
        titulo: 'Palácio da Justiça',
        descricao: 'O edifício foi inaugurado em 1959. O piso térreo do edifício é elevado através de uma escadaria, e apresenta arcada com galeria; no piso nobre, abriram-se janelas de sacada no intercolúnio. Na construção sobressai o calcário dourado da região, profusamente aplicado em paredes, pavimentos e escadas. Os pavimentos beneficiaram da aplicação de revestimentos de madeira e mármore. No topo central, entre duas colunas, colocou-se um tríptico a fresco, da autoria de Guilherme Camarinha. A utilização de revestimentos cerâmicos policromados nas zonas públicas do edifício expressa uma prática comum na arquitetura judicial deste período. O edifício inclui, nas paredes laterais do pátio interior, painéis cerâmicos decorativos, com motivos alusivos à função simbólica do edifício, desenhados por Jorge Barradas.',		
		coordenadas: '39.60092678,-8.41364175,39.60100945,-8.41395021,39.60114998,-8.4134835,39.60091989,-8.41336763,39.60090529,-8.4134084,39.60086423,-8.41339123,39.60084935,-8.4134295,39.60081959,-8.41341555,39.60073775,-8.41367126,39.60077247,-8.41369307,39.60074299,-8.4137814,39.60078019,-8.41380394,39.60077109,-8.41383398',
		data: '1951',
    tipoEdif: 'Edifício Público',
    user_id: 1,
    prop_id: 1,
    isvalid:true
	  },
      {
       id: 2,
        titulo: 'Colégio Nuno Álvares (CNA)',
        descricao: 'A localização das novas instalações do CNA, outrora num edifício localizado na Rua dos Arcos, foi fixada no limite Poente da área de expansão do Plano Geral de Urbanização de Tomar. A instituição de ensino funcionou nestas instalações entre 1951 e 1981, ano do seu encerramento enquanto colégio privado. O alçado principal sustém uma plataforma, que se destaca do volume, em laje de betão armado assente sobre pilotis. No primeiro piso, rasga-se um vão de tira que enfatiza o recorte horizontal do volume. Este corpo é rematado por uma “cobertura borboleta”, visível no topo da extensão Sul do edifício. O corpo central do edifício CNA desenvolve-se em ligeira curvatura sobre a Praceta Raúl António Lopes, destacando-se pela presença de uma torre sineira no extremo Norte. O piso térreo, que inclui uma arcada a todo o comprimento, acolhia o acesso principal e concentrava as funções administrativas do estabelecimento de ensino. Era também no corpo central que se localizavam os acessos verticais às alas Norte e Sul. No pátio interior previu-se a instalação de um ginásio/salão de festas e de uma capela (não foi construída), que assumiram uma posição centralizada, axial em relação ao átrio de entrada. Estes equipamentos, projetados na década de sessenta, destinavam-se a servir a comunidade escolar em edifícios autónomos e volumetricamente destacados.',
		coordenadas: '39.60513022,-8.40528399,39.60538647,-8.40573263,39.60482052,-8.40562248,39.60465492,-8.40476918,39.60526551,-8.40456855,39.60580225,-8.40481675',
		data: '1952-1969',
    tipoEdif: 'Edifício Público',
    user_id: 2,
    prop_id: 2,
    isvalid:true
		},
      {
        id: 3,
        titulo: 'Piscina Municipal Vasco Jacob',
        descricao: 'A piscina municipal Vasco Jacob foi inaugurada a 9 de setembro de 1961. O projeto compreendeu a construção de dois tanques, em betão armado, um de maior dimensão (33,3 m × 15,0 m) para adultos, e outro, adjacente e destinado ao público infantil (7 m × 15 m). Na construção, que acolhia as instalações de apoio e onde se estabeleceu a entrada no recinto, funcionava o bar e os balneários. Este edifício térreo, com cobertura de uma água, foi implantado sobre uma plataforma elevada em relação aos tanques. O projeto procurou sublinhar a horizontalidade do volume edificado, através da extensão do piso em terraço/esplanada. No projeto foram também incluídos o edifício de apoio a banhistas e a estação de tratamento e bombagem da piscina. A solução compositiva do alçado Poente, que se elevava sobre a piscina, resultou do prolongamento em pérgula dos pórticos da estrutura, impondo o ritmo marcado da fachada. Os materiais definidos no projeto contemplaram, para além de betão e betão armado, pedra calcária, materiais cerâmicos e “mosaicos hidráulicos” nos revestimentos, madeiras nacionais nas caixilharias e portas, e placas de fibrocimento nos revestimentos de cobertura do edifício de apoio.',
		coordenadas: '39.60738269, -8.41146648 , 39.60709973, -8.41117966 , 39.60713913, -8.41153121 , 39.60703305, -8.4115566 , 39.60706887, -8.41186094 , 39.60777174, -8.41171753 , 39.60768963, -8.41108918 , 39.60757391, -8.41111958 , 39.60756675, -8.41107237',
		data: '1951-1957',
		tipoEdif: 'Edifício Público',
    user_id: 3,
    prop_id: 3,
    isvalid:false
		}
		
    ]);
  });
};
