import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const result = JSON.parse(localStorage.getItem("feedback-form-state")) ? JSON.parse(localStorage.getItem("feedback-form-state")) : {};

formEl.elements.email.value = JSON.parse(localStorage.getItem("feedback-form-state"))?.email ? JSON.parse(localStorage.getItem("feedback-form-state")).email : "";
formEl.elements.message.value = JSON.parse(localStorage.getItem("feedback-form-state"))?.message ? JSON.parse(localStorage.getItem("feedback-form-state")).message : "";

formEl.addEventListener("input", throttle(event => {
  result[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(result));
}, 500));

formEl.addEventListener("submit", event => {
  event.preventDefault();
  console.log(result);
  localStorage.removeItem("feedback-form-state");
  formEl.reset();
})