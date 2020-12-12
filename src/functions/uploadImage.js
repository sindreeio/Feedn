



function uploadImage(file, ref, width){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(event){
        const imgelement = document.createElement("img");
        imgelement.src = event.target.result;
        imgelement.onload = function(e){
            const canvas = document.createElement("canvas");
            const x = width/ e.target.width;
            const height = e.target.height *x;
            canvas.width = width;
            canvas.height = height;
            const context = canvas.getContext("2d");
            context.drawImage(e.target, 0, 0, canvas.width, canvas.height);
            const encoded = context.canvas.toBlob(function(blob){
                var image = new Image();
                image.src = blob;
                try {var uploadTask = ref.put(blob)}
                catch(error){console.log(error)}
              });
        }
    }

}

export default uploadImage;