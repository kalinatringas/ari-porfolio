import { photoData } from "./assets/photoData";

function PhotographyGroup(selectedGallery) {

  const gallery = photoData.find(g => g.id === selectedGallery.selectedGallery);
  if (!gallery) return null;

  const allPhotos = Object.keys(gallery)
    .filter(key => key.startsWith('photo')) 
    .map(key => gallery[key]);

    return (
    <div className=" max-w-[1200px] m-auto">
      <div  className="grid grid-rows-2 gap-1 jusify-center m-auto mask-clip-fill">
        {allPhotos.map((url, idx) =>(
          <img
          key={url}
          src={url}
          alt={`${gallery.name}`}
          className="w-auto h-80 m-auto"
          style={{
            gridRow: idx < Math.ceil(allPhotos.length/2) ?1 :2
          }}
          />
        )
      
      )}

      </div>
    </div>
    );
}
export default PhotographyGroup;