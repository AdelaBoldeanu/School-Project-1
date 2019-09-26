//Generate Random Image   
function getRandomInt(min, max) 
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function changeImg()
        {
            var images = ["imagini/tema2.png", "imagini/tema3.png"];
            document.getElementById("imgchange").src = images[getRandomInt(0, images.length - 1)]
        }

