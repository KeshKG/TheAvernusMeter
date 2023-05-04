//Name Label(h2)
const labels = document.querySelectorAll('h2[contenteditable="true"]');
//Sliders 
const sliders = document.querySelectorAll('input[type="range"]');
//Button
 const updateButton = document.querySelector('#updateButton');

  // Load the saved values of the sliders from localStorage
  for (let i = 0; i < sliders.length; i++) {
    const savedValue = localStorage.getItem(`slider${i+1}Value`);
    if (savedValue) {
      sliders[i].value = savedValue;
    }
  }

  // Add event listeners for when the values of the sliders change
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener('input', function() {
      const sliderValue = this.value;
      localStorage.setItem(`slider${i+1}Value`, sliderValue);
    });
  }

  // Add an event listener for when the update button is clicked
  updateButton.addEventListener('click', function() {
    // Update the values of the sliders and save them to localStorage
    for (let i = 0; i < sliders.length; i++) {
        // replace this with your own code to generate a new value
      localStorage.setItem(`slider${i+1}Value`, sliders[i].value);
    }
  });

  // Load the saved values of the labels and sliders from localStorage
  labels.forEach(function(label) {
    const savedValue = localStorage.getItem(label.id);
    if (savedValue) {
      label.textContent = savedValue;
    }

    // Add an event listener for when the content of the label changes
    label.addEventListener('input', function() {
      const labelValue = this.textContent;
      localStorage.setItem(this.id, labelValue);
    });
  });

  sliders.forEach(function(slider) {
    const savedValue = localStorage.getItem(slider.id);
    if (savedValue) {
      slider.value = savedValue;
    }

    // Add an event listener for when the value of the slider changes
    slider.addEventListener('input', function() {
      const sliderValue = this.value;
      localStorage.setItem(this.id, sliderValue);
    });

  });
