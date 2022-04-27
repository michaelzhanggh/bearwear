import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytes , listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { auth, storage } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";


function Categories(props) {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);

    const [user, setUser] = useState(null);
    
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    useEffect(() => {
        retrieve();
    }, [user]);

    function setImage(e) {
        setFile(e.target.files[0]);
    }

    function insertArray(e) {
        e.preventDefault();
        setFiles(oldFiles => [...oldFiles, file]);
    }

    async function upload() {
        console.log(file);
        const storageRef = ref(storage, `${user.uid}/${props.name}/${Date.now() + ''}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            retrieve();
        });          
    }

    function retrieve() {
        if (user != null) {
            const listRef = ref(storage, `${user.uid}/${props.name}`)
        setFiles([]);
        listAll(listRef)
            .then((res) => {
                res.items.forEach((itemRef) =>{
                    const path = itemRef._location.path_;
                    const urlRef = ref(storage, path);
                    getDownloadURL(urlRef).then((url) => {
                        setFiles(oldFiles => [...oldFiles, url]);
                    });
                });
            });
        }
    }

    function deleteFromFirebase(file) {
        let pictureRef = ref(storage, file);
        deleteObject(pictureRef).then(() => {
            const newImages = files.filter((image) => image !== file);
            setFiles(newImages);

            }).catch((error) => {
            console.log(error);
        });
    };
    
    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-10 space-y-7'>
                <p className='flex text-5xl font-bold'>{props.name}</p>
                <form>
                    <input type='file' onChange={setImage}/>
                    <button type="button" onClick={upload}>Upload</button>
                </form>
            </div>   
            <div className='content-center grid grid-cols-4 gap-12 place-content-center px-36'>
                    {
                        files.map(file => (
                            (
                                <div className='group relative'>
                                    <button onClick={() => deleteFromFirebase(file)} className="font-bold z-10 absolute right-2 text-red-500 text-4xl font-base hidden group-hover:block">x</button>
                                    <img className='w-68 h-68 group relative object-cover' src={file}/>
                                </div>
                                
                            )
                        ))
                    }
            </div>
        </div>
    );
}

export default Categories