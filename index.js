<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APTS - Aliança de Portais de Álbuns da Taylor Swift</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            transition: background-color 0.5s ease, color 0.5s ease;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
        }

        h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }

        .album-list {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .album-btn {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #ddd;
            transition: background-color 0.3s ease;
            border-radius: 5px;
        }

        .album-btn:hover {
            background-color: #aaa;
        }

        #album-info {
            padding: 20px;
            border-radius: 8px;
            transition: background-color 0.5s ease;
        }

        #album-name {
            font-size: 24px;
            margin-bottom: 10px;
        }

        iframe {
            margin-top: 20px;
            border-radius: 8px;
        }

        .twitter-profile {
            margin-top: 20px;
        }

        .twitter-profile img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
        }

        .twitter-profile a {
            text-decoration: none;
            color: #1da1f2;
            font-size: 18px;
            font-weight: bold;
        }

        #album-description {
            margin-top: 20px;
            font-size: 16px;
            color: #555;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Aliança de Portais de Álbuns da Taylor Swift (APTS)</h1>
        
        <div class="album-list">
            <button class="album-btn" onclick="changeAlbum('debut')">Debut (Self-Titled)</button>
            <button class="album-btn" onclick="changeAlbum('fearless')">Fearless (Taylor's Version)</button>
            <button class="album-btn" onclick="changeAlbum('speakNow')">Speak Now (Taylor's Version)</button>
        </div>

        <div class="album-info" id="album-info">
            <h2 id="album-name">Escolha um Álbum</h2>
            <iframe id="album-iframe" width="300" height="380" frameborder="0" allow="encrypted-media"></iframe>

            <div class="twitter-profile" id="twitter-profile">
                <img id="twitter-img" src="" alt="Twitter Profile">
                <br>
                <a id="twitter-link" href="" target="_blank">Ir para o Twitter</a>
            </div>

            <div id="album-description"></div>
        </div>
    </div>

    <script>
        function changeAlbum(album) {
            let albumName = document.getElementById('album-name');
            let albumIframe = document.getElementById('album-iframe');
            let twitterImg = document.getElementById('twitter-img');
            let twitterLink = document.getElementById('twitter-link');
            let albumInfo = document.getElementById('album-info');
            let albumDescription = document.getElementById('album-description');
            
            const albums = {
                debut: {
                    name: 'Debut (Self-Titled)',
                    iframe: 'https://open.spotify.com/embed/intl-pt/album/7mzrIsaAjnXihW3InKjlC3',
                    twitter: 'https://x.com/portaldebutbr',
                    twitterImg: 'https://pbs.twimg.com/profile_images/1847912915430481920/pFAyL17D_400x400.jpg',
                    colors: ['#224236', '#c99f7c', '#dadfd2', '#67654c', '#563e2d'],
                    description: 'Este é o álbum de estreia de Taylor Swift, lançado em 2006. Com um estilo country, o álbum reflete as experiências de Swift enquanto jovem, abordando temas como amor, amizade e a vida no interior.'
                },
                fearless: {
                    name: 'Fearless (Taylor\'s Version)',
                    iframe: 'https://open.spotify.com/embed/album/4hDok0OAJd57SGIT8xuWJH?autoplay=true',
                    twitter: 'https://x.com/PortalFearless_',
                    twitterImg: 'https://pbs.twimg.com/profile_images/1829257866215104512/dJ3v82yp_400x400.jpg',
                    colors: ['#d9b777', '#efdaa6', '#604124', '#c39d5e', '#a7834a'],
                    description: '“Fearless” é o segundo álbum de estúdio de Taylor Swift, lançado em 2008. O álbum contém hits como "Love Story" e "You Belong with Me", consolidando a transição de Taylor do country para o pop.'
                },
                speakNow: {
                    name: 'Speak Now (Taylor\'s Version)',
                    iframe: 'https://open.spotify.com/embed/album/5AEDGbliTTfjOB8TSm1sxt',
                    twitter: 'https://x.com/Portalspeaknow',
                    twitterImg: 'https://pbs.twimg.com/profile_images/1847831657136480256/McmxiSuE_400x400.jpg',
                    colors: ['#e1ab8a', '#20171b', '#7b395a', '#925291', '#572160'],
                    description: 'Lançado em 2010, "Speak Now" é o terceiro álbum de Taylor Swift. Todo o álbum foi escrito por Taylor sozinha, e é conhecido por suas letras profundas e pessoais, abordando temas como amor, arrependimento e crescimento.'
                }
            };

            // Atualizar nome do álbum
            albumName.textContent = albums[album].name;

            // Atualizar iframe do Spotify
            albumIframe.src = albums[album].iframe;

            // Atualizar perfil do Twitter
            twitterImg.src = albums[album].twitterImg;
            twitterLink.href = albums[album].twitter;
            twitterLink.textContent = "Ir para o Twitter";

            // Mudar a cor de fundo da página e do álbum
            const [color1, color2, color3, color4, color5] = albums[album].colors;
            albumInfo.style.backgroundColor = color1;
            document.body.style.backgroundColor = color2;
            document.body.style.color = color3;

            // Atualizar descrição do álbum
            albumDescription.textContent = albums[album].description;
        }
    </script>
</body>
</html>
