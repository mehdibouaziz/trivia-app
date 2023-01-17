import React from 'react'

const UploadAvatars = () => {
    const onSelect = () => {

    }
  return (
    <div className='w-full px-8'>
        <div className='flex flex-col gap-2'>
            <h1 className="badge badge-lg badge-warning">
            Upload Avatars </h1>
            <p className="imagesInfo text-sm">
              The first image will be the cover (max 6).
            </p>
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
      
        <button className='btn btn-warning mt-8 px-6'>Upload</button>
    </div>
    
  )
}

export default UploadAvatars