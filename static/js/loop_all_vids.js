const videoContainer = document.getElementById('website_videos');
const paginationContainer = document.getElementById('pagination');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const videoFiles = [
  'id00926.2Nd7f1yNQzE.00001_id04253.1HOlzefgLu8.00001.mp4',
  
// 'id08456.29EhSZDqzas.00001_id04656.1tZYt8jey54.00001.mp4', //
'id00926.2Nd7f1yNQzE.00001_id03839.1jWHvl2qCq0.00001.mp4', // ->

// 'id02286.4LAIxvdvguc.00001_id03030.5wOxV1wAgqA.00001.mp4', //
'id06104.02L1L9RFAgI.00001_id01822.0QcHowaLAF0.00001.mp4', //->
// 'id08696.0H1PxInJCK0.00001_id07312.0LWllHGohPY.00001.mp4', //
'id03839.1jWHvl2qCq0.00001_id04478.2grMtwdG93I.00001.mp4', // ->
// 'id00812.1Xfgvdu7oDo.00001_id04295.1fSjOItVYVg.00001.mp4', //
'id03178.2CT-6fnBC_o.00001_id02685.4JDRxqYC0a4.00001.mp4', //->
'id03862.0w8W8jp7MJk.00001_id02317.0q4X8kPTlEY.00001.mp4',
'id07961.3EPjXGhfst4.00001_id00154.0hjW3eTGAy8.00001.mp4',
'id04295.1fSjOItVYVg.00001_id03789.0kdVSujPa9g.00001.mp4',
'id05015.0Cu3AvWWOFI.00001_id05459.18XmQEiGLnQ.00001.mp4', 
'id08456.29EhSZDqzas.00001_id04656.1tZYt8jey54.00001.mp4',

'id02548.0pAkJZmlFqc.00001_id04570.0YMGn6BI9rg.00001.mp4',
'id01041.1UYZqPpavtk.00001_id02577.0euHS_r5JH4.00001.mp4',
'id02577.0euHS_r5JH4.00001_id00866.03SSllwNkGk.00001.mp4',
'id03789.0kdVSujPa9g.00001_id04253.1HOlzefgLu8.00001.mp4',
'id01541.2P7hzPq5iDw.00001_id00817.0GmSijZelGY.00001.mp4',
'id01298.2K5F6xG-Rbs.00001_id04570.0YMGn6BI9rg.00001.mp4',
'id06209.2zM9EAPsZZQ.00001_id00081.2xYrsnvtUWc.00001.mp4',
'id04006.113VkmVVz1Q.00001_id08392.0fwuibKviJU.00001.mp4',
// 'id00926.2Nd7f1yNQzE.00001_id03839.1jWHvl2qCq0.00001.mp4', // ->
// 'id08456.29EhSZDqzas.00001_id04656.1tZYt8jey54.00001.mp4', //
'id05202.2gnLcAbAoSc.00001_id04656.1tZYt8jey54.00001.mp4',
'id02465.0Ocu8l1eAng.00001_id01618.0iFlmfmWVlY.00001.mp4',

'id00926.2Nd7f1yNQzE.00001_id02181.02gIO4WrZLY.00001.mp4',
'id02286.4LAIxvdvguc.00001_id03178.2CT-6fnBC_o.00001.mp4',
'id04006.113VkmVVz1Q.00001_id00081.2xYrsnvtUWc.00001.mp4',
// 'id03347.4xXZ75_TeSM.00001_id01541.2P7hzPq5iDw.00001.mp4',
'id01822.0QcHowaLAF0.00001_id00154.0hjW3eTGAy8.00001.mp4',
'id06104.02L1L9RFAgI.00001_id03839.1jWHvl2qCq0.00001.mp4',
'id07961.3EPjXGhfst4.00001_id05459.18XmQEiGLnQ.00001.mp4',
'id04295.1fSjOItVYVg.00001_id02057.0xZU7Oi9nvM.00001.mp4',
'id02181.02gIO4WrZLY.00001_id01618.0iFlmfmWVlY.00001.mp4',
'id03789.0kdVSujPa9g.00001_id00926.2Nd7f1yNQzE.00001.mp4',

'id01041.1UYZqPpavtk.00001_id05714.2gvpaZcvAY4.00001.mp4',
// 'id06104.02L1L9RFAgI.00001_id01822.0QcHowaLAF0.00001.mp4', //->
'id02286.4LAIxvdvguc.00001_id03030.5wOxV1wAgqA.00001.mp4', //
'id08696.0H1PxInJCK0.00001_id02317.0q4X8kPTlEY.00001.mp4',
'id06310.1IAgr_CRnuE.00001_id04536.0f_Yi_1CoeM.00001.mp4',
'id00926.2Nd7f1yNQzE.00001_id04536.0f_Yi_1CoeM.00001.mp4',
'id08696.0H1PxInJCK0.00001_id07961.3EPjXGhfst4.00001.mp4',

'id05714.2gvpaZcvAY4.00001_id02685.4JDRxqYC0a4.00001.mp4',
'id03178.2CT-6fnBC_o.00001_id02577.0euHS_r5JH4.00001.mp4',
'id02057.0xZU7Oi9nvM.00001_id04478.2grMtwdG93I.00001.mp4',
'id04478.2grMtwdG93I.00001_id00154.0hjW3eTGAy8.00001.mp4',

'id08456.29EhSZDqzas.00001_id07961.3EPjXGhfst4.00001.mp4',
'id08696.0H1PxInJCK0.00001_id00926.2Nd7f1yNQzE.00001.mp4',
'id05714.2gvpaZcvAY4.00001_id07961.3EPjXGhfst4.00001.mp4',
'id01041.1UYZqPpavtk.00001_id04295.1fSjOItVYVg.00001.mp4',
'id02445.3Rnk8eja3TU.00001_id03862.0w8W8jp7MJk.00001.mp4',
'id01567.1Lx_ZqrK1bM.00001_id05459.18XmQEiGLnQ.00001.mp4',
'id03980.7MRUusImkno.00001_id03178.2CT-6fnBC_o.00001.mp4',
// 'id03839.1jWHvl2qCq0.00001_id04478.2grMtwdG93I.00001.mp4', // ->
'id00812.1Xfgvdu7oDo.00001_id04295.1fSjOItVYVg.00001.mp4', //
'id07868.5YYJq3fSbH8.00001_id03839.1jWHvl2qCq0.00001.mp4',
'id02181.02gIO4WrZLY.00001_id03862.0w8W8jp7MJk.00001.mp4',

'id01041.1UYZqPpavtk.00001_id00866.03SSllwNkGk.00001.mp4',
'id03347.4xXZ75_TeSM.00001_id03789.0kdVSujPa9g.00001.mp4',
'id00866.03SSllwNkGk.00001_id05714.2gvpaZcvAY4.00001.mp4',
'id00866.03SSllwNkGk.00001_id07312.0LWllHGohPY.00001.mp4',
'id08456.29EhSZDqzas.00001_id02725.37kUrf6RJdw.00001.mp4',
'id07802.0RUpqvi3sPU.00001_id02725.37kUrf6RJdw.00001.mp4',
// 'id03178.2CT-6fnBC_o.00001_id02685.4JDRxqYC0a4.00001.mp4', //->
'id08696.0H1PxInJCK0.00001_id07312.0LWllHGohPY.00001.mp4', //
'id00817.0GmSijZelGY.00001_id08392.0fwuibKviJU.00001.mp4',
'id04570.0YMGn6BI9rg.00001_id00817.0GmSijZelGY.00001.mp4',
// 'id08456.29EhSZDqzas.00001_id01541.2P7hzPq5iDw.00001.mp4',

'id05714.2gvpaZcvAY4.00001_id03178.2CT-6fnBC_o.00001.mp4',
'id01567.1Lx_ZqrK1bM.00001_id01618.0iFlmfmWVlY.00001.mp4',
'id01228.2TIFacjgehY.00001_id02181.02gIO4WrZLY.00001.mp4',
'id00419.1zffAxBod_c.00001_id04570.0YMGn6BI9rg.00001.mp4',
'id08456.29EhSZDqzas.00001_id04295.1fSjOItVYVg.00001.mp4'];


const videosPerPage = 10;
let currentPage = 1;

function createVideoElements(page) {
  // slice video files array to get only files for current page
  const startIndex = (page - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = videoFiles.slice(startIndex, endIndex);

  // clear video container before adding new videos
  videoContainer.innerHTML = '';

  currentVideos.forEach((videoSrc) => {
    const videoElement = document.createElement('video');
    //videoElement.width = 320;
    videoElement.height = "100%";
    videoElement.controls = true;
    //autoplay muted loop playsinline height="100%"

    const sourceElement = document.createElement('source');
    sourceElement.src = `./static/website_videos/${videoSrc}`;
    sourceElement.type = 'video/mp4';

    videoElement.appendChild(sourceElement);
    videoContainer.appendChild(videoElement);
  });
}

function createPaginationLinks() {
  const numPages = Math.ceil(videoFiles.length / videosPerPage);

  for (let i = 1; i <= numPages; i++) {
    const linkElement = document.createElement('a');
    linkElement.href = '#';
    linkElement.textContent = i+' ';
    linkElement.addEventListener('click', (event) => {
      event.preventDefault();
      currentPage = i;
      createVideoElements(currentPage);
      updatePaginationLinks();
    });
    paginationContainer.insertBefore(linkElement, nextBtn);
  }
}

function updatePaginationLinks() {
  const links = paginationContainer.querySelectorAll('a');
  links.forEach((link, index) => {
    if (index + 1 === currentPage) {
      link.classList.add('active');

      // link.addEventListener("click", function(event) {event.preventDefault();});
      link.style.textDecoration = "underline";
      // link.removeAttribute("href");
    } else {
      link.classList.remove('active');
      link.style.textDecoration = "none";
    }
  });

  if (currentPage === 1) {
    previousBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
  }

  if (currentPage === Math.ceil(videoFiles.length / videosPerPage)) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function handlePreviousClick() {
  if (currentPage > 1) {
    currentPage--;
    createVideoElements(currentPage);
    updatePaginationLinks();
  }
}

function handleNextClick() {
  if (currentPage < Math.ceil(videoFiles.length / videosPerPage)) {
    currentPage++;
    createVideoElements(currentPage);
    updatePaginationLinks();
  }
}

createVideoElements(currentPage);
createPaginationLinks();
updatePaginationLinks();

previousBtn.addEventListener('click', handlePreviousClick);
nextBtn.addEventListener('click', handleNextClick);