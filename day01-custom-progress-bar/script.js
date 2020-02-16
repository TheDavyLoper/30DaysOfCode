const progress = document.querySelector('.progress-done')
const feedback = document.querySelector('.feedback')

const completed = prompt("enter your progress");

setTimeout(() => {
  progress.style.opacity = 1;
  progress.style.width = completed + "%";
}, 500)

progress.innerHTML = `${completed}%`

setTimeout(() => {
  feedback.innerHTML = `Progess: ${completed}% completed`
}, 1500);

