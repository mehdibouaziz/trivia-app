import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from "firebase/firestore";
import { db } from '../../firebase.config'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid'

import Spinner from "../../components/Spinner";

const UploadAvatars = () => {
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const onSelect = (e) => {
    e.preventDefault();
    setFiles(e.target.files);
  };
  const onUpload = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Store image in firebase
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = image.name

        const storageRef = ref(storage, "avatars/" + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            // handle upload errors
            console.log(error)
            reject(error);
          },
          () => {
            // handle succesful uploads
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve({
                url:downloadURL,
                fileName,
                displayName: fileName.substring(4, fileName.length - 4).replace(/-/g,' ')
              });
            });
          }
        );
      });
    };

    // call upload function for all images
    const imgUrlsObjects = await Promise.all(
      [...files].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false)
      toast.error('Images not uploaded')
      return
    })

    console.log(imgUrlsObjects)

    // create image collection
    const imgCollection = imgUrlsObjects.reduce((result, item) => {
      result[item.fileName.substring(0,3)]= item;
      return result
    },{})

    // submit to the database
    await setDoc(doc(db, 'avatars','avatars'), imgCollection, {merge:true})
    setLoading(false)
    toast.success('Avatars collection added')
    navigate('/')
  };

  const logImage = (e) => {

  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="w-full px-8">
      <div className="flex flex-col gap-2">
        <h1 className="badge badge-lg badge-warning">Upload Avatars </h1>
        <input
          className="formInputFile"
          type="file"
          id="images"
          onChange={onSelect}
          max="6"
          accept=".jpg,.png,.jpeg"
          multiple
          required
        />
      </div>

      <button onClick={onUpload} className="btn btn-warning mt-8 px-6">Upload</button>
    </div>
  );
};

export default UploadAvatars;
