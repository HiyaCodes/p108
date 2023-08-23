function start_classification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier(" https://teachablemachine.withgoogle.com/models/FirUf3Ntg/ ",modelReady)
    }
    function modelReady(){
        classifier.classify(gotResults)
    }
    function gotResults(error, results) {
        if (error) {
            console.error(error)
        }
    
    
        else {
            console.log(results)
            random_number_r = Math.floor(Math.random() * 255) + 1
            random_number_g = Math.floor(Math.random() * 255) + 1
            random_number_b = Math.floor(Math.random() * 255) + 1
    
            document.getElementById("result_label").innerHTML = "i can hear-" + results[0].label
            document.getElementById("result_confidence").innerHTML = "Accuracy-" + (results[0].confidence * 100).toFixed(2) + "%"
    
            document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
            document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
    
            img1 = document.getElementById("animal1")
            img2 = document.getElementById("animal2")
            img3 = document.getElementById("animal3")
            img4 = document.getElementById("animal4")
    
            if (results[0].label == "woof") {
            
                img1.src = "dog.jpg"
            }
            else
                if (results[0].label == "meow") {
                    img2.src = "cat.jpg"
                
                }
                else
                    if (results[0].label == "roar") {
                       
                        img3.src = "lion.jpg"
                    }
                    else {
                        
                        img4.src = "cow.jpg"
                    }
    
        }
    
    }
    