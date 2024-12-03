document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("numberInput");
  const submitButton = document.getElementById("submitButton");
  const tooltipMessage = document.getElementById("tooltipMessage");

  input.addEventListener("input", () => {
    const value = input.value.trim(); 

    if (!isNaN(value) && value !== '') {
      submitButton.disabled = false; 
    } else {
      submitButton.disabled = true; 
    }
  });

  submitButton.addEventListener("mouseover", () => {
    const value = input.value.trim();
   
    if (Number(value) <= 10 && value !== "") {
      tooltipMessage.style.display = "block"; 
    } else {
      tooltipMessage.style.display = "none"; 
    }
  });

  submitButton.addEventListener("mouseout", () => {
    tooltipMessage.style.display = "none";
  });

  submitButton.addEventListener("click", () => {
    const value = input.value.trim();

    if (isNaN(value) || Number(value) <= 10) {
      alert("Please enter a number bigger than 10");
    } else {
      
      alert(`You entered a valid number: ${input.value}`);
    }
  });
});
