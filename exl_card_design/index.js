var cardGrid = document.getElementById('video-gri');

var videoArr=[
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/600/51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    }
]
function generateVideoCard(videoData) {
    /* <div class="card">
        <img src="https://i.vimeocdn.com/video/726986673_390x220.webp" alt="Heart of soba" class="img-grid" style="font-size: 24px"/>
				 <i class="fas fa-trash"></i>
        <div class="text">The Heart Of Soba</div>
    </div> */

    var card = document.createElement('div');
    card.className = "card";
    card.id = videoData.id;
   /* card.onclick = function() {
      alert('Card Clicked for => ' + videoData.title);
   }*/

    var thumbnail = document.createElement('img');
    thumbnail.src = videoData.thumbnailUrl;
    thumbnail.alt = videoData.title;
    thumbnail.className = "img-grid";
	
	  var deleteIcon = document.createElement('i');
      deleteIcon.className = "fas fa-trash delete-icon";
      deleteIcon.onclick=function(){
          alert('delete click for => ' + videoData.id);
          var selectedCard=document.getElementById(videoData.id);
          selectedCard.remove();
      }

    /*var title = document.createElement('div');
    title.className = "text";
    title.innerHTML = videoData.title; 
    */
    var heading=document.createElement('div');
    heading.className="project";
    heading.innerHTML="Project Name";
    var para=document.createElement('div');
    para.className="para1";
    para.innerHTML="Lorem lupsum dolor sit amet.consectetur adipiscing elit. Nam viverra euismod odio. grevida pelenteue urna varius vitai.";

    card.appendChild(thumbnail);
	  card.appendChild(deleteIcon);
   // card.appendChild(title);
    card.appendChild(heading);
    card.appendChild(para);
    console.log(card);
    cardGrid.appendChild(card);

    return card;
}


for(var i=0; i<videoArr.length; i++) {
  generateVideoCard(videoArr[i]);
}