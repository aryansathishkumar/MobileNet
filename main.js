
Webcam.set
({
    width:340,
    height:295,
    png_quality:92,
    format:"png",

    constraints:
    {
        facingMode: "environment"
    }
});
var camera = document.getElementById("camera-display");
Webcam.attach(camera);

function snapit()
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("img-captured").innerHTML='<img id="snapped-img" src="'+data_uri+'">';
    });
}
function swap()
{

  Webcam.set
  ({
      width:340,
      height:295,
      png_quality:92,
      format:"png",
  
      constraints:
      {
          facingMode: "user"
      }
  });
    var camera = document.getElementById("camera-display");
    Webcam.attach(camera);
}
function swap2()
{

  Webcam.set
  ({
      width:340,
      height:295,
      png_quality:92,
      format:"png",
  
      constraints:
      {
          facingMode: "environment"
      }
  });
    var camera = document.getElementById("camera-display");
    Webcam.attach(camera);

}

console.log("ml5version",ml5.version);

var classifier = ml5.imageClassifier("MobileNet",modelloaded);

function modelloaded()
{
    console.log("model is loaded");
}

function predict()
{
    var img = document.getElementById("snapped-img");
    classifier.classify(img, getresult);
}

function getresult(error, results)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        var result = results[0].label;
        document.getElementById("result-1").innerHTML = result;
    }
}
