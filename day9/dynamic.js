function createPost()
{
    var postContent = document.getElementById('id3');
    var postsContainer = document.getElementById('postsContainer');
    var myCard = `<div class="card">
    <div class="card-body">
    
      ${postContent.value}
    </div>
  </div>`;

   postsContainer.innerHTML+= myCard;
   postContent.value='';
}