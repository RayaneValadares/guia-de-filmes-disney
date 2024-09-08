let dados = [
    {
        titulo: "Branca de Neve e os Sete Anões (1937)",
        descricao: "Branca de Neve, uma princesa bondosa, foge de sua madrasta, a Rainha Má, que deseja ser a mais bela de todas. Ao encontrar abrigo com sete anões numa floresta, Branca de Neve vive em paz até que a Rainha tenta envenená - la com uma maçã enfeitiçada.",
        link: "https://pt.wikipedia.org/wiki/Branca_de_Neve"
    },
    {
        titulo: "Pinóquio (1940)",
        descricao: "Pinóquio, um boneco de madeira criado por Gepeto, ganha vida com a ajuda de uma fada.Para se tornar um menino de verdade,ele deve provar ser corajoso e honesto.Com a ajuda de seu amigo Grilo Falante, Pinóquio enfrenta diversas tentações e aprende sobre moralidade.",
        link: "https://pt.wikipedia.org/wiki/Pinóquio"
    },
    {
        titulo: "Fantasia (1940)",
        descricao: "Uma antologia de segmentos animados ao som de peças de música clássica.O filme combina arte visual e música, com uma das cenas mais icônicas sendo o Aprendiz de Feiticeiro, estrelada por Mickey Mouse.",
        link: "https://pt.wikipedia.org/wiki/Fantasia_(1940)"

    },
    {
        titulo: "Dumbo (1941)",
        descricao: "Dumbo, um elefante de circo com orelhas gigantes, é ridicularizado pelos outros animais.Porém, com a ajuda de seu amigo, o rato Timóteo, ele descobre que pode voar usando suas orelhas como asas.Dumbo se torna a atração principal do circo e aprende a aceitar sua singularidade.",
        link: "https://pt.wikipedia.org/wiki/Dumbo"
    },
    {
        titulo: "Bambi (1942)",
        descricao: "Bambi, um jovem cervo, explora a floresta ao lado de seus amigos, Tambor, o coelho, e Flor, o gambá.À medida que cresce, Bambi enfrenta os desafios da vida selvagem, incluindo a perda de sua mãe para caçadores.",
        link: "https://pt.wikipedia.org/wiki/Bambi"
    },
    {
        titulo: "Dumbo (1941)",
        descricao: "Dumbo, um elefante de circo com orelhas gigantes, é ridicularizado pelos outros animais. Porém, com a ajuda de seu amigo, o rato Timóteo, ele descobre que pode voar usando suas orelhas como asas. Dumbo se torna a atração principal do circo e aprende a aceitar sua singularidade.",
        link: "https://pt.wikipedia.org/wiki/Dumbo"
    },
    {
        titulo: "Bambi (1942)",
        descricao: "Bambi, um jovem cervo, explora a floresta ao lado de seus amigos, Tambor, o coelho, e Flor, o gambá. À medida que cresce, Bambi enfrenta os desafios da vida selvagem, incluindo a perda de sua mãe para caçadores.",
        link: "https://pt.wikipedia.org/wiki/Bambi"
    },
    {
        titulo: "Cinderela (1950)",
        descricao: "Cinderela, maltratada por sua madrasta e irmãs, sonha com uma vida melhor. Com a ajuda de sua Fada Madrinha, ela vai ao baile do príncipe, onde eles se apaixonam. Ela deixa um sapato de cristal para trás, e o príncipe usa o sapato para encontrá-la.",
        link: "https://pt.wikipedia.org/wiki/Cinderela_(filme_de_1950)"
    },
    {
        titulo: "Alice no País das Maravilhas (1951)",
        descricao: "Alice, uma jovem curiosa, segue um coelho branco até uma terra fantástica cheia de personagens peculiares, como o Chapeleiro Maluco e a Rainha de Copas. Ela vive aventuras nesse mundo surreal enquanto tenta entender sua lógica confusa.",
        link: "https://pt.wikipedia.org/wiki/Alice_no_Pa%C3%ADs_das_Maravilhas_(1951)"
    },
    {
        titulo: "Peter Pan (1953)",
        descricao: "Peter Pan, o garoto que nunca envelhece, leva Wendy e seus irmãos para a Terra do Nunca, onde enfrentam o temível Capitão Gancho. Eles vivem aventuras mágicas enquanto aprendem sobre a infância e o crescimento.",
        link: "https://pt.wikipedia.org/wiki/Peter_Pan_(filme)"
    },
    {
        titulo: "A Dama e o Vagabundo (1955)",
        descricao: "Lady, uma cocker spaniel de pedigree, vive uma vida confortável até que seus donos trazem um bebê para casa. Ela conhece Vagabundo, um cachorro de rua, e juntos embarcam em aventuras pela cidade, desenvolvendo um romance inesperado.",
        link: "https://pt.wikipedia.org/wiki/A_Dama_e_o_Vagabundo"
    },
    {
        titulo: "A Bela Adormecida (1959)",
        descricao: "A princesa Aurora é amaldiçoada pela vilã Malévola para cair em um sono eterno. Somente o beijo do amor verdadeiro pode quebrar o feitiço. O príncipe Felipe, com a ajuda das fadas boas, enfrenta Malévola para salvar Aurora.",
        link: "https://pt.wikipedia.org/wiki/A_Bela_Adormecida_(1959)"
    },
    {
        titulo: "101 Dálmatas (1961)",
        descricao: "Pongo e Perdita, dois dálmatas, têm uma grande ninhada de filhotes que são sequestrados pela maligna Cruella de Vil, que planeja transformá-los em casacos de pele. Os pais, com a ajuda de outros animais, embarcam em uma perigosa missão para resgatar seus filhotes.",
        link: "https://pt.wikipedia.org/wiki/101_D%C3%A1lmatas"
    },
    {
        titulo: "A Espada Era a Lei (1963)",
        descricao: "O jovem órfão Arthur é treinado pelo mago Merlin para se tornar um cavaleiro. Ele aprende valiosas lições sobre sabedoria e coragem até que remove uma espada mágica da pedra, provando ser o rei legítimo da Inglaterra.",
        link: "https://pt.wikipedia.org/wiki/A_Espada_Era_a_Lei"
    },
    {
        titulo: "Mogli: O Menino Lobo (1967)",
        descricao: "Mogli, um menino criado por lobos na selva, deve retornar à aldeia dos homens para se proteger do tigre Shere Khan. Com a ajuda do urso Baloo e da pantera Bagheera, ele aprende sobre a vida selvagem e a natureza humana.",
        link: "https://pt.wikipedia.org/wiki/Mogli_-_O_Menino_Lobo"
    },
    {
        titulo: "Aristogatas (1970)",
        descricao: "A rica gata Duquesa e seus filhotes são sequestrados por um mordomo ganancioso que quer roubar sua herança.Eles encontram Thomas O'Malley, um gato de rua charmoso, que os ajuda a retornar para casa, enquanto vivem aventuras nas ruas de Paris.",
        link: "https://pt.wikipedia.org/wiki/Os_Aristogatas"
    },
    {
        titulo: "Robin Hood (1973)",
        descricao: "Robin Hood, o famoso fora - da - lei, e seu fiel amigo João Pequeno roubam dos ricos para dar aos pobres.Em uma versão reimaginada com animais antropomórficos, Robin luta contra o malvado Príncipe João para restaurar a justiça em Nottingham e proteger o povo oprimido.",
        link: "https://pt.wikipedia.org/wiki/Robin_Hood_(1973)"
    },
    {
        titulo: "A Pequena Sereia (1989)",
        descricao: "Ariel, uma jovem sereia, sonha em viver no mundo dos humanos.Desafiando seu pai, o Rei Tritão, ela faz um pacto com a bruxa do mar, Úrsula, para se transformar em humana.Mas Ariel corre o risco de perder sua voz e nunca mais retornar ao oceano.",
        link: "https://pt.wikipedia.org/wiki/A_Pequena_Sereia_(1989)"
    },
    {
        titulo: "A Bela e a Fera (1991)",
        descricao: "Bela, uma jovem inteligente e aventureira, troca sua liberdade pela de seu pai ao ser feita prisioneira por uma Fera em um castelo encantado.Com o tempo, ela descobre que a Fera é um príncipe enfeitiçado, e o amor verdadeiro pode quebrar o feitiço.",
        link: "https://pt.wikipedia.org/wiki/A_Bela_e_a_Fera_(1991)"
    },
    {
        titulo: "Aladdin (1992)",
        descricao: "Aladdin, um jovem pobre, encontra uma lâmpada mágica que contém um gênio que pode conceder três desejos.Ele usa os desejos para conquistar o coração da Princesa Jasmine e enfrentar o malvado conselheiro do sultão, Jafar, que deseja o poder absoluto.",
        link: "https://pt.wikipedia.org/wiki/Aladdin_(1992)"
    },
    {
        titulo: "O Rei Leão (1994)",
        descricao: "Simba, um jovem leão, foge de seu reino após a morte de seu pai, Mufasa, manipulada por seu tio traiçoeiro, Scar.Ao longo de sua jornada, Simba amadurece e retorna para reclamar seu trono e restaurar a ordem no Reino das Terras do Reino.",
        link: "https://pt.wikipedia.org/wiki/O_Rei_Le%C3%A3o_(1994)"
    },
    {
        titulo: "Pocahontas (1995)",
        descricao: "Pocahontas, a filha de um chefe nativo americano, forma uma amizade com o capitão inglês John Smith durante a colonização da Virgínia.Ela deve escolher entre seu dever para com seu povo e o amor que sente por John, enquanto luta para encontrar um caminho pacífico entre dois mundos.",
        link: "https://pt.wikipedia.org/wiki/Pocahontas_(1995)"
    },
    {
        titulo: "O Corcunda de Notre Dame (1996)",
        descricao: "Quasímodo, o sineiro corcunda da Catedral de Notre - Dame, vive isolado devido à sua aparência.Ao se apaixonar por Esmeralda, uma cigana, ele desafia seu guardião cruel, o juiz Frollo, para salvar Paris e lutar pela liberdade e aceitação.",
        link: "https://pt.wikipedia.org/wiki/O_Corcunda_de_Notre_Dame_(1996)"
    },
    {
        titulo: "Hércules (1997)",
        descricao: "Hércules, filho de Zeus, é transformado em mortal e criado entre os humanos.Com sua força sobre - humana, ele embarca em uma jornada para provar que é um herói e recuperar seu lugar no Olimpo, enfrentando o vilão Hades e as forças do submundo.",
        link: "https://pt.wikipedia.org/wiki/H%C3%A9rcules_(1997)"
    },
    {
        titulo: "Mulan (1998)",
        descricao: "Mulan, uma jovem chinesa, se disfarça de homem para tomar o lugar de seu pai doente no exército imperial.Com coragem e determinação, ela luta contra os invasores Hunos, provando que a verdadeira força vem de dentro, independentemente de gênero.",
        link: "https://pt.wikipedia.org/wiki/Mulan_(1998)"

    },
    {
        titulo: "Tarzan (1999)",
        descricao: "Tarzan, um bebê humano criado por gorilas na selva africana, cresce como parte da selva.Quando encontra exploradores humanos, incluindo a aventureira Jane, Tarzan deve escolher entre seu mundo selvagem e o mundo civilizado ao qual pertence.",
        link: "https://pt.wikipedia.org/wiki/Tarzan_(1999)"

    },
    {
        titulo: "Fantasia 2000 (2000)",
        descricao: "Uma continuação de Fantasia(1940), combinando animações inovadoras com peças de música clássica.Cada segmento visualmente deslumbrante é inspirado por composições de artistas renomados como Beethoven e Gershwin.",
        link: "https://pt.wikipedia.org/wiki/Fantasia_2000"

    },
    {
        titulo: "Dinossauro (2000)",
        descricao: "A história segue Aladar, um iguanodonte criado por lêmures, que tenta salvar seu rebanho de dinossauros depois que um meteoro destrói seu habitat.Eles enfrentam diversos desafios enquanto buscam por um novo lar seguro.",
        link: "https://pt.wikipedia.org/wiki/Dinossauro_(filme)"

    },
    {
        titulo: "A Nova Onda do Imperador (2000)",
        descricao: "O imperador egoísta Kuzco é transformado em uma lhama pela vilã Yzma.Para recuperar sua forma humana e trono, ele precisa confiar em Pacha, um camponês bondoso, enquanto aprende lições de humildade e amizade ao longo do caminho.",
        link: "https://pt.wikipedia.org/wiki/A_Nova_Onda_do_Imperador"
    },
    {
        titulo: "Atlantis: O Reino Perdido (2001)",
        descricao: "Milo Thatch, um jovem cartógrafo, embarca em uma expedição para encontrar o lendário reino perdido de Atlântida.Com a ajuda de uma equipe diversificada, ele descobre os mistérios e perigos desse mundo submerso.",
        link: "https://pt.wikipedia.org/wiki/Atlantis:_O_Reino_Perdido"

    },
    {
        titulo: "Lilo & Stitch (2002)",
        descricao: "Lilo, uma garotinha havaiana, adota um cachorro alienígena chamado Stitch, sem saber que ele é uma experiência genética criada para causar destruição.Juntos, eles aprendem o verdadeiro significado de família, ou 'ohana', enquanto fogem de alienígenas caçadores.",
        link: "https://pt.wikipedia.org/wiki/Lilo_%26_Stitch"

    },
    {
        titulo: "Planeta do Tesouro (2002)",
        descricao: "Baseado no clássico Ilha do Tesouro, este filme transporta a história para o espaço sideral.Jim Hawkins embarca em uma jornada épica à bordo de uma nave espacial em busca de um planeta repleto de tesouros escondidos.",
        link: "https://pt.wikipedia.org/wiki/Planeta_do_Tesouro"

    },
    {
        titulo: "Irmão Urso (2003)",
        descricao: "Kenai, um jovem indígena, é transformado em um urso como punição por matar um animal sagrado.Para voltar a ser humano, ele deve entender o ciclo da vida, especialmente a importância do amor e respeito pela natureza.",
        link: "https://pt.wikipedia.org/wiki/Irm%C3%A3o_Urso"
    },
    {
        titulo: "Nem que a Vaca Tussa (2004)",
        descricao: "Maggie, uma vaca falante, junta - se a outras duas vacas em uma fazenda para capturar um fora - da - lei e salvar seu lar da execução hipotecária.Elas embarcam em uma jornada divertida e inesperada no Velho Oeste.",
        link: "https://pt.wikipedia.org/wiki/Nem_que_a_Vaca_Tussa"
    },
    {
        titulo: " O Galinho Chicken Little (2005)",
        descricao: "Chicken Little, um galinho tímido, tenta alertar a cidade de que o céu está caindo.Quando ele descobre uma invasão alienígena iminente, Chicken Little e seus amigos devem salvar o mundo e provar que ele não estava tão errado assim.",
        link: "https://pt.wikipedia.org/wiki/O_Galinho_Chicken_Little"
    },
    {
        titulo: "A Família do Futuro (2007)",
        descricao: "Lewis, um jovem órfão e inventor brilhante, é levado ao futuro por Wilbur Robinson.Lá, ele conhece a excêntrica família Robinson e descobre a importância de seguir em frente e acreditar no próprio potencial para moldar seu futuro.",
        link: "https://pt.wikipedia.org/wiki/A_Fam%C3%ADlia_do_Futuro"

    },
    {
        titulo: "Bolt: Supercão (2008)",
        descricao: "Bolt, um cão estrela de TV, acredita que tem superpoderes de verdade.Quando ele se perde no mundo real, longe dos estúdios de filmagem, Bolt embarca em uma aventura para salvar sua dona, acreditando que ainda é um super- herói.",
        link: "https://pt.wikipedia.org/wiki/Bolt:_Superc%C3%A3o"

    },
    {
        titulo: "A Princesa e o Sapo (2009)",
        descricao: "Tiana, uma jovem trabalhadora de Nova Orleans, sonha em abrir seu próprio restaurante.No entanto, ao beijar um príncipe transformado em sapo, ela mesma se transforma e embarca numa aventura mágica para quebrar o feitiço e realizar seus sonhos.",
        link: "https://pt.wikipedia.org/wiki/A_Princesa_e_o_Sapo"
    },
    {
        titulo: "Enrolados (2010)",
        descricao: "Rapunzel, uma princesa com longos cabelos mágicos, vive em uma torre isolada. Quando ela conhece o charmoso ladrão Flynn Rider, eles embarcam em uma emocionante aventura fora da torre. Juntos, descobrem a verdadeira identidade de Rapunzel e enfrentam vários desafios.",
        link: "https://pt.wikipedia.org/wiki/Enrolados"
    },
    {
        titulo: "Detona Ralph (2012)",
        descricao: "Ralph, um vilão de um jogo de arcade, está cansado de ser o mau da história. Ele embarca em uma jornada para se provar como um herói, atravessando vários jogos de arcade e encontrando novos amigos, incluindo a corajosa Vanellope.",
        link: "https://pt.wikipedia.org/wiki/Detona_Ralph"
    },
    {
        titulo: "Valente (2012)",
        descricao: "Merida, uma jovem princesa escocesa, desafia as tradições ao buscar seu próprio destino. Com a ajuda de uma feiticeira e muita coragem, ela precisa corrigir um feitiço que ameaça desmoronar seu reino e a relação com sua mãe.",
        link: "https://pt.wikipedia.org/wiki/Valente"
    },
    {
        titulo: "Frozen: Uma Aventura Congelante (2013)",
        descricao: "Elsa, a rainha do gelo, acidentalmente mergulha seu reino em um inverno eterno. Sua irmã Anna, junto com o jovem Kristoff e o divertido Olaf, embarcam em uma jornada para encontrar Elsa e restaurar a primavera antes que o reino fique congelado para sempre.",
        link: "https://pt.wikipedia.org/wiki/Frozen:_Uma_Aventura_Congelante"
    },
    {
        titulo: "Operação Big Hero (2014)",
        descricao: "Hiro Hamada, um prodígio da robótica, forma uma equipe de heróis improváveis após um trágico acidente. Junto com seu robô inflável Baymax e amigos, ele enfrenta uma ameaça tecnológica que pode destruir a cidade de San Fransokyo.",
        link: "https://pt.wikipedia.org/wiki/Operação_Big_Hero"
    },
    {
        titulo: "Zootopia (2016)",
        descricao: "Em Zootopia, a coelha Judy Hopps se torna a primeira policial de sua espécie e faz parceria com o astuto raposo Nick Wilde. Juntos, eles investigam um mistério envolvendo o desaparecimento de animais, enquanto lidam com preconceitos e desafios em uma cidade de animais antropomórficos.",
        link: "https://pt.wikipedia.org/wiki/Zootopia"
    },
    {
        titulo: "Moana: Um Mar de Aventuras (2016)",
        descricao: "Moana, uma jovem corajosa de uma ilha polinésia, parte em uma jornada épica para salvar seu povo. Com a ajuda do semideus Maui e sua própria determinação, ela descobre sua verdadeira identidade e o poder de seu legado.",
        link: "https://pt.wikipedia.org/wiki/Moana:_Um_Mar_de_Aventuras"
    },
    {
        titulo: "Frozen II (2019)",
        descricao: "Elsa e Anna retornam para uma nova aventura que leva as irmãs além dos limites de Arendelle. Elas buscam respostas sobre o passado da família real e enfrentam novos desafios mágicos para salvar seu reino de uma ameaça iminente.",
        link: "https://pt.wikipedia.org/wiki/Frozen_II"
    },
    {
        titulo: "Raya e o Último Dragão (2021)",
        descricao: "Raya, uma guerreira destemida, embarca em uma missão para encontrar o último dragão e unir seu reino dividido. Ela enfrenta perigos e faz novos amigos ao longo do caminho, lutando para restaurar a harmonia em seu mundo.",
        link: "https://pt.wikipedia.org/wiki/Raya_e_o_%C3%9Altimo_Drag%C3%A3o"
    },
    {
        titulo: "Encanto (2021)",
        descricao: "Mirabel Madrigal é a única da família Madrigal sem um poder mágico em uma casa encantada. Quando a magia que protege sua casa começa a enfraquecer, Mirabel embarca em uma jornada para descobrir o que ameaça o encanto e salvar sua família.",
        link: "https://pt.wikipedia.org/wiki/Encanto_(filme)"
    },
    {
        titulo: "Wish (2023)",
        descricao: "Asha, uma jovem otimista, faz um pedido poderoso que tem o potencial de mudar o destino de seu reino. Guiada por sua esperança inabalável e com a ajuda de uma estrela mágica, Asha embarca em uma aventura para salvar seu povo e descobrir o verdadeiro poder dos desejos.",
        link: "https://pt.wikipedia.org/wiki/Wish_(filme)"
    }
    
];
//52 filmes