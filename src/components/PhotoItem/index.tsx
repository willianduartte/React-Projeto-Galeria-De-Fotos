import { Photo } from '../../types/photo'
import * as C from './style'

type Props = {
  item: Photo
  deletePhoto: (item: Photo) => void
}

export const PhotoItem = ({ item, deletePhoto }: Props) => {

  const handleDeletePhoto = async () => {
    deletePhoto(item)
  }

  return (
    <C.Container>
      <img src={item.url} alt={item.name} />
      <button onClick={handleDeletePhoto}>Deletar</button>
    </C.Container>
  )
}