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

