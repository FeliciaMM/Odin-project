const ul = document.querySelector("#ul");
const input = document.querySelector("#input");
const button = document.querySelector("#add");

button.addEventListener("click", () => {
    const item = input.value;
    input.value = " ";
    console.log(item)

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button2 = document.createElement("button");

 


  li.appendChild(span);
  span.textContent=item;
 li.appendChild(button2);
  button2.textContent="Delete";
  ul.appendChild(li);
  
 


  button2.addEventListener('click', ()=>{
    ul.removeChild(li);
  });

  input.focus();
});
