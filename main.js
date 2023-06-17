work = false
random1 = Math.random(255)
        random2 = Math.random(255)
        random3 = Math.random(255)
 objects = [];
  function preload(){ 
    img = loadImage('dog_cat.jpg'); 
  } function setup() { 
    canvas = createCanvas(380, 380); 
    canvas.center(); 
    video = createCapture(VIDEO)
    video.hide()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detectando Objetos"; 
  }
   function modelLoaded() { 
    console.log("Modelo Carregado!") 
    status = true; objectDetector.detect(video, gotResult); 
  } function gotResult(error, results) { 
    if (objects.length == 0) console.log("<!> ALARME!! <!>")
    if (error) { console.log(error); } 
    console.log(results); objects = results; 
  } 
    function draw() { 
      random1 = random(255)
        random2 = random(255)
        random3 = random(255)
      image(video,0,0,640,420)
      if (status != "") { 
      for (var i = 0; i < objects.length; i++) {
        
        if (work) { 
          objectDetector.detect(video, gotResult); 
        obj = objects[i]
        document.getElementById("status").innerHTML = "Status: Detectou (fazuéli)"
        
        
        fill(random1,random2,random3)
        text(objects[i].label + "       " + floor(obj.confidence*100) + "%", obj.x, obj.y)
        noFill()
        stroke(random1,random2,random3)
        rect(obj.x,obj.y,obj.width,obj.height)
        document.getElementById("num").innerHTML = "Objetos: " + objects.length
      } 
       


            }      }}
            function toggle() {
              work = !work
            }