let sectionSpoilers = document.querySelectorAll('.spoiler');
let sectionSpoilersBody = document.querySelectorAll('.spoiler-body');
for (let index = 0; index < sectionSpoilers.length; index++) {
  const sectionSpoiler = sectionSpoilers[index];
  const sectionSpoilerBody = sectionSpoilersBody[index];
  sectionSpoiler.addEventListener('click', function () {
    sectionSpoilerBody.classList.toggle('active');
    // sectionSpoilerBody.classList.toggle('_active');
    slideToggle(sectionSpoilerBody);
  })
}