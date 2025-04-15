function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value;
	const volumeOutput = document.getElementById("volume");

	const radius = parseFloat(radiusInput);

	// Validate input
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = "NaN";
    return;
  }
	
	const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

	
	volumeOutput.value = volume.toFixed(4);
	// alert(volume.toFixed(4));
  
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
