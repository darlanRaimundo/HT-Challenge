import React, { useState } from "react";
import { Box, Button, CardContent, TextField } from "@material-ui/core";
import { useStyles } from './styles'
import Layout from "../../components/Layout";
import PublishIcon from '@material-ui/icons/Publish';
import { fbStorage, fbFirestore } from '../../services/firebase';
import interact from 'interactjs';

interface INewCutProps {
    path?: string
}

const NewCut: React.FC<INewCutProps> = () => {

    const [srcFrame, setSrcFrame] = useState('')
    const classes = useStyles()
    const slider = interact('.slider') 

    slider
    // Step 2
    .draggable({                        // make the element fire drag events
        origin: 'self',                   // (0, 0) will be the element's top-left
        inertia: true,                    // start inertial movement if thrown
        modifiers: [
        interact.modifiers.restrict({
            restriction: 'self'           // keep the drag coords within the element
        })
        ],
        // Step 3
        listeners: {
        move (event) {                  // call this listener on every dragmove
            const sliderWidth = interact.getElementRect(event.target).width
            const value = event.pageX / sliderWidth

            event.target.style.paddingLeft = (value * 100) + '%'
            event.target.setAttribute('data-value', value.toFixed(2))
        }
        }
    })

    const handleUploadFile = (e: any) => {
        const file = e.target.files[0]
        const storageRef = fbStorage.ref('videos')
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            alert('Upload feito com sucesso!')
        })

        fbFirestore.collection("videos").doc(file.name).set({
            createdAt: new Date,
            numberOfParts: 0
        })
            .then(() => {
                fbStorage.ref(`videos/${file.name}`).getDownloadURL().then((url: string) => {
                    setSrcFrame(url)
                })
            })
            .catch((error) => {
                alert("Error writing document: ");
            });
    }

    const handleSaveCut = (e: any) => {

        // const postsResponse = fetch("https://localhost:5000/api/mensagem/", {
        //                                                                         method: "GET",
        //                                                                         headers: {
        //                                                                             "Access-Control-Allow-Origin": "*",
        //                                                                             "Content-Type": "text/plain"
        //                                                                         },
        //                                                                         "mode" : "no-cors",
        //                                                                         //body: {"id" : document.getElementById('saada').value}
        //                                                                     })

        fetch(`http://localhost:5000/api/cutVideo/`,{ 
                                                        method: 'POST',
                                                        mode: 'no-cors', 
                                                        body: srcFrame
                                                    
                                                    })
            .then(response => {
                console.log(response)
            }).catch(erro => console.log(erro))
        // try {   
        //     console.log(srcFrame+' 1')
        //     var process = new ffmpeg(srcFrame);
        //     console.log(' 2')
        //     process.then(function (video:any) {
        //         console.log('The video is ready to be processed');
        //     }, function (err:any) {
        //         console.log('Error: ' + err);
        //     });
        // } catch (e) {
        //     console.log(e.code+' 1');
        //     console.log(e.msg+' 2');
        // }
    }

    return (
        <Layout title="HT-Challenge - Cortar Vídeo">
            <>
                <Button
                    className={classes.btnUpload}
                    variant="contained"
                    component="label"
                >
                    Realize o upload do video
                    <PublishIcon />
                    <input
                        type="file"
                        onChange={handleUploadFile}
                        hidden
                    />
                </Button>
                <CardContent >
                    <iframe
                        id="video"
                        width="730"
                        height="654"
                        src={srcFrame}
                        frameBorder="0"
                        allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </CardContent>
                <Box
                    height="150px"
                    width="600px"
                    marginBottom={5}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div 
                    className={classes.slider}  
                    
                    ></div>
                </Box>
                <Box
                    margin={2}
                >
                    <Button
                        variant="contained"
                        component="label"
                        onClick={handleSaveCut}
                    >
                        Salvar
                    </Button>
                </Box>
            </>
        </Layout>
    );

}

export default NewCut;