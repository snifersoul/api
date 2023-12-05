import axios from "axios"

const GAMES = [
    {
      "title": "Super Mario Bros.",
      "id": "1",
      "company": "Nintendo",
      "year": "1985",
      "genre": "Platformer",
      "category": "Main Series",
      "platform": "NES",
      "portrait": "https://i.blogs.es/638318/super_mario_bros_logo/1366_2000.jpeg"
    },
    {
      "title": "The Legend of Zelda",
      "id": "2",
      "company": "Nintendo",
      "year": "1986",
      "genre": "Action-Adventure",
      "category": "Main Series",
      "platform": "NES",
      "portrait": "https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadazelda_10.jpg"
    },
    {
      "title": "Minecraft",
      "id": "3",
      "company": "Mojang Studios",
      "year": "2011",
      "genre": "Sandbox",
      "category": "Indie",
      "platform": "Multi-platform",
      "portrait": "https://i.pinimg.com/originals/1b/9f/77/1b9f772d10ae2cfce18fab1b05705810.png"
    },
    {
      "title": "Grand Theft Auto V",
      "id": "4",
      "company": "Rockstar Games",
      "year": "2013",
      "genre": "Action-Adventure",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg"
    },
    {
      "title": "The Witcher 3: Wild Hunt",
      "id": "5",
      "company": "CD Projekt",
      "year": "2015",
      "genre": "Action Role-Playing",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://media.vandal.net/i/1280x720/12-2022/202212215583220_1.jpg"
    },
    {
      "title": "Tetris",
      "id": "6",
      "company": "Various",
      "year": "1984",
      "genre": "Puzzle",
      "category": "Classic",
      "platform": "Multi-platform",
      "portrait": "https://m.media-amazon.com/images/M/MV5BZGUwMDI2ZmUtOTVlOC00NzE5LTg3ZjgtNjY0ZTdmNWIxNzU3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg"
    },
    {
      "title": "Pokémon Red and Blue",
      "id": "7",
      "company": "Game Freak",
      "year": "1996",
      "genre": "Role-Playing",
      "category": "Main Series",
      "platform": "Game Boy",
      "portrait": "https://www.giantbomb.com/a/uploads/original/1/17172/1226087-pkmn_rab.jpg"
    },
    {
      "title": "Call of Duty: Modern Warfare",
      "id": "8",
      "company": "Infinity Ward",
      "year": "2019",
      "genre": "First-Person Shooter",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://pics.filmaffinity.com/Call_of_Duty_Modern_Warfare-724589128-large.jpg"
    },
    {
      "title": "FIFA 21",
      "id": "9",
      "company": "EA Sports",
      "year": "2020",
      "genre": "Sports",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://i.blogs.es/juegos/17407/fifa_21/fotos/noticias/fifa_21-5213440.jpg"
    },
    {
      "title": "Assassin's Creed Valhalla",
      "id": "10",
      "company": "Ubisoft",
      "year": "2020",
      "genre": "Action Role-Playing",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://www.sddistribuciones.com/Portadas/PACSACRE001.JPG"
    },
    {
      "title": "Super Smash Bros. Ultimate",
      "id": "11",
      "company": "Nintendo",
      "year": "2018",
      "genre": "Fighting",
      "category": "Main Series",
      "platform": "Nintendo Switch",
      "portrait": "https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_SuperSmashBrosUltimate_02.jpg"
    },
    {
      "title": "Red Dead Redemption 2",
      "id": "12",
      "company": "Rockstar Games",
      "year": "2018",
      "genre": "Action-Adventure",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThULw2d7-_xw7KZQnv8TKDUI8zVINw-VK0Bg"
    },
    {
      "title": "Fortnite",
      "id": "13",
      "company": "Epic Games",
      "year": "2017",
      "genre": "Battle Royale",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/07/12/15313913864715.jpg"
    },
    {
      "title": "World of Warcraft",
      "id": "14",
      "company": "Blizzard Entertainment",
      "year": "2004",
      "genre": "MMORPG",
      "category": "Main Series",
      "platform": "PC",
      "portrait": "https://uvejuegos.com/img/caratulas/68331/world.jpg"
    },
    {
      "title": "The Elder Scrolls V: Skyrim",
      "id": "15",
      "company": "Bethesda Game Studios",
      "year": "2011",
      "genre": "Action Role-Playing",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/06/Skyrim%20VR%20portada.jpg?tf=1200x"
    },
    {
      "title": "Pac-Man",
      "id": "16",
      "company": "Namco",
      "year": "1980",
      "genre": "Maze",
      "category": "Classic",
      "platform": "Multi-platform",
      "portrait": "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2022/05/13/627ef0c1a8e44.r_1660088135085.401-0-1200-400.jpeg"
    },
    {
      "title": "Overwatch",
      "id": "17",
      "company": "Blizzard Entertainment",
      "year": "2016",
      "genre": "First-Person Shooter",
      "category": "Main Series",
      "platform": "Multi-platform",
      "portrait": "https://gamersrd.com/wp-content/uploads/2017/05/Se-revela-la-portada-del-comic-de-Overwatch-Anthology-vol.-1.jpg"
    },
    {
      "title": "Animal Crossing: New Horizons",
      "id": "18",
      "company": "Nintendo",
      "year": "2020",
      "genre": "Social Simulation",
      "category": "Main Series",
      "platform": "Nintendo Switch",
      "portrait": "https://animalcrossing.nintendo.com/new-horizons/assets/img/share-tw.jpg"
    },
    {
      "title": "League of Legends",
      "id": "19",
      "company": "Riot Games",
      "year": "2009",
      "genre": "MOBA",
      "category": "Main Series",
      "platform": "PC",
      "portrait": "https://theme.zdassets.com/theme_assets/43400/87a1ef48e43b8cf114017e3ad51b801951b20fcf.jpg"
    },
    {
      "title": "God of War",
      "id": "20",
      "company": "Santa Monica Studio",
      "year": "2018",
      "genre": "Action-Adventure",
      "category": "Main Series",
      "platform": "PlayStation 4",
      "portrait": "https://pics.filmaffinity.com/God_of_War-693015917-large.jpg"
    }, {
      "title": "Counter-Strike: Global Offensive",
      "id": "21",
      "company": "Valve",
      "year": "2012",
      "genre": "First-Person Shooter",
      "category": "Main Series",
      "platform": "PC",
      "portrait": "https://media.vandal.net/t200/14872/counterstrike-global-offensive-psn-20141212104013_1.jpg"
  },,
  {
      "title": "Sid Meier's Civilization VI",
      "id": "22",
      "company": "Firaxis Games",
      "year": "2016",
      "genre": "Turn-Based Strategy",
      "category": "Main Series",
      "platform": "PC",
      "portrait": "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-2fcd1c150ac6d8cdc672ae042d2dd179.jpg"
  },
  {
      "title": "Divinity: Original Sin 2",
      "id": "25",
      "company": "Larian Studios",
      "year": "2017",
      "genre": "Role-Playing",
      "category": "Main Series",
      "platform": "PC",
      "portrait": "https://uvejuegos.com/img/caratulas/63341/Divinity-Original-Sin-II---Definitive-Edition-Switch-EU.jpg"
  },
  {
      "title": "Hollow Knight",
      "id": "26",
      "company": "Team Cherry",
      "year": "2017",
      "genre": "Metroidvania",
      "category": "Indie",
      "platform": "Multi-platform",
      "portrait": "https://i.3djuegos.com/juegos/11596/hollow_knight/fotos/ficha/hollow_knight-3915488.jpg"
  },
  {
      "title": "RimWorld",
      "id": "27",
      "company": "Ludeon Studios",
      "year": "2018",
      "genre": "Construction and Management Simulation",
      "category": "Indie",
      "platform": "PC",
      "portrait": "https://i.3djuegos.com/juegos/16267/rimworld/fotos/ficha/rimworld-5696668.jpg"
  },
  {
      "title": "Undertale",
      "id": "28",
      "company": "Toby Fox",
      "year": "2015",
      "genre": "Role-Playing",
      "category": "Indie",
      "platform": "Multi-platform",
      "portrait": "https://pm1.aminoapps.com/6954/2e054826f72266a8a661edc3b884fdb16a3a711cr1-1450-2048v2_uhq.jpg"
  },
  {
      "title": "Factorio",
      "id": "29",
      "company": "Wube Software",
      "year": "2020",
      "genre": "Real-Time Strategy",
      "category": "Indie",
      "platform": "PC",
      "portrait": "https://assetsio.reedpopcdn.com/co1tfy.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
  },
  {
      "title": "Subnautica",
      "id": "30",
      "company": "Unknown Worlds Entertainment",
      "year": "2018",
      "genre": "Survival",
      "category": "Indie",
      "platform": "Multi-platform",
      "portrait": "https://i.3djuegos.com/juegos/10557/subnautica/fotos/ficha/subnautica-3934115.jpg"
  },
  {
      "title": "Satisfactory",
      "id": "31",
      "company": "Coffee Stain Studios",
      "year": "2020",
      "genre": "First-Person Shooter",
      "category": "Main Series",
      "platform": "PC",
      "portrait": "https://1.bp.blogspot.com/-1pWLUt-ytAg/YEqaFJ7j0hI/AAAAAAABAdg/T0trP1AXnnkSZAcBCJa3JYI0aGdytm_twCLcBGAsYHQ/s399/Satisfactory-pc.jpg"
  },
  {
      "title": "Cuphead",
      "id": "32",
      "company": "Studio MDHR",
      "year": "2017",
      "genre": "Run and Gun",
      "category": "Indie",
      "platform": "Multi-platform",
      "portrait": "https://images.cdn3.buscalibre.com/fit-in/360x360/f5/6c/f56c57fecb6d0686df69a8d84375b8e0.jpg"
  },
  {
      "title": "Disco Elysium",
      "id": "33",
      "company": "ZA/UM",
      "year": "2019",
      "genre": "Role-Playing",
      "category": "Indie",
      "platform": "PC",
      "portrait": "https://assetsio.reedpopcdn.com/co1sfj.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
  },  {
    "title": "The Legend of Zelda: Breath of the Wild",
    "id": "34",
    "company": "Nintendo",
    "year": "2017",
    "genre": "Action-Adventure",
    "category": "Main Series",
    "platform": "Nintendo Switch",
    "portrait": "https://www.otakufreaks.com/wp-content/uploads/2017/03/legend-zelda-breath-wild-box-art-america-full.jpg"
},
{
    "title": "Super Mario Odyssey",
    "id": "35",
    "company": "Nintendo",
    "year": "2017",
    "genre": "Platformer",
    "category": "Main Series",
    "platform": "Nintendo Switch",
},
{
    "title": "Animal Crossing: New Horizons",
    "id": "36",
    "company": "Nintendo",
    "year": "2020",
    "genre": "Social Simulation",
    "category": "Main Series",
    "platform": "Nintendo Switch",
    "portrait": "https://media.vandal.net/m/65557/animal-crossing-new-horizons-202011012375667_1.jpg"
},
{
    "title": "Splatoon 2",
    "id": "37",
    "company": "Nintendo",
    "year": "2017",
    "genre": "Third-Person Shooter",
    "category": "Main Series",
    "platform": "Nintendo Switch",
    "portrait": "https://media.vandal.net/m/45239/splatoon-2-2017717122352_25.jpg"
},
{
    "title": "Mario Kart 8 Deluxe",
    "id": "38",
    "company": "Nintendo",
    "year": "2017",
    "genre": "Racing",
    "category": "Main Series",
    "platform": "Nintendo Switch",
    "portrait": "2wCEAAkGBxMTEhUTExMWFhUXGB0bGBgYGRodHxsfFyEYGh4eIRoaHiogIBwlIBodIjEhJSkrLi4uGiAzODMtNygtLisBCgoKDg0OGxAQGy8mICYtLS0vLS8vLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf"
},
{
    "title": "Pokémon Sword and Shield",
    "id": "39",
    "company": "Game Freak",
    "year": "2019",
    "genre": "Role-Playing",
    "category": "Main Series",
    "platform": "Nintendo Switch",
    "portrait": "https://pbs.twimg.com/media/EzsqT4zXIAM9KDj.jpg"
},
{
    "title": "Luigi's Mansion 3",
    "id": "40",
    "company": "Nintendo",
    "year": "2019",
    "genre": "Action-Adventure",
    "category": "Main Series",
    "platform": "Nintendo Switch",
    "portrait": "https://uvejuegos.com/img/caratulas/61660/luigis-mansion-3-eur.jpg"
},{
  "title": "Castlevania: The Adventure",
  "id": "41",
  "company": "Konami",
  "year": "1989",
  "genre": "Action-Adventure",
  "category": "Castlevania Series",
  "platform": "Game Boy",
  "portrait": "https://assets-prd.ignimgs.com/2022/02/02/cvadventures-sq-1643766633896.jpg"
},
{
  "title": "Mega Man: Dr. Wily's Revenge",
  "id": "42",
  "company": "Capcom",
  "year": "1991",
  "genre": "Action-Platformer",
  "category": "Mega Man Series",
  "platform": "Game Boy",
  "portrait": "https://bonusstagemagazine.files.wordpress.com/2022/10/megaman-1-game-boy-caja-1.jpg"
},
{
  "title": "Alleyway",
  "id": "43",
  "company": "Nintendo",
  "year": "1989",
  "genre": "Breakout Clone",
  "category": "Classic",
  "platform": "Game Boy",
  "portrait": "https://www.otakufreaks.com/wp-content/uploads/2018/08/alleyway-game-boy-portada-box-art-america.jpg"
},
{
  "title": "Kid Icarus: Of Myths and Monsters",
  "id": "44",
  "company": "Nintendo",
  "year": "1991",
  "genre": "Platformer",
  "category": "Kid Icarus Series",
  "platform": "Game Boy",
  "portrait": "https://static.wikia.nocookie.net/mundonintendo/images/b/be/Gb_kid_icarus_of_myths_and_monsters_NTSC1.png/revision/latest?cb=20220816013552&path-prefix=es"
},
{
  "title": "Dr. Mario",
  "id": "45",
  "company": "Nintendo",
  "year": "1990",
  "genre": "Puzzle",
  "category": "Dr. Mario Series",
  "platform": "Game Boy",
  "portrait": "https://images.wikidexcdn.net/mwuploads/esssbwiki/3/3f/latest/20150217010755/Caratula_Dr._Mario.jpg"
},
{
  "title": "Tetris Attack",
  "id": "46",
  "company": "Nintendo",
  "year": "1996",
  "genre": "Puzzle",
  "category": "Tetris Series",
  "platform": "Game Boy",
  "portrait": "https://uvejuegos.com/img/caratulas/13854/Tetris-Attack-GB-EEUU.jpg"
},
{
  "title": "Wario Land II",
  "id": "47",
  "company": "Nintendo",
  "year": "1998",
  "genre": "Platformer",
  "category": "Wario Land Series",
  "platform": "Game Boy",
  "portrait": "https://upload.wikimedia.org/wikipedia/en/a/a5/Wario_Land_II_NA_Box_Art.jpg"
},
{
  "title": "Gargoyle's Quest",
  "id": "48",
  "company": "Capcom",
  "year": "1990",
  "genre": "Action-Platformer",
  "category": "Gargoyle's Quest Series",
  "platform": "Game Boy",
  "portrait": "https://uvejuegos.com/img/caratulas/2242/Gargoyle's-Quest-GB-EU.jpg"
},
{
  "title": "Mole Mania",
  "id": "49",
  "company": "Nintendo",
  "year": "1996",
  "genre": "Puzzle",
  "category": "Classic",
  "platform": "Game Boy",
  "portrait": "https://cdn.mobygames.com/covers/4331719-mole-mania-game-boy-front-cover.jpg"
}, {
  "title": "Kid Icarus",
  "id": "50",
  "company": "Nintendo",
  "year": "1986",
  "genre": "Platformer",
  "category": "Kid Icarus Series",
  "platform": "NES",
  "portrait": "https://uvejuegos.com/img/caratulas/8436/Kid-Icarus-NES-EU.jpg"
},
{
  "title": "Blaster Master",
  "id": "51",
  "company": "Sunsoft",
  "year": "1988",
  "genre": "Action-Platformer",
  "category": "Classic",
  "platform": "NES",
  "portrait": "https://cl.buscafs.com/www.levelup.com/public/uploads/images/645499/645499.png"
},
{
  "title": "Bubble Bobble",
  "id": "52",
  "company": "Taito",
  "year": "1986",
  "genre": "Platformer",
  "category": "Classic",
  "platform": "NES",
  "portrait": "https://lh5.ggpht.com/-3QCy_BPRX1o/Telv2lIFMWI/AAAAAAAACSU/CXjZva6u3_A/bubble%252520pantalla_0000_thumb%25255B6%25255D.png?imgmax=800"
},
{
  "title": "Gradius",
  "id": "53",
  "company": "Konami",
  "year": "1986",
  "genre": "Shoot 'em Up",
  "category": "Gradius Series",
  "platform": "NES",
  "portrait": "https://i.pinimg.com/originals/69/cb/d9/69cbd985cda52aded6a978dc2b7fa293.jpg"
},
{
  "title": "Ice Climber",
  "id": "54",
  "company": "Nintendo",
  "year": "1985",
  "genre": "Platformer",
  "category": "Classic",
  "platform": "NES",
  "portrait": "https://i.ytimg.com/vi/XHRXLW7k9G8/maxresdefault.jpg"
},
{
  "title": "Punch-Out!!",
  "id": "55",
  "company": "Nintendo",
  "year": "1987",
  "genre": "Sports",
  "category": "Punch-Out!! Series",
  "platform": "NES",
  "portrait": "https://images.wikidexcdn.net/mwuploads/esssbwiki/3/32/latest/20150219163530/Caratula_americana_Punch_Out%21%21.PNG"
},
{
  "title": "StarTropics",
  "id": "56",
  "company": "Nintendo",
  "year": "1990",
  "genre": "Action-Adventure",
  "category": "Classic",
  "platform": "NES",
  "portrait": "https://uvejuegos.com/img/caratulas/1434/StarTropics-NES-EU.jpg"
},
{
  "title": "Zelda II: The Adventure of Link",
  "id": "58",
  "company": "Nintendo",
  "year": "1987",
  "genre": "Action-Adventure",
  "category": "The Legend of Zelda Series",
  "platform": "NES",
  "portrait": "https://i.3djuegos.com/juegos/5273/zelda_ii__the_adventure_of_link/fotos/ficha/zelda_ii__the_adventure_of_link-1698124.webp"
}
    
  ]

export default{
   
    getJuegoByPlatform(platform:string){
        let gamesSelected:any = []
        GAMES.forEach(game=>{
            if(game.platform===platform){
                gamesSelected.push(game)
            }
        })
        return gamesSelected
    },
    getJuegoById(id:any){
        let filtered=GAMES.filter(game=>game.id==id)
        if (filtered.length==0) {
            return "error:no existe el juego con id "+id
        }else{
            return filtered[0]
        }
        
    }

}

