window.addEventListener("load", function () {

    // TODO 1) Add the generateResults() function below as a click event handler for #btnCalculate


    function generateResults() {

        // Read results from the HTML page
        const coneRadius = parseFloat(document.querySelector("#txtConeRadius").value);
        const coneHeight = parseFloat(document.querySelector("#txtConeHeight").value);
        const cylRadius = parseFloat(document.querySelector("#txtCylinderRadius").value);
        const cylHeight = parseFloat(document.querySelector("#txtCylinderHeight").value);

        // TODO 6) Within these lines, use ALL the functions you wrote to complete the program.
        // --------------------------------------

        // --------------------------------------

    }

    // TODO Below this line, complete the functions.
    // --------------------------------------

    // 2) A function to calculate the volume of a cone
    function getConeVolume(radius, height) {
        const vol = Math.PI * Math.pow(radius, 2) * height / 3.0;
        return vol;
    }

    // TODO 3) Write a function called getCylinderVolume which calculates the volume
    // of a cylinder, given its radius and height.


    // TODO 4) Write a function called displayShapeVolumes, which takes the volumes
    // of the cylinder and cone, and displays them in the #coneVolume and #cylVolume <span>s


    // TODO 5) Write a function called displayLargestShapeInfo, which takes the volumes
    // of the cylinder and cone, and displays an informational message about the largest
    // shape in the appropriate #resultDetail <p>.


});