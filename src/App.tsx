import * as Photos from './services/photos'
import * as C from './App.styles'
import './App.css';
import { FormEvent, useEffect, useState } from 'react';
import { PhotoItem } from './components/PhotoItem';
import { Photo } from './types/photo';

function App() {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(()=> {
    const getPhotos = async () => {
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos()
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File

    if(file && file.size > 0) {
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if( result instanceof Error ) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  const handleDeletePhoto = async (item: Photo) => {
    const file = item.name
    await Photos.deleteImage(file)
    const UpdateList = photos.filter((CurrentItem) => {
      if (CurrentItem.name != item.name)
        return item;
    })
    setPhotos(UpdateList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.uploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type='file' name='image'  />
          <input type='submit' value='Enviar' />
          {uploading && 
            <span>Adicionando Foto...</span>
          }
        </C.uploadForm>

        {loading &&
          <C.ScreenWarning>
            <div className='emoji'>🤚</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }
        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index)=> (
              <PhotoItem key={index} item={item} deletePhoto={handleDeletePhoto} />
            ))}
          </C.PhotoList>
        }
        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className='emoji'>😞</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;
