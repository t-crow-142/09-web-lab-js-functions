# Web Lab &ndash; JavaScript Functions &amp; Timers

In this lab, we continue our coverage of JavaScript by introducing functions, and more event handling in the form of timer events.

## Obtaining the code

Now that you've obtained a copy of this repository through GitHub Classroom's invite, you have your own private version of this repository (i.e. the one you're looking at now)! To clone this repository onto your machine, click the green `Code` button, make sure `HTTPS` is selected, then click the `copy` button to the right of the web URL to copy its value. Then, clone onto your local machine from a terminal, using the `git clone` command.

If this is the first time you've ever cloned a repository on the current machine, you may be asked to enter your GitHub credentials. The "sign in with your browser" option should work just fine. You may need to enter your GitHub username and password, and / or authorize "git credential manager" to access your account. Perform these steps if asked.

Now, you should have a clone of your repository on your local machine, ready to develop!

Remember to commit and push your work regularly for backup purposes. It's also really good practice to create new branches for each exercise, and merge these into `main` using a Pull Request (PR) when they're complete (as opposed to simply pushing directly to `main` each time). This will get you used to a collaborative workflow style that will come in really handy when working on the final team project this semester!

## Exercise One &ndash; Practice with functions

In this exercise, we will practice writing and calling (invoking) functions. We will complete a simple web app which calculates the volume of a cylinder and a cone based on user input, and displays the results.

To begin, study the contents of the [`ex01`](./exercises/ex01) folder, then perform the following steps:

1. At the marked location in `shape-calculator.js`, add an event listener to the `#btnCalculate` button. The `generateResults()` function should be called when the button is clicked.
2. Study the `getConeVolume()` function, which returns the volume of a cone given its radius and height. The volume of a cone is given by the following formula:

   V = &pi;*r* `<sup>`2 `</sup>`*h* / 3

   where *r* is the radius of the base of the cone, and *h* is its height. You don't need to modify this function.
3. At the marked location in `shape-calculator.js`, create a function called `getCylinderVolume`. The function should take two parameters - a cylinder's radius and height - and should return the volume of a cylinder with those dimensions. The volume of a cylinder is given by the following formula:

   V = &pi;*r* `<sup>`2 `</sup>`*h*

   where *r* is the radius of the cylinder, and *h* is its height.
4. At the marked location in `shape-calculator.js`, write a function called `displayShapeVolumes`. The function should take two parameters - the volume of a cone and the volume of a cylinder - and should display those values in the `#cylVolume` and `#coneVolume` `<span>`s, respectively.
5. At the marked location in `shape-calculator.js`, write a function called `displayLargestShapeInfo`. The function should take two parameters - the volume of a cone and the volume of a cylinder - and should display information about the *largest* of those two shapes in the `#resultDetail` `<p>`.

   As an example, if the largest shape is the cylinder, and it has a volume of 20cm `<sup>`3 `</sup>`, then the paragraph should disply something like: *"The shape with the largest volume is the cylinder, with a volume of 20cm `<sup>`3 `</sup>`"*.
6. At the marked location near the top of `shape-calculator.js`, complete the web app by calling (invoking) the functions you've just written in steps 2 through 5. Your web app should:

   - Calculate the volume of a cone, given the radius and height entered by the user
   - Calculate the colume of a cylinder, given the radius and height entered by the user
   - Display the volumes of those shapes back to the user
   - Display information about the largest shape to the user
